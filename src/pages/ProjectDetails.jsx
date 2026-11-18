
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import projectDetails from "../data/projectDetails";
import "./ProjectDetails.css";

const projectOrder = [
  "scoot",
  "herly",
  "xevrali",
  "cart-whapp",
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projectOrder.indexOf(slug);
  const nextSlug =
    projectOrder[(currentIndex + 1) % projectOrder.length];
  const nextProject = projectDetails[nextSlug];

  return (
    <main className="case-study-page">
      {/* PROJECT INTRODUCTION */}

      <motion.section
        className="case-study-hero"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="case-study-container">
          <Link to="/#projects" className="case-study-back">
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <motion.span
            className="case-study-eyebrow"
            variants={revealUp}
            initial="hidden"
            animate="visible"
          >
            SELECTED PROJECT / 0{currentIndex + 1}
          </motion.span>

          <motion.h1
            className="case-study-title"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            {project.name}
          </motion.h1>

          {project.tagline && (
            <motion.h2
              className="case-study-tagline"
              variants={revealUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              {project.tagline}
            </motion.h2>
          )}

          <motion.p
            className="case-study-description"
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="case-study-meta"
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
          >
            {project.role && (
              <div>
                <span>ROLE</span>
                <p>{project.role}</p>
              </div>
            )}

            {project.platform && (
              <div>
                <span>PLATFORM</span>
                <p>{project.platform}</p>
              </div>
            )}

            <div>
              <span>CATEGORY</span>
              <p>{project.category}</p>
            </div>

            {project.date && (
              <div>
                <span>DATE</span>
                <p>{project.date}</p>
              </div>
            )}
          </motion.div>

          {project.technologies?.length > 0 && (
            <motion.div
              className="case-study-technologies"
              variants={revealUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <span>TECHNOLOGIES</span>

              <div>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-live-link"
            >
              Visit live site
              <ArrowUpRight size={18} />
            </a>
          )}

          <a href="#working" className="case-study-scroll">
            Explore project
            <ArrowDown size={16} />
          </a>
        </div>
      </motion.section>

      {/* WEBSITE PREVIEW */}

      <motion.section
        className="case-study-working"
        id="working"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="case-study-container">
          <motion.div
            className="case-study-section-heading"
            variants={revealUp}
          >
            <span>PROJECT PREVIEW</span>
            <h2>See it working.</h2>
          </motion.div>

          <motion.div
            className="case-study-browser"
            variants={revealUp}
          >
            <div className="case-study-browser-toolbar">
              <div className="case-study-browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="case-study-browser-address">
                {project.name} — Website Preview
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website`}
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>

            <div className="case-study-browser-content">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} website preview`}
                />
              ) : (
                <div className="case-study-preview-placeholder">
                  <span>WEBSITE PREVIEW</span>
                  <h3>{project.name}</h3>
                  <p>Project screenshots will be added here.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* PROJECT CONCEPT */}

      {project.concept && (
        <motion.section
          className="case-study-concept"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={revealUp}
        >
          <div className="case-study-container case-study-split">
            <div>
              <span className="case-study-eyebrow">
                THE CONCEPT
              </span>

              <h2>{project.concept.title}</h2>
            </div>

            <p>{project.concept.description}</p>
          </div>
        </motion.section>
      )}

      {/* HOW IT WORKS */}

      {project.howItWorks && (
        <motion.section
          className="case-study-process"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="case-study-container">
            <motion.div
              className="case-study-section-heading"
              variants={revealUp}
            >
              <span>THE USER JOURNEY</span>
              <h2>How it works.</h2>
            </motion.div>

            <motion.div
              className="case-study-process-grid"
              variants={staggerContainer}
            >
              {project.howItWorks.map((step) => (
                <motion.article
                  className="case-study-process-card"
                  key={step.number}
                  variants={cardReveal}
                >
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* KEY FEATURES */}

      {project.features && (
        <motion.section
          className="case-study-features"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="case-study-container">
            <motion.div
              className="case-study-section-heading"
              variants={revealUp}
            >
              <span>WHAT MAKES IT WORK</span>
              <h2>Key features.</h2>
            </motion.div>

            <motion.div
              className="case-study-features-grid"
              variants={staggerContainer}
            >
              {project.features.map((feature, index) => (
                <motion.article
                  className="case-study-feature-card"
                  key={feature.title}
                  variants={cardReveal}
                >
                  <span>0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* EXPERIENCE */}

      {project.experience && (
        <motion.section
          className="case-study-experience"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={revealUp}
        >
          <div className="case-study-container">
            <span className="case-study-eyebrow">
              THE EXPERIENCE
            </span>

            <h2>{project.experience.title}</h2>
            <p>{project.experience.description}</p>
          </div>
        </motion.section>
      )}

      {/* PROJECT DIRECTION */}

      {project.direction && (
        <motion.section
          className="case-study-overview"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={revealUp}
        >
          <div className="case-study-container">
            <span className="case-study-eyebrow">
              PROJECT DIRECTION
            </span>

            <h2>{project.direction.title}</h2>
            <p>{project.direction.description}</p>
          </div>
        </motion.section>
      )}

      {/* FALLBACK OVERVIEW FOR OTHER PROJECTS */}

      {!project.concept && (
        <motion.section
          className="case-study-overview"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={revealUp}
        >
          <div className="case-study-container">
            <span className="case-study-eyebrow">
              ABOUT THE PROJECT
            </span>

            <h2>{project.category}</h2>
            <p>{project.description}</p>
          </div>
        </motion.section>
      )}

      {/* NEXT PROJECT */}

      <motion.section
        className="case-study-next"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="case-study-container">
          <span>NEXT PROJECT</span>

          <Link
            to={`/projects/${nextSlug}`}
            className="case-study-next-link"
          >
            <h2>{nextProject.name}</h2>
            <ArrowUpRight size={32} />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

export default ProjectDetails;
