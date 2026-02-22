interface ExperienceI {
  projectName: string;
  //projectAim: "Professional" | "Academic" | "Hobby";
  jobTitle: "Junior Software Engineer" | "Junior IT Support Technician";
  focus: string;
  projectSummary: string;
  achievements: string[];
  implementation?: string[];
  workDuration: string;
  tools: string[];
  company: string;
}

const experiences: ExperienceI[] = [
  {
    company: "Bargain Books",
    projectName: "BB Central Reporting",
    jobTitle: "Junior Software Engineer",
    focus: `Entrusted with building a data warehouse to house data from 85+ decentralised transactional databases, 
            a reporting dasjboard for global view and automate data process for the company data analyst.`,
    projectSummary: `A centralised data repository system providing a global view(search, 
                dashboard, etc..) housing growing data from 85+ decentralised Bargain Books stores.`,
    achievements: [
      `Data Platform Engineering: Independently architected and delivered a centralized, Dockerized PostgreSQL data warehouse (65M+ rows), consolidating 85+ decentralized SQL Server databases; owned the full lifecycle including analysis, schema design, migration pipelines, optimization, and operational support.`,

      `Backend Data Services (Node.js): Designed and deployed a Dockerized Node.js microservice ecosystem with scheduled cron workflows delivering near-real-time data synchronization across distributed systems, improving data freshness and operational visibility.`,

      `API Engineering: Architected and implemented a production-grade backend API powering real-time analytics dashboards, focusing on performance optimization, data integrity, and scalable service design.`,

      `Frontend Engineering (React): Independently built a React-based KPI dashboard enabling near-real-time business intelligence and executive decision-making through live operational metrics.`,

      `Advanced Data Analysis (SQL): Authored complex analytical SQL queries and data extraction pipelines supporting enterprise reporting and enabling data analysts to derive actionable insights from large-scale datasets.`,

      `Technical Consultation & Systems Strategy: Acted as the primary technical advisor on software architecture, backend engineering practices, and data platform improvements, driving system efficiency and modernization initiatives.`,

      `Enterprise Integration & Data Migration: Engineered integrations with NetSuite APIs and SuiteScript, building Python and JavaScript ETL workflows to extract and synchronize warehouse inventory data into a centralized data platform.`,
      `Served as the only Software engineer for the company to plan, design, build, 
    and populate a centralised postgresql database with constantly generated 85+ stores inventory, transactional, and other data.`,
      `
    Developed services: Once-off use ETL service, polling-service(cron-job powered),
    to elengantly retrieve changes from 85 differnt databases with retry mechanism.
    `,
      `Built micro-services oriented dashboard for visualised data
                reporting on core KPI's, global invenory lookup, and many other
                functionalities, serving more than 310 concurrent users.
    `,
      `Collaborate with company Data Analyst to automate core company data centered procedures using Python.`,
    ],
    workDuration: "Since June 2024+",
    tools: [
      "TypeScript",
      "React",
      "Nodejs(Express)",
      "Python",
      "PostgreSQL",
      "Nginx",
      "Docker",
    ],
  },
  {
    company: "Bargain Books",
    projectName: "BB Central Reporting",
    jobTitle: "Junior IT Support Technician",
    focus: `Entrusted with providing first-level technical support to end-users, troubleshooting hardware and software issues, setting up new user accounts, and maintaining IT equipment.`,
    projectSummary: `A centralised data repository system providing a global view(search, 
                dashboard, etc..) housing growing data from 85+ decentralised Bargain Books stores.`,
    achievements: [
      `Troubleshoot hardware and software: Diagnose and resolve issues with desktops, laptops, printers, and other computer systems.`,
      `Introduced and automated data related problems with Python.`,
      `
   Provide end-user support: Answer helpdesk inquiries via phone, email, or in-person to assist employees with IT-related problems.
    `,
      `Set up new equipment: Prepare and install hardware and software for new and current employees, including setting up workstations and user profiles.
    `,
      `Monitor the performance of IT infrastructure and maintain logs of support activity and equipment.`,
    ],
    workDuration: "April 2024 - June 2024",
    tools: [],
  },
];

export default experiences;
