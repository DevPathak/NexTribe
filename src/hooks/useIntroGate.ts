import { useEffect, useState } from "react";

const KEY = "nextribe-intro-seen";

/**
 * Intro plays once per browser session. Returns `null` while undetermined
 * (first client tick) so nothing flashes during hydration.
 */
export function useIntroGate() {
  const [shouldPlay, setShouldPlay] = useState<boolean | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    setShouldPlay(!seen && !reduced);
  }, []);

  const markSeen = () => {
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable — intro simply replays */
    }
  };

  return { shouldPlay, markSeen };
}
