import styles from "./styles/intro_section.module.css";

interface IntroSectionProps {
  years: number;
  skills: { name: string }[];
}

export default function IntroSection({ years, skills }: IntroSectionProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="intro-heading"
      id="contact"
      data-nav="Contact"
    >
      <div className={styles.introGrid}>
        <header className={styles.introText}>
          <h1 id="intro-heading" className={styles.heading}>
            Jonas Khoza
          </h1>

          <p className={styles.lead}>
            Backend-leaned Software Engineer with <b>{years}+ years </b>
            of experience. Farm boy by background, currently based in
            <strong> Cape Town, South Africa</strong>, with a growing focus on
            <strong> systems programming in C++</strong>. Final year{" "}
            <b>BSc Informatics</b> student at the University of South Africa.
          </p>

          <div className={styles.contact}>
            <span className={styles.contactLabel}>Get in touch</span>
            <a href="mailto:jonaskhoza18@gmail.com" className={styles.email}>
              jonaskhoza18@gmail.com
            </a>
          </div>

          <div className={styles.resume}>
            <a
              href="https://drive.google.com/file/d/1wAyBg5awExLeLCTWxCg3JxwJzDlXEkWs/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={styles.resume_link}
            >
              View my resume
            </a>
            &#128073;
          </div>
        </header>

        <aside className={styles.skills}>
          <h2 className={styles.skillsHeading}>Core Skills</h2>
          <ul className={styles.skillsList}>
            {skills.map((s) => (
              <li key={s.name} className={styles.skill}>
                {s.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
