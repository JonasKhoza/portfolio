import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/data";
import "./home.css";

function Home() {
  document.title = "Home - Jonas Khoza";
  return (
    <main className="home_main">
      <section className="parent">
        <section className="first_section">
          <h1>Hello!</h1>
          <motion.p
            className="description"
            animate={{ y: 20, x: 8 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: "easeOut",
            }}
            initial={{
              x: -90,
              opacity: 1,
            }}
          >
            I am <span className="name">Jonas Khoza.</span>I am a website
            developer!
            <br /> I love building calmn interfaces, web apps
            <br /> and everything in between! I am a life-long learner.
          </motion.p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/developer/developer-working-on-laptop-4550336-3779144.webp"
            }
            alt=""
            className="developer_image"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/developer/download (2).png"}
            alt=""
            className="responsiveness_image"
          />
        </section>
        <section className="second_section">
          <p className="email_me">
            Get in touch!&#128519;
            <a className="get_in_touch" href="mailto:jonaskhoza18@gmail.com">
              jonaskhoza18@gmail.com
            </a>
          </p>
        </section>
      </section>

      <section className="third_section">
        <div className="container">
          <div className="background">
            <h1>Background</h1>
            <div className="background_desc">
              <p>
                I have always wanted to play a role in developing advanced tech
                stuff. <br />
                <br />
                But just like many, my journey wasn't smooth. Access to reliable
                resources such as stable internet connection and computer
                presented itself during late 2021. Today I am a self-taught web
                developer enrolled for a
                <span className="degree">
                  Bachelor of Science in Informatics at the University of South
                  Africa 2023
                </span>
              </p>
              <br />
              <p>
                As a web developer, I love bringing together different
                technologies and harnessing their abilities to produce the
                desired outcome. With my keen eye for good design, I am able to
                design and build projects that satisfies the client's needs
              </p>
              <br />
              <p>
                <span className="hobbies">
                  When I am not in front of the screen
                </span>
                , I love reading, playing with high school math questions,
                engaging with like-minded people, playing video games and
                watching football.
              </p>
              <Link to="/portfolio/about" className="read_more">
                read more...
              </Link>
              <a
                href="https://drive.google.com/file/d/10sUpEKlynAZ9C-jLKxM9KERk1P91JE88/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="resume"
              >
                View my resume
              </a>
              &#128073;
            </div>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                <a href="https://html.com/" target="_blank" rel="noreferrer">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/languages/html5-logo.png"
                    }
                    alt="HTML5 ICON"
                  />
                  <span>HTML5</span>
                </a>
                <p>Learnt 2021!</p>
              </li>

              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/languages/css3.png"}
                    alt="CSS3 ICON"
                  />
                  <span>CSS3</span>
                </a>
                <p>Learnt 2021!</p>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/languages/javascript-icon.png"
                    }
                    alt="Javascript Icon"
                  />
                  <span>Javascript</span>
                </a>
                <p>Learnt 2021!</p>
              </li>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/languages/React-icon.png"
                    }
                    alt="React Icon"
                  />
                  <span>React</span>
                </a>
                <p>Learnt 2022!</p>
              </li>
              <li>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/languages/Node.jpg"}
                    alt="Javascript Icon"
                  />
                  <span>Node with Express</span>
                </a>
                <p>Learnt 2022!</p>
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/languages/mongodb-logo.png"
                    }
                    alt="MongoDB Icon"
                  />
                  <span>MongoDB</span>
                </a>
                <p>Learnt 2022!</p>
              </li>
            </ul>
          </div>
          <div className="projects">
            <h1>Projects</h1>
            <div className="projects-desc">
              {projects.map((project) => {
                return (
                  <div className="project" key={project.id}>
                    <div className="project_name">
                      <Link to="/portfolio/projects"> {project.name}</Link>
                    </div>

                    <p>{project.description}</p>
                    <ol>
                      <li>{project.languages.Html}</li>
                      <li>{project.languages.CSS}</li>
                      {project.languages.JavaScript && (
                        <li>{project.languages.JavaScript}</li>
                      )}

                      {project.languages.React && (
                        <li>{project.languages.React}</li>
                      )}

                      {project.languages.Node && (
                        <li>{project.languages.Node}</li>
                      )}

                      {project.languages.MongoDB && (
                        <li>{project.languages.MongoDB}</li>
                      )}
                      {project.languages.Firebase && (
                        <li>{project.languages.Firebase}</li>
                      )}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="other-projects">
            Checkout my other projects on my{" "}
            <a
              href="https://github.com/JonasKhoza"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
