import React, { useEffect, useRef } from "react";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "EcoConnect — Community Environment Support Platform",
      description:
        "A full-stack platform built to support environmental and community initiatives such as waste reporting, animal rescue, pet adoption, plant purchases, volunteering, and event registrations. Includes a secure admin dashboard with real-time status tracking, image uploads via Cloudinary, email notifications, and cookie-based authentication.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Actions",
        "Cloudinary",
        "Cookie Auth",
      ],
      github: "https://github.com/krish-coder2003/eco-connect-platform",
      tag: "Full Stack",
    },
    {
      id: 2,
      title: "HĀRVÉST — NGO Management Platform",
      description:
        "A large-scale NGO platform with public and admin interfaces to manage blogs, events, galleries, donations, and user queries. Designed scalable backend APIs with secure authentication, Cloudinary integration, and structured content management to support real NGO operations.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Prisma ORM",
        "PostgreSQL",
        "Cloudinary",
      ],
      github: "https://github.com/krish-coder2003/harvest-ngo-platform",
      tag: "Full Stack",
    },
    {
      id: 3,
      title: "CI/CD Pipeline Automation for Node.js App",
      description:
        "Implemented an end-to-end CI/CD pipeline to automate build, test, containerization, and deployment of a Node.js application. Used Docker and GitHub Actions to reduce manual deployment effort and ensure consistent production releases on cloud infrastructure.",
      tech: ["Node.js", "Docker", "GitHub Actions", "AWS EC2", "DockerHub"],
      github: "https://github.com/krish-coder2003/ci-cd-node-app",
      tag: "DevOps",
    },
    {
      id: 4,
      title: "Lathe Machine Monitoring System (Node-RED)",
      description:
        "Industrial monitoring system developed using Node-RED to track machine parameters such as RPM, temperature, and feed rate in real time. Integrated MongoDB for data storage, Grafana dashboards for visualization, and automated daily report generation.",
      tech: ["Node-RED", "MongoDB", "Grafana", "Automation"],
      github:
        "https://github.com/krish-coder2003/Lathe-Machine-Monitoring-NodeRED",
      tag: "IoT / Monitoring",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Real-world projects showcasing my experience in full-stack
          development, backend systems, DevOps, and automation.
        </p>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="project-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="project-header">
                <span className="project-tag">{p.tag}</span>
              </div>

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="tech">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn small primary"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
