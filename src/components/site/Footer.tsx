import { Link } from "@tanstack/react-router";
import { CrestLogo } from "@/components/brand/CrestLogo";
import { SocialLinks } from "@/components/site/SocialLinks";

const STUDIO = [
  { label: "About", href: "/#about" },
  { label: "Games & Apps", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

const LEGAL = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "Refund Policy", to: "/refunds" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-border/70 bg-background/70 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <a href="/#top" className="flex items-center gap-3">
              <CrestLogo className="h-9 w-9 shrink-0 drop-glow-teal" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-[0.16em] text-cyan">
                  NEXTRIBE
                </span>
                <span className="font-mono-ui text-[0.5rem] tracking-[0.42em] text-orange">
                  STUDIOS
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              An independent game and app development studio crafting immersive experiences —
              from mobile games to full-scale interactive worlds.
            </p>
            <p className="mt-4 font-mono-ui text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Hyderabad, India
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Studio">
            <h2 className="font-mono-ui text-[0.65rem] uppercase tracking-[0.32em] text-orange">
              Studio
            </h2>
            <ul className="mt-4 space-y-3">
              {STUDIO.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@nextribe.in"
                  className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                >
                  info@nextribe.in
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="font-mono-ui text-[0.65rem] uppercase tracking-[0.32em] text-orange">
              Legal
            </h2>
            <ul className="mt-4 space-y-3">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-ui text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            © {new Date().getFullYear()} NexTribe Studios. All rights reserved.
          </p>
          <p className="font-mono-ui text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            Made in <span className="text-orange">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
