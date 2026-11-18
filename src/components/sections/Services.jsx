
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Megaphone,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build responsive websites and functional web applications that help businesses establish their online presence and deliver better digital experiences.",
    icon: Code2,
    offerings: [
      "Website Development",
      "Responsive Web Design",
      "Frontend Development",
      "Web Applications",
    ],
  },
  {
    number: "02",
    title: "Digital Marketing",
    description:
      "I help businesses communicate their value online through strategic content, social media coordination and digital marketing activities focused on growth.",
    icon: Megaphone,
    offerings: [
      "Social Media Management",
      "Digital Content Coordination",
      "Campaign Planning",
      "Content Performance Analysis",
      "Affiliate Marketing",
    ],
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="services-eyebrow">
            WHAT I DO / 004
          </span>

          <h2>
            Digital solutions.
            <br />
            <span>Built with purpose.</span>
          </h2>

          <p>
            I combine web development and digital marketing
            to help businesses build a stronger, more effective
            presence in the digital world.
          </p>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-item"
                key={service.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="service-topline">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="service-content">
                  <div className="service-main">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="service-offerings">
                    <span className="service-offerings-label">
                      WHAT I OFFER
                    </span>

                    <ul>
                      {service.offerings.map((offering) => (
                        <li key={offering}>{offering}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-bottom">
                  <span>LET'S BUILD SOMETHING MEANINGFUL</span>

                  <a
                    href="/contact"
                    aria-label={`Discuss ${service.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
