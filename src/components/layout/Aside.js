import { Link } from "react-router-dom";

import "./header.css";

function Aside({ isNotOpen, openHamburgerMenu }) {
  return (
    <aside className={isNotOpen ? "sideDrawer" : "sideDrawer active"}>
      <nav>
        <ul>
          <li onClick={openHamburgerMenu}>
            <Link to="https://jonaskhoza.github.io/portfolio//">Home</Link>
          </li>
          <li onClick={openHamburgerMenu}>
            <Link to="https://jonaskhoza.github.io/portfolio//projects">
              Projects
            </Link>
          </li>
          <li onClick={openHamburgerMenu}>
            <Link to="https://jonaskhoza.github.io/portfolio//about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
