
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";
import {
  FaLinkedin,
} from "react-icons/fa";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiTiktok,
} from "react-icons/si";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/blessingndeks/",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      href: "https://github.com/blessingndeks",
      icon: <SiGithub />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/blessingndeks/",
      icon: <SiInstagram />,
    },
    {
      label: "X",
      href: "https://x.com/blessingndeks",
      icon: <SiX />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@blessingndeks",
      icon: <SiTiktok />,
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            blessing<span>.</span>
          </Link>

          <p>
            I'm Blessing Ndekhedehe, a Web Developer and Digital
            Marketer passionate about building useful digital
            experiences and helping businesses grow online.
          </p>

          <span className="footer-location">
            Based in Eket, Akwa Ibom, Nigeria.
          </span>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h3>EXPLORE</h3>

          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>
                  {link.label}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-column">
          <h3>GET IN TOUCH</h3>

          <ul>
            <li>
              <a href="mailto:blessinggabbie21@gmail.com">
                <Mail size={15} />
                Email me
              </a>
            </li>

            <li>
              <a href="tel:+234813027712">
                <Phone size={15} />
                Call me
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/234813027712"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={15} />
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://cal.com/blessing-ndekhedehe-o9fhtt"
                target="_blank"
                rel="noreferrer"
              >
                <CalendarDays size={15} />
                Book a meeting
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-column">
          <h3>FOLLOW ALONG</h3>

          <ul>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                  {social.label}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© {currentYear} Blessing Ndekhedehe. All rights reserved.</p>

        <button
          type="button"
          className="footer-back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          BACK TO TOP
          <ArrowUp size={15} />
        </button>
      </div>

      {/* LARGE WORDMARK */}
      <div className="footer-wordmark" aria-label="Blessing">
        blessing<span>.</span>
      </div>
    </footer>
  );
}

export default Footer;
