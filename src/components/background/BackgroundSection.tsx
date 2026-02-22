// BackgroundSectionSplit.tsx
import styles from "./styles/background_section.module.css";

export default function BackgroundSectionSplit() {
  return (
    <section
      className={styles.section}
      aria-labelledby="background-heading"
      id="background"
      data-nav="Background"
    >
      <header className={styles.header}>
        <h2 id="background-heading" className={styles.heading}>
          Background
        </h2>
        <p className={styles.subtitle}>
          Technical focus, learning path, and long-term systems goals.
        </p>
      </header>

      <div className={styles.split}>
        <div className={styles.left}>
          <p className={styles.lead}>
            My work is primarily <strong>TypeScript-driven on Node.js</strong>,
            with <strong>Python</strong> supporting automation and data tooling.
          </p>

          <p className={styles.paragraph}>
            I actively explore <strong>C++</strong> with a long-term objective
            of integrating it into Node.js for{" "}
            <strong>CPU-intensive workloads</strong>, where performance, memory
            control, and determinism are critical.
          </p>
        </div>

        <aside className={styles.right}>
          <div className={styles.block}>
            <span className={styles.label}>Learning Path</span>
            <p>
              Self-taught through books and Udemy, later enrolled in 2023 for a
              <strong> Bachelor of Science in Informatics</strong> at the
              <strong> University of South Africa</strong>.
            </p>
          </div>

          <div className={styles.block}>
            <span className={styles.label}>Academic Focus</span>
            <p>
              C++-dominated coursework centered on{" "}
              <strong>data structures</strong>,
              <strong> systems engineering</strong>, and low-level problem
              solving.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
