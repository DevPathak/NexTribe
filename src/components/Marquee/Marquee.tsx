import React from "react";

const items = [
  "Game Development",
  "Unity & Unreal Engine",
  "Mobile Apps",
  "iOS & Android",
  "UI / UX Design",
  "Indie Spirit",
  "Made in India",
];

const Marquee: React.FC = () => {
  // Duplicate items for seamless infinite scroll
  const track = [...items, ...items];

  return (
    <div className="mq-wrap" aria-hidden="true">
      <div className="mq-track">
        {track.map((item, i) => (
          <span className="mq-item" key={i}>
            {item} <span className="mdot"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
