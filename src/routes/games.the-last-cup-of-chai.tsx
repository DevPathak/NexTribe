import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Coffee, Dices, Users, Shuffle } from "lucide-react";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Footer } from "@/components/site/Footer";
import { SocialLinks } from "@/components/site/SocialLinks";
import { HeaderCrest } from "@/components/brand/HeaderCrest";
import clip1 from "@/assets/chai-clip-1.mp4.asset.json";
import clip2 from "@/assets/chai-clip-2.mp4.asset.json";
import clip3 from "@/assets/chai-clip-3.mp4.asset.json";
import posterUrl from "@/assets/chai-poster.png";
import bannerUrl from "@/assets/chai-banner.png";
import stallUrl from "@/assets/chai-stall.png";

export const Route = createFileRoute("/games/the-last-cup-of-chai")({
  head: () => ({
    meta: [
      { title: "The Last Cup of Chai — Social Bluffing Game by NexTribe Studios" },
      {
        name: "description",
        content:
          "The Last Cup of Chai is a fast social bluffing party game for 2–8 players. Peek, steal, bluff and decide: drink a cup, or spill one. In development at NexTribe Studios.",
      },
      { property: "og:title", content: "The Last Cup of Chai — Know the Odds. Trust No One." },
      {
        property: "og:description",
        content:
          "A fast, social bluffing game where every cup could be your last. 2–8 players. In development at NexTribe Studios.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/games/the-last-cup-of-chai" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/games/the-last-cup-of-chai" }],
  }),
  component: ChaiPage,
});

const FEATURES = [
  {
    icon: Users,
    title: "Multiplayer",
    body: "Play with 2–8 players. Outsmart. Outbluff. Outlast.",
  },
  {
    icon: Dices,
    title: "Bluff & Strategy",
    body: "Every move counts. Every cup could be your last.",
  },
  {
    icon: Coffee,
    title: "Indian Vibes",
    body: "Authentic setting, characters and humour rooted in the chai adda.",
  },
  {
    icon: Shuffle,
    title: "Unpredictable",
    body: "No two matches are ever the same. Trust no one.",
  },
];

const CLIPS = [
  { src: clip2.url, caption: "Reading the table" },
  { src: clip3.url, caption: "One cup left" },
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function ChaiPage() {
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

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <motion.div {...fade}>
            <p className="font-mono-ui text-[0.7rem] uppercase tracking-[0.42em] text-orange">
              Social Bluffing · Party Game
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,7vw,4.4rem)] font-bold uppercase leading-[0.96] tracking-tight text-foreground">
              The Last Cup of <span className="text-orange">Chai</span>
            </h1>
            <p className="mt-3 font-mono-ui text-xs uppercase tracking-[0.24em] text-cyan">
              Know the Odds. Trust No One.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A fast, social bluffing game where every cup could be your last. Gather
              information, manipulate the table, bluff your friends, and decide how much you're
              willing to risk before someone has to drink.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-orange/50 bg-orange/10 px-2.5 py-1 font-mono-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-orange">
                In Development
              </span>
              {["Social Bluffing", "Party Game", "2–8 Players"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono-ui text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-full bg-orange px-5 py-2.5 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
              >
                Get updates
              </a>
              <a
                href="/#work"
                className="rounded-full border border-border px-5 py-2.5 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-cyan/60 hover:text-cyan"
              >
                More games
              </a>
            </div>
          </motion.div>

          <motion.figure
            className="group overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 shadow-[0_0_60px_color-mix(in_oklab,var(--brand-teal)_16%,transparent)] backdrop-blur-sm"
            {...fade}
          >
            <img
              src={posterUrl}
              alt="The Last Cup of Chai key art poster"
              width={1024}
              height={1536}
              className="max-h-[560px] w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.figure>
        </div>
      </section>

      {/* Trailer */}
      <motion.section
        className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-16 sm:px-8 lg:pt-24"
        {...fade}
      >
        <h2 className="font-mono-ui text-[0.7rem] uppercase tracking-[0.36em] text-cyan">
          First look
        </h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 shadow-[0_0_70px_color-mix(in_oklab,var(--brand-teal)_18%,transparent)] backdrop-blur-sm">
          <video
            src={clip1.url}
            poster={stallUrl}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="max-h-[70vh] w-full rounded-xl bg-black object-contain"
          />
        </div>
      </motion.section>

      {/* Extra clips */}
      <motion.section
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-10 sm:px-8"
        {...fade}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {CLIPS.map((c) => (
            <figure
              key={c.src}
              className="overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 backdrop-blur-sm transition-colors hover:border-teal/50"
            >
              <video
                src={c.src}
                muted
                loop
                playsInline
                controls
                className="w-full rounded-xl bg-black object-contain"
              />
              <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      {/* About */}
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
              <p className="font-mono-ui text-xs uppercase tracking-[0.24em] text-cyan">
                Trust nobody. Drink carefully.
              </p>
              <p>
                The Last Cup of Chai is a fast-paced social bluffing game built around one simple
                question: which cup is safe? Everyone knows how many cups are poisoned. Nobody
                knows which ones.
              </p>
              <p>
                Use cards to peek at cups, steal information, manipulate their hidden states,
                disrupt the turn order, and mess with your opponents. But eventually, your turn
                has to end with a choice: drink a cup — or spill one.
              </p>
              <p>
                Every decision creates information. Every confident claim could be a lie. And when
                the table gets smaller, the stakes get higher.
              </p>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-orange/40 bg-orange/10 text-orange">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-3 font-display text-base font-bold uppercase tracking-[0.12em] text-cyan">
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Art */}
      <motion.section
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8"
        {...fade}
      >
        <h2 className="font-mono-ui text-[0.7rem] uppercase tracking-[0.36em] text-cyan">
          Key art
        </h2>
        <div className="mt-4 grid gap-6">
          <figure className="group overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 backdrop-blur-sm transition-colors hover:border-teal/50">
            <div className="overflow-hidden rounded-xl">
              <img
                src={bannerUrl}
                alt="The Last Cup of Chai banner art — the table of players at a night tapri"
                loading="lazy"
                width={1920}
                height={812}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              Know the odds. Trust no one.
            </figcaption>
          </figure>
          <figure className="group overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-2 backdrop-blur-sm transition-colors hover:border-teal/50">
            <div className="overflow-hidden rounded-xl">
              <img
                src={stallUrl}
                alt="A rain-soaked chai stall at night, the setting of the game"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="px-2 py-3 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              The tapri where it all goes down.
            </figcaption>
          </figure>
        </div>
      </motion.section>

      {/* Dev note */}
      <motion.section
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8"
        {...fade}
      >
        <div className="rounded-2xl border border-border/80 bg-card/50 p-6 backdrop-blur-sm sm:p-8">
          <h2 className="font-display text-[clamp(1.4rem,4vw,2.2rem)] font-bold uppercase tracking-tight text-foreground">
            We're currently in <span className="text-orange">development</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Building the game from the ground up. More updates, gameplay and sneak peeks coming
            soon.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="font-mono-ui text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
              Follow us for updates
            </span>
            <SocialLinks />
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
