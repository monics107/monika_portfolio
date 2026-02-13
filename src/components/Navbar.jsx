import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <span onClick={() => setActiveSection("home")}>Home</span>
        <span onClick={() => setActiveSection("experience")}>About</span>
        <span onClick={() => setActiveSection("projects")}>Projects</span>
        <span onClick={() => setActiveSection("coding")}>Coding</span>
        <span onClick={() => setActiveSection("skills")}>Skills</span>
      </div>
    </nav>
  );
};

export default Navbar;