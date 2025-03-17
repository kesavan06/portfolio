import "../styles/ProjectButton.css";

export const ProjectButton = ({ value, index, setProjectIndex, isActive }) => {
  return (
    <button
      onClick={() => setProjectIndex(index)}
      className={`projectbtn ${isActive ? "active" : ""}`}
    >
      {value}
    </button>
  );
};
