import "./Projects.scss";
import { projects } from "./projectsdata";
import { SiAiohttp } from "react-icons/si";
import Image from "../../assets/dev.webp";
import { useState } from "react";

export default function Projects() {
  const [visibleProjects, setVisible] = useState(6);

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div
      className="projects"
      id="projects"
      style={{ background: `url(${Image})` }}
    >
      <h1 className="title">Projects</h1>
      <div className="container">
        <div className="projects_grid">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div className="projects_card" key={index}>
              <img src={project.image} alt={project.title} />
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
        {visibleProjects === projects.length ? null : (
          <div className="load_more">
            <button onClick={showMore}>Show more</button>
          </div>
        )}
      </div>
    </div>
  );
}
