import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <h1>Let's have a chat!</h1>
      <address>
        <div>
          <ul>
            <li>
              <a href="https://www.facebook.com/jonassecossaj3" target="_blank">
                <img src="/images/social/facebook.png" alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <Link to="">
                <img src="/images/social/GitHub_Logo.png" alt="GitHub Icon" />
              </Link>
            </li>
            <li>
              <a href="https://wa.me/message/4BAIQD2IBJ4KN1" target="_blank">
                <img
                  src="/images/social/whatsapp.png"
                  alt="Whatsapp Icon"
                  className="last_img"
                />
              </a>
            </li>
            <li>
              <a href="mailto:jonaskhoza18@gmail.com" target="_blank">
                <img src="/images/social/gmail.png" alt="Gmail Icon" />
              </a>
            </li>
          </ul>
          <p className="author">
            &copy;{new Date().getFullYear()} -designed and built by
            <cite className="author_name">Jonas Khoza</cite>
          </p>
        </div>
      </address>
    </footer>
  );
}

export default Footer;
