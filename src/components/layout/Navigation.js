import { Link } from "react-router-dom";

import "./header.css";
function Navigation({ isNotOpen, openHamburgerMenu }) {
  return (
    <header className="main_header">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Link
        href="#"
        className={isNotOpen ? "hamburger" : "hamburger active"}
        onClick={openHamburgerMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </header>
  );
}

export default Navigation;
