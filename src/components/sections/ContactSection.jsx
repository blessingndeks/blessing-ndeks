
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";
import "./ContactSection.css";

const FORM_ENDPOINT = "https://formspree.io/f/xqpqqdkv";

function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          result.errors?.map((item) => item.message).join(", ") ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again."
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">LET'S CONNECT</span>
          <h2>
            Have a project
            <br />
            in mind<span>?</span>
          </h2>
          <p>
            Have an idea, a project, or an opportunity you'd like to
            discuss? Send me a message. I'd love to hear from you.
          </p>
          <a href="mailto:blessinggabbie21@gmail.com">
            Prefer email? Let's talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="contact-form-top">
            <span>01 / SEND A MESSAGE</span>
            <span>I'll get back to you</span>
          </div>

          <div className="contact-input-group">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="contact-subject">Subject <span>(Optional)</span></label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="What is this about?"
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me a little about your project or inquiry..."
              required
            />
          </div>

          {status === "success" && (
            <p className="contact-status success" role="status">
              Your message has been sent successfully. Thank you for reaching out!
            </p>
          )}

          {status === "error" && (
            <p className="contact-status error" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            <Send size={17} />
          </button>

          <p className="contact-form-note">
            Your information will only be used to respond to your message.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
