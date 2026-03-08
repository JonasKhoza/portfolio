import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMetaI {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<PostMetaI[]>([]);
  const perPage = 6;
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Fetching posts index…");
    fetch("/posts/posts.json")
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  const total = posts.length;
  const start = (page - 1) * perPage;
  const pagePosts = posts.slice(start, start + perPage);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <div>
        <Link to="/">← Back to home</Link>
      </div>

      <p style={{ padding: "8px 0" }}>
        This is where I share my software engineering thoughts, struggles,
        ideas, about things I'm working on. Just me, writing about what shapes
        me.
      </p>
      <h1>Recent Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pagePosts.map((p) => (
          <li
            key={p.slug}
            style={{ padding: "1rem 0", borderBottom: "1px solid #eee" }}
          >
            <h2 style={{ margin: 0 }}>
              <Link to={`/posts/${p.slug}`}>{p.title}</Link>
            </h2>
            <div style={{ color: "#666", fontSize: 14 }}>
              {p.date ? new Date(p.date).toLocaleString() : ""}
            </div>
            <p>{p.excerpt}</p>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <div style={{ alignSelf: "center" }}>
          {page} / {Math.ceil(total / perPage) || 1}
        </div>
        <button
          onClick={() =>
            setPage(Math.min(Math.ceil(total / perPage), page + 1))
          }
          disabled={page >= Math.ceil(total / perPage)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
