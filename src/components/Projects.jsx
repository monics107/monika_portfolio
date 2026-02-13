import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects" id="projects">

      {/* Floating Bubbles Background */}
<div className="projects-bubbles">
  {Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 8 + 4;
    return (
      <span
        key={i}
        className="projects-bubble"
        style={{
          width: size,
          height: size,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDuration: 8 + Math.random() * 6 + "s",
        }}
      />
    );
  })}
</div>
 
      <h1 className="projects-heading">PROJECTS</h1>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-img">
            <img src="/brightsteps.png" alt="BrightSteps Project" />
            <a
              href="https://github.com/monics107/BrightSteps-landing-page"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>

          <h2>BRIGHTSTEPS | SCHOOL ERP</h2>
          <p className="project-date">June 2025 – September 2025</p>
          <p className="project-desc">
            Developed a responsive School ERP landing page using React.js with
            reusable components and modern UI patterns.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-img">
            <img src="/customify.png" alt="Customify Project" />
            <a
              href="https://github.com/yourusername/customify"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>

          <h2>CUSTOMIFY | SELF CUSTOMISATION APP</h2>
          <p className="project-date">Jan 2025 – May 2025</p>
          <p className="project-desc">
            Built an interactive product customisation application using HTML,
            CSS, and JavaScript with real-time updates.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-img">
            <img src="/calculator.png" alt="Calculator App" />
            <a
              href="https://github.com/monics107/calculator-monika"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>

          <h2>CALCULATOR APPLICATION</h2>
          <p className="project-date">2024</p>
          <p className="project-desc">
            Created a clean and functional calculator using HTML, CSS, and
            JavaScript.
          </p>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-img">
            <img src="/todo.png" alt="Todo App" />
            <a
              href="https://github.com/monics107/-To_Do_List-"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>

          <h2>TODO LIST APPLICATION</h2>
          <p className="project-date">2024</p>
          <p className="project-desc">
            Developed a to-do list app with task management and local storage
            support.
          </p>
        </div>
      </div>

    
      
    </section>
  );
};

export default Projects;
