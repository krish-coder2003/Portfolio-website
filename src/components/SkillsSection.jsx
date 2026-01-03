import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import "./SkillsSection.css";

export default function SkillsSection() {
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
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Programming & Scripting",
      icon: <FaCode />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaReact />,
      skills: ["React.js", "Node.js", "Express.js", "Django"],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "InfluxDB"],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["Microsoft Azure", "AWS", "Docker", "CI/CD"],
    },
    {
      title: "Core & Tools",
      icon: <FaTools />,
      skills: ["REST APIs", "API Security", "OOP", "DSA", "Git & GitHub"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to design, build, and deploy scalable
          applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="skill-group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
