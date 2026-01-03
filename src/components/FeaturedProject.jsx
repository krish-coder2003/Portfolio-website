import React, { useEffect, useRef } from "react";
import "./FeaturedProject.css";

export default function FeaturedProject() {
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
    <section className="featured">
      <div className="container featured-wrapper" ref={ref}>
        <span className="featured-label">FLAGSHIP PROJECT</span>
        <h2 className="section-title">EcoConnect</h2>
        <p className="section-subtitle">
          A full-stack community environment support platform solving real-world
          problems.
        </p>

        <div className="featured-grid">
          <div className="featured-content">
            <p>
              EcoConnect is a <strong>production-grade full-stack platform</strong>{" "}
              designed to help communities manage waste reporting, animal rescue,
              plant purchases, adoptions, volunteering, and event registrations
              through a secure admin dashboard.
            </p>

            <ul className="featured-points">
              <li>Secure admin authentication using cookies</li>
              <li>Cloudinary image uploads & email notifications</li>
              <li>Status-based workflows across all modules</li>
              <li>Scalable Next.js architecture with server actions</li>
            </ul>

            <div className="featured-tech">
              <span>Next.js</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>Node.js</span>
              <span>Cloudinary</span>
            </div>

            <a
              href="https://github.com/krish-coder2003/eco-connect-platform"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
