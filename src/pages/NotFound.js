import { Link } from "react-router-dom";

import classes from "./styles/not_found.module.css";
function NotFound() {
  return (
    <div className={classes.not_found}>
      <div className={classes.redirect_info}>
        <h1>Sorry</h1>
        <h2>I couldn't find that page</h2>
        <p className={classes.redirect_button}>
          Try going back to the
          <Link to="/portfolio" className={classes.home_link}>
            Home
          </Link>
          page
        </p>
      </div>
      <div className={classes.what_I_do}>
        <p>Coding is fun 😊</p>
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/developer/developer-working-on-laptop-4550336-3779144.webp"
          }
          className={classes.smaller_screen_img}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + "/images/developer/download (2).png"}
          className={classes.large_screen_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default NotFound;
