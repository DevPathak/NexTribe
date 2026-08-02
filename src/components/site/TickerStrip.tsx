const ITEMS = [
  "Game Development",
  "Unity & Unreal Engine",
  "Mobile Apps",
  "iOS & Android",
  "UI / UX Design",
  "Indie Spirit",
  "Made in India",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
      style={{ animation: "marquee 34s linear infinite" }}
    >
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap px-8">
          <span className="font-mono-ui text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            {item}
          </span>
          <span className="block h-1 w-1 rotate-45 bg-orange" />
        </li>
      ))}
    </ul>
  );
}

export function TickerStrip() {
  return (
    <div className="group relative w-full overflow-hidden border-y border-border/70 bg-card/40 py-3 backdrop-blur-sm">
      <div className="flex w-max group-hover:[animation-play-state:paused] [&>ul]:group-hover:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
