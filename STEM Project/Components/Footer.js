import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <p>&copy; 2022 STEM Hub Albania. All rights reserved.</p>
          <div className="icons-container">
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                className="instagram-icon"
                icon={faInstagram}
                size="2x"
              />
            </a>
            <a
              href="https://www.facebook.com/albanianictacademy"
              target="_blank"
            >
              <FontAwesomeIcon
                className="facebook-icon"
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a href="https://albanianictacademy.com/" target="_blank">
              <FontAwesomeIcon
                className="google-icon"
                icon={faGoogle}
                size="2x"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/stem-albania/"
              target="_blank"
            >
              <FontAwesomeIcon
                className="linkedin-icon"
                icon={faLinkedin}
                size="2x"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
