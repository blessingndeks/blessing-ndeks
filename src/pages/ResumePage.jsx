
import { motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import "./ResumePage.css";

const experiences = [
  {
    role: "Social Media & Digital Content Lead",
    company: "AfricInnovate",
    location: "Eket, Akwa Ibom",
    period: "2025 – 2026",
    responsibilities: [
      "Coordinated digital content activities across marketing and technology teams.",
      "Created and maintained digital content aligned with organizational campaigns, audiences, and growth objectives.",
      "Reviewed content performance metrics and refined messaging to improve conversion-focused content.",
      "Managed digital content campaigns that increased social media engagement by 20%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    location: "Remote",
    period: "2025 – Present",
    responsibilities: [
      "Manage development tasks, test website functionality, document implementation details, and troubleshoot issues.",
      "Collaborate with designers and stakeholders to translate requirements into functional digital experiences.",
      "Use Git-based version control and digital tools to maintain and update projects.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "AfricInnovate",
    location: "Eket, Akwa Ibom",
    period: "2024 – 2025",
    responsibilities: [
      "Supported updates to web content and frontend components for digital initiatives.",
      "Conducted functional testing and documented implementation details.",
      "Debugged issues across browsers and devices and supported routine website maintenance.",
    ],
  },
  {
    role: "Computer Operator",
    company: "Apitex ICT Global",
    location: "Nigeria",
    period: "2020 – 2022",
    responsibilities: [
      "Performed data processing, file organization, backups, and system updates.",
      "Monitored and maintained computer systems to support reliable operations.",
      "Followed access-control and data-security procedures when handling digital information.",
      "Supported users with routine computer operations and technical troubleshooting.",
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
    description: "Building and maintaining digital experiences",
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
    description: "Content, campaigns and digital growth",
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
    description: "Design and creative production tools",
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
    description: "Organizing information and supporting daily operations",
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
    description: "Office productivity applications",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
  {
    category: "Communication & Work Habits",
    description: "Professional collaboration and support",
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

function ResumePage() {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <motion.div
          className="resume-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="resume-topline">
            <span>PROFILE / 001</span>
            <span>BLESSING NDEKEHEDEHE</span>
          </div>

          <div className="resume-heading-row">
            <h1>RESUME<span>.</span></h1>

            <a
              href="/blessing-ndekhedehe-cv.pdf"
              download="Blessing-Ndekhedehe-CV.pdf"
              className="resume-download"
            >
              <ArrowDownToLine size={17} />
              <span>Download CV</span>
            </a>
          </div>

          <p className="resume-intro">
            I'm Blessing Ndekhedehe, a Web Developer and Digital
            Marketer with experience in frontend development, digital
            content coordination, computer operations and customer-facing
            support. I combine technical and digital skills to build
            useful experiences and support business growth.
          </p>
        </motion.div>
      </section>

      <section className="resume-content">
        <div className="resume-container">
          {/* EXPERIENCE */}
          <section className="resume-section">
            <div className="resume-section-heading">
              <span>01</span>
              <h2>Experience</h2>
            </div>

            <div className="resume-entries">
              {experiences.map((item) => (
                <article className="resume-entry" key={`${item.role}-${item.company}`}>
                  <div className="resume-entry-period">
                    {item.period}
                  </div>

                  <div className="resume-entry-main">
                    <h3>{item.role}</h3>
                    <p className="resume-entry-company">
                      {item.company}
                    </p>

                    <ul className="resume-responsibilities">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="resume-entry-location">
                    {item.location}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="resume-section">
            <div className="resume-section-heading">
              <span>02</span>
              <h2>Education</h2>
            </div>

            <div className="resume-entries">
              {education.map((item) => (
                <article className="resume-entry" key={item.institution}>
                  <div className="resume-entry-period">
                    {item.period}
                  </div>

                  <div className="resume-entry-main">
                    <h3>{item.qualification}</h3>
                    <p className="resume-entry-company">
                      {item.institution}
                    </p>
                  </div>

                  <div className="resume-entry-location">
                    {item.location}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="resume-section">
            <div className="resume-section-heading">
              <span>03</span>
              <h2>Skills</h2>
            </div>

            <div className="resume-entries resume-skill-entries">
              {skillGroups.map((group) => (
                <article className="resume-entry" key={group.category}>
                  <div className="resume-entry-period">
                    Expertise
                  </div>

                  <div className="resume-entry-main">
                    <h3>{group.category}</h3>
                    <p className="resume-entry-company">
                      {group.description}
                    </p>

                    <div className="resume-skill-list">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="resume-entry-location">
                    {group.skills.length} skills
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ADDITIONAL INFORMATION */}
          <section className="resume-section">
            <div className="resume-section-heading">
              <span>04</span>
              <h2>Additional Information</h2>
            </div>

            <div className="resume-entries">
              <article className="resume-entry">
                <div className="resume-entry-period">
                  Location
                </div>

                <div className="resume-entry-main">
                  <h3>Eket, Akwa Ibom State</h3>
                  <p className="resume-entry-company">
                    Nigeria
                  </p>
                </div>

                <div className="resume-entry-location">
                  Work authorization: Nigeria
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="resume-bottom">
        <div className="resume-container">
          <p>HAVE A PROJECT OR OPPORTUNITY?</p>

          <a href="/contact">
            Let's Work Together
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ResumePage;
