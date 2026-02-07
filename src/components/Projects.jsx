import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects" id="projects">
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

      {/* SKILLS */}
      <div className="skills-section" id="skills">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-container">
          <span className="skill-pill">HTML</span>
          <span className="skill-pill">CSS</span>
          <span className="skill-pill">JavaScript</span>
          <span className="skill-pill">React.js</span>
          <span className="skill-pill">Java</span>
          <span className="skill-pill">C++</span>
          <span className="skill-pill">C</span>
          <span className="skill-pill">REST API</span>
          <span className="skill-pill">OOPS</span>
          <span className="skill-pill">GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
