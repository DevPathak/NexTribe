import { motion } from "motion/react";
import { Globe } from "@/components/site/Globe";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const wiggle = {
  scale: 1.06,
  rotate: [0, -2.2, 2, -1.2, 0],
  transition: { rotate: { duration: 0.5 }, scale: { duration: 0.25 } },
};

export function Hero({ delay = 0 }: { delay?: number }) {
  return (
    <div id="home" className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 sm:px-8 lg:px-14">
      <Globe />
      <div className="w-full max-w-full lg:max-w-[58%]">
        <motion.p
          className="flex items-center gap-3 font-mono-ui text-[0.6rem] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.3em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay, ease }}
        >
          <span className="h-px w-6 shrink-0 bg-teal/60 sm:w-8" />
          <span className="min-w-0">Game &amp; App Studio · Hyderabad, India</span>
        </motion.p>

        <h1 className="mt-6 font-display font-bold leading-[0.95] tracking-tight sm:mt-7">
          <motion.span
            className="block text-amber text-glow-amber text-[clamp(2.1rem,8vw,5.2rem)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: delay + 0.15, ease }}
          >
            Games. Apps.
          </motion.span>
          <span className="relative block">
            <motion.span
              className="pointer-events-none absolute -left-8 -top-6 h-[9rem] w-[26rem] max-w-full rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 50%, color-mix(in oklab, var(--brand-cyan) 30%, transparent), transparent 70%)",
              }}
              initial={{ opacity: 0, x: -140 }}
              animate={{ opacity: [0, 1, 0], x: [-140, 260, 620] }}
              transition={{ duration: 1.6, delay: delay + 0.3, ease: "easeOut" }}
            />
            <motion.span
              className="block text-cyan text-glow-teal text-[clamp(2.1rem,8vw,5.2rem)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: delay + 0.35, ease }}
            >
              Immersive Digital Worlds.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.6, ease }}
        >
          NexTribe Studios is an independent game and app development studio — crafting
          immersive experiences from mobile games to full-scale interactive worlds.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.78, ease }}
        >
          <motion.a
            href="#work"
            whileHover={wiggle}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-teal px-6 py-3 font-mono-ui text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_0_0_0_transparent] hover:shadow-[0_0_28px_color-mix(in_oklab,var(--brand-teal)_55%,transparent)] sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Explore Our Work →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={wiggle}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-teal/50 px-6 py-3 font-mono-ui text-xs font-semibold uppercase tracking-[0.16em] text-cyan hover:bg-teal/10 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: delay + 1 }}
      >
        <span
          className="block h-8 w-px bg-teal/70 sm:h-10"
          style={{ animation: "scroll-cue 2.4s ease-in-out infinite" }}
        />
        <span className="font-mono-ui text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
          Scroll
        </span>
      </motion.div>
    </div>
  );
}
