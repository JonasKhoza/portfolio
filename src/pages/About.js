import "./styles/about.css";

function About() {
  document.title = "About - Jonas Khoza";
  return (
    <main className="home_main2">
      <h1 className="confession">I have always loved tech</h1>
      <span className="read_time">2.5 minute read</span>
      <p className="cv_container">
        Looking for my{" "}
        <a
          href="https://drive.google.com/file/d/1kpzdr3OFeCwp7Z28_i1-5CduxOzVhsFN/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume"
        >
          CV?
        </a>
      </p>
      <h1>My quick story</h1>
      <h2>
        Full-Stack Web Developer with a Drive for Learning and Collaboration
      </h2>
      <section className="first-section">
        <p>
          Greetings! I am a dedicated Full-Stack Web Developer with a burning
          passion for technology and a relentless drive to learn and grow. My
          journey into the world of programming began in a community where
          access to computer resources was limited. However, my determination
          pushed me to overcome these challenges and pursue my love for
          technology.
        </p>
        <p>
          Having gained access to computer resources later in life, I embarked
          on a self-taught journey to master web development. While waiting for
          my ID, I delved into various online platforms, including{" "}
          <span>
            Udemy, SoloLearn, W3Schools, YouTube tutorials, and even a
            Full-Stack Web development course from Academind.com,
          </span>{" "}
          generously provided by a friend. These resources became my gateway to
          acquiring the necessary skills and knowledge.
        </p>
        <p>
          Throughout my journey, I have developed a keen eye for detail and a
          strong desire to understand the "why" behind every problem. I enjoy
          breaking down complex challenges into manageable pieces, thoroughly
          analyzing them, and deriving the most fitting solutions.
          Problem-solving excites me, and I credit my love for solving intricate
          math problems to an inspiring math teacher.
        </p>

        <p>
          In 2023, I joined the prestigious University of South Africa to
          further expand my knowledge and skills in the field of informatics.
          Throughout my studies, I have immersed myself in various subjects,
          including{" "}
          <span>
            Python and C++ programming, Foundations of Computer Science, and
            computer architecture.
          </span>{" "}
          These foundational courses have provided me with a solid understanding
          of programming syntax, computational principles, and the inner
          workings of computer systems.
        </p>

        <p>
          Looking ahead to 2024, I am excited to delve into the world of
          <span>graphical user interfaces (GUI)</span> with both Python and C++.
          This next phase of my education will enable me to enhance my skills in
          creating intuitive and user-friendly interfaces, further enriching my
          capabilities as a full-stack web developer.
        </p>

        <p>
          While my focus is on software development, my ultimate goal is to
          become a<span>data scientist.</span> The field of data science
          fascinates me, as it combines my love for technology with the power of
          data analysis and insights. Through my studies and practical
          experience, I aim to acquire the necessary skills in data
          manipulation, statistical analysis, and machine learning algorithms to
          make meaningful contributions in this exciting field.
        </p>
      </section>
      <section className="second-section">
        <p>
          Working under-pressure isn't a natural ability for me, I had to learn
          how to cope under-pressure, leading a group of very energetic high
          school students gave me all the lessons. I pay close attention to
          detail and always want to know the why. I love to break the problem
          into pieces, analyse it and derive a potential solution that best fit
          it. I am a go-getter. I credit it all to my maths teacher who made me
          fall in love with solving maths problems
        </p>
      </section>
      <section className="code_emphasy">
        <p>
          {" "}
          My code thrives on <span>readability and simplicity,</span> ensuring
          that anyone can grasp it effortlessly. Every project I tackle brings
          new excitement and a fresh opportunity to learn.{" "}
          <span>
            {" "}
            firmly believe that programming is an ongoing journey of continuous
            learning.
          </span>
          I
        </p>
      </section>
      <section className="third-section">
        <h2>As a person</h2>
        <p>
          If I had to describe myself to anyone in just a single word, that
          would be <b>resourceful</b>. Beyond coding, I am a resourceful
          individual who thrives on creativity and unconventional approaches. I
          am not afraid to push boundaries and explore new possibilities.
          Innovation fuels my work, and I love embracing fresh perspectives and
          ideas.
        </p>
      </section>
      <section className="four-section">
        <h2>As a colleague</h2>
        <p>
          As a colleague, I excel in teamwork and collaboration. Throughout my
          experience, both as a leader of energetic high school students and
          through my involvement in the{" "}
          <span>
            Representative Council of Learners (RCL) program and Girls and Boys
            Movement(G/BEM),
          </span>{" "}
          I have honed my communication skills and learned the value of working
          together. I firmly believe in the power of collective minds, as two
          minds connected can achieve far more than one. My collaborative
          approach centers around the principle of <span>"we"</span> rather than{" "}
          <span>"I,"</span>
          fostering an environment of mutual growth and success.
        </p>

        <p>
          I am excited to embark on new opportunities and contribute my skills
          and enthusiasm to meaningful projects. Let's connect and explore how
          we can create something incredible together!
        </p>
      </section>

      <h3 className="see-soon">I look forward to hearing from you soon!</h3>
    </main>
  );
}

export default About;
