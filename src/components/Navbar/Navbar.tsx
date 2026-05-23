import React, { useEffect, useState } from "react";
import logo from "../../assets/images/nextribe-logo.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <a href="/" className="nav-logo">
          <img src={logo} className="nav-logomark" alt="NexTribe Studios" />
          <div className="nav-wordmark">
            <span className="nav-wt">NEXTRIBE</span>
            <span className="nav-wb">Studios</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="/#about">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#portfolio">Work</a></li>
          <li><a href="/#privacy">Privacy</a></li>
          <li><a href="/#contact" className="nav-cta">Let's Talk</a></li>
        </ul>
        <button
          className="hamburger"
          id="ham"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mob-menu${mobileOpen ? " open" : ""}`} id="mobMenu">
        <button className="mob-close" id="mobClose" onClick={closeMobile}>
          ✕
        </button>
        <a href="/#about" className="mlink" onClick={closeMobile}>About</a>
        <a href="/#services" className="mlink" onClick={closeMobile}>Services</a>
        <a href="/#portfolio" className="mlink" onClick={closeMobile}>Work</a>
        <a href="/#privacy" className="mlink" onClick={closeMobile}>Privacy</a>
        <a href="/#contact" className="mlink" onClick={closeMobile}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
