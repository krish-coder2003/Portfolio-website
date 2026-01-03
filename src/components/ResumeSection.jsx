import React from "react";
import "./ResumeSection.css";

export default function ResumeSection() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">
          A concise overview of my experience, skills, and projects.
        </p>

        <div className="resume-card">
          <div className="resume-icon">📄</div>

          <h3 className="resume-title">
            Krishna Shrangare — Full Stack Developer
          </h3>

          <p className="resume-description">
            Download my resume to learn more about my technical skills,
            projects, internships, and experience in building modern web
            applications.
          </p>

          <div className="resume-actions">
            <a
              href="/krishna_shrangare.pdf"
              className="btn primary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              href="/krishna_shrangare.pdf"
              className="btn secondary"
              download
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
