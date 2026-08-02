import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { About } from "@/components/site/About";
import { Games } from "@/components/site/Games";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { IntroSequence } from "@/components/intro/IntroSequence";
import { useIntroGate } from "@/hooks/useIntroGate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexTribe Studios — Games, Apps & Immersive Digital Worlds" },
      {
        name: "description",
        content:
          "NexTribe Studios is an independent game and app development studio in Hyderabad, India — building mobile games, apps and full-scale interactive worlds.",
      },
      {
        property: "og:title",
        content: "NexTribe Studios — Games, Apps & Immersive Digital Worlds",
      },
      {
        property: "og:description",
        content:
          "Independent game and app development studio crafting immersive experiences from mobile games to full-scale interactive worlds.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { shouldPlay, markSeen } = useIntroGate();
  const [introDone, setIntroDone] = useState(false);

  const playing = shouldPlay === true && !introDone;
  // Stagger the page reveal behind the intro handoff when it plays.
  const delay = playing ? 3.6 : 0;

  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0">
        <AmbientBackground />
      </div>
      <Navbar delay={delay} />
      <Hero delay={delay} />
      <About />
      <Games />
      <Contact />
      <Footer />
      {playing && (
        <IntroSequence
          onDone={() => {
            markSeen();
            setIntroDone(true);
          }}
        />
      )}
    </main>
  );
}
