import { motion } from "motion/react";
import { CrestLogo } from "@/components/brand/CrestLogo";

const RINGS = [
  { r: 196, dur: 46, dash: "" },
  { r: 156, dur: 34, dash: "4 10" },
  { r: 112, dur: 28, dash: "" },
];

const NODES = [
  { a: -35, r: 196, color: "orange", size: 7 },
  { a: 155, r: 196, color: "teal", size: 5 },
  { a: 40, r: 156, color: "teal", size: 6 },
  { a: 205, r: 156, color: "teal", size: 4 },
  { a: 100, r: 112, color: "orange", size: 5 },
];

function pos(a: number, r: number) {
  const rad = (a * Math.PI) / 180;
  return { x: 220 + Math.cos(rad) * r, y: 220 + Math.sin(rad) * r };
}

export function AboutOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <div
        className="absolute inset-[12%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-teal) 22%, transparent), transparent 70%)",
        }}
      />

      <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {RINGS.map((ring, i) => (
          <g
            key={ring.r}
            style={{
              transformOrigin: "220px 220px",
              animation: `spin-slow ${ring.dur}s linear infinite${i % 2 ? " reverse" : ""}`,
            }}
          >
            <circle
              cx="220"
              cy="220"
              r={ring.r}
              fill="none"
              stroke="color-mix(in oklab, var(--brand-teal) 30%, transparent)"
              strokeWidth="1"
              strokeDasharray={ring.dash || undefined}
            />
            <ellipse
              cx="220"
              cy="220"
              rx={ring.r}
              ry={ring.r * 0.42}
              fill="none"
              stroke="color-mix(in oklab, var(--brand-teal) 16%, transparent)"
              strokeWidth="1"
            />
          </g>
        ))}

        {NODES.map((n) => {
          const p = pos(n.a, n.r);
          const c = n.color === "teal" ? "var(--brand-cyan)" : "var(--brand-orange)";
          return (
            <g key={`${n.a}-${n.r}`}>
              <circle cx={p.x} cy={p.y} r={n.size * 2.6} fill={c} opacity="0.14" />
              <circle cx={p.x} cy={p.y} r={n.size} fill={c} />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <CrestLogo className="h-24 w-24 drop-glow-teal sm:h-28 sm:w-28" />
        <div className="text-center leading-none">
          <div className="font-display text-2xl font-bold tracking-[0.16em] text-cyan sm:text-3xl">
            NEXTRIBE
          </div>
          <div className="mt-1 font-mono-ui text-[0.6rem] tracking-[0.5em] text-orange sm:text-xs">
            STUDIOS
          </div>
        </div>
      </div>

      <motion.div
        className="absolute left-[3%] top-[62%] rounded-full border border-teal/40 bg-card/70 px-3 py-1.5 text-center backdrop-blur-sm"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="font-display text-sm font-bold tracking-widest text-cyan">HYD</div>
        <div className="font-mono-ui text-[0.5rem] tracking-[0.3em] text-muted-foreground">
          INDIA
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[26%] rounded-full border border-orange/40 bg-card/70 px-3 py-1.5 text-center backdrop-blur-sm"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="font-display text-sm font-bold tracking-widest text-amber">2025</div>
        <div className="font-mono-ui text-[0.5rem] tracking-[0.3em] text-muted-foreground">
          FOUNDED
        </div>
      </motion.div>
    </div>
  );
}
