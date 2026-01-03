import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* BRAND */}
        <div className="brand" onClick={() => scrollTo("home")}>
          Krishna<span>.</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            {sections.map((s) => (
              <li
                key={s.id}
                className={activeSection === s.id ? "active" : ""}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU */}
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
