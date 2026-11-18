
import { motion } from "motion/react";
import "./TechTypography.css";

const words = [
  {
    text: "WEB DEVELOPMENT",
    direction: -1,
  },
  {
    text: "JAVASCRIPT",
    direction: 1,
  },
  {
    text: "REACT",
    direction: -1,
  },
  {
    text: "DIGITAL MARKETING",
    direction: 1,
  },
  {
    text: "CREATIVE TECHNOLOGY",
    direction: -1,
  },
];

function TechTypography() {
  return (
    <section className="tech-type-section" id="expertise">
      <div className="tech-type-container">
        <motion.div
          className="tech-type-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>WHAT I WORK WITH / 010</span>
          <p>
            Technology, creativity and strategy come together
            in the work I do.
          </p>
        </motion.div>

        <div className="tech-type-words">
          {words.map((word, index) => (
            <motion.div
              className={`tech-type-row ${
                index % 2 === 0 ? "row-left" : "row-right"
              }`}
              key={word.text}
              initial={{
                opacity: 0,
                x: word.direction * 100,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <span>{word.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tech-type-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>BUILDING WITH PURPOSE.</span>
          <span>LEARNING. CREATING. EVOLVING.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default TechTypography;
