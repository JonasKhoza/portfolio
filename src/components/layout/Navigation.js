import { Link, NavLink } from "react-router-dom";

import "./header.css";
function Navigation({ isNotOpen, openHamburgerMenu }) {
  console.log(isNotOpen);
  return (
    <header className="main_header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio/projects"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio/about"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              About
            </NavLink>
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
