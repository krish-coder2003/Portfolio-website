import React, { useEffect, useRef } from "react";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current.classList.add("show"),
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience">
      <div className="container experience-wrapper" ref={ref}>
        <h2 className="section-title">Experience & Journey</h2>
        <p className="section-subtitle">
          Hands-on experience gained through real-world projects.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <h3>EcoConnect Platform</h3>
            <span>2024</span>
            <p>
              Designed and developed a full-stack community platform with secure
              admin workflows and cloud integrations.
            </p>
          </div>

          <div className="timeline-item">
            <h3>HĀRVÉST NGO Platform</h3>
            <span>2024</span>
            <p>
              Built a public website and admin panel for managing events,
              donations, blogs, and galleries.
            </p>
          </div>

          <div className="timeline-item">
            <h3>CI/CD Automation</h3>
            <span>2023</span>
            <p>
              Implemented CI/CD pipelines using Docker and GitHub Actions for
              automated deployments.
            </p>
          </div>

          <div className="timeline-item">
            <h3>Lathe Machine Monitoring</h3>
            <span>2023</span>
            <p>
              Developed a real-time industrial monitoring system using Node-RED
              and Grafana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
