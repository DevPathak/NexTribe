import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Apple, ArrowUpRight, Gamepad2, Monitor, Play } from "lucide-react";
import type { ReactNode } from "react";
import type { Game, Platform } from "@/data/games";

const PLATFORM_ICON: Record<Platform, typeof Apple> = {
  unity: Gamepad2,
  apple: Apple,
  play: Play,
  steam: Monitor,
  xbox: Gamepad2,
  ps: Gamepad2,
};

export function GameCard({ game, index }: { game: Game; index: number }) {
  const body = (
    <>
      <div className="relative m-2 overflow-hidden rounded-xl">
        <img
          src={game.cover}
          alt={`${game.title} key art`}
          loading="lazy"
          width={1024}
          height={640}
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-60"
        />
        <span className="absolute left-3 top-3 rounded-md border border-teal/40 bg-background/80 px-2.5 py-1 font-mono-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cyan backdrop-blur-sm">
          {game.status}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <p className="min-w-0 truncate font-mono-ui text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-orange sm:text-xs">
            {game.category} · {game.engine}
          </p>
          <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
            {game.platforms.map((p, i) => {
              const Icon = PLATFORM_ICON[p];
              return <Icon key={`${p}-${i}`} className="h-4 w-4" aria-hidden="true" />;
            })}
          </div>
        </div>

        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
          {game.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{game.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {game.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono-ui text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        {game.to && (
          <span className="mt-5 inline-flex items-center gap-2 font-mono-ui text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan">
            View project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm transition-shadow duration-300 hover:border-teal/50 hover:shadow-[0_0_44px_color-mix(in_oklab,var(--brand-teal)_22%,transparent)]"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.08 * index, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      {game.to ? (
        <Link to={game.to} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/60">
          {body as ReactNode}
        </Link>
      ) : (
        body
      )}
    </motion.article>
  );
}
