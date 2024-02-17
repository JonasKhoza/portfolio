import { useState } from "react";
import Navigation from "./Navigation";
import Aside from "./Aside";
import Footer from "./Footer";
import SideDrawerPortal from "./SideDrawerPortal";

function Layout(props) {
  const [isNotOpen, setIsNotOpen] = useState(true);
  function openHamburgerMenu() {
    setIsNotOpen((prev) => !prev);
  }
  return (
    <div style={{ height: "100%" }}>
      <Navigation isNotOpen={isNotOpen} openHamburgerMenu={openHamburgerMenu} />
      <SideDrawerPortal>
        <Aside isNotOpen={isNotOpen} openHamburgerMenu={openHamburgerMenu} />
      </SideDrawerPortal>
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
