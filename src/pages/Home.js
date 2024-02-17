import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/data";
import skills from "../data/skills";
import "./styles/home.css";

function Home() {
  document.title = "Jonas Khoza | Software Developer";
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
                stuff. I have my eyes set to become a
                <span className="degree">Data Scientist</span>. <br />
                <br />
                But just like many, my journey hasn't been smooth. Access to
                reliable resources such as stable internet connection and
                computer resources has always been a predicament. Today I am a
                self-taught web developer through Udemy and now enrolled for a
                <span className="degree">
                  Bachelor of Science in Informatics at the University of South
                  Africa 2023. My journey at the university so far has included
                  learning the syntax of both Python and C++ and other great
                  things.
                  <Link to="/portfolio/my-journey" className="read_more">
                    read more...
                  </Link>
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
                , I love trying to come up with tech solutions mostly tech
                solutions to solve our african everyday probles, engaging with
                like-minded people, reading, playing with high school math
                questions,playing video games and watching football.
              </p>
              <Link to="/portfolio/about" className="read_more">
                keep reading my bio...
              </Link>
              <a
                href="https://drive.google.com/file/d/1kpzdr3OFeCwp7Z28_i1-5CduxOzVhsFN/view?usp=sharing"
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
              {skills.map((skill) => {
                return (
                  <li key={skill.id}>
                    {skill.language}
                    {skill.useCase && (
                      <span
                        className={
                          skill.useCase.toLowerCase() === "frontend"
                            ? "frontend"
                            : "backend"
                        }
                      >
                        {skill.useCase}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="projects">
            <h1>Projects</h1>
            <div className="projects-desc">
              {projects.map((project) => {
                return (
                  <div className="project" key={project.id}>
                    <div className="project_desc">
                      <ul>
                        <li className="role">{project.role}</li>
                        <li className="title">{project.name}</li>
                        <li>
                          <ol>
                            {project.languages?.Html.trim() && (
                              <li>{project.languages?.Html}</li>
                            )}
                            {project.languages?.CSS.trim() && (
                              <li>{project.languages?.CSS}</li>
                            )}
                            {project.languages?.JavaScript.trim() && (
                              <li>{project.languages?.JavaScript}</li>
                            )}
                            {project.languages?.React.trim() && (
                              <li>{project.languages.React}</li>
                            )}
                            {project.languages?.Typescript.trim() && (
                              <li>{project.languages?.Typescript}</li>
                            )}
                            {project.languages?.Node.trim() && (
                              <li>{project.languages?.Node}</li>
                            )}
                            {project.languages?.Express.trim() && (
                              <li>{project.languages?.Express}</li>
                            )}
                            {project.languages?.Firebase.trim() && (
                              <li>{project.languages?.Firebase}</li>
                            )}
                            {project.languages?.Mongoose.trim() && (
                              <li>{project.languages?.Mongoose}</li>
                            )}
                            {project.languages?.MongoDB.trim() && (
                              <li>{project.languages?.MongoDB}</li>
                            )}
                          </ol>
                        </li>
                        <li>
                          <p>{project.description}</p>
                        </li>
                      </ul>
                      <Link
                        className="image_cont"
                        to={`/portfolio/${project.id}`}
                      >
                        <div className="image_div">
                          <img
                            src={process.env.PUBLIC_URL + project.image}
                            alt={project.name}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="view-project-container">
                      {" "}
                      <Link
                        to={`/portfolio/${project.id}`}
                        className="view-project"
                      >
                        <button className="button">View project</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="other-projects">
            Checkout my other projects on my
            <a
              href="https://github.com/JonasKhoza"
              target="_blank"
              rel="noreferrer"
              className="my-github"
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
