import c from "./styles/improvements.module.css";

const Improvements = () => {
  return (
    <section id="improvements" className={c.improvements}>
      <h2>Production Engineering Experience (Private Repositories)</h2>
      <ul className={c.explanation}>
        <li>
          The most advanced and production-grade systems I have architected and
          delivered are part of private enterprise repositories in my current
          role.
        </li>
        <li className={c.contribution_graph}>
          <p> Private Contributions Activity Graph: </p>
          <a
            href="https://github.com/Jonas20240402"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bargain Books GitHub
          </a>
        </li>
        <li>
          These include large-scale data platform engineering, distributed
          backend services, and real-time analytics systems. Due to full-time
          professional commitments and ongoing academic study, I have
          prioritized delivering high-impact production systems over refactoring
          earlier public projects.
        </li>
        <li>
          While my public repositories showcase foundational work, my current
          engineering standards, architectural decisions, and production-level
          code are reflected in my daily contributions to private company
          repositories. I am happy to walk through architectural decisions,
          system design patterns, and implementation details upon request.
        </li>
      </ul>
    </section>
  );
};

export default Improvements;
