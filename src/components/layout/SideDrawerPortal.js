import ReactDOM from "react-dom";

const SideDrawerPortal = ({ children }) => {
  const portalRoot = document.getElementById("sidedrawer-root");

  return ReactDOM.createPortal(children, portalRoot);
};

export default SideDrawerPortal;
