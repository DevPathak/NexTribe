import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Apple, ArrowLeft, Gamepad2, Play } from "lucide-react";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Footer } from "@/components/site/Footer";
import { CrestLogo } from "@/components/brand/CrestLogo";
const trailerUrl = "/planked/i_want_to_make_an_ads_for_this.mp4";
const shot1Url = "/planked/Image_Sequence_005_0000.jpg";
const shot2Url = "/planked/Image_Sequence_006_0000.jpg";

export const Route = createFileRoute("/games/planked")({
  head: () => ({
    meta: [
      { title: "Planked! — Physics Puzzle Platformer by NexTribe Studios" },
      {
        name: "description",
        content:
          "Planked! is a physics-driven puzzle platformer from NexTribe Studios — unscrew planks, build contraptions and guide a furry hero home in limited moves.",
      },
      { property: "og:title", content: "Planked! — Physics Puzzle Platformer" },
      {
        property: "og:description",
        content:
          "Unscrew planks, topple contraptions and guide a furry hero home in limited moves. A NexTribe Studios title for iOS & Android.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/games/planked" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/games/planked" }],
  }),
  component: PlankedPage,
});

const FEATURES = [
  ["Physics First", "Every plank, screw and bounce is simulated — no two solutions look alike."],
  ["Limited Moves", "Each level gives you a handful of unscrews. Three stars need precision."],
  ["Hand-Drawn Worlds", "Sun-soaked farms, painted skies and a fuzzy hero with a lot of heart."],
  ["Built for Mobile", "Portrait-free, one-thumb play, tuned for iOS and Android."],
];

const SHOTS = [
  { src: shot1Url, caption: "Screw-and-plank contraptions" },
  { src: shot2Url, caption: "Limited moves, three-star runs" },
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function PlankedPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <AmbientBackground />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <CrestLogo className="h-8 w-8 shrink-0 drop-glow-teal" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-[0.16em] text-cyan">
              NEXTRIBE
            </span>
            <span className="font-mono-ui text-[0.5rem] tracking-[0.42em] text-orange">
              STUDIOS
            </span>
          </span>
        </Link>
        <a
          href="/#work"
          className="inline-flex items-center gap-2 font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cyan"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All games
        </a>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
        <motion.div {...fade}>
          <p className="font-mono-ui text-[0.7rem] uppercase tracking-[0.42em] text-orange">
            Puzzle Platformer · Unity
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,8vw,5rem)] font-bold uppercase leading-[0.98] tracking-tight text-foreground">
            Planked<span className="text-cyan">!</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A delightful, physics-driven puzzle platformer. Unscrew the right plank at the right
            moment, let gravity do the rest, and guide a charming furry character safely home
            across intricate wooden contraptions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Gamepad2 className="h-4 w-4" aria-hidden="true" />
              <Apple className="h-4 w-4" aria-hidden="true" />
              <Play className="h-4 w-4" aria-hidden="true" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {["Physics-Based", "Cute Character", "iOS & Android"].map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono-ui text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/dev?id=5254004012582833225&hl=en_IN"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-orange px-5 py-2.5 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
            >
              Get on Google Play
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-border px-5 py-2.5 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              Work with us
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-14 sm:px-8" {...fade}>
        <h2 className="font-mono-ui text-[0.7rem] uppercase tracking-[0.36em] text-cyan">
          Gameplay Trailer
        </h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 shadow-[0_0_60px_color-mix(in_oklab,var(--brand-teal)_18%,transparent)] backdrop-blur-sm">
          <video
            className="aspect-video w-full rounded-xl bg-black"
            src={trailerUrl}
            poster={shot1Url}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay
          />
        </div>
      </motion.section>

      <motion.section className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-14 sm:px-8" {...fade}>
        <h2 className="font-mono-ui text-[0.7rem] uppercase tracking-[0.36em] text-cyan">
          Screenshots
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className="group overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 backdrop-blur-sm transition-colors hover:border-teal/50"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={s.src}
                  alt={`Planked! gameplay — ${s.caption}`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24"
        {...fade}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,4.4vw,2.6rem)] font-bold uppercase leading-tight tracking-tight text-foreground">
              About the <span className="text-orange">Game</span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              <p>
                Planked! turns a simple idea — pull out a screw — into a playground of collapsing
                towers, swinging beams and rolling barrels. Every level is a small machine, and
                you are the one deciding which piece goes first.
              </p>
              <p>
                Levels are handcrafted around a strict move budget, so the difference between one
                star and three is reading the structure, not tapping faster. A gentle difficulty
                curve keeps the early farms welcoming while later contraptions get genuinely
                devious.
              </p>
              <p>
                Built in Unity by NexTribe Studios with hand-painted art, squishy character
                animation and a soundtrack that stays out of the way while you think.
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {FEATURES.map(([title, copy]) => (
              <li
                key={title}
                className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm"
              >
                <p className="font-display text-base font-bold uppercase tracking-[0.12em] text-cyan">
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
