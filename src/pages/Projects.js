import projects from "../data/data";
import "./projects.css";

function Projects() {
  return (
    <main className="home">
      <h1>Projects</h1>
      <h2>Full-stack web developer</h2>
      <section>
        {projects.map((project) => {
          return (
            <div className="first_project" key={project.id}>
              <div className="projec_desc">
                <h3>{project.name}</h3>
                <ul>
                  <li>{project.languages.Html}</li>
                  <li>{project.languages.CSS}</li>
                  {project.languages.JavaScript && (
                    <li>{project.languages.JavaScript}</li>
                  )}
                  {project.languages.React && (
                    <li>{project.languages.React}</li>
                  )}
                  {project.languages.Node && <li>{project.languages.Node}</li>}
                  {project.languages.MongoDB && (
                    <li>{project.languages.MongoDB}</li>
                  )}
                </ul>
                <p>{project.full_description}</p>
                <a href="" className="live_demo">
                  Live Demo
                </a>
              </div>
              <img src={project.image} alt="" />
            </div>
          );
        })}
      </section>
    </main>
  );
}
export default Projects;
