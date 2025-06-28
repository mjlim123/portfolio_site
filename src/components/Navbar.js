
import '../styles/Navbar.css'

export default function Navbar() {
    return (
    <header className="navbar">
      <div className="navbar-logo">Marcus Lim</div>
      <nav className="navbar-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
