import "./footer.css";
function Footer() {
  return (
    <footer>
      <address>
        <p className="author">
          <span>Designed and built by:</span>
          <cite className="author_name">
            &copy; Jonas Khoza <span> 2022</span>
          </cite>
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/jonassecossaj3"
              target="_blank"
              rel="noreferrer"
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JonasKhoza"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/message/4BAIQD2IBJ4KN1"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>
          </li>
          <li>
            <a
              href="mailto:jonaskhoza18@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              EMAIL
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonas-khoza-6a8b03224/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
}

export default Footer;
