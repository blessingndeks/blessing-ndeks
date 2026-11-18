
import { motion } from "motion/react";
import {
  Search,
  Lightbulb,
  Blocks,
  Bug,
  Layers3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import "./ProblemSolving.css";

const principles = [
  {
    number: "01",
    title: "Understand the Problem First",
    description:
      "Before writing code, I take time to understand the goal, the people I'm building for and what the solution needs to achieve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Think Through the Experience",
    description:
      "I consider usability, accessibility and responsiveness so that digital experiences work well across different devices.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build in Small Increments",
    description:
      "I break complex tasks into manageable steps, build progressively and test along the way.",
    icon: Blocks,
  },
  {
    number: "04",
    title: "Debug with Purpose",
    description:
      "When something goes wrong, I investigate the root cause, test possible solutions and avoid unnecessary guesswork.",
    icon: Bug,
  },
  {
    number: "05",
    title: "Keep Things Maintainable",
    description:
      "I value organized structures, reusable components and readable code that can be understood and improved over time.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Communicate Clearly",
    description:
      "I believe good work also requires clear communication, sharing progress and collaborating around practical solutions.",
    icon: MessageCircle,
  },
];

function ProblemSolving() {
  return (
    <section className="problem-section" id="approach">
      <div className="problem-container">
        <motion.div
          className="problem-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="problem-eyebrow">
            MY APPROACH / 009
          </span>

          <div className="problem-heading-content">
            <h2>
              How I solve
              <br />
              <span>problems.</span>
            </h2>

            <p>
              Good solutions don't happen by accident. They come
              from understanding the challenge, thinking through
              the details and building with purpose.
            </p>
          </div>
        </motion.div>

        <div className="problem-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                className="problem-card"
                key={principle.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.09,
                }}
              >
                <div className="problem-card-top">
                  <span>{principle.number}</span>

                  <span className="problem-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="problem-card-content">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>

                <div className="problem-card-bottom">
                  <span>HOW I WORK</span>
                  <ArrowUpRight size={19} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
