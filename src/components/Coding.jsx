import React, { useEffect, useRef } from "react";
import "./Coding.css";

export default function Coding() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = container.querySelectorAll(".coding-particle");

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach((p) => {
        const px = p.offsetLeft + p.offsetWidth / 2;
        const py = p.offsetTop + p.offsetHeight / 2;

        const dx = mouseX - px;
        const dy = mouseY - py;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          p.style.transform = `translate(${-dx * force * 0.15}px, ${-dy * force * 0.15}px)`;
        } else {
          p.style.transform = "translate(0,0)";
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="coding-section" ref={containerRef} id="coding">

      {/* PARTICLES */}
      <div className="coding-particles">
        {Array.from({ length: 90 }).map((_, i) => {
          const size = Math.random() * 3 + 2;
          return (
            <span
              key={i}
              className="coding-particle"
              style={{
                width: size,
                height: size,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDuration: 18 + Math.random() * 15 + "s",
              }}
            />
          );
        })}
      </div>

      {/* CONTENT */}
      <h1 className="coding-title">Competitive Coding</h1>

      <div className="coding-stats">
        <div>
          <h2>100+</h2>
          <p>GeeksForGeeks</p>
        </div>
        <div>
          <h2>40+</h2>
          <p>LeetCode</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>HackerRank</p>
        </div>
        <div>
          <h2>600+</h2>
          <p>Skillrack</p>
        </div>
      </div>

      <div className="coding-cards">
        <a href="https://www.geeksforgeeks.org/profile/monika2027" target="_blank" rel="noreferrer" className="coding-card">
          <img src="/gfg.png" alt="GFG" />
          <p>Visit my profile</p>
        </a>

        <a href="https://leetcode.com/u/monika2027/" target="_blank" rel="noreferrer" className="coding-card">
          <img src="/leetcode.png" alt="LeetCode" />
          <p>Visit my profile</p>
        </a>

        <a href="https://www.hackerrank.com/profile/monika2027" target="_blank" rel="noreferrer" className="coding-card">
          <img src="/hackerrank.png" alt="HackerRank" />
          <p>Visit my profile</p>
        </a>

        <a href="https://www.skillrack.com/faces/resume.xhtml?id=438756&key=efc61b5f6bc56a1439e3a8f64a92d0eb7f00c24a" target="_blank" rel="noreferrer" className="coding-card">
          <img src="/skillrack.jpg" alt="Skillrack" />
          <p>Visit my profile</p>
        </a>
      </div>

    </section>
  );
}
