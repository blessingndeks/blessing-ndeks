
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./ExploreProjects.css";

function ExploreProjects() {
  return (
    <section className="explore-projects">
      <div className="explore-projects-inner">
        <motion.p
          className="explore-projects-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Interested in exploring more of my work?
        </motion.p>

        <motion.div
          className="explore-projects-link-wrap"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Link to="/projects" className="explore-projects-link">
            <span>PROJECTS</span>
            <span className="explore-projects-icon">
              <ArrowUpRight size={34} strokeWidth={1.5} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ExploreProjects;
