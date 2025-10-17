import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handlePrivacyClick = () => {
    navigate("/policy");
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__socials">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <button className="footer__privacy" onClick={handlePrivacyClick}>
          Privacy & Policy
        </button>

        <p className="footer__copyright">
          © {new Date().getFullYear()} NexTribe Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
