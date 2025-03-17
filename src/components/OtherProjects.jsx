import "../styles/OtherProjects.css";
import { ProjectButton } from "./ProjectButton";
import { Project } from "./Project";
import { useState } from "react";

export const OtherProjects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const projectCategories = {
    javascript: [
      {
        image: "country.png",
        title: "Country details",
        link: "https://country-details-using-js-api.netlify.app/",
        description: "JavaScript, APIs",
        codeLink: "https://github.com/kesavan06/country-details",
      },
      {
        image: "quiz1.jpg",
        title: "Quiz",
        link: "https://dynamic-quiz-website.netlify.app/",
        description: "JavaScript, APIs",
        codeLink: "https://github.com/kesavan06/quiz",
      },
      {
        image: "spliter.png",
        title: "Spliter",
        link: "https://tip-calculator-website-js.netlify.app/",
        description: "JavaScript",
        codeLink: "https://github.com/kesavan06/tip-calculator",
      },
    ],
    nodejs: [
      {
        image: "planet.png",
        title: "THE PLANETS",
        link: "https://solorsystem.onrender.com/",
        description: "Node.js, Express",
        codeLink: "https://github.com/kesavan06/solorsystem",
      },
    ],

    htmlcss: [
      {
        image: "hyperspace.png",
        title: "Hyperspace",
        link: "https://67d7c8c0e9854d97238f622a--deft-dusk-d03d3d.netlify.app/",
        description: "HTML, CSS",
        codeLink: "https://github.com/kesavan06/hyperspace",
      },

      {
        image: "cascade.png",
        title: "Cascade",
        link: "https://cascade-html.netlify.app/",
        description: "HTML, CSS",
        codeLink: "https://github.com/kesavan06/cascade-html",
      },
    ],
    scratch: [
      {
        image: "scratch.png",
        title: "Rescue Jumbo",
        link: "https://scratch.mit.edu/projects/1044719177/fullscreen/",
        codeLink: "https://scratch.mit.edu/projects/1044719177/editor/",
        description: "Scratch",
      },
    ],
  };

  const categories = ["javascript", "nodejs", "htmlcss", "scratch"];

  const handleCategoryClick = (index) => {
    setProjectIndex(index);
    setActiveButton(index);
  };

  return (
    <section className="otherProjectsContainer" id="otherProject">
      <div className="otherProjectHeading">
        <h2>Other Projects</h2>
      </div>
      <div className="otherProjectContent">
        <div className="otherProjectBtns">
          <ProjectButton
            value="Java script"
            index={0}
            setProjectIndex={handleCategoryClick}
            isActive={activeButton === 0}
          />
          <ProjectButton
            value="Node JS"
            index={1}
            setProjectIndex={handleCategoryClick}
            isActive={activeButton === 1}
          />
          <ProjectButton
            value="HTML & CSS"
            index={2}
            setProjectIndex={handleCategoryClick}
            isActive={activeButton === 2}
          />
          <ProjectButton
            value="Scratch"
            index={3}
            setProjectIndex={handleCategoryClick}
            isActive={activeButton === 3}
          />
        </div>
        <div className="otherProjects">
          {projectCategories[categories[projectIndex]]?.map((project, idx) => (
            <Project key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
