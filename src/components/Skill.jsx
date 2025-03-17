import { useEffect } from "react";
import "../styles/Skill.css";

export const Skill = ({ skill }) => {
  let Icon = skill.icon;
  let color = skill.color;
  let size = "50px";
  if (skill.size) {
    size = skill.size;
  }
  return (
    <div className="skillBoxes">
      <Icon className="icon" color={skill.color}></Icon>
      <div className="iconName" style={{ backgroundColor: color }}>
        <p>{skill.name}</p>
      </div>
    </div>
  );
};
