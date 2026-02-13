import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./experience.css";

/* ===== Timeline Card ===== */
function TimelineCard({ item }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className={`timeline-item ${item.position}`} ref={ref}>
      <div
        className="timeline-dot"
        style={{ background: item.color }}
      ></div>

      <motion.div
        className="timeline-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="period">{item.period}</p>
        <h3 className="title">
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
  const [stars, setStars] = useState([]);

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

  /* Floating Stars */
  useEffect(() => {
    const arr = Array.from({ length: 60 }).map(() => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: 2 + Math.random() * 3,
      duration: 5 + Math.random() * 6
    }));
    setStars(arr);
  }, []);

  return (
    <section className="experience-hero">
      {/* STARS */}
      <div className="stars-container">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDuration: `${s.duration}s`
            }}
          />
        ))}
      </div>

      <div className="timeline-container">

  {/* EXPERIENCE */}
  <h2 className="section-title">Experience</h2>

  <div className="timeline-wrapper">
    <div className="timeline-line"></div>

    {experience.map(item => (
      <TimelineCard key={item.id} item={item} />
    ))}
  </div>

  {/* EDUCATION */}
  <h2 className="section-title">Education</h2>

  <div className="timeline-wrapper">
    <div className="timeline-line"></div>

    {education.map(item => (
      <TimelineCard key={item.id} item={item} />
    ))}
  </div>

</div>

    </section>
  );
}
