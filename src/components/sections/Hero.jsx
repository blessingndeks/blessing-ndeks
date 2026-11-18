
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="hero-title">BLESSING</h1>

          <p className="hero-description">
            I'm Blessing Ndekhedehe, a web developer and digital
            marketer building functional websites and digital
            experiences that help businesses grow.
          </p>

          <motion.div
            className="hero-circle"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="hero-bottom-links">
          <a href="#about" className="hero-scroll">
            <span>Scroll to Explore</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={17} />
            </motion.span>
          </a>

          <a href="#projects" className="hero-featured-projects">
            Featured Projects
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
