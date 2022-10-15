import { Link } from "react-router-dom";

import "./header.css";

function Aside({ isNotOpen, openHamburgerMenu }) {
  return (
    <aside className={isNotOpen ? "sideDrawer" : "sideDrawer active"}>
      <nav>
        <ul>
          <li onClick={openHamburgerMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openHamburgerMenu}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={openHamburgerMenu}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
