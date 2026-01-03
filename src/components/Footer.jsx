import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h4>Krishna Shrangare</h4>
          <p>Full Stack Developer</p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">
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
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Krishna Shrangare. All rights reserved.
      </div>
    </footer>
  );
}
