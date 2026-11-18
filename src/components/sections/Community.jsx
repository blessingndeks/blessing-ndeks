import { motion } from "motion/react";
import { ArrowUpRight, Users } from "lucide-react";
import "./Community.css";

const communities = [
  {
    number: "01",
    name: "WordCamp Eket",
    category: "WordPress Community",
    year: "2026",
    description:
      "Part of a community that brings WordPress enthusiasts, developers and digital professionals together to learn, share knowledge and connect.",
  },
  {
    number: "02",
    name: "DevFest Eket",
    category: "Google Developer Groups Eket (GDG Eket)",
    year: "2025 – 2026",
    description:
      "A developer community focused on technology, innovation, knowledge sharing and building practical solutions.",
  },
  {
    number: "03",
    name: "BuildWithAI",
    category: "Google Developer Groups Eket (GDG Eket)",
    year: "2026",
    description:
      "An opportunity to explore artificial intelligence, learn new technologies and build practical solutions.",
  },
  {
    number: "04",
    name: "WTM Eket",
    category: "Women Techmakers",
    year: "2026",
    description:
      "A community supporting women in technology through visibility, learning, networking and opportunities for growth.",
  },
  {
    number: "05",
    name: "Django Girls Eket",
    category: "Women in Technology",
    year: "2026",
    description:
      "A community focused on making technology and programming more accessible, especially for women and beginners.",
  },
];

function Community() {
  return (
    <section className="community-section" id="community">
      <div className="community-container">
        <motion.div
          className="community-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="community-eyebrow">
            BEYOND THE CODE / 007
          </span>

          <h2>
            Building community,
            <br />
            <span>together.</span>
          </h2>

          <p>
            I believe growth happens faster when people learn,
            build and share opportunities together. These are
            some of the technology communities I'm part of.
          </p>
        </motion.div>

        <div className="community-grid">
          {communities.map((community, index) => (
            <motion.article
              className="community-card"
              key={community.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="community-card-top">
                <span>{community.number}</span>

                <span className="community-icon">
                  <Users size={23} strokeWidth={1.5} />
                </span>
              </div>

              <div className="community-card-content">
                <span className="community-category">
                  {community.category} / {community.year}
                </span>

                <h3>{community.name}</h3>

                <p>{community.description}</p>
              </div>

              <div className="community-card-bottom">
                <span>COMMUNITY MEMBERSHIP</span>
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;