import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hglow hg1"></div>
      <div className="hglow hg2"></div>
      <div className="hero-grid"></div>
      <div className="hero-pgrid"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">Game &amp; App Studio · Hyderabad, India</div>
        <h1 className="htitle">
          <span className="hero-warm">Games. Apps.</span><br />
          <span className="la">Immersive Digital Worlds.</span>
        </h1>
        <p className="hero-sub">
          NexTribe Studios is an independent game and app development studio — crafting immersive experiences from mobile games to full-scale interactive worlds.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn-p">Explore Our Work →</a>
          <a href="#contact" className="btn-o">Start a Project</a>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line"></div>
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
