import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/data";
import skills from "../data/skills";
import "./styles/home.css";

function Home() {
  document.title = "Jonas Khoza | Junior Software Engineer";
  return (
    <div className="home_main">
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
            I am <span className="name">Jonas Khoza.</span>I am a{" "}
            <b>Junior Software Engineer!</b>
            <br /> I hold a strong passion for <b>backend engineering</b> <br />
            and a keen interest
            <br /> in uncovering the inner workings of tools and systems.
            <br />I am a life-long learner.
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
                <span className="degree">competitive Software Engineer</span>.{" "}
                <br />
                <br />
                But unlike some, I didn't grow up surrounded with computers,
                rather I grew up with a passion to learn as much as I can about
                things I could get my hands on. Late in my childhood I got the
                exposure to tech equipments, and got my self started with
                self-taught full-stack development courses on Udemy. Today I
                find myself with a number of projects built, a year and months
                of corporate working experience, now enrolled for a
                <span className="degree">
                  Bachelor of Science in Informatics at the University of South
                  Africa 2023.
                </span>{" "}
              </p>
              <br />
              <p>
                {" "}
                Two twenty-something British-South Africans walking 800km to
                Santiago de Compostela in the hopes of making a difference....
                <a
                  className="read_more"
                  href="https://web.facebook.com/bootsbeyondboundaries"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find out how I am being funded...
                </a>
              </p>
              <br />
              <p>
                {" "}
                My journey at the university so far has included learning the
                syntax of both Python and C++ and other great things.
                <Link to="/portfolio/my-journey" className="read_more">
                  read more...
                </Link>
              </p>
              <br />
              <p>
                As a Software Engineer, I am driven by curiosity and a deep
                desire to understand how things work beneath the surface.
                Whether it's a programming language, a framework, or a system
                like Nginx, I focus on grasping its architecture, components,
                and internal mechanisms before diving into its syntax. This
                approach allows me to not just use tools, but to fully leverage
                their capabilities in solving real-world problems.
              </p>
              <br />
              <p>
                <span className="hobbies">
                  When I am not in front of the screen
                </span>
                , I’m exploring emerging technologies, brainstorming innovative
                tech solutions, or engaging in discussions about software
                architecture. I’m also passionate about using technology to
                solve everyday African challenges. Outside of tech, I love
                reading, playing video games, tackling math problems, and
                watching football—I'm a big Manchester United fan.
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
                            {project.languages?.Html?.trim() && (
                              <li>{project.languages.Html}</li>
                            )}
                            {project.languages?.CSS?.trim() && (
                              <li>{project.languages.CSS}</li>
                            )}
                            {project.languages?.JavaScript?.trim() && (
                              <li>{project.languages.JavaScript}</li>
                            )}
                            {project.languages?.React?.trim() && (
                              <li>{project.languages.React}</li>
                            )}
                            {project.languages?.Typescript?.trim() && (
                              <li>{project.languages.Typescript}</li>
                            )}
                            {project.languages?.Node?.trim() && (
                              <li>{project.languages.Node}</li>
                            )}
                            {project.languages?.Express?.trim() && (
                              <li>{project.languages.Express}</li>
                            )}
                            {project.languages?.Firebase?.trim() && (
                              <li>{project.languages.Firebase}</li>
                            )}
                            {project.languages?.Mongoose?.trim() && (
                              <li>{project.languages.Mongoose}</li>
                            )}
                            {project.languages?.MongoDB?.trim() && (
                              <li>{project.languages.MongoDB}</li>
                            )}
                            {project.languages?.PostgreSQL?.trim() && (
                              <li>{project.languages.PostgreSQL}</li>
                            )}
                            {project.languages?.Elastic?.trim() && (
                              <li>{project.languages.Elastic}</li>
                            )}
                            {project.languages?.Nginx?.trim() && (
                              <li>{project.languages.Nginx}</li>
                            )}
                            {project.languages?.Consul?.trim() && (
                              <li>{project.languages.Consul}</li>
                            )}
                            {project.languages?.Docker?.trim() && (
                              <li>{project.languages.Docker}</li>
                            )}
                            {project.languages?.GithubActions?.trim() && (
                              <li>{project.languages.GithubActions}</li>
                            )}
                          </ol>
                        </li>
                        <li>
                          <p>{project.description && project.description}</p>
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
    </div>
  );
}

export default Home;
