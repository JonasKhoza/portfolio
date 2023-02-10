import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <address>
        <p className="author">
          &copy;{new Date().getFullYear()} -designed and built by
          <cite className="author_name">Jonas Khoza</cite>
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/jonassecossaj3"
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JonasKhoza"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/message/4BAIQD2IBJ4KN1"
              target="_blank"
              rel="noreferrer"
            >
              whatsapp
            </a>
          </li>
          <li>
            <a
              href="mailto:jonaskhoza18@gmail.com"
              target="_self"
              rel="noreferrer"
            >
              email
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
}

export default Footer;
