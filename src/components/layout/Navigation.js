import { Link } from "react-router-dom";

import "./header.css";
function Navigation({ isNotOpen, openHamburgerMenu }) {
  return (
    <header className="main_header">
      <nav>
        <ul>
          <li>
            <Link to="https://jonaskhoza.github.io/portfolio/">Home</Link>
          </li>

          <li>
            <Link to="https://jonaskhoza.github.io/portfolio/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="https://jonaskhoza.github.io/portfolio/about">About</Link>
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
