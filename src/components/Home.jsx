import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      {/* FULL BACKGROUND VIDEO */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/tech.mp4" type="video/mp4" />
      </video>

      {/* Cognebula-style overlay */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <h4 className="tagline">WELCOME TO MY PORTFOLIO</h4>

        <h1 className="hero-title">
          Hi, I’m <span className="name">Monika</span>
        </h1>

        <h2 className="role">Front-End Developer</h2>

        <p className="description">
          Building modern, responsive and futuristic web experiences
          with clean UI and smooth interactions.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" className="btn primary">View Resume</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
