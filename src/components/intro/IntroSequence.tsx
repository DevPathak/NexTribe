import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CrestLogo } from "@/components/brand/CrestLogo";
import { Wordmark } from "@/components/brand/Wordmark";

/**
 * Stage 1-2 of the intro: feathers swirl in from off-screen, lock into the
 * crest, then the whole lockup shrinks toward the navbar before handing off.
 */
export function IntroSequence({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"assemble" | "handoff">("assemble");

  useEffect(() => {
    const toHandoff = window.setTimeout(() => setPhase("handoff"), 2600);
    const finish = window.setTimeout(onDone, 3900);
    const skip = () => {
      window.clearTimeout(toHandoff);
      window.clearTimeout(finish);
      onDone();
    };
    window.addEventListener("wheel", skip, { passive: true, once: true });
    window.addEventListener("pointerdown", skip, { once: true });
    return () => {
      window.clearTimeout(toHandoff);
      window.clearTimeout(finish);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-tech-grid opacity-40" />
        <motion.div
          className="pointer-events-none absolute h-[70vmin] w-[70vmin] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand-orange) 32%, transparent) 0%, transparent 62%)",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0, 0.9, 0.55], scale: [0.4, 0.6, 1.15, 1] }}
          transition={{ duration: 2.8, times: [0, 0.5, 0.72, 1] }}
        />

        <motion.div
          className="relative flex flex-col items-center"
          animate={
            phase === "handoff"
              ? { scale: 0.16, y: "-38vh", x: "-40vw", opacity: 0 }
              : { scale: 1, y: 0, x: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div className="drop-glow-teal">
            <CrestLogo animated className="h-[34vmin] w-[34vmin]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          >
            <Wordmark className="mt-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
