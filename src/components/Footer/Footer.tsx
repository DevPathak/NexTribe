import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from "react-icons/fa";
import {
  SiYoutube,
  SiInstagram,
  SiDiscord,
  SiLinkedin,
  SiGoogleplay
} from "react-icons/si";

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
            href="https://www.instagram.com/nextribe_studios/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <SiInstagram />
          </a>
          <a
            href="https://www.youtube.com/@NextribeStudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <SiYoutube />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a> */}
          <a
            href="https://www.linkedin.com/company/nextribe-studios/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://discord.gg/yWfrc2Fb9d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <SiDiscord />
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=5254004012582833225&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GooglePlay"
          >
            <SiGoogleplay />
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
