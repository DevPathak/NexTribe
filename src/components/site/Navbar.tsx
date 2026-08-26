import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CrestLogo } from "@/components/brand/CrestLogo";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Privacy", href: "/policy" },
];

const wiggle = {
  scale: 1.07,
  rotate: [0, -2.5, 2, -1, 0],
  transition: { rotate: { duration: 0.5 }, scale: { duration: 0.25 } },
};

export function Navbar({ delay = 0 }: { delay?: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 transition-colors duration-300 sm:px-8 sm:py-5 lg:px-14 ${
        scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-md" : ""
      }`}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <a href="#top" className="flex min-w-0 items-center gap-3">
        <CrestLogo className="h-8 w-8 shrink-0 drop-glow-teal sm:h-9 sm:w-9" />
        <span className="flex min-w-0 flex-col leading-none">
          <span className="truncate font-display text-lg font-bold tracking-[0.16em] text-cyan sm:text-xl">
            NEXTRIBE
          </span>
          <span className="truncate font-mono-ui text-[0.5rem] tracking-[0.42em] text-orange sm:text-[0.55rem]">
            STUDIOS
          </span>
        </span>
      </a>

      <nav className="flex shrink-0 items-center gap-5 lg:gap-9">
        <ul className="hidden items-center gap-5 md:flex lg:gap-9">
          {LINKS.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.12 + i * 0.08 }}
            >
              <a
                href={l.href}
                className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cyan lg:text-sm"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="rounded-full bg-orange px-4 py-2 font-mono-ui text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground sm:px-5 sm:text-xs"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.45 }}
          whileHover={wiggle}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </nav>
    </motion.header>
  );
}
