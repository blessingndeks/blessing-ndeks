
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
} from "lucide-react";
import "./HomeResume.css";

const tabs = [
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "skills",
    label: "Professional Skills",
    icon: Code2,
  },
];

const experiences = [
  {
    role: "Social Media & Digital Content Lead",
    company: "AfricInnovate",
    location: "Eket, Akwa Ibom",
    period: "2025 – 2026",
    description:
      "Coordinated digital content activities across marketing and technology teams.",
    responsibilities: [
      "Created and maintained digital content aligned with organizational campaigns and growth objectives.",
      "Reviewed content performance metrics and refined messaging.",
      "Managed digital content campaigns that increased social media engagement by 20%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    location: "Remote",
    period: "2025 – Present",
    description:
      "Building functional digital experiences and maintaining web projects.",
    responsibilities: [
      "Manage development tasks, test website functionality and troubleshoot issues.",
      "Collaborate with designers and stakeholders to translate requirements into functional experiences.",
      "Use Git-based version control to maintain and update projects.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "AfricInnovate",
    location: "Eket, Akwa Ibom",
    period: "2024 – 2025",
    description:
      "Supported frontend development and website maintenance for digital initiatives.",
    responsibilities: [
      "Supported updates to web content and frontend components.",
      "Conducted functional testing and documented implementation details.",
      "Debugged issues across browsers and devices.",
    ],
  },
  {
    role: "Computer Operator",
    company: "Apitex ICT Global",
    location: "Nigeria",
    period: "2020 – 2022",
    description:
      "Supported daily computer operations, data processing and technical support.",
    responsibilities: [
      "Performed data processing, file organization, backups and system updates.",
      "Monitored and maintained computer systems.",
      "Followed access-control and data-security procedures.",
      "Supported users with routine computer operations and troubleshooting.",
    ],
  },
];

const education = [
  {
    qualification: "Associate Degree in Computer Science",
    institution: "University of the People",
    location: "Online",
    period: "Currently Pursuing",
  },
  {
    qualification: "National Diploma (ND), Public Administration",
    institution: "Heritage Polytechnic",
    location: "Nigeria",
    period: "Completed",
  },
];

const skillGroups = [
  {
    category: "Web Development",
    description: "Building and maintaining digital experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Git",
      "API Integration",
    ],
  },
  {
    category: "Digital Marketing",
    description: "Content, campaigns and digital growth.",
    skills: [
      "Digital Content Coordination",
      "Social Media Campaigns",
      "Content Performance Analysis",
      "Audience Engagement",
      "Conversion-focused Content",
    ],
  },
  {
    category: "Creative & Digital Tools",
    description: "Creative production and digital tools.",
    skills: [
      "Canva",
      "Figma",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe XD",
    ],
  },
  {
    category: "Administrative & Digital Operations",
    description: "Organizing information and supporting operations.",
    skills: [
      "Data Entry",
      "Information Processing",
      "File Organization",
      "Documentation",
      "Task Coordination",
      "Email & Online Tools",
      "File Backups",
      "System Updates",
      "Troubleshooting",
    ],
  },
  {
    category: "Microsoft Office",
    description: "Office productivity applications.",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
  },
  {
    category: "Communication & Work Habits",
    description: "Professional collaboration and support.",
    skills: [
      "Customer Service",
      "Written Communication",
      "User Support",
      "Team Collaboration",
      "Organization",
      "Time Management",
      "Problem-solving",
      "Attention to Detail",
    ],
  },
];

function HomeResume() {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    if (activeTab === "experience") {
      return (
        <div className="home-resume-timeline">
          {experiences.map((item, index) => (
            <motion.article
              className="home-resume-experience"
              key={item.role}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="home-resume-date">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>

              <div className="home-resume-experience-content">
                <span className="home-resume-company">
                  {item.company}
                </span>

                <h3>{item.role}</h3>

                <p>{item.description}</p>

                <ul>
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <span className="home-resume-index">
                0{index + 1}
              </span>
            </motion.article>
          ))}
        </div>
      );
    }

    if (activeTab === "education") {
      return (
        <div className="home-resume-education-grid">
          {education.map((item, index) => (
            <motion.article
              className="home-resume-education-card"
              key={item.institution}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="home-resume-card-number">
                0{index + 1}
              </span>

              <GraduationCap size={27} strokeWidth={1.4} />

              <div>
                <span className="home-resume-company">
                  {item.institution}
                </span>

                <h3>{item.qualification}</h3>

                <p>{item.location}</p>
              </div>

              <span className="home-resume-education-period">
                {item.period}
              </span>
            </motion.article>
          ))}
        </div>
      );
    }

    return (
      <div className="home-resume-skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="home-resume-skill-card"
            key={group.category}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <span className="home-resume-card-number">
              0{index + 1}
            </span>

            <h3>{group.category}</h3>
            <p>{group.description}</p>

            <div className="home-resume-skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    );
  };

  return (
    <section className="home-resume-section" id="resume">
      <div className="home-resume-container">
        <motion.div
          className="home-resume-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="home-resume-eyebrow">
            THE JOURNEY SO FAR / 008
          </span>

          <div className="home-resume-title-row">
            <h2>
              My <span>Résumé.</span>
            </h2>

            <a
              href="/blessing-ndekhedehe-cv.pdf"
              download="Blessing-Ndekhedehe-CV.pdf"
              className="home-resume-download"
            >
              Download CV
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p>
            A look at my professional experience, academic
            background and the skills I bring to every project.
          </p>
        </motion.div>

        <div className="home-resume-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                type="button"
                key={tab.id}
                className={`home-resume-tab ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={17} strokeWidth={1.7} />
                <span>{tab.label}</span>

                {isActive && (
                  <motion.span
                    className="home-resume-tab-indicator"
                    layoutId="home-resume-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="home-resume-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="home-resume-tab-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default HomeResume;
