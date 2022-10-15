import { Link } from "react-router-dom";
import projects from "../data/data";
import "./home.css";

function Home() {
  return (
    <main className="home_main">
      <section className="first_section">
        <h1>Hello!</h1>

        <p className="description">
          I am <span className="name">Jonas Khoza.</span>I am a website
          developer!
          <br /> I love building calmn interfaces, web apps
          <br /> and everything in between! I am a life-long learner.
        </p>
      </section>
      <section className="second_section">
        <p className="email_me">
          Get in touch!&#128519;
          <a className="get_in_touch" href="mailto:jonaskhoza18@gmail.com">
            jonaskhoza18@gmail.com
          </a>
        </p>
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
              <Link to="/about" className="read_more">
                read more...
              </Link>
              <a href="" className="resume">
                View my resume
              </a>
              &#128073;
            </div>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                <img src="/images/languages/html5-logo.png" alt="HTML5 ICON" />
                <span>HTML5</span>
              </li>

              <li>
                <img src="/images/languages/CSS3.png" alt="CSS3 ICON" />
                <span>CSS3</span>
              </li>
              <li>
                <img
                  src="/images/languages/javascript-icon.png"
                  alt="Javascript Icon"
                />
                <span>Javascript</span>
              </li>
              <li>
                <img src="/images/languages/React-icon.png" alt="React Icon" />
                <span>React</span>
              </li>
              <li>
                <img src="/images/languages/Node.jpg" alt="Javascript Icon" />
                <span>Node with Express</span>
              </li>
              <li>
                <img
                  src="/images/languages/mongodb-logo.png"
                  alt="MongoDB Icon"
                />
                <span>MongoDB</span>
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
                      <Link to="/projects"> {project.name}</Link>
                      <span>&#8658;</span>
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
            Checkout my other projects on my <a href="">GitHub</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
