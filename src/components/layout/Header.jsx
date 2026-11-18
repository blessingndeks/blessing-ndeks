
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleNavigation = (event, href) => {
    event.preventDefault();
    closeMenu();
    navigate(href);
  };

  const isActivePage = (label) => {
    const pathname = location.pathname;

    switch (label) {
      case "Home":
        return pathname === "/";
      case "About":
        return pathname === "/about";
      case "Projects":
        return pathname.startsWith("/projects");
      case "Resume":
        return pathname === "/resume";
      case "Contact":
        return pathname === "/contact";
      default:
        return false;
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.pathname, location.hash]);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <a
          href="/#home"
          className="header-logo"
          onClick={(event) => handleNavigation(event, "/#home")}
        >
          <span className="logo-dot" />
          <span>
            Blessing<span className="logo-highlight">.</span>
          </span>
        </a>

        <nav
          className={`header-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active = isActivePage(item.label);

            return (
              <a
                key={item.label}
                href={item.href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}

                {active && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="active-nav-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <a
            href="/blessing-ndekhedehe-cv.pdf"
            download="Blessing-Ndekhedehe-CV.pdf"
            className="header-download"
            aria-label="Download CV"
            title="Download CV"
          >
            <Download size={15} />
          </a>

          <a
            href="/contact"
            className="header-cta"
            onClick={(event) => handleNavigation(event, "/contact")}
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;
