

/* Positioned to hug the edges so they never sit on the hero copy. */
const SHAPES = [
  { type: "tri", x: "3%", y: "12%", size: 62, color: "teal", dur: 17, delay: 0, sm: false },
  { type: "cube", x: "62%", y: "10%", size: 44, color: "orange", dur: 21, delay: 2, sm: true },
  { type: "diamond", x: "70%", y: "92%", size: 34, color: "teal", dur: 15, delay: 1, sm: false },
  { type: "tri", x: "78%", y: "8%", size: 46, color: "orange", dur: 23, delay: 3, sm: true },
  { type: "cube", x: "88%", y: "62%", size: 52, color: "teal", dur: 19, delay: 1.5, sm: false },
  { type: "diamond", x: "94%", y: "16%", size: 36, color: "orange", dur: 25, delay: 0.5, sm: false },
  { type: "tri", x: "22%", y: "92%", size: 34, color: "teal", dur: 20, delay: 4, sm: true },
  { type: "cube", x: "50%", y: "95%", size: 28, color: "orange", dur: 16, delay: 2.5, sm: false },
  { type: "diamond", x: "8%", y: "84%", size: 30, color: "teal", dur: 22, delay: 3.5, sm: false },
] as const;


/** Deterministic pseudo-random so SSR and client markup match. */
function rand(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Round so SSR and client style strings serialize identically. */
const r = (n: number, p = 2) => Number(n.toFixed(p));

const MOTES = Array.from({ length: 44 }, (_, i) => ({
  x: r(rand(i + 1) * 100),
  y: r(rand(i + 51) * 100),
  size: r(1.5 + rand(i + 101) * 3.2),
  dur: r(16 + rand(i + 151) * 26),
  delay: r(rand(i + 201) * -30),
  dx: r((rand(i + 251) - 0.5) * 120),
  dy: r(-40 - rand(i + 301) * 140),
  teal: rand(i + 351) > 0.42,
  op: r(0.25 + rand(i + 401) * 0.5),
  hideSm: i > 21,
}));

const ORBS = Array.from({ length: 14 }, (_, i) => ({
  x: r(rand(i + 11) * 96 + 2),
  y: r(rand(i + 61) * 90 + 4),
  size: r(60 + rand(i + 111) * 150),
  dur: r(12 + rand(i + 161) * 16),
  delay: r(rand(i + 211) * -18),
  teal: rand(i + 261) > 0.5,
  hideSm: i > 6,
}));


const STREAKS = [
  { y: "22%", dur: 11, delay: 0, w: 240 },
  { y: "48%", dur: 15, delay: 5, w: 180 },
  { y: "71%", dur: 13, delay: 9, w: 300 },
  { y: "86%", dur: 17, delay: 3, w: 150 },
];

function Shape({ type, color }: { type: string; color: string }) {
  const stroke = color === "teal" ? "var(--brand-teal)" : "var(--brand-orange)";
  const common = {
    fill: `color-mix(in oklab, ${stroke} 12%, transparent)`,
    stroke,
    strokeWidth: 3,
    strokeLinejoin: "round" as const,
  };
  if (type === "tri") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,8 92,86 8,86" {...common} />
      </svg>
    );
  }
  if (type === "diamond") {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon points="50,6 94,50 50,94 6,50" {...common} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <polygon points="20,32 50,14 80,32 80,68 50,86 20,68" {...common} />
      <polyline points="20,32 50,50 80,32" fill="none" stroke={stroke} strokeWidth={3} />
      <line x1="50" y1="50" x2="50" y2="86" stroke={stroke} strokeWidth={3} />
    </svg>
  );
}


export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 30%, var(--background) 88%)",
        }}
      />

      {/* Layer 2 — soft glowing orbs */}
      {ORBS.map((o, i) => (
        <div
          key={`orb-${i}`}
          className={`absolute rounded-full blur-2xl ${o.hideSm ? "hidden md:block" : ""}`}
          style={{
            left: `${o.x}%`,
            top: `${o.y}%`,
            width: o.size,
            height: o.size,
            marginLeft: -o.size / 2,
            marginTop: -o.size / 2,
            background: `radial-gradient(circle, color-mix(in oklab, ${
              o.teal ? "var(--brand-teal)" : "var(--brand-amber)"
            } 22%, transparent) 0%, transparent 70%)`,
            animation: `orb-pulse ${o.dur}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}

      {/* Layer 1 — fine dust motes */}
      {MOTES.map((m, i) => (
        <span
          key={`mote-${i}`}
          className={`absolute rounded-full ${m.hideSm ? "hidden md:block" : ""}`}
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            opacity: m.op,
            background: m.teal ? "var(--brand-cyan)" : "var(--brand-amber)",
            boxShadow: `0 0 ${m.size * 4}px color-mix(in oklab, ${
              m.teal ? "var(--brand-cyan)" : "var(--brand-amber)"
            } 70%, transparent)`,
            ["--dx" as string]: `${m.dx}px`,
            ["--dy" as string]: `${m.dy}px`,
            animation: `mote-drift ${m.dur}s ease-in-out ${m.delay}s infinite`,
          }}
        />
      ))}

      {/* Layer 4 — data streaks */}
      {STREAKS.map((s, i) => (
        <span
          key={`streak-${i}`}
          className="absolute hidden h-px md:block"
          style={{
            top: s.y,
            left: 0,
            width: s.w,
            background:
              "linear-gradient(to right, transparent, color-mix(in oklab, var(--brand-cyan) 75%, transparent), transparent)",
            animation: `streak-sweep ${s.dur}s linear ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Globe lives in the hero so it scrolls away with it. */}

      {/* Layer 3 — wireframe shapes */}
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className={`pointer-events-auto absolute transition-transform duration-500 hover:scale-125 ${
            s.sm ? "hidden md:block" : ""
          }`}
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            ["--r" as string]: `${(i * 37) % 90}deg`,
            ["--dx" as string]: `${i % 2 ? 26 : -22}px`,
            ["--dy" as string]: `${-24 - (i % 3) * 12}px`,
            animation: `drift-y ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <Shape type={s.type} color={s.color} />
        </div>
      ))}
    </div>
  );
}
