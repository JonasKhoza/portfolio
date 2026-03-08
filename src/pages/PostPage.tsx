import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { useParams, Link } from "react-router-dom";
import CodeBlock from "../components/code-block/CodeBlock";
import LoadingSpinner from "../components/loading/LoadingSpinner";

type PostMeta = {
  title?: string;
  date?: string;
  excerpt?: string;
  tags?: string[];
};

interface PostMetaWithSlugI extends PostMeta {
  slug: string;
}

function getCodeString(children: any): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    return children
      .map((c) => {
        if (typeof c === "string") return c;
        // React elements: try to extract nested children recursively
        if (c && typeof c === "object") {
          return getCodeString(c.props?.children ?? "");
        }
        return "";
      })
      .join("");
  }
  if (children && typeof children === "object") {
    return getCodeString(children.props?.children ?? "");
  }
  return String(children ?? "");
}

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [md, setMd] = useState<string | null>(null);
  const [meta, setMeta] = useState<PostMeta | null | undefined>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/posts/posts.json`);
      const allPosts: PostMetaWithSlugI[] = await res.json();
      const postMeta = allPosts.find((p) => p.slug === slug);
      setMeta(postMeta);
    })();
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    const candidates = [`/posts/${slug}.md`, `/posts/${slug}.md`];

    (async () => {
      setMd(null);
      setMeta(null);
      setError(null);

      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (!res.ok) {
            continue;
          }
          const text = await res.text();

          let content = text.replace(/^---[\s\S]+?---/, "").trim();

          setMd(content);

          return;
        } catch (err) {
          setMd("# Not found");
        }
      }

      setError("Post not found — check public/posts and slug filename.");
    })();
  }, [slug]);

  if (error)
    return (
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        <Link to="/posts">← Go back</Link>
        <div style={{ color: "crimson", marginTop: 20 }}>{error}</div>
      </main>
    );

  if (!md) return <LoadingSpinner />;

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <Link to="/posts">← Go back</Link>

      <article style={{ marginTop: 20 }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            // override code rendering:
            code({ node, inline, className, children, ...props }: any) {
              const isInline = inline === true || !className;
              if (isInline) {
                // inline code: render normally
                return (
                  <code className={className} {...props}>
                    {getCodeString(children)}
                  </code>
                );
              }

              // block code: normalize to plain string and send to CodeBlock
              const codeText = getCodeString(children);
              return <CodeBlock className={className}>{codeText}</CodeBlock>;
            },
          }}
        >
          {md}
        </ReactMarkdown>
      </article>

      {meta?.tags && (
        <div style={{ marginBottom: 20 }}>
          {meta.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#eee",
                padding: "4px 8px",
                marginRight: 6,
                borderRadius: 4,
                fontSize: 12,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}
