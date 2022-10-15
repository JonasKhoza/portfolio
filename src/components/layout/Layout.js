import { useState } from "react";
import Navigation from "./Navigation";
import Aside from "./Aside";
import Footer from "./Footer";

function Layout(props) {
  const [isNotOpen, setIsNotOpen] = useState(true);
  function openHamburgerMenu() {
    setIsNotOpen((prev) => !prev);
  }
  return (
    <div style={{ height: "100%" }}>
      <Navigation isNotOpen={isNotOpen} openHamburgerMenu={openHamburgerMenu} />
      <Aside isNotOpen={isNotOpen} openHamburgerMenu={openHamburgerMenu} />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
