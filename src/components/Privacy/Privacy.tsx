import React, { useState } from "react";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="privacy">
      <div className="priv-wrap">
        <span className="stag">Legal</span>
        <h2 className="stitle" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Privacy <span className="t">Policy</span>
        </h2>
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-faint)",
            marginBottom: "2.5rem",
            fontFamily: "'Rajdhani', sans-serif",
            letterSpacing: "0.08em",
          }}
        >
          Last updated: May 2025
        </p>

        {/* Always visible blocks */}
        <div className="priv-block">
          <h3>PRIVACY POLICY NEXTRIBE STUDIOS</h3>
          <p>
            At <strong>NexTribe Studios</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NexTribe Studios and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us from our Website.
          </p>
        </div>

        <div className="priv-block">
          <h3>Consent</h3>
          <p>
            We collect only information you voluntarily provide — such as your name and email when filling in our contact form. We do not collect sensitive personal data, and we do not automatically track you beyond basic anonymised analytics (page views, country of origin).
          </p>
        </div>

        {/* Expandable blocks */}
        <div className={`priv-hidden${expanded ? " expanded" : ""}`}>
          <div className="priv-block">
            <h3>Information we collect</h3>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
          </div>

          <div className="priv-block">
            <h3>How we use your information</h3>
            <p>
              We use the information we collect in various ways, including to: Provide, operate, and maintain our website. Improve, personalise, and expand our website. Understand and analyse how you use our website. Develop new products, services, features, and functionality. Communicate with you, either directly or through one of our partners.
            </p>
          </div>

          <div className="priv-block">
            <h3>GDPR Data Protection Rights</h3>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.
            </p>
          </div>

          <div className="priv-block">
            <p>
              <strong>
                By using our website, you hereby consent to our Terms and Conditions and agree to their terms.
              </strong>
            </p>
          </div>
        </div>

        {/* Toggle + Full Page Link */}
        <div className="priv-actions">
          <button
            className={`priv-toggle${expanded ? " expanded" : ""}`}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Show More"}
            <svg viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <Link to="/policy" className="priv-link">
            Read Full Privacy Policy
            <svg viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
