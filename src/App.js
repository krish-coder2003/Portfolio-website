import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const revealRefs = useRef([]);

  /* =========================
     SCROLL REVEAL (IntersectionObserver)
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* =========================
     SCROLL SPY (Navbar Active Section)
  ========================= */
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "featured",
      "projects",
      "skills",
      "experience",
      "contact",
      "resume",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main style={{ paddingTop: "72px" }}>
        <section
          id="home"
          className="reveal"
          ref={(el) => (revealRefs.current[0] = el)}
        >
          <HeroSection />
        </section>

        <section
          id="about"
          className="reveal"
          ref={(el) => (revealRefs.current[1] = el)}
        >
          <AboutSection />
        </section>

        <section
          id="featured"
          className="reveal"
          ref={(el) => (revealRefs.current[2] = el)}
        >
          <FeaturedProject />
        </section>

        <section
          id="projects"
          className="reveal"
          ref={(el) => (revealRefs.current[3] = el)}
        >
          <ProjectsSection />
        </section>

        <section
          id="skills"
          className="reveal"
          ref={(el) => (revealRefs.current[4] = el)}
        >
          <SkillsSection />
        </section>

        <section
          id="experience"
          className="reveal"
          ref={(el) => (revealRefs.current[5] = el)}
        >
          <ExperienceSection />
        </section>

        <section
          id="contact"
          className="reveal"
          ref={(el) => (revealRefs.current[6] = el)}
        >
          <ContactSection />
        </section>

        <section
          id="resume"
          className="reveal"
          ref={(el) => (revealRefs.current[7] = el)}
        >
          <ResumeSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
