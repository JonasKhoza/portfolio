// scripts/generatePostsIndex.mjs
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "public", "posts");
const OUT_FILE = path.join(POSTS_DIR, "posts.json");

function slugFromFilename(name) {
  return name
    .replace(/\.mdx?$/i, "")
    .replace(/\.markdown$/i, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "")
    .toLowerCase();
}

function firstParagraphExcerpt(markdownContent, maxLen = 200) {
  // remove frontmatter already stripped by gray-matter; extract first paragraph
  const paragraphs = markdownContent
    .split(/\r?\n\r?\n/)
    .map((p) => p.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
  if (!paragraphs.length) return "";
  const p = paragraphs[0];
  if (p.length <= maxLen) return p;
  return (
    p
      .slice(0, maxLen)
      .trim()
      .replace(/\s+\S+$/, "") + "…"
  );
}

async function main() {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  const files = await fs.readdir(POSTS_DIR);
  const posts = [];

  for (const f of files) {
    if (!f.match(/\.(md|mdx|markdown)$/i)) continue;
    const fullPath = path.join(POSTS_DIR, f);
    const raw = await fs.readFile(fullPath, "utf8");
    const parsed = matter(raw); // { data, content, excerpt }
    const data = parsed.data || {};
    const content = parsed.content || "";

    // Normalize fields
    const slug = slugFromFilename(f);
    const title = data.title || slug;
    const date = data.date ? new Date(data.date).toISOString() : null;
    const tags = Array.isArray(data.tags)
      ? data.tags.map((t) => String(t))
      : typeof data.tags === "string"
        ? data.tags.split(",").map((s) => s.trim())
        : [];

    const excerpt =
      (data.excerpt && String(data.excerpt)) ||
      (parsed.excerpt && String(parsed.excerpt)) ||
      firstParagraphExcerpt(content, 240);

    posts.push({
      slug,
      title,
      date,
      excerpt,
      tags,
    });
  }

  // sort newest first (null dates go last)
  posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });

  await fs.writeFile(OUT_FILE, JSON.stringify(posts, null, 2), "utf8");
  console.log(`Wrote ${OUT_FILE} with ${posts.length} posts`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
