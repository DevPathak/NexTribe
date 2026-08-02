import { motion, type Variants } from "motion/react";

/**
 * NexTribe crest, rebuilt as a layered SVG so every feather, shard and the
 * central chevron can be animated independently during the intro.
 */

type Piece = {
  id: string;
  /** rotation around the crest pivot, in degrees */
  angle: number;
  scale: number;
  tone: "teal" | "teal-deep";
};

const PIVOT_X = 100;
const PIVOT_Y = 152;

/** 7 teal feathers fanned out, plus 2 deeper shards tucked below. */
export const FEATHERS: Piece[] = [
  { id: "f-l3", angle: -84, scale: 0.72, tone: "teal-deep" },
  { id: "f-l2", angle: -58, scale: 0.86, tone: "teal" },
  { id: "f-l1", angle: -29, scale: 0.94, tone: "teal" },
  { id: "f-c", angle: 0, scale: 1, tone: "teal" },
  { id: "f-r1", angle: 29, scale: 0.94, tone: "teal" },
  { id: "f-r2", angle: 58, scale: 0.86, tone: "teal" },
  { id: "f-r3", angle: 84, scale: 0.72, tone: "teal-deep" },
];

/** Feather drawn pointing up from the pivot, with a quill slit cut out. */
const FEATHER_PATH =
  "M0,-118 C 12,-96 22,-70 24,-40 C 25,-24 22,-12 18,-2 " +
  "L 8,-22 L 11,4 L 0,-10 L -11,4 L -8,-22 L -18,-2 " +
  "C -22,-12 -25,-24 -24,-40 C -22,-70 -12,-96 0,-118 Z " +
  "M0,-98 L 6,-46 L 3,-24 L 0,-32 L -3,-24 L -6,-46 Z";

/** Lower angular shards that sit under the fan. */
const SHARD_LEFT = "M-46,-8 L-26,4 L-30,52 L-52,26 Z";
const SHARD_RIGHT = "M46,-8 L26,4 L30,52 L52,26 Z";

/** Orange chevron + split-tail arrow. */
const CHEVRON = "M0,-56 L58,2 L40,20 L0,-20 L-40,20 L-58,2 Z";
const ARROW =
  "M0,-14 L28,14 L28,58 L11,36 L11,68 L4,52 L0,66 L-4,52 L-11,68 L-11,36 L-28,58 L-28,14 Z";

const pieceVariants: Variants = {
  scattered: (i: number) => ({
    x: Math.cos((i / 7) * Math.PI * 2 + 0.6) * 460,
    y: Math.sin((i / 7) * Math.PI * 2 + 0.6) * 340 - 40,
    rotate: i % 2 === 0 ? -220 : 260,
    scale: 1.35,
    opacity: 0,
  }),
  assembled: (i: number) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.15,
      delay: 0.05 * i,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
  static: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
};

export function CrestLogo({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  const G = animated ? motion.g : "g";
  const anim = animated
    ? {
        variants: pieceVariants,
        initial: "scattered" as const,
        animate: "assembled" as const,
      }
    : {};


  return (
    <svg
      viewBox="0 0 200 210"
      className={className}
      role="img"
      aria-label="NexTribe Studios crest"
    >
      <defs>
        <linearGradient id="crest-teal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-cyan)" />
          <stop offset="100%" stopColor="var(--brand-teal-deep)" />
        </linearGradient>
        <linearGradient id="crest-teal-deep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-teal)" />
          <stop offset="100%" stopColor="var(--brand-teal-deep)" />
        </linearGradient>
        <linearGradient id="crest-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-amber)" />
          <stop offset="100%" stopColor="var(--brand-orange)" />
        </linearGradient>
      </defs>

      {FEATHERS.map((f, i) => (
        <G key={f.id} custom={i} {...anim}>
          <path
            d={FEATHER_PATH}
            fillRule="evenodd"
            fill={f.tone === "teal" ? "url(#crest-teal)" : "url(#crest-teal-deep)"}
            transform={`translate(${PIVOT_X} ${PIVOT_Y}) rotate(${f.angle}) scale(${f.scale})`}
          />
        </G>
      ))}

      <G custom={7} {...anim}>
        <path
          d={SHARD_LEFT}
          fill="url(#crest-teal-deep)"
          transform={`translate(${PIVOT_X} ${PIVOT_Y})`}
        />
      </G>
      <G custom={8} {...anim}>
        <path
          d={SHARD_RIGHT}
          fill="url(#crest-teal-deep)"
          transform={`translate(${PIVOT_X} ${PIVOT_Y})`}
        />
      </G>

      <G custom={9} {...anim}>
        <path
          d={CHEVRON}
          fill="url(#crest-orange)"
          transform={`translate(${PIVOT_X} ${PIVOT_Y})`}
        />
      </G>
      <G custom={10} {...anim}>
        <path
          d={ARROW}
          fill="url(#crest-orange)"
          transform={`translate(${PIVOT_X} ${PIVOT_Y})`}
        />
      </G>
    </svg>
  );
}
