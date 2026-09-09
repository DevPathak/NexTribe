import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import poster from "@/assets/chai-poster.png.asset.json";

const TAGS = ["Social Bluffing", "Party Game", "2–8 Players"];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function ChaiSpotlight() {
  return (
    <section id="chai" className="relative z-10 w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/50 p-6 backdrop-blur-sm sm:p-10"
          {...fade}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-teal/15 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <p className="flex items-center gap-2 font-mono-ui text-[0.65rem] uppercase tracking-[0.36em] text-cyan">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
                Brewing something new
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.96] tracking-tight text-foreground">
                The Last Cup of <span className="text-orange">Chai</span>
              </h2>

              <p className="mt-3 font-mono-ui text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Know the Odds. Trust No One.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                A fast, social bluffing game where every cup could be your last. Gather
                information, manipulate the table, bluff your friends, and decide how much
                you're willing to risk before someone has to drink.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-orange/50 bg-orange/10 px-2.5 py-1 font-mono-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-orange">
                  In Development
                </span>
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono-ui text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to="/games/the-last-cup-of-chai"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
              >
                Explore the game
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <Link
              to="/games/the-last-cup-of-chai"
              className="group block overflow-hidden rounded-2xl border border-border/80 bg-background/40 p-2 shadow-[0_0_70px_color-mix(in_oklab,var(--brand-orange,#e07b39)_16%,transparent)]"
            >
              <img
                src={poster.url}
                alt="The Last Cup of Chai key art — players bluffing over cups of chai at a night-time tapri"
                loading="lazy"
                width={1024}
                height={1536}
                className="max-h-[520px] w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
