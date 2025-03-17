import { useState } from "react";
import { Header } from "./Header";
import "../styles/App.css";
import { About } from "./About";
import { ProjectList } from "./ProjectList";
import { SkillList } from "./SkillList";
import { OtherProjects } from "./OtherProjects";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="mainContainer">
      <Header></Header>
      <About></About>
      <ProjectList></ProjectList>
      <SkillList></SkillList>
      <OtherProjects></OtherProjects>
      <Contact></Contact>
    </div>
  );
}

export default App;
