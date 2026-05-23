import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactSection from "./components/ContactSection/ContactSection";
import Privacy from "./components/Privacy/Privacy";
import PrivacyFullPage from "./components/PrivacyFullPage/PrivacyFullPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((r) => io.observe(r));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <ContactSection />
      <Privacy />
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  // Handle hash scroll after navigation (e.g. from /policy to /#privacy)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PrivacyFullPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
