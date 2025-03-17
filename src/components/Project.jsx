import "../styles/Project.css";

export const Project = ({ project }) => {
  return (
    <section className="projectCard">
      <div className="card">
        <div className="card-1">
          <img src={project.image} alt="" />
          <p>
            <b>{project.title}</b>
          </p>
          <p>{project.description}</p>
        </div>
        <div className="card-2">
          <a href={project.link} target="_blank">
            <button>Live preview</button>
          </a>
          <a href={project.codeLink} target="_blank">
            <button>Code</button>
          </a>
        </div>
      </div>
    </section>
  );
};
