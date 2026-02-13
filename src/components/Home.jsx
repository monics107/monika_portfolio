import "./Home.css";
import { useEffect, useState } from "react";

const BUBBLE_COUNT = 80;

const Home = ({ setActiveSection }) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: BUBBLE_COUNT }).map(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = 4 + Math.random() * 6;
      const duration = 8 + Math.random() * 6;
      const delay = Math.random() * 5;

      return { x, y, size, duration, delay };
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <section className="hero">
      <div className="bubble-container">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: b.x,
              top: b.y,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content hero-flex">
        <div className="hero-image">
          <img src="/girl.png" alt="girl illustration" />
        </div>

        <div className="hero-text">
          <h4 className="tagline">WELCOME TO MY PORTFOLIO</h4>

          <h1 className="hero-title">
            Hi, I’m <span className="name">Monika</span>
          </h1>

          <h2 className="role">Front-End Developer</h2>

          <p className="description">
            Building modern, responsive and futuristic web experiences.
          </p>

          <div className="buttons">
            <a
              href="/monika_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn primary">View Resume</button>
            </a>

            <button
              className="btn outline"
              onClick={() => setActiveSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;