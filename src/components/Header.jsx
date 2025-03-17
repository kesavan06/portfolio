import "../styles/Header.css";

export const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="title">
          <h2>Portfolio</h2>
        </div>
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#product">
            <li>Projects</li>
          </a>
          <a href="#skill">
            <li>Skills</li>
          </a>
          <a href="#otherProject">
            <li>Other Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </header>
    </>
  );
};
