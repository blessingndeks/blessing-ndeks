
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
  animate,
} from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import projects from "../../data/projects";
import "./Projects.css";

const projectThemes = [
  "scoot-theme",
  "herly-theme",
  "xevrali-theme",
  "cartwhapp-theme",
];

const statistics = [
  { value: "04", label: "Featured projects" },
  { value: "02", label: "Completed projects" },
  { value: "02", label: "Projects in development" },
  { value: "02", label: "Professional disciplines" },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Vite",
  "Supabase",
  "PostgreSQL",
  "React Router",
];

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 100px", "end 100px"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.96, 0.9]
  );

  const smoothScale = useSpring(scale, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const openProject = () => {
    onOpen(project);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`project-showcase ${
        projectThemes[index % projectThemes.length]
      }`}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject();
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`View ${project.name} case study`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: 0.08,
      }}
      style={{
        scale: smoothScale,
        zIndex: index + 1,
        cursor: "pointer",
      }}
    >
      <div className="project-showcase-top">
        <span className="project-showcase-brand">
          {project.name}
          <span className="project-brand-dot">.</span>
        </span>
      </div>

      <div className="project-preview">
        <div className="browser-window">
          <div className="browser-toolbar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-address">
              {project.name.toLowerCase().replace(/\s+/g, "")}.com
            </div>

            <div className="browser-toolbar-end" />
          </div>

          <div className="browser-content">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} website preview`}
              />
            ) : (
              <div className="browser-placeholder">
                <span className="browser-placeholder-label">
                  PROJECT PREVIEW
                </span>

                <h3>{project.name}</h3>

                <p>{project.category}</p>
              </div>
            )}
          </div>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-view-button"
            aria-label={`View ${project.name} live website`}
            onClick={(event) => event.stopPropagation()}
          >
            <ExternalLink size={22} />
          </a>
        )}
      </div>

      <div className="project-showcase-bottom">
        <div className="project-showcase-description">
          <span className="project-showcase-category">
            {project.category}
          </span>

          <h3>{project.name}</h3>

          <p>{project.description}</p>
        </div>

        <div className="project-showcase-action">
          <span>PROJECT 0{index + 1}</span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live website`}
              onClick={(event) => event.stopPropagation()}
            >
              <ArrowUpRight size={22} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ANIMATED STATISTIC */

function StatisticCounter({ value }) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.6 });

  const count = useMotionValue(0);

  const roundedCount = useTransform(count, (latest) =>
    String(Math.round(latest)).padStart(2, "0")
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, Number(value), {
      duration: 1.8,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={counterRef}
      className="projects-statistic"
      initial={{ opacity: 0, y: 35, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="projects-statistic-value">
        <motion.span>{roundedCount}</motion.span>
        <span className="projects-statistic-plus">+</span>
      </span>
    </motion.div>
  );
}

function Projects() {
  const navigate = useNavigate();

  const openProject = (project) => {
    const slug = project.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/projects/${slug}`);
  };

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-eyebrow">SELECTED WORK</span>

          <h2>
            Projects I've <span>Worked On</span>
          </h2>

          <p>
            A collection of digital experiences, websites and
            products I've built or am currently bringing to life.
          </p>
        </motion.div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={openProject}
            />
          ))}
        </div>

        {/* Projects Closing Statement */}
        <motion.div
          className="projects-closing"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Building digital experiences where thoughtful development
            meets meaningful business goals.
          </p>

          <Link to="/projects" className="projects-more-button">
            See More Projects
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* Professional Statistics */}
        <motion.div
          className="projects-statistics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {statistics.map((statistic, index) => (
            <div className="projects-statistic-wrapper" key={statistic.label}>
              <StatisticCounter value={statistic.value} />

              <p className="projects-statistic-label">
                {statistic.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Moving Technology Marquee */}
        <motion.div
          className="projects-tech-stack"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-tech-label">
            TECHNOLOGIES I WORK WITH
          </span>

          <div className="projects-tech-marquee">
            <div className="projects-tech-track">
              {[0, 1].map((group) => (
                <div
                  className="projects-tech-group"
                  key={group}
                  aria-hidden={group === 1 ? "true" : undefined}
                >
                  {technologies.map((technology) => (
                    <span
                      className="projects-tech-item"
                      key={`${group}-${technology}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
