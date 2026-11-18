
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import portrait from "../../assets/blessing-portrait.jpg";
import "./About.css";

const roles = [
  "Web Developer",
  "React Developer",
  "Digital Marketer",
];

function About() {
  const [activeRole, setActiveRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[activeRole];
    let delay = isDeleting ? 55 : 100;

    if (!isDeleting && displayedText === currentRole) {
      delay = 1500;
    } else if (isDeleting && displayedText === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setActiveRole((current) => (current + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [activeRole, displayedText, isDeleting]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">
            WEB DEVELOPER & DIGITAL MARKETER
          </span>

          <h2 className="about-headline">
            Building digital experiences.
            <span> Creating room for growth.</span>
          </h2>

          <div className="about-role">
            <span className="about-role-label">I AM A</span>

            <div className="about-role-slider" aria-live="polite">
              <span>{displayedText}</span>
              <span className="typing-cursor" aria-hidden="true">
                |
              </span>
            </div>
          </div>

          <p className="about-description">
            I'm Blessing Ndekhedehe. I build responsive, functional
            websites and explore how technology and digital marketing
            can help businesses connect with people and grow online.
            I enjoy learning, solving problems and turning ideas into
            practical digital experiences.
          </p>

          <div className="about-actions">
            <a href="#projects" className="about-button about-button-primary">
              See my work
              <ArrowDownRight size={18} />
            </a>

            <a
              href="mailto:blessinggabbie21@gmail.com?subject=Let's%20Work%20Together"
              className="about-button about-button-secondary"
            >
              Hire me
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://wa.me/2348130227712"
              target="_blank"
              rel="noreferrer"
              className="about-button about-button-text"
            >
              <MessageCircle size={17} />
              Let's talk
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="about-image-wrapper">
            <img
              src={portrait}
              alt="Blessing Ndekhedehe"
              className="about-portrait"
            />
          </div>

          <div className="about-profile-card">
            <div className="about-profile-icon">
              <Mail size={18} />
            </div>

            <div>
              <span>LET'S BUILD SOMETHING</span>
              <a href="mailto:blessinggabbie21@gmail.com">
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <span className="about-image-caption">
            BLESSING NDEKHEDEHE
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
