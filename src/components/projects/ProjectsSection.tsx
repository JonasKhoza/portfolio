// ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import styles from "./styles/projects_section.module.css";
export interface ProjectI {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  status?: "complete" | "in-progress" | "prototype" | "archived";
  repoUrl?: string;
  liveUrl?: string;
  notes?: string;
}
/**{
    id: "db-backup-cli",
    title: "db-backup-cli",
    description:
      "CLI tool for backing up and restoring multiple database engines. PostgreSQL and MSSQL flows are tested; others are scaffolded.",
    tags: ["Node.js", "CLI", "PostgreSQL", "MSSQL"],
    status: "prototype",
    repoUrl: "https://github.com/your-username/db-backup-cli",
    notes:
      "Supports local storage now; cloud targets (S3/GCS/Azure) and incremental backups are next.",
  }, 
  
  {
    id: "tic-tac-toe-js",
    title: "Tic-Tac-Toe (nostalgia)",
    description:
      "A small web-based tic-tac-toe game. I like to call it my entry-level masterpiece — link in repo for a live demo (fun to play).",
    tags: ["JavaScript", "game"],
    status: "archived",
    repoUrl: "https://github.com/your-username/tic-tac-toe",
    liveUrl: "https://your-username.github.io/tic-tac-toe/",
  },
  */

const PROJECTS: ProjectI[] = [
  {
    id: "scalable-ecom",
    title: "Scalable E-Commerce Platform",
    description:
      "A modular e-commerce platform built with microservices. Each service is containerized and independently deployable. Focused on reliability, observability, and service separation.",
    tags: ["TypeScript", "Node.js", "Docker", "Microservices"],
    status: "complete",
    repoUrl: "https://github.com/JonasKhoza/scalable-ecommerce-platform.git",
    notes:
      "Monitoring (Prometheus/Grafana) and service discovery (Consul) are planned.",
  },
  {
    id: "mini-pos-cli",
    title: "mini-pos-cli (C++)",
    description:
      "CLI Point-of-Sale in C++ — current features: create product, list products. Next: bulk CSV import using std::thread for parallelism.",
    tags: ["C++", "CLI", "multithreading"],
    status: "in-progress",
    repoUrl: "https://github.com/JonasKhoza/mini-pos-cli",
  },

  {
    id: "tech-store",
    title: "Online Tech Store",
    description:
      "A storefront for everyday tech built with React + Node (TypeScript). Focused on clean APIs and a simple product model.",
    tags: ["React", "Node.js", "TypeScript"],
    status: "complete",
    repoUrl: "https://github.com/JonasKhoza/Vintage.git",
  },
];

const statusClassMap: Record<string, string> = {
  complete: styles.complete,
  "in-progress": styles.inProgress,
  prototype: styles.prototype,
  archived: styles.archived,
};

export default function ProjectsSection() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string | "">("");

  const tags = useMemo(() => {
    const s = new Set<string>();
    PROJECTS.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const projects = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (filter && !(p.tags || []).includes(filter)) return false;
      if (!qLower) return true;
      return (
        p.title.toLowerCase().includes(qLower) ||
        p.description.toLowerCase().includes(qLower) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(qLower))
      );
    });
  }, [q, filter]);

  return (
    <section
      className={styles.section}
      aria-labelledby="projects-heading"
      id="projects"
      data-nav="Projects"
    >
      <div className={styles.headerRow}>
        <h2 id="projects-heading" className={styles.heading}>
          Projects
        </h2>

        <div className={styles.controls}>
          <label className={styles.search}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects, tags, descriptions..."
              aria-label="Search projects"
            />
          </label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter by tag"
            className={styles.select}
          >
            <option value="">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{p.title}</h3>
              <span
                className={`${styles.badge} ${
                  statusClassMap[p.status || "prototype"]
                }`}
              >
                {p.status}
              </span>
            </div>

            <p className={styles.description}>{p.description}</p>

            {p.tags?.length ? (
              <ul className={styles.tags}>
                {p.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className={styles.footer}>
              <div className={styles.links}>
                {p.repoUrl ? (
                  <a
                    className={styles.link}
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View repo
                  </a>
                ) : null}

                {p.liveUrl ? (
                  <a
                    className={styles.link}
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>

              {p.notes ? (
                <small className={styles.notes}>{p.notes}</small>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
