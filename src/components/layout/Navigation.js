import { Link } from "react-router-dom";

import "./header.css";
function Navigation({ isNotOpen, openHamburgerMenu }) {
  return (
    <header className="main_header">
      <nav>
        <ul>
          <li>
            <Link to="/portfolio/">Home</Link>
          </li>

          <li>
            <Link to="/portfolio/projects">Projects</Link>
          </li>
          <li>
            <Link to="/portfolio/about">About</Link>
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
