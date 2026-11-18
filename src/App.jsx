
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Teams from "./components/sections/Teams";
import Hackathons from "./components/sections/Hackathons";
import Community from "./components/sections/Community";
import HomeResume from "./components/sections/HomeResume";
import ProblemSolving from "./components/sections/ProblemSolving";
import TechTypography from "./components/sections/TechTypography";
import ContactSection from "./components/sections/ContactSection";

import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Teams />
      <Hackathons />
      <Community />
      <HomeResume />
      <ProblemSolving />
      <TechTypography />
      <ContactSection />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/projects" element={<ProjectsPage />} />

            <Route
              path="/projects/:slug"
              element={<ProjectDetails />}
            />

            <Route path="/resume" element={<ResumePage />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={<HomePage />} />
          </Routes>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <AnimatedRoutes />
    </>
  );
}

export default App;
