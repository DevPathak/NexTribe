export function Wordmark({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "lg" | "sm";
}) {
  return (
    <div className={`flex flex-col items-center leading-none ${className ?? ""}`}>
      <span
        className={`font-display font-bold tracking-[0.14em] text-cyan text-glow-teal ${
          size === "lg" ? "text-[clamp(2.5rem,7vw,5.5rem)]" : "text-lg"
        }`}
      >
        NEXTRIBE
      </span>
      <span
        className={`font-mono-ui font-medium text-orange ${
          size === "lg"
            ? "mt-1 text-[clamp(0.9rem,2vw,1.6rem)] tracking-[0.62em] pl-[0.62em]"
            : "text-[0.55rem] tracking-[0.42em] pl-[0.42em]"
        }`}
      >
        STUDIOS
      </span>
    </div>
  );
}
