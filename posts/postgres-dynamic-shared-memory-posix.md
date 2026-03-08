---
title: "Debugging a Dockerized PostgreSQL: 𝘤𝘰𝘶𝘭𝘥 𝘯𝘰𝘵 𝘳𝘦𝘴𝘪𝘻𝘦 𝘴𝘩𝘢𝘳𝘦𝘥 𝘮𝘦𝘮𝘰𝘳𝘺 𝘴𝘦𝘨𝘮𝘦𝘯𝘵 “/𝘗𝘰𝘴𝘵𝘨𝘳𝘦𝘚𝘘𝘓...” 𝘵𝘰 16 𝘔𝘉: 𝘕𝘰 𝘴𝘱𝘢𝘤𝘦 𝘭𝘦𝘧𝘵 𝘰𝘯 𝘥𝘦𝘷𝘪𝘤𝘦"
date: "2026-03-07T14:00:00"
excerpt: "How a top-sellers report revealed /dev/shm limits, parallel workers, and why you should size Docker’s shared memory."
tags:
  - postgresql
  - /dev/shm
  - dynamic_shared_memory_type
---

<style>
  .key_word { background-color: #ddd; padding: 2px; border-radius: 2px; }
   .critical { background-color: #f84b4b; padding: 2px; border-radius: 2px; }
   .note { border-left: 4px solid #ddd; padding: 0.5rem; margin: 0.75rem 0; }
</style>

# The beginnings

In the early days of 2025, I began Dockerizing postgresql data warehouse for Bargain Books . The warehouse aggregates transactional data from 85+ stores(=65+ million rows) of decentralised transactional SQL Server instances. And I was given the freedom to choose the most convenient DBMS to my skills and suitable for the job.
</br></br>
<i>I chose PostgreSQL (v17) running on Ubuntu under WSL2 on a Windows machine.</i>
</br></br>

# Host resources (WSL2 VM)

The host machine itself had 16GB RAM, 4Core CPU, & 225GB SSD. </br></br>
I therefore gave wsl2 the following parameters via wslconfig.conf:

```init
RAM: 12 GB (WSL2 capped) from 16GB available in host
CPU: 4 cores of 4 cores available in host
PostgreSQL: 17 (Docker container)
```

<i>Learn more about how to configure wsl2 global settings on [this post](/posts/configure-global-wsl2-settings).</i>
</br></br>
I tuned PostgreSQL with fairly large memory settings because some reporting queries are heavy.
</br></br>

# The problem

On Friday afternoon, I was asked the following question from our Data Analyst colleague,

<div class="note">
  <strong><code>“What Are The Top Sellers This Month?”</code></strong> 
</div>

When testing, pgAdmin returned:

```init
ERROR: 𝘤𝘰𝘶𝘭𝘥 𝘯𝘰𝘵 𝘳𝘦𝘴𝘪𝘻𝘦 𝘴𝘩𝘢𝘳𝘦𝘥 𝘮𝘦𝘮𝘰𝘳𝘺 𝘴𝘦𝘨𝘮𝘦𝘯𝘵 “/𝘗𝘰𝘴𝘵𝘨𝘳𝘦𝘚𝘘𝘓...” 𝘵𝘰 16 𝘔𝘉: 𝘕𝘰 𝘴𝘱𝘢𝘤𝘦 𝘭𝘦𝘧𝘵 𝘰𝘯 𝘥𝘦𝘷𝘪𝘤𝘦
```

At first I checked container memory, more than 6 GB was free, so it wasn’t obvious why Postgres complained about “no space”.
</br></br>

# The query (example)

```init
WITH month*bounds AS (
SELECT
    date_trunc('month', now()) AS period_start,
    date_trunc('month', now()) + INTERVAL '1 month' AS period_end
),
monthly AS (
SELECT
    st.isbn,ps.title,
    SUM(st.price_sold) AS amount_made,
    SUM(st.quantity_sold) * -1 AS quantity*sold
FROM finance.sales_transactions st
JOIN inventory.products_static ps USING(isbn)
JOIN month_bounds mb ON
        st.date_sold >= mb.period_start
    AND
        st.date_sold < mb.period_end
GROUP BY st.isbn, ps.title
HAVING SUM(st.quantity_sold) * -1 > 0
)
SELECT
    *
FROM monthly
ORDER BY quantity_sold DESC;
```

# Investigation & root cause

A search and some debugging showed the issue wasn’t disk or general RAM: it was dynamic shared memory (DSM).
</br></br>

# In my postgresql.conf:

<mark class="key_word"><i>shared_buffers</i></mark> was large(4GB), I'd set it independently. But shared_buffers can be allocated with mmap and does not necessarily live in <mark class="key_word"><i>/dev/shm</i></mark>.
</br></br>

<h3>My postgresql.conf had:</h3>

```init
shared_memory_type = mmap
dynamic_shared_memory_type = posix
```

<mark class="key_word"><i>shared_memory_type=mmap</i></mark> means <mark class="key_word"><i>shared_buffers</i></mark> is allocated via anonymous mmap(not <mark class="key_word"><i>/dev/shm</i></mark>).
</br></br>
<mark class="key_word"><i>dynamic_shared_memory_type</i></mark> means dynamic shared memory(used for parallel queries and some extensions) is implemented using <mark class="key_word"><i>POSIX shm objects</i></mark>, i.e., the kernel exposes them under <mark class="key_word"><i>/dev/shm</i></mark>.

</br></br>
Although Docker containers normally map to the host distro’s memory, they have their own <mark class="key_word"><i>/dev/shm</i></mark> temporary file system(tmpfs), and Docker’s default per-container is only <mark class="key_word"><i>64MB</i></mark>. That’s a tiny pool compared with the memory that parallel workers can request.
</br></br>
Parallel query workers (leader + N workers) can trigger dynamic shared memory(DSM) allocations for shared hash tables, shared sort buffers, tuple queues, and intermediate results. The DSM allocation can therefore exceed Docker’s 64MB and cause the <mark class="critical"><i>“No space left on device”</i></mark> error.
</br></br>

# The critical PostgreSQL parameter settings in postgres.conf:

<mark class="key_word"><i>dynamic_shared_memory_type</i></mark> = <i>posix</i> => meaning DSM lives in <mark class="key_word"><i>/dev/shm</i></mark>.</br></br>
<mark class="key_word"><i>max_worker_processes</i></mark> = 8 => global pool of background workers (includes parallel workers, autovacuum, etc.).</br></br>
<mark class="key_word"><i>max_parallel_workers</i></mark> = 8=> workers available for parallel queries, limited by max_worker_processes.</br></br>
<mark class="key_word"><i>max_parallel_workers_per_gather</i></mark>=2 => workers a single query can request.</br></br>
<mark class="key_word"><i>work_mem</i></mark>=512MB => per-query-operation memory(sort/hash) limit. per-operation, per-process.</br></br>
<mark class="key_word"><i>maintenance_work_mem</i></mark>=512MB => memory for maintenance operations(CREATE INDEX, VACCUM).</br></br>

<div class="note">
  <strong>Note: </strong> <code>I have found work_mem to be very confusing, because it works on individual query execution nodes, not the whole query. A complex query can allocate several work_mem regions at once. With parallelism, leader + each worker may each use work_mem (or share structures built from it).</code>
</div>

Learn more about work_mem [here](https://pganalyze.com/blog/5mins-postgres-work-mem-tuning).
</br></br>

# Sizing <mark class="key_word"><i>/dev/shm</i></mark> (the pragmatic formula)

To avoid the DSM error, you need to ensure each of the containers <mark class="key_word"><i>/dev/shm</i></mark> is large enough for the DSM allocations you can reasonably expect.

Now with how <mark class="key_word"><i>work_mem </i></mark> is allocated this appears to be the most complex task we’re facing, but,</br>
</br></br>

<h3>A conservative single-group DSM estimate:</h3>

```init
shm_needed_one_group = ((max_parallel_workers_per_gather + 1 leader) × work_mem) + maintenance_work_mem + overhead
```

If many parallel groups run concurrently, multiply the number of concurrent groups(or use the global max_parallel_workers to estimate the worst case).
</br></br>

# For my case(example):

```init
max_parallel_workers_per_gather = 2
work_mem = 512 MB
maintenance_work_mem = 512 MB
estimate overhead = 25%
```

</br></br>

# Compute:

```init
group shared demand: 3 × 512 MB = 1.5GB
plus maintenance: 1.5GB+ 512 = 2GB
with 25% buffer => 2.5GB
```

</br></br>

# The fix

Increase the container /dev/shm allocation (via Docker):

```init
docker run: --shm-size=2g
docker-compose: use shm_size: "2g" under the service
```

# Example snippet:

```init
services:
db:
image: postgres:17
shm_size: "2g"
environment: - POSTGRES_PASSWORD=...
...
```

<h2>Alternatively / additionally:</h2>

Lower <mark class="key_word"><i>work_mem </i></mark> or <mark class="key_word"><i>max_parallel_workers_per_gather </i></mark> if you don’t need that level of parallel memory.
Or change <mark class="key_word"><i>dynamic_shared_memory_type </i></mark> to <mark class="key_word"><i>mmap </i></mark> (but measure performance for behavior changes).
</br></br>

# Breakthrough😁

<i>After raising shm_size to match DSM requirements, my “Top Sellers” query ran successfully.</i>
</br></br>

# Commands I ran while debugging

- check container <mark class="key_word"><i>/dev/shm </i></mark>

```init
docker exec -it <container> sh -c 'df -h /dev/shm; #list /dev/shm size of host distro

ls -lah /dev/shm' #list the content of the tmpfs
```

- check postgres settings

```init
docker exec -it <container> psql -U postgres -c "SHOW shared_memory_type; SHOW dynamic_shared_memory_type; SHOW max_parallel_workers; SHOW max_parallel_workers_per_gather; SHOW work_mem; SHOW maintenance_work_mem;"
```

- check logs

```init
docker logs <container> | grep "could not resize shared memory"
```

# The key takeaways

- <mark class="key_word"><i>shared_buffers</i></mark> (when <mark class="key_word"><i>shared_memory_type = mmap</i></mark>) is not the same as DSM; DSM allocations (parallel workers, extensions) may go to <mark class="key_word"><i>/dev/shm</i></mark> when <mark class="key_word"><i>dynamic_shared_memory_type = posix</i></mark>.
  </br></br>
- Docker’s default per-container <mark class="key_word"><i>/dev/shm</i></mark> is small (<mark class="key_word"><i>64MB</i></mark>). If your Postgres workload uses parallel workers with significant work_mem, explicitly set <mark class="key_word"><i>--shm-size</i></mark> / <mark class="key_word"><i>shm_size</i></mark>.
  </br></br>
- For safety, compute DSM needs from max_parallel_workers_per_gather, work_mem, maintenance_work_mem, and concurrency expectations; add a buffer (20–30%).
  </br></br>
- If you’re constrained on host memory, throttle parallelism instead of increasing <mark class="key_word"><i>/dev/shm</i></mark>.
  </br></br>

<i><b>Note:</b> If you find any errors in this post, please contact me and help me improve it.</i>

# References:

[work_mem](https://pganalyze.com/blog/5mins-postgres-work-mem-tuning)</br>
[Postgres memory parameters](https://www.postgresql.org/docs/current/runtime-config-resource.html)</br>
[/dev/shm](https://last9.io/blog/how-to-configure-dockers-shared-memory-size-dev-shm/)</br>
[Docker /dev/shm defaul](https://docs.docker.com/engine/containers/run/)</br>
[Postgres shared_memory](https://stackoverflow.com/questions/32930787/understanding-postgresql-shared-memory)</br></br>
