
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiTiktok,
} from "react-icons/si";

import "./ContactInfo.css";

const contactItems = [
  {
    title: "Email",
    value: "blessinggabbie21@gmail.com",
    description: "For project enquiries and professional opportunities.",
    href: "mailto:blessinggabbie21@gmail.com",
    icon: Mail,
    action: "Send an email",
  },
  {
    title: "Phone & WhatsApp",
    value: "08130227712",
    description: "Reach me directly by phone or WhatsApp.",
    href: "https://wa.me/234813027712",
    icon: Phone,
    action: "Chat on WhatsApp",
  },
  {
    title: "Book a Meeting",
    value: "Schedule a conversation",
    description: "Choose a convenient time for us to talk.",
    href: "https://cal.com/blessing-ndekhedehe-o9fhtt",
    icon: CalendarDays,
    action: "Book a meeting",
  },
];

const socialItems = [
  {
    title: "LinkedIn",
    username: "Blessing Ndekhedehe",
    href: "https://www.linkedin.com/in/blessingndeks/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    username: "@blessingndeks",
    href: "https://github.com/blessingndeks",
    icon: SiGithub,
  },
  {
    title: "Instagram",
    username: "@blessingndeks",
    href: "https://www.instagram.com/blessingndeks/",
    icon: SiInstagram,
  },
  {
    title: "X",
    username: "@blessingndeks",
    href: "https://x.com/blessingndeks",
    icon: SiX,
  },
  {
    title: "TikTok",
    username: "@blessingndeks",
    href: "https://www.tiktok.com/@blessingndeks",
    icon: SiTiktok,
  },
];

function ContactInfo() {
  return (
    <section className="contact-info-section" id="contact-information">
      <div className="contact-info-container">
        <motion.div
          className="contact-info-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-info-eyebrow">GET IN TOUCH</span>

          <h2>
            FIND ME
            <br />
            <span>ELSEWHERE.</span>
          </h2>

          <p>
            Have a question, an opportunity, or simply want to connect?
            Here are the best ways to reach me.
          </p>
        </motion.div>

        <div className="contact-info-grid">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                className="contact-info-card"
                href={item.href}
                target={item.href.startsWith("https://") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="contact-info-card-top">
                  <span className="contact-info-icon">
                    <Icon size={22} />
                  </span>

                  <ArrowUpRight size={19} className="contact-info-arrow" />
                </div>

                <div className="contact-info-card-content">
                  <span className="contact-info-card-title">
                    {item.title}
                  </span>

                  <h3>{item.value}</h3>

                  <p>{item.description}</p>
                </div>

                <span className="contact-info-card-action">
                  {item.action}
                  <ArrowUpRight size={15} />
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="contact-social-area">
          <div className="contact-social-heading">
            <div>
              <span className="contact-info-eyebrow">LET'S CONNECT</span>
              <h3>AROUND THE WEB.</h3>
            </div>

            <p>
              Follow my work, connect professionally, and keep up with what
              I'm building.
            </p>
          </div>

          <div className="contact-social-grid">
            {socialItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  className="contact-social-card"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon size={23} />

                  <div>
                    <h4>{item.title}</h4>
                    <span>{item.username}</span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="contact-social-arrow"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
