
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import projectDetails from "../data/projectDetails";

import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-page-hero">
        <div className="projects-page-container">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            A collection of digital experiences, products and ideas
            I've worked on, built and continue to develop.
          </motion.p>

          <div className="projects-page-meta">
            <a href="#projects-gallery">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={16} />
            </a>

            <span>
              04 <span className="projects-count-label">PROJECTS</span>
            </span>
          </div>
        </div>
      </section>

      <section
        className="projects-gallery-section"
        id="projects-gallery"
      >
        <div className="projects-page-container">
          <div className="projects-gallery">
            {projects.map((project, index) => {
              const slug =
                project.name === "Cart Whapp"
                  ? "cart-whapp"
                  : project.name.toLowerCase();

              const details = projectDetails[slug];

              if (!details) return null;

              const technologies =
                details.technologies?.length > 0
                  ? details.technologies
                  : [details.category];

              return (
                <motion.article
                  className={`gallery-project gallery-project-${slug}`}
                  key={project.id}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index % 2 === 0 ? 0 : 0.15,
                  }}
                >
                  <Link
                    to={`/projects/${slug}`}
                    className="gallery-project-link"
                    aria-label={`View ${project.name} project`}
                  >
                    <div className="gallery-project-preview">
                      <div className="gallery-project-labels">
                        <span>
                          {project.status === "Completed"
                            ? "COMPLETED"
                            : "IN DEVELOPMENT"}
                        </span>

                        <span>{details.category}</span>
                      </div>

                      <div className="gallery-project-artwork">
                        <span className="gallery-project-artwork-name">
                          {project.name}
                        </span>

                        <span className="gallery-project-artwork-tagline">
                          {details.tagline}
                        </span>
                      </div>

                      <div className="gallery-project-view">
                        VIEW
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    <div className="gallery-project-information">
                      <div>
                        <div className="gallery-project-technologies">
                          {technologies.slice(0, 4).map((technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ))}
                        </div>

                        <h2>{project.name}</h2>

                        <p>{project.description}</p>
                      </div>

                      <span className="gallery-project-arrow">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
