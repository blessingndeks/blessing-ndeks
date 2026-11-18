
import { motion } from "motion/react";
import { ArrowUpRight, Building2 } from "lucide-react";
import "./Teams.css";

const organisations = [
  {
    number: "01",
    name: "AfricInnovate",
    location: "Eket, Akwa Ibom",
    period: "2024 – 2026",
    roles: [
      "Web Development Intern",
      "Social Media & Digital Content Lead",
    ],
    description:
      "Contributed to web development initiatives, digital content coordination and social media campaigns supporting technology and digital skills development.",
  },
  {
    number: "02",
    name: "Apitex ICT Global",
    location: "Nigeria",
    period: "2020 – 2022",
    roles: ["Computer Operator"],
    description:
      "Supported daily ICT operations through data processing, file organisation, computer system maintenance and routine technical troubleshooting.",
  },
];

function Teams() {
  return (
    <section className="teams-section" id="teams">
      <div className="teams-container">
        <motion.div
          className="teams-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="teams-eyebrow">
            PROFESSIONAL EXPERIENCE / 005
          </span>

          <h2>
            Teams & companies
            <br />
            <span>I've worked with.</span>
          </h2>

          <p>
            A look at some of the organisations where I've
            contributed my skills, supported teams and gained
            practical experience.
          </p>
        </motion.div>

        <div className="teams-grid">
          {organisations.map((organisation, index) => (
            <motion.article
              className="team-card"
              key={organisation.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
              }}
            >
              <div className="team-card-top">
                <span>{organisation.number}</span>

                <span className="team-card-icon">
                  <Building2 size={23} strokeWidth={1.5} />
                </span>
              </div>

              <div className="team-card-content">
                <span className="team-card-location">
                  {organisation.location}
                </span>

                <h3>{organisation.name}</h3>

                <p>{organisation.description}</p>

                <div className="team-card-roles">
                  <span className="team-roles-label">
                    MY ROLES
                  </span>

                  {organisation.roles.map((role) => (
                    <span className="team-role" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="team-card-bottom">
                <span>{organisation.period}</span>
                <ArrowUpRight size={19} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
