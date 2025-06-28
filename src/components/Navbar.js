
import '../styles/Navbar.css'

export default function Navbar() {
    return (
    <header className="navbar">
      <a href="#top"><div className="navbar-logo">Marcus Lim</div></a>
      <nav className="navbar-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
