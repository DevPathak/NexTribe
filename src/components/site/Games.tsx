import { motion } from "motion/react";
import { GAMES } from "@/data/games";
import { GameCard } from "@/components/site/GameCard";

export function Games() {
  return (
    <section id="work" className="relative z-10 w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <motion.h2
          className="font-display text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold uppercase leading-[1.02] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Games &amp; Apps We're <span className="text-orange">Proud Of</span>.
        </motion.h2>

        <motion.p
          className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Every NexTribe project is built with passion, crafting unique and memorable
          experiences. A curated showcase of our launched titles, a testament to our
          craftsmanship and creativity. More worlds are always in development, waiting to be
          explored.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          {GAMES.map((game, i) => (
            <GameCard key={game.slug} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
