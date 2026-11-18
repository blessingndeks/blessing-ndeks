
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CalendarDays,
  MoveDown,
  Send,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import ContactInfo from "./ContactInfo";
import ExploreProjects from "./ExploreProjects";
import "./ContactPage.css";

const FORM_ENDPOINT = "https://formspree.io/f/xqpqqdkv";

function ContactPage() {
  const [projectType, setProjectType] = useState("Full-time role");
  const [description, setDescription] = useState("");
  const [whatsappAvailable, setWhatsappAvailable] = useState(false);
  const [contactMethod, setContactMethod] = useState("Email");

  const [projectStatus, setProjectStatus] = useState("");
  const [projectError, setProjectError] = useState("");

  const [generalStatus, setGeneralStatus] = useState("");
  const [generalError, setGeneralError] = useState("");

  const handleProjectSubmit = async (event) => {
    event.preventDefault();

    setProjectStatus("Sending your request...");
    setProjectError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Your request could not be sent.");
      }

      setProjectStatus("Your project enquiry has been sent successfully.");
      form.reset();
      setProjectType("Full-time role");
      setDescription("");
      setWhatsappAvailable(false);
      setContactMethod("Email");
    } catch {
      setProjectStatus("");
      setProjectError(
        "Something went wrong. Please try again or contact me directly."
      );
    }
  };

  const handleGeneralSubmit = async (event) => {
    event.preventDefault();

    setGeneralStatus("Sending your message...");
    setGeneralError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Your message could not be sent.");
      }

      setGeneralStatus("Your message has been sent successfully.");
      form.reset();
    } catch {
      setGeneralStatus("");
      setGeneralError(
        "Something went wrong. Please try again or contact me directly."
      );
    }
  };

  const projectTypes = [
    "Full-time role",
    "Web app",
    "Mobile app",
    "Payments / Integration",
    "Other",
  ];

  return (
    <main className="contact-page">
      {/* CONTACT HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <motion.span
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            HAVE A PROJECT IN MIND?
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
          </motion.h1>

          <motion.div
            className="contact-hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="contact-scroll">
              <MoveDown size={15} />
              <span>SCROLL TO EXPLORE</span>
            </div>

            <p>
              Hiring, or need a contractor? Tell me about the role or
              project.
            </p>

            <a href="#project-enquiry">
              LET'S CONNECT <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* QUICK CONTACT OPTIONS */}
      <section className="quick-contact-section">
        <div className="quick-contact-grid">
          <motion.div
            className="quick-contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="quick-contact-icon">
              <CalendarDays size={22} />
            </div>

            <div>
              <span className="contact-eyebrow">
                LET'S HAVE A CONVERSATION
              </span>
              <h3>Prefer to talk it through?</h3>
              <p>
                Book a time that works for you. Let's discuss your ideas,
                goals, or opportunities.
              </p>

              <a
                href="https://cal.com/blessing-ndekhedehe-o9fhtt"
                target="_blank"
                rel="noreferrer"
                className="contact-action-link"
              >
                Let's talk: book on Cal.com <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="quick-contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="quick-contact-icon">
              <SiGithub size={22} />
            </div>

            <div>
              <span className="contact-eyebrow">EXPLORE MY WORK</span>
              <h3>Curious about what I build?</h3>
              <p>
                Take a look at my repositories, projects, and development
                work on GitHub.
              </p>

              <a
                href="https://github.com/blessingndeks"
                target="_blank"
                rel="noreferrer"
                className="contact-action-link"
              >
                Explore my GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT ENQUIRY FORM */}
      <section className="project-enquiry-section" id="project-enquiry">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">01 — PROJECT ENQUIRY</span>
          <h2>
            TELL ME ABOUT
            <br />
            YOUR PROJECT<span>.</span>
          </h2>
          <p>
            Have a role, project, or collaboration in mind? Share a few
            details and I'll get back to you.
          </p>
        </div>

        <form
          className="project-enquiry-form"
          onSubmit={handleProjectSubmit}
        >
          <div className="project-form-left">
            <label className="form-label">WHAT DO YOU HAVE IN MIND?</label>

            <div className="project-type-options">
              {projectTypes.map((type) => (
                <label className="project-radio-option" key={type}>
                  <input
                    type="radio"
                    name="project_type_choice"
                    value={type}
                    checked={projectType === type}
                    onChange={() => setProjectType(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            <input
              type="hidden"
              name="project_type"
              value={projectType}
            />

            <label className="form-label description-label">
              DESCRIBE THE ROLE OR PROJECT
            </label>

            <textarea
              name="description"
              placeholder="Tell me about the project, goals, requirements, or opportunity..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              maxLength={1500}
              required
            />

            <div className="character-count">
              {description.length}/1500 characters
            </div>
          </div>

          <div className="project-form-right">
            <div className="contact-form-field">
              <label htmlFor="project-name">YOUR NAME</label>
              <input
                id="project-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="project-email">EMAIL ADDRESS</label>
              <input
                id="project-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="project-phone">PHONE NUMBER</label>
              <input
                id="project-phone"
                type="tel"
                name="phone"
                placeholder="+234 000 000 0000"
              />
            </div>

            <label className="whatsapp-checkbox">
              <input
                type="checkbox"
                name="whatsapp_available"
                checked={whatsappAvailable}
                onChange={(event) =>
                  setWhatsappAvailable(event.target.checked)
                }
              />
              <span>This number is available on WhatsApp</span>
            </label>

            <div className="preferred-contact">
              <label className="form-label">
                PREFERRED CONTACT METHOD
              </label>

              <div className="preferred-contact-options">
                {["Email", "WhatsApp", "Phone call"].map((method) => (
                  <label key={method}>
                    <input
                      type="radio"
                      name="preferred_contact_choice"
                      value={method}
                      checked={contactMethod === method}
                      onChange={() => setContactMethod(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>

              <input
                type="hidden"
                name="preferred_contact"
                value={contactMethod}
              />
            </div>

            <button type="submit" className="contact-submit-button">
              SEND REQUEST <Send size={16} />
            </button>

            {projectStatus && (
              <p className="form-success-message">{projectStatus}</p>
            )}

            {projectError && (
              <p className="form-error-message">{projectError}</p>
            )}
          </div>
        </form>
      </section>

      {/* GENERAL CONTACT FORM */}
      <section className="general-contact-section">
        <div className="general-contact-container">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">02 — SAY HELLO</span>
            <h2>
              LET'S TALK<span>.</span>
            </h2>
            <p>
              Not sure where to start? Send me a message. I'd be happy to
              hear from you.
            </p>
          </div>

          <form
            className="general-contact-form"
            onSubmit={handleGeneralSubmit}
          >
            <div className="general-form-row">
              <div className="contact-form-field">
                <label htmlFor="general-name">YOUR NAME</label>
                <input
                  id="general-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="general-email">EMAIL ADDRESS</label>
                <input
                  id="general-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label htmlFor="general-subject">SUBJECT</label>
              <input
                id="general-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="general-message">YOUR MESSAGE</label>
              <textarea
                id="general-message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="general-submit-button">
              SEND MESSAGE <ArrowUpRight size={17} />
            </button>

            {generalStatus && (
              <p className="form-success-message">{generalStatus}</p>
            )}

            {generalError && (
              <p className="form-error-message">{generalError}</p>
            )}
          </form>
        </div>
      </section>

      {/* DIRECT CONTACT INFORMATION AND SOCIAL LINKS */}
      <ContactInfo />

      {/* EXPLORE MORE PROJECTS */}
      <ExploreProjects />
    </main>
  );
}

export default ContactPage;
