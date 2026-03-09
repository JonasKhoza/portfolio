---
title: "Configure Global WSL2 Settings on Windows"
date: "2026-03-06T20:00:00"
excerpt: "Learn how to control memory, CPU cores, and swap usage for WSL2 by creating a .wslconfig file on Windows."
tags:
  - wsl
  - windows
  - docker
  - postgresql
---

# Configure Global WSL2 Settings on Windows

A while back when I was setting up a **Windows host machine** to run a **Dockerized PostgreSQL instance**, I needed to control how much memory and CPU resources were available to **WSL2**.<br/><br/>

These settings affect the **WSL virtual machine itself**, which means they directly impact any Linux distribution running inside it, as well as Docker containers running inside that distro.

To configure this, you need to create a **`.wslconfig`** file.

## <br/>

# What is `.wslconfig`?

`.wslconfig` is a **plain text configuration file** used to control **global settings for all WSL2 distributions** on your system.
</br></br>

## Where to put the file

The file must be created manually inside your **Windows user profile directory**:

```init
C:\Users<YourUsername>.wslconfig
```

Replace `<YourUsername>` with your Windows username.

<br/>

# Example `.wslconfig`

```ini
[wsl2]

memory=16GB
# Limits the maximum RAM WSL2 can use.
# By default WSL can consume roughly 50% of system RAM.

processors=4
# Limits the number of CPU cores visible to WSL.

swap=8GB
# Sets the swap file size used by WSL.

localhostForwarding=true
# Enables port forwarding between Windows and WSL.
# Services running in WSL can be accessed from Windows using localhost.
```

# What These Settings Do

- # memory

Caps the amount of RAM the WSL2 VM can allocate.
WSL allocates memory dynamically, so it will only grow usage when needed but will never exceed this limit.

- # processors

Controls how many CPU cores the WSL2 VM can see.
For example:

```ini
processors=4
```

means Linux inside WSL will behave as if the machine has 4 CPUs available.

- # swap

Configures the swap file size, which acts as disk-backed virtual memory.

```ini
swap=8GB
```

This is useful when running memory-heavy workloads like databases or large builds.

- # localhostForwarding
  When set to true, services inside WSL become accessible from Windows using localhost.

For example:

```init
localhostForwarding=true
```

If a web service runs inside WSL on port 3000, you can access it from Windows at:

```ini
http://localhost:3000
```

<br/>

# Why This Matters

Your Docker containers inherit the resources available to the WSL2 VM.
</br></br>

<h3>By setting limits you can:</h3>

- Reserve resources for the Windows host OS
- Prevent WSL from consuming the entire machine
- Keep the system responsive during heavy builds, ETL jobs, or database work
  <br/><br/>
  This is very useful to me as I am running a PostgreSQL container, which can easily consume large amounts of memory during indexing or migrations.
  <br/><br/>

# Apply the Changes

After editing .wslconfig, restart the WSL virtual machine.
<br/><br/>

- Open PowerShell and run:

```ini
wsl --shutdown
```

- Then start WSL again by opening your Linux distribution or starting Docker Desktop.
- The new configuration will be applied when the VM restarts.
- Verify the Configuration
<br/></br>
<h4>Once WSL starts again, you can verify the limits from inside the Linux environment.</h4>
  <br/><br/>

- Check CPU cores

```init
nproc
```

- Check memory usage

```init
free -h
```

- Check shared memory size

```init
df -h /dev/shm
```

<br/><br/>

# .wslconfig vs /etc/wsl.conf

These two files configure different parts of WSL.

<h3> .wslconfig</h3>

<b>Location:</b> Windows user directory</br>
<b>Purpose:</b> Configures the WSL2 VM (memory, CPU, swap, networking)
<br/></br>

<h3>/etc/wsl.conf</h3>

<b>Location:</b> Inside the Linux distro <br/>
<b>Purpose:</b> Configures distro behaviour (automounts, hostname, user settings)
<br/></br>

<i><b>Note:</b> If you find any errors in this post, please contact me and help me improve it.</i>
<br/></br>
