import "../styles/SkillList.css";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { LiaNodeJs } from "react-icons/lia";
import { BiLogoNodejs } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { Skill } from "./Skill";
import { SiScratch } from "react-icons/si";
export const SkillList = () => {
  const skillsArray = [
    {
      name: "HTML & CSS",
      icon: FaHtml5,
      color: "rgb(254, 100, 47)",
    },
    {
      name: "Java script",
      icon: FaJs,
      color: "Yellow",
    },
    { name: "React JS", icon: FaReact, color: "rgb(0, 213, 253)" },
    {
      name: "Node JS",
      icon: IoLogoNodejs,
      color: "rgb(130, 210, 5)",
    },
    { name: "Java", icon: FaJava, color: "rgb(91, 160, 207)" },
    { name: "MySQL", icon: DiMysql, color: "rgb(91, 160, 207)" },
    { name: "Scratch", icon: SiScratch, color: "rgb(246, 179, 3)" },
  ];
  return (
    <section className="skillContainer" id="skill">
      <div className="skillHeading">
        <h1>Skills</h1>
      </div>
      <div className="skillBox">
        {skillsArray.map((skill, index) => {
          return <Skill skill={skill} key={index}></Skill>;
        })}
      </div>
    </section>
  );
};
