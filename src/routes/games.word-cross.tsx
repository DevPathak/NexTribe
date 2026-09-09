import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Apple, ArrowLeft, Gamepad2, Play } from "lucide-react";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Footer } from "@/components/site/Footer";
import { HeaderCrest } from "@/components/brand/HeaderCrest";
import shot1 from "@/assets/wordcross-shot-1.png.asset.json";
import astroloop from "@/assets/astroloop-promo.png.asset.json";

export const Route = createFileRoute("/games/word-cross")({
  head: () => ({
    meta: [
      { title: "Word Cross — Jungle Word Puzzle by NexTribe Studios" },
      {
        name: "description",
        content:
          "Word Cross is a tranquil jungle-themed word puzzle from NexTribe Studios — connect letters, fill crossword grids and unlock over 500 levels on iOS and Android.",
      },
      { property: "og:title", content: "Word Cross — Jungle Word Puzzle" },
      {
        property: "og:description",
        content:
          "Relax, solve and unleash your word power across 500+ jungle levels. A NexTribe Studios title for iOS & Android.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/games/word-cross" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/games/word-cross" }],
  }),
  component: WordCrossPage,
});

const FEATURES = [
  ["500+ Levels", "A steady climb from three-letter warmups to dense crossword grids."],
  ["Swipe to Solve", "Connect letters on the wheel and watch words snap into the board."],
  ["Jungle Atmosphere", "Painted temples, drifting butterflies and a calm ambient score."],
  ["Play Anywhere", "One-handed, offline-friendly, tuned for iOS and Android."],
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function WordCrossPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <AmbientBackground />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <HeaderCrest className="h-8 w-8 shrink-0" />
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <motion.div {...fade}>
            <p className="font-mono-ui text-[0.7rem] uppercase tracking-[0.42em] text-orange">
              Word Puzzle · Unity
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,7.5vw,4.6rem)] font-bold uppercase leading-[0.98] tracking-tight text-foreground">
              Word <span className="text-cyan">Cross</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Discover the jungle's secret words. Swipe letters, fill the crossword grid and
              uncover hidden bonus words in a lush, hand-painted temple world built for calm,
              satisfying play.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Gamepad2 className="h-4 w-4" aria-hidden="true" />
                <Apple className="h-4 w-4" aria-hidden="true" />
                <Play className="h-4 w-4" aria-hidden="true" />
              </div>
              <ul className="flex flex-wrap gap-2">
                {["Word Puzzle", "Jungle Theme", "iOS & Android"].map((t) => (
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

          <motion.figure
            className="group overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 shadow-[0_0_60px_color-mix(in_oklab,var(--brand-teal)_18%,transparent)] backdrop-blur-sm"
            {...fade}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={shot1.url}
                alt="Word Cross key art — jungle temple crossword grid with letter wheel"
                width={1024}
                height={576}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Relax. Solve. Unleash your word power.
            </figcaption>
          </motion.figure>
        </div>
      </section>

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
                Word Cross pairs a classic crossword grid with a swipeable letter wheel. Every
                board is a small discovery: find the listed words, then keep swiping to unearth
                bonus finds that stock your vocabulary jar.
              </p>
              <p>
                Levels are grouped into jungle chapters that gradually widen the wheel and tighten
                the grid, so progress feels earned without ever turning stressful. Hints stay
                generous and there is no timer — the game is designed to be a wind-down, not a
                race.
              </p>
              <p>
                Built in Unity by NexTribe Studios with illustrated backdrops, soft ambient audio
                and offline play for iOS and Android.
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

      <motion.section
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8"
        {...fade}
      >
        <h2 className="font-mono-ui text-[0.7rem] uppercase tracking-[0.36em] text-cyan">
          More from the studio
        </h2>
        <figure className="group mt-4 overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 backdrop-blur-sm transition-colors hover:border-teal/50">
          <div className="overflow-hidden rounded-xl">
            <img
              src={astroloop.url}
              alt="Astroloop: Beat in Motion key art — neon rhythm rings in deep space"
              loading="lazy"
              width={1024}
              height={576}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
            Astroloop: Beat in Motion — rhythm survival, in development
          </figcaption>
        </figure>
      </motion.section>

      <Footer />
    </main>
  );
}
