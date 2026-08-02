import { motion } from "motion/react";
import { Gem, Sparkles, Users } from "lucide-react";
import { AboutOrbit } from "@/components/site/AboutOrbit";
import { TickerStrip } from "@/components/site/TickerStrip";

const PILLARS = [
  {
    icon: Gem,
    title: "Craft-First Development",
    body: "We don't ship what we wouldn't play. Every game is built with obsessive attention to feel, performance, and player experience.",
  },
  {
    icon: Sparkles,
    title: "Indie Spirit, Pro Polish",
    body: "The creative freedom of an indie studio combined with the delivery discipline of a seasoned dev team.",
  },
  {
    icon: Users,
    title: "Player-Centric Always",
    body: "From early playtests to post-launch live ops — we build for and with our community.",
  },
];

const rise = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

export function About() {
  return (
    <section id="about" className="relative z-10 w-full scroll-mt-24">
      <TickerStrip />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:py-28">
        <motion.div {...rise} transition={{ duration: 0.8, ease: "easeOut" }}>
          <AboutOrbit />
        </motion.div>

        <motion.div {...rise} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}>
          <p className="flex items-center gap-3 font-mono-ui text-[0.6rem] uppercase tracking-[0.3em] text-orange sm:text-xs">
            <span className="h-px w-6 bg-orange/60" />
            About the Studio
          </p>

          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98] tracking-tight">
            <span className="block text-foreground">Small Team.</span>
            <span className="block text-cyan text-glow-teal">Big Worlds.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            NexTribe Studios is an independent game and app development studio based in
            Hyderabad, India. We build experiences that players and users remember — one
            mechanic, one pixel, one intersection at a time.
          </p>

          <ul className="mt-10 space-y-6">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-4"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: "easeOut" }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-teal/35 bg-teal/10 text-cyan">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono-ui text-sm font-semibold tracking-wide text-foreground">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
