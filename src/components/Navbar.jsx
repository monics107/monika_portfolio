import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar">
      <span onClick={() => setActiveSection("home")}>Home</span>

      {/* About → scroll to Experience */}
      <span onClick={() => setActiveSection("experience")}>About</span>

      <span onClick={() => setActiveSection("projects")}>Projects</span>
      <span onClick={() => setActiveSection("coding")}>Coding</span>
    </nav>
  );
};

export default Navbar;
