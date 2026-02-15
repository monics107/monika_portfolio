import { useState } from "react";
import { Code, Terminal, Zap, Coffee, Users } from "lucide-react";
import "./skills.css";

const skills = [
  {
    id: 1,
    level: "Advanced",
    title: "HTML & CSS",
    description: "Responsive layouts, animations, Flexbox, Grid",
    icon: <Code className="icon" />,
  },
  {
    id: 2,
    level: "Advanced",
    title: "JavaScript",
    description: "ES6+, DOM, async/await, APIs",
    icon: <Zap className="icon" />,
  },
  {
    id: 3,
    level: "Intermediate",
    title: "React.js",
    description: "Hooks, Components, State, Routing",
    icon: <Code className="icon" />,
  },
  {
    id: 4,
    level: "Intermediate",
    title: "UI / UX Design",
    description: "Figma, glassmorphism, modern UI",
    icon: <Users className="icon" />,
  },
  {
    id: 5,
    level: "Beginner",
    title: "Backend Basics",
    description: "Node.js, Express, REST APIs",
    icon: <Terminal className="icon" />,
  },
  {
    id: 6,
    level: "Tools",
    title: "Git & GitHub",
    description: "Version control, deployment",
    icon: <Coffee className="icon" />,
  },
];

export default function SkillsTimeline() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const MOBILE_LIMIT = 4;
  const ITEMS_PER_ROW = 3;
  const ROW_HEIGHT = 220;
  const rows = Math.ceil(skills.length / ITEMS_PER_ROW);

  const mobileSkills = showAllMobile
    ? skills
    : skills.slice(0, MOBILE_LIMIT);

  const getPosition = (idx) => {
    const row = Math.floor(idx / ITEMS_PER_ROW);
    const col = idx % ITEMS_PER_ROW;

    const xPositions = ["20%", "50%", "80%"];
    const y = row * ROW_HEIGHT + 120;

    const x =
      row % 2 === 0
        ? xPositions[col]
        : xPositions[ITEMS_PER_ROW - 1 - col];

    return { left: x, top: `${y}px` };
  };

  return (
    <section className="timeline-section" id="skills">
      <div className="container">
        <div className="timeline-header">
          <h2>My Skill Roadmap</h2>
          <p>"What I Work With"</p>
        </div>

        {/* Desktop Timeline */}
        <div
          className="timeline-desktop"
          style={{ height: `${rows * ROW_HEIGHT}px` }}
        >
          <svg
            viewBox={`0 0 1000 ${rows * ROW_HEIGHT}`}
            className="timeline-path"
          >
            <path
              d="M100,100 H900 C950,100 950,300 900,300 H100 C50,300 50,500 100,500 H900"
              className="timeline-background"
            />
            <path
              d="M100,100 H900 C950,100 950,300 900,300 H100 C50,300 50,500 100,500 H900"
              className="timeline-glow"
            />
          </svg>

          {skills.map((skill, idx) => (
            <div
              key={skill.id}
              className="timeline-node"
              style={getPosition(idx)}
            >
              <div className="node-icon">{skill.icon}</div>
              <div className="node-card">
                <div className="time">{skill.level}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="timeline-mobile">
          {mobileSkills.map((skill) => (
            <div key={skill.id} className="mobile-node">
              <span className="mobile-dot" />
              <div className="mobile-card">
                <span className="time">{skill.level}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}

          {skills.length > MOBILE_LIMIT && (
            <div className="mobile-button">
              <button onClick={() => setShowAllMobile((p) => !p)}>
                {showAllMobile ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="floating-skills-wrapper">
  <div className="floating-skills">

    <div className="float-card card1">
      <img src="/html.png" alt="HTML" />
    </div>

    <div className="float-card card2">
      <img src="/css.png" alt="CSS" />
    </div>

    <div className="float-card card3">
      <img src="/js.png" alt="JavaScript" />
    </div>

    <div className="float-card card4">
      <img src="/react.png" alt="React" />
    </div>

    <div className="float-card card5">
      <img src="/node.jpg" alt="Node.js" />
    </div>

    <div className="float-card card6">
      <img src="/java.png" alt="Java" />
    </div>

    <div className="float-card card7">
      <img src="/figma.png" alt="Figma" />
    </div>
    
    <div className="float-card card8">
      <img src="/vscode.png" alt="VS Code" />
    </div>

    <div className="float-card card9">
      <img src="/git.png" alt="Git" />
    </div>

    <div className="float-card card10">
      <img src="/github.jpg" alt="GitHub" />
    </div>
  <div className="float-card card11">
  <img src="/linkedin.jpg" alt="LinkedIn" />
</div>

<div className="float-card card12">
  <img src="/chatgpt.png" alt="ChatGPT" />
</div>
  </div>
</div>

    </section>
  );
}
