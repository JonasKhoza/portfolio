import { Link, NavLink } from "react-router-dom";

import "./header.css";

function Aside({ isNotOpen, openHamburgerMenu }) {
  return (
    <aside className={isNotOpen ? "sideDrawer" : "sideDrawer active"}>
      <nav>
        <ul>
          <li onClick={openHamburgerMenu}>
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
          <li onClick={openHamburgerMenu}>
            <NavLink
              to="/portfolio/projects"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              end
            >
              Projects
            </NavLink>
          </li>
          <li onClick={openHamburgerMenu}>
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
    </aside>
  );
}

export default Aside;
