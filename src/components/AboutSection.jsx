import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("show");
        }
      },
      { threshold: 0.25 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about-wrapper" ref={aboutRef}>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* LEFT */}
          <div className="about-text">
            <p>
              I’m <strong>Krishna Shrangare</strong>, a passionate
              <strong> Full Stack Web Developer</strong> who enjoys building
              scalable, real-world applications that solve meaningful problems.
            </p>

            <p>
              I have hands-on experience working with modern technologies like
              <strong> React, Node.js, Django, MongoDB, and Cloud platforms</strong>.
              My focus is on writing clean code, designing reliable systems,
              and delivering smooth user experiences.
            </p>

            <p>
              I’ve built complete platforms such as
              <strong> EcoConnect</strong> (community environment support system),
              an <strong>NGO management platform</strong>, and
              <strong> CI/CD automated deployments</strong>, which gave me
              strong exposure to real-world development workflows.
            </p>

            <p>
              I’m actively looking for opportunities where I can grow as a
              developer, contribute to impactful products, and work with
              experienced engineering teams.
            </p>
          </div>

          {/* RIGHT */}
          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-card">
              <h3>Full Stack</h3>
              <p>Development Focus</p>
            </div>
            <div className="stat-card">
              <h3>Real-World</h3>
              <p>Problem Solving</p>
            </div>
            <div className="stat-card">
              <h3>CI/CD</h3>
              <p>Deployment Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
