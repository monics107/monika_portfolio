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
    </section>
  );
}
