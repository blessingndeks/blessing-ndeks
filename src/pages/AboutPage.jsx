
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Users,
  Globe,
  MessageCircle,
} from "lucide-react";

import portrait from "../assets/blessing-portrait.jpg";
import "./AboutPage.css";

const experiences = [
  {
    period: "Current",
    role: "Secretary / Receptionist / Customer Representative",
    organization: "AfricInnovate",
    description:
      "Supporting office administration, customer communication and digital activities within a technology and digital skills organization.",
  },
];

const education = [
  {
    period: "Add period",
    qualification: "Add qualification or course of study",
    institution: "Add institution name",
  },
];

const recognitions = [
  {
    year: "Sample",
    title: "Emerging Digital Professional",
    organization: "Recognition placeholder",
    description:
      "Sample recognition entry. Replace this with an actual award, nomination or professional achievement.",
  },
  {
    year: "Sample",
    title: "Technology and Innovation Contributor",
    organization: "Recognition placeholder",
    description:
      "Sample achievement entry. Update with a real recognition and the organization that presented it.",
  },
  {
    year: "Sample",
    title: "Professional Development Milestone",
    organization: "Recognition placeholder",
    description:
      "Placeholder for a certification, milestone or other achievement you would like to highlight.",
  },
];

const communities = [
  {
    role: "Community Volunteer",
    name: "Technology Community",
    description:
      "Sample entry for participation in technology events, community learning and knowledge-sharing activities.",
  },
  {
    role: "Digital Skills Advocate",
    name: "Digital Skills Initiative",
    description:
      "Sample entry for supporting digital literacy, encouraging learning and helping others explore technology.",
  },
  {
    role: "Community Participant",
    name: "Developer Community",
    description:
      "Sample entry for collaboration, networking and participation in developer-focused activities.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="about-page-section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <div className="about-page-container">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The story behind the developer: where I started, what I build,
            and how I work.
          </motion.p>
        </div>
      </section>

      <section className="about-page-main">
        <div className="about-page-container about-page-layout">
          <motion.aside
            className="about-page-profile"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-page-profile-image">
              <img src={portrait} alt="Blessing Ndekhedehe" />
            </div>

            <div className="about-page-profile-content">
              <span className="about-page-profile-label">
                THE PERSON BEHIND THE WORK
              </span>

              <h2>Blessing Ndekhedehe</h2>

              <p className="about-page-profile-role">
                Web Developer | Digital Marketer
              </p>

              <a
                href="mailto:blessinggabbie21@gmail.com"
                className="about-page-profile-cta"
              >
                Get in touch
                <ArrowUpRight size={17} />
              </a>

              <div className="about-page-contact-list">
                <a href="mailto:blessinggabbie21@gmail.com">
                  <Mail size={17} />
                  <span>blessinggabbie21@gmail.com</span>
                </a>

                <a href="tel:+2348130227712">
                  <Phone size={17} />
                  <span>+234 813 022 7712</span>
                </a>

                <div>
                  <MapPin size={17} />
                  <span>Eket, Akwa Ibom, Nigeria</span>
                </div>
              </div>

              <div className="about-page-socials">
                <a
                  href="https://www.linkedin.com/in/blessing-ndekhedehe-6a2069150/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Globe size={19} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Globe size={19} />
                </a>

                <a
                  href="https://wa.me/2348130227712"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={19} />
                </a>
              </div>
            </div>
          </motion.aside>

          <div className="about-page-content">
            <motion.section
              className="about-page-biography"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow="MY STORY"
                title="A little about my journey."
              />

              <p>
                I'm Blessing Ndekhedehe, a Web Developer and Digital
                Marketer interested in building useful digital
                experiences and helping businesses establish a stronger
                presence online.
              </p>

              <p>
                My interest in technology comes from the opportunity
                to turn ideas into practical solutions. I enjoy working
                with web technologies, exploring digital tools and
                understanding how businesses can use the internet to
                reach and serve more people.
              </p>

              <p>
                I'm committed to continuous learning, improving my
                technical abilities and taking on projects that allow
                me to grow while creating meaningful value.
              </p>
            </motion.section>

            <motion.section
              className="about-page-section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow="CAREER"
                title="Work experience."
              />

              <div className="about-page-timeline">
                {experiences.map((item, index) => (
                  <article
                    className="about-page-timeline-item"
                    key={index}
                  >
                    <span className="about-page-period">
                      {item.period}
                    </span>

                    <div>
                      <h3>{item.role}</h3>
                      <h4>{item.organization}</h4>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="about-page-section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow="LEARNING"
                title="Education."
              />

              <div className="about-page-timeline">
                {education.map((item, index) => (
                  <article
                    className="about-page-timeline-item"
                    key={index}
                  >
                    <span className="about-page-period">
                      {item.period}
                    </span>

                    <div>
                      <h3>{item.qualification}</h3>
                      <h4>{item.institution}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="about-page-section"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow="MILESTONES"
                title="Recognition."
                description="Achievements and milestones along the journey."
              />

              <div className="about-page-recognition-list">
                {recognitions.map((item, index) => (
                  <article
                    className="about-page-recognition-item"
                    key={index}
                  >
                    <div className="about-page-item-icon">
                      <Award size={21} />
                    </div>

                    <div>
                      <span>{item.year}</span>
                      <h3>{item.title}</h3>
                      <h4>{item.organization}</h4>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="about-page-section about-page-community"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow="BEYOND MY WORK"
                title="Community involvement."
                description="Learning, connecting and contributing beyond individual projects."
              />

              <div className="about-page-community-grid">
                {communities.map((item, index) => (
                  <article
                    className="about-page-community-card"
                    key={index}
                  >
                    <div className="about-page-item-icon">
                      {index === 0 && <Users size={21} />}
                      {index === 1 && <Globe size={21} />}
                      {index === 2 && <GraduationCap size={21} />}
                    </div>

                    <span>{item.role}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
