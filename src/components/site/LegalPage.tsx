import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Footer } from "@/components/site/Footer";
import { HeaderCrest } from "@/components/brand/HeaderCrest";

export function LegalPage({
  eyebrow = "Legal",
  title,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <AmbientBackground />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-6 sm:px-8">
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
        <Link
          to="/"
          className="font-mono-ui text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cyan"
        >
          ← Back
        </Link>
      </header>

      <article className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-8 sm:px-8">
        <p className="font-mono-ui text-[0.7rem] uppercase tracking-[0.42em] text-orange">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.4rem)] font-bold uppercase leading-[1.05] tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 font-mono-ui text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          Last updated: {updated}
        </p>

        <div className="mt-10 space-y-8 rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm sm:p-9">
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold uppercase tracking-[0.16em] text-cyan sm:text-xl">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
        {children}
      </div>
    </section>
  );
}
