import React from "react";
import logo from "../../assets/images/nextribe-logo.png";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="ab-layout">
        <div className="ab-visual">
          <div className="ab-ring">
            <img src={logo} className="ab-logo" alt="NexTribe Studios" style={{ objectFit: "contain" }} />
            <div className="ab-badge">
              <span className="ab-bv">2025</span>
              <span className="ab-bl">Founded</span>
            </div>
            <div className="ab-badge">
              <span className="ab-bv">HYD</span>
              <span className="ab-bl">India</span>
            </div>
          </div>
        </div>
        <div className="reveal">
          <span className="stag">About the Studio</span>
          <h2 className="stitle">
            Small Team.<br />
            <span className="t">Big Worlds.</span>
          </h2>
          <p className="ssub">
            NexTribe Studios is an independent game and app development studio based in Hyderabad, India. We build experiences that players and users remember — one mechanic, one pixel, one interaction at a time.
          </p>
          <div className="ab-vals">
            <div className="av">
              <div className="av-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="av-title">Craft-First Development</div>
                <div className="av-desc">
                  We don't ship what we wouldn't play. Every game is built with obsessive attention to feel, performance, and player experience.
                </div>
              </div>
            </div>
            <div className="av">
              <div className="av-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="av-title">Indie Spirit, Pro Polish</div>
                <div className="av-desc">
                  The creative freedom of an indie studio combined with the delivery discipline of a seasoned dev team.
                </div>
              </div>
            </div>
            <div className="av">
              <div className="av-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <div className="av-title">Player-Centric Always</div>
                <div className="av-desc">
                  From early playtests to post-launch live ops — we build for and with our community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
