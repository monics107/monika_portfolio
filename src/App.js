import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Coding from "./components/Coding";  // <-- ADD THIS

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app-wrapper">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <Home />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "experience" && <Experience />}
      {activeSection === "coding" && <Coding />}   {/* <-- ADD THIS */}
    </div>
  );
}

export default App;
