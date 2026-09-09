import { motion } from "motion/react";
import { Youtube, Instagram, Linkedin, Twitter, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

function DiscordIcon(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.438 3c-.21.375-.455.88-.624 1.28a18.27 18.27 0 0 0-5.628 0A12.6 12.6 0 0 0 8.557 3a19.74 19.74 0 0 0-4.885 1.372C.567 8.98-.27 13.472.147 17.9a19.9 19.9 0 0 0 6.02 3.043c.485-.66.917-1.362 1.29-2.1a12.9 12.9 0 0 1-2.03-.977c.17-.125.337-.256.497-.39 3.92 1.81 8.16 1.81 12.03 0 .162.135.33.266.5.39-.646.383-1.328.71-2.033.978.372.737.803 1.439 1.29 2.099a19.85 19.85 0 0 0 6.023-3.043c.49-5.12-.838-9.575-3.417-13.531ZM8.02 15.203c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.952-2.42 2.157-2.42 1.204 0 2.178 1.087 2.157 2.42 0 1.333-.953 2.418-2.157 2.418Zm7.968 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.333.952-2.42 2.157-2.42 1.204 0 2.178 1.087 2.157 2.42 0 1.333-.953 2.418-2.157 2.418Z" />
    </svg>
  );
}

function PlayStoreIcon(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.6 1.84a1.2 1.2 0 0 0-.6 1.05v18.22a1.2 1.2 0 0 0 .6 1.05l10.03-10.16L3.6 1.84Zm11.4 8.03 2.86-2.9-9.9-5.62a1.2 1.2 0 0 0-.5-.15L15 9.87Zm0 4.26L5.56 22.8c.18-.01.35-.06.5-.15l9.9-5.63-2.96-3Zm1.44-1.46 3.36-1.91c.83-.47.83-1.65 0-2.13l-3.25-1.85-3.03 3.07 2.92 2.82Z" />
    </svg>
  );
}

type Social = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
};

export const SOCIALS: Social[] = [
  { label: "YouTube", href: "https://www.youtube.com/@NextribeStudios", Icon: Youtube },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/dev?id=5254004012582833225&hl=en_IN",
    Icon: PlayStoreIcon,
  },
  { label: "Discord", href: "https://discord.com/invite/yWfrc2Fb9d", Icon: DiscordIcon },
  { label: "Instagram", href: "https://www.instagram.com/nextribe_studios", Icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nextribe-studios",
    Icon: Linkedin,
  },
  { label: "X / Twitter", href: "https://x.com/", Icon: Twitter },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      {SOCIALS.map(({ label, href, Icon }) => (
        <li key={label}>
          <motion.a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-cyan/60 hover:text-cyan"
            whileHover={{
              scale: 1.12,
              rotate: [0, -8, 6, -3, 0],
              transition: { rotate: { duration: 0.5 }, scale: { duration: 0.2 } },
            }}
            whileTap={{ scale: 0.94 }}
          >
            <Icon className="h-[18px] w-[18px]" />
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
