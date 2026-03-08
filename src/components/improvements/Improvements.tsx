import c from "./styles/improvements.module.css";

const Improvements = () => {
  return (
    <section id="improvements" className={c.improvements}>
      <h2>Production Engineering Experience (Private Repositories)</h2>
      <ul className={c.explanation}>
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
      </ul>
    </section>
  );
};

export default Improvements;
