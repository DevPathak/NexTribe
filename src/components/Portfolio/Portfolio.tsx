import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <div className="pf-head reveal">
        <div>
          <span className="stag">Selected Work</span>
          <h2 className="stitle">
            Games &amp; Apps<br />
            We're <span className="o">Proud Of</span>
          </h2>
        </div>
        <p className="ssub">A snapshot of what we've shipped. More always in the works.</p>
      </div>
      <div className="pf-grid">
        {/* Project 1 */}
        <div className="pfc c7 reveal">
          <div
            className="pf-thumb r169"
            style={{ background: "linear-gradient(135deg,#081a10,#0e3020)" }}
          >
            <div
              className="pf-gl"
              style={{
                background: "radial-gradient(circle at 30% 60%,rgba(62,201,130,0.3),transparent 60%)",
              }}
            ></div>
            <span className="pf-icon">🌿</span>
          </div>
          <div className="pf-meta">
            <div className="pf-cat">Mobile Game · Unity</div>
            <div className="pf-title">Verdant Run</div>
            <div className="pf-desc">
              Endless runner set in a procedurally generated forest. Hand-painted visuals, dynamic soundtrack, built for iOS &amp; Android.
            </div>
            <div className="pf-tags">
              <span className="pf-tag">Unity</span>
              <span className="pf-tag">iOS</span>
              <span className="pf-tag">Android</span>
              <span className="pf-tag">Procedural</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="pfc c5 reveal rd1">
          <div
            className="pf-thumb r43"
            style={{ background: "linear-gradient(135deg,#120a22,#281448)" }}
          >
            <div
              className="pf-gl"
              style={{
                background: "radial-gradient(circle at 60% 40%,rgba(140,80,220,0.4),transparent 60%)",
              }}
            ></div>
            <span className="pf-icon">⚔️</span>
          </div>
          <div className="pf-meta">
            <div className="pf-cat">Indie RPG · Unreal</div>
            <div className="pf-title">Hollow Sigil</div>
            <div className="pf-desc">
              Dark fantasy action RPG — hand-crafted levels, branching dialogue, and a score composed for every encounter.
            </div>
            <div className="pf-tags">
              <span className="pf-tag">Unreal 5</span>
              <span className="pf-tag">PC</span>
              <span className="pf-tag">RPG</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="pfc c6 reveal">
          <div
            className="pf-thumb r169"
            style={{ background: "linear-gradient(135deg,#0a1520,#0e3050)" }}
          >
            <div
              className="pf-gl"
              style={{
                background: "radial-gradient(circle at 50% 50%,rgba(62,140,201,0.35),transparent 60%)",
              }}
            ></div>
            <span className="pf-icon">📱</span>
          </div>
          <div className="pf-meta">
            <div className="pf-cat">Mobile App · Flutter</div>
            <div className="pf-title">Tidal Notes</div>
            <div className="pf-desc">
              Minimal journaling app with mood tracking — designed for calm, mindful daily habits.
            </div>
            <div className="pf-tags">
              <span className="pf-tag">Flutter</span>
              <span className="pf-tag">iOS</span>
              <span className="pf-tag">Android</span>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="pfc c6 reveal rd1">
          <div
            className="pf-thumb r169"
            style={{ background: "linear-gradient(135deg,#1a0c06,#3a1a08)" }}
          >
            <div
              className="pf-gl"
              style={{
                background: "radial-gradient(circle at 40% 50%,rgba(217,95,43,0.35),transparent 60%)",
              }}
            ></div>
            <span className="pf-icon">🧩</span>
          </div>
          <div className="pf-meta">
            <div className="pf-cat">Puzzle Game · Unity</div>
            <div className="pf-title">Cairn</div>
            <div className="pf-desc">
              Meditative stone-stacking puzzle game — 60 handcrafted levels, premium, zero ads.
            </div>
            <div className="pf-tags">
              <span className="pf-tag">Unity</span>
              <span className="pf-tag">Puzzle</span>
              <span className="pf-tag">Premium</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pf-cta reveal">
        <a href="#contact" className="btn-p" style={{ display: "inline-flex" }}>
          Have a Project? Let's Talk →
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
