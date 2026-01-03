import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./HeroSection.css";
import krishna from "../assets/krishna.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-badge">🚀 Available for Opportunities</span>

          {/* SOCIAL ICONS */}
          <div className="hero-socials">
            <a
              href="https://github.com/krish-coder2003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-shrangare-684952237/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:krishnashrangare@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <h1 className="hero-title">
            Hi, I’m <span className="accent-gradient">Krishna Shrangare</span>
          </h1>

          <h3 className="hero-typing">
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "React & Node.js Developer",
                "Backend + Frontend Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>

          <p className="hero-description">
            I design and develop scalable, user-friendly web applications using
            modern technologies with a focus on clean architecture and performance.
          </p>

          <div className="hero-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Azure</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="photo-wrapper">
            <img src={krishna} alt="Krishna Shrangare" className="hero-photo" />
            <span className="photo-glow"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
