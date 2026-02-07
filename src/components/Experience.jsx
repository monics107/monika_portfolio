import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./experience.css";

export default function Experience() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const experience = [
    {
      id: 1,
      period: "June 2025 – September 2025",
      company: "BEAU ROI TECHNOLOGIES",
      role: "Frontend Developer Intern",
      points: [
        "Engineered a fully responsive School ERP landing page using React.js, JavaScript, HTML5, and CSS3.",
        "Translated Figma wireframes into production-ready UI components.",
        "Improved component performance by 20%."
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
        "Created Java games like Rock-Paper-Scissors & Tic Tac Toe.",
        "Applied OOP, loops, arrays, validations.",
        "Used Git & GitHub for structured commits."
      ],
      position: "right",
      color: "#E8A0BF"
    }
  ];

  const education = [
    {
      id: 1,
      period: "Grad: July 2027",
      institution: "RMK College of Engineering and Technology",
      degree: "B.E. CSE",
      location: "Puduvoyal, Tamil Nadu",
      extra: "CGPA: 8.14",
      position: "left",
      color: "#93DEFF"
    },
    {
      id: 2,
      period: "HSC – 2023",
      institution: "Government Girls Hr. Sec. School",
      degree: "Higher Secondary Certificate",
      location: "Uthukottai, Tamil Nadu",
      extra: "Percentage: 83.3%",
      position: "right",
      color: "#6E85B7"
    }
  ];

  return (
    <div className="timeline-container">

      {/* This title stays above the timeline */}
      <h2 className="section-title experience-title">Experience</h2>

      {/* Line STARTS below this title */}
      <div className="timeline-line"></div>

      {experience.map((item) => (
        <TimelineCard key={item.id} item={item} fadeUp={fadeUp} />
      ))}

      <h2 className="section-title education-title">Education</h2>

      {education.map((item) => (
        <TimelineCard key={item.id} item={item} fadeUp={fadeUp} />
      ))}

    </div>
  );
}

function TimelineCard({ item, fadeUp }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  if (inView) controls.start("visible");

  return (
    <div className={`timeline-item ${item.position}`} ref={ref}>
      <div className="timeline-dot" style={{ background: item.color }}></div>

      <motion.div
        className="timeline-card"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        <p className="period">{item.period}</p>

        <h3 className="title">
          {item.company || item.institution}{" "}
          {item.role && `| ${item.role}`}
        </h3>

        {item.degree && <p className="subtitle">{item.degree}</p>}
        {item.location && <p className="location">{item.location}</p>}
        {item.extra && <p className="extra">{item.extra}</p>}

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
