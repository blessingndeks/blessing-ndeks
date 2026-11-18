
import { motion } from "motion/react";
import { ArrowUpRight, Trophy } from "lucide-react";
import "./Hackathons.css";

const hackathons = [
  {
    number: "01",
    event: "Women Techmakers Uyo",
    category: "International Women's Day",
    project: "Herly",
    description:
      "Presented Herly during the Women Techmakers Uyo International Women's Day event, earning second place for the project.",
    focus: ["Women in Technology", "Product Innovation", "Web Development"],
    status: "2nd Place",
    awarded: true,
  },
  {
    number: "02",
    event: "DevFest Eket 2026",
    category: "Hackathon",
    project: "IbomCare AI",
    description:
      "Developed an offline-first AI-powered healthcare support concept designed to improve access to primary healthcare information in rural communities across Akwa Ibom.",
    focus: ["Artificial Intelligence", "Healthcare", "Accessibility"],
    status: "Participant",
    awarded: false,
  },
];

function Hackathons() {
  return (
    <section className="hackathons-section" id="hackathons">
      <div className="hackathons-container">
        <motion.div
          className="hackathons-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hackathons-eyebrow">
            INNOVATION / 006
          </span>

          <h2>
            Hackathons &
            <br />
            <span>awards.</span>
          </h2>

          <p>
            Building ideas, exploring new technologies and
            solving real-world problems through collaborative
            innovation.
          </p>
        </motion.div>

        <div className="hackathons-list">
          {hackathons.map((item, index) => (
            <motion.article
              className="hackathon-card"
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
              }}
            >
              <div className="hackathon-number">
                {item.number}
              </div>

              <div className="hackathon-main">
                <span className="hackathon-category">
                  {item.category}
                </span>

                <h3>{item.event}</h3>

                <h4>{item.project}</h4>

                <p>{item.description}</p>

                <div className="hackathon-tags">
                  {item.focus.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div
                className={`hackathon-recognition ${
                  item.awarded ? "is-award" : ""
                }`}
              >
                <Trophy size={22} strokeWidth={1.4} />
                <span>{item.status}</span>
              </div>

              <div className="hackathon-arrow">
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;
