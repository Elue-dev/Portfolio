import "./Projects.scss";
import { projects } from "./projectsdata";
import { SiAiohttp } from "react-icons/si";
import Image from "../../assets/dev.webp";

export default function Projects() {
  return (
    <div
      className="projects"
      id="projects"
      style={{ background: `url(${Image})` }}
    >
      <h1 className="title">Projects</h1>
      <div className="container">
        <div className="projects_grid">
          {projects.map((project, index) => (
            <div className="projects_card" key={index}>
              <img src={project.image} alt="wisdoms picture" />
              <div className="projects_details">
                <h2 className="project_title">{project.title}</h2>
                <p className="project_description">{project.desc}</p>
                <p className="project_stacks">
                  <b>Stacks:</b> <code>{project.stacks}</code>
                </p>
                <a href={project.href}>
                  <div className="visit">
                    <SiAiohttp style={{ color: "#333" }} />
                    <p>Go Live</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
