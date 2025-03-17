import "../styles/About.css";
export const About = () => {
  return (
    <section className="aboutContainer" id="about">
      <div className="aboutContent">
        <h1>Hello, I'm Kesavan,</h1>
        <h1>Frontend Developer</h1>
        <p>
          I'm a passionate developer who loves building scalable and efficient
          solutions. Always exploring new technologies to create impactful
          digital experiences.
        </p>
      </div>
      <div className="aboutImage">
        <div className="aboutProfilePhoto">
          <img src="viewPhoto.jpeg" alt="pic"></img>
        </div>
      </div>
    </section>
  );
};
