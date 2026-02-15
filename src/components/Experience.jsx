import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./experience.css";

/* ===== CARD COMPONENT ===== */
function ExpCard({ item }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className={`exp-item exp-${item.position}`} ref={ref}>
      <div
        className="exp-dot"
        style={{ background: item.color }}
      ></div>

      <motion.div
        className="exp-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="exp-period">{item.period}</p>
        <h3 className="exp-heading">
          {item.company || item.institution} |{" "}
          {item.role || item.degree}
        </h3>

        {item.location && <p>{item.location}</p>}
        {item.extra && <p>{item.extra}</p>}

        {item.points && (
          <ul>
            {item.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

export default function Experience() {

  const experience = [
    {
      id: 1,
      period: "June 2025 – September 2025",
      company: "BEAU ROI TECHNOLOGIES",
      role: "Frontend Developer Intern",
      points: [
        "Engineered responsive School ERP landing page using React",
        "Converted Figma designs into UI components",
        "Improved component performance by 20%"
      ],
      position: "left",
      color: "#6CC4A1"
    },
    {
      id: 2,
      period: "June 2024 – July 2024",
      company: "INTERNPE",
      role: "Java Programming Intern",
      points: [
        "Created Java games Rock Paper Scissors & Tic Tac Toe",
        "Applied OOP concepts",
        "Used Git & GitHub"
      ],
      position: "right",
      color: "#E8A0BF"
    }
  ];

  const education = [
    {
      id: 1,
      period: "Grad: 2027",
      institution: "RMK College of Engineering",
      degree: "B.E CSE",
      location: "Tamil Nadu",
      extra: "CGPA: 8.14",
      position: "left",
      color: "#93DEFF"
    },
    {
      id: 2,
      period: "HSC – 2023",
      institution: "Govt Girls Hr Sec School",
      degree: "HSC",
      location: "Uthukottai",
      extra: "83.3%",
      position: "right",
      color: "#6E85B7"
    }
  ];

  return (
    <section className="exp-section">

      {/* Floating Bubbles Background */}
      <div className="exp-bubbles">
        {Array.from({ length: 50 }).map((_, i) => {
          const size = Math.random() * 8 + 4;
          return (
            <span
              key={i}
              className="exp-bubble"
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

      <div className="exp-container">

        <h2 className="exp-title">Experience</h2>

        <div className="exp-group">
          <div className="exp-line"></div>
          {experience.map(item => (
            <ExpCard key={item.id} item={item} />
          ))}
        </div>

        <h2 className="exp-title">Education</h2>

        <div className="exp-group">
          <div className="exp-line"></div>
          {education.map(item => (
            <ExpCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}