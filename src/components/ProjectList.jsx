import "../styles/ProjectList.css";
import { Project } from "./Project";

export const ProjectList = () => {
  const projects = [
    {
      image: "youtube.png",
      title: "YouTube",
      link: "https://yotube-clone-project-js.netlify.app/index.html",
      codeLink: "https://github.com/kesavan06/youtube-js-project",
      description: "HTML, CSS & JS",
    },
    {
      image: "rps.png",
      title: "Rock Paper Scissor",
      link: "https://rock-paper-scissor-kf4x.onrender.com/",
      codeLink: "https://github.com/kesavan06/rock_paper_scissor",
      description: "Node.js, Socket.IO",
    },
    {
      image: "loom.png",
      title: "Loom",
      link: "https://loom-html-css-project.netlify.app/",
      codeLink: "https://github.com/kesavan06/loom-html-project",
      description: "HTML & CSS",
    },
    {
      image: "carparking.png",
      title: "Car Parking System",
      description: "Java, MySQL console project",
      codeLink: "https://github.com/kesavan06/car-parking-system",
    },
    {
      image: "Kathaikalaam.png",
      title: "Kathaikalaam",
      link: "https://172.17.61.162:5173/",
      codeLink: "https://github.com/kesavan06/kathaikalaam-online-meeting",
      description: "React, WebRTC, Socket.IO, ",
    },
  ];
  return (
    <section className="projectsContainer" id="product">
      <div className="projectHeading">
        <h2>Projects</h2>
      </div>
      <div className="cards">
        {projects.map((project, index) => (
          <Project project={project} key={index}></Project>
        ))}
      </div>
    </section>
  );
};
