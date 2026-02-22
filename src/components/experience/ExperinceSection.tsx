// ExperienceSection.tsx
import styles from "./styles/experience.module.css";

export type Experience = {
  title: string;
  company: string;
  duration: string;
  summary: string;
  tools?: string[];
  achievements?: string[];
};

const experiences: Experience[] = [
  {
    title: "Junior Software Engineer",
    company: "Bargain Books",
    duration: "June 2024 — Present",
    summary:
      "Sole Engineer: Entrusted with building a centralized data warehouse aggregating data from 85+ decentralized transactional databases, enabling a global reporting view and automated data processes.",
    tools: [
      "TypeScript",
      "React",
      "Node.js (Express)",
      "Python",
      "PostgreSQL",
      "Nginx",
      "Docker",
    ],
    achievements: [
      `Data Platform Engineering: Independently architected and delivered a centralized, Dockerized PostgreSQL data warehouse (65M+ rows), consolidating 85+ decentralized SQL Server databases; owned the full lifecycle including analysis, schema design, migration pipelines, optimization, and operational support.`,

      `Backend Data Services (Node.js): Designed and deployed a Dockerized Node.js microservice ecosystem with scheduled cron workflows delivering near-real-time data synchronization across distributed systems, improving data freshness and operational visibility.`,

      `API Engineering: Architected and implemented a production-grade backend API powering real-time analytics dashboards, focusing on performance optimization, data integrity, and scalable service design.`,

      `Frontend Engineering (React): Independently built a React-based KPI dashboard enabling near-real-time business intelligence and executive decision-making through live operational metrics.`,

      `Advanced Data Analysis (SQL): Authored complex analytical SQL queries and data extraction pipelines supporting enterprise reporting and enabling data analysts to derive actionable insights from large-scale datasets.`,

      `Technical Consultation & Systems Strategy: Acted as the primary technical advisor on software architecture, backend engineering practices, and data platform improvements, driving system efficiency and modernization initiatives.`,
    ],
  },
  {
    title: "Junior IT Support Technician",
    company: "Bargain Books",
    duration: "April 2024 — June 2024",
    summary:
      "Provided first-level technical support to end-users, maintaining IT infrastructure reliability and improving operational efficiency through automation.",
    achievements: [
      "Diagnosed and resolved hardware and software issues across desktops, laptops, and peripherals.",
      "Introduced Python-based automation to address recurring data-related issues.",
      "Supported users via helpdesk channels including phone, email, and in-person assistance.",
      "Prepared and installed hardware and software for new and existing stores, and employees.",
      "Monitored IT infrastructure performance and maintained structured support logs.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="experience-heading"
      id="experience"
      data-nav="Experience"
    >
      <h2 id="experience-heading" className={styles.heading}>
        Experience
      </h2>

      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.card}>
            <header className={styles.header}>
              <div>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.company}>{exp.company}</p>
              </div>
              <span className={styles.duration}>{exp.duration}</span>
            </header>

            <p className={styles.summary}>{exp.summary}</p>

            {exp.tools && (
              <ul className={styles.tools}>
                {exp.tools.map((tool) => (
                  <li key={tool} className={styles.tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            )}

            {exp.achievements && (
              <ul className={styles.achievements}>
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/*`Enterprise Integration & Data Migration: Engineered integrations with NetSuite APIs and SuiteScript, building Python and JavaScript ETL workflows to extract and synchronize warehouse inventory data into a centralized data platform.`,
      "Sole Software Engineer responsible for planning, designing, building, and populating a centralized PostgreSQL data platform with data from 85+ transactional mssql databases.",
      "Designed ETL services including once-off ingestion and cron-driven polling services with retry mechanisms.",
      "Built microservice-oriented dashboards for KPI reporting, global inventory lookup, and analytics, supporting 300+ concurrent users.",
      "Collaborated closely with the Data Analyst to automate core data-centric business workflows using Python.", */
