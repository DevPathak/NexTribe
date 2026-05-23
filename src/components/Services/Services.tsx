import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="svc-head">
        <div className="reveal">
          <span className="stag">What We Do</span>
          <h2 className="stitle">
            Our <span className="t">Expertise</span>
          </h2>
        </div>
        <p className="ssub reveal rd1">
          End-to-end game and app development under one roof — from concept to live ops.
        </p>
      </div>
      <div className="svc-grid">
        {/* Card 01 */}
        <div className="svc-card hl reveal">
          <span className="svc-num">01</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
              <circle cx="9" cy="10" r="1.2" fill="#3ec9c9" stroke="none" />
              <circle cx="15" cy="10" r="1.2" fill="#3ec9c9" stroke="none" />
            </svg>
          </div>
          <h3>Game Development</h3>
          <p>
            2D and 3D games across mobile, PC, and console — built with Unity and Unreal Engine, from hyper-casual to narrative-rich indie titles.
          </p>
          <span className="svc-pill">Unity · Unreal · C#</span>
        </div>

        {/* Card 02 */}
        <div className="svc-card reveal rd1">
          <span className="svc-num">02</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
            </svg>
          </div>
          <h3>Mobile App Development</h3>
          <p>
            Native iOS and Android apps and cross-platform builds. Fast, smooth, and built to scale for real users.
          </p>
          <span className="svc-pill">iOS · Android · Flutter</span>
        </div>

        {/* Card 03 */}
        <div className="svc-card reveal rd2">
          <span className="svc-num">03</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h3>UI / UX Design</h3>
          <p>
            Game UI, HUD systems, menus, and app interfaces — designed for players and users first. Intuitive, beautiful, responsive.
          </p>
          <span className="svc-pill">Figma · Game UI</span>
        </div>

        {/* Card 04 */}
        <div className="svc-card reveal">
          <span className="svc-num">04</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <path d="M2 20h20M6 20V10l6-6 6 6v10" />
              <path d="M10 20v-5h4v5" />
            </svg>
          </div>
          <h3>Game Design &amp; Consulting</h3>
          <p>
            Core loops, progression systems, monetisation strategy. We help you design games that are fun to play and viable to ship.
          </p>
          <span className="svc-pill">GDD · Systems Design</span>
        </div>

        {/* Card 05 */}
        <div className="svc-card reveal rd1">
          <span className="svc-num">05</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
          </div>
          <h3>Publishing &amp; Launch Support</h3>
          <p>
            Store optimisation, launch strategy, store assets, press kits. We get your game live with the best possible first impression.
          </p>
          <span className="svc-pill">ASO · Marketing</span>
        </div>

        {/* Card 06 */}
        <div className="svc-card reveal rd2">
          <span className="svc-num">06</span>
          <div className="svc-icon">
            <svg viewBox="0 0 24 24">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <h3>Live Ops &amp; Maintenance</h3>
          <p>
            Post-launch updates, analytics, content drops, performance monitoring. We stay with our games long after launch day.
          </p>
          <span className="svc-pill">Analytics · Support</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
