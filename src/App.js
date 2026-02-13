import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Coding from "./components/Coding";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app-wrapper">
      <Navbar setActiveSection={setActiveSection} />

      <div className="section-container">
        {activeSection === "home" && (
          <Home setActiveSection={setActiveSection} />
        )}
        {activeSection === "projects" && <Projects />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "coding" && <Coding />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;