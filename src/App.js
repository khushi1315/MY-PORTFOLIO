import React, { useState } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";

const skills = {
  Languages: [
    "Java",
    "Python",
    "JavaScript",
    "SQL"
  ],

  Frontend: [
    "React",
    "HTML",
    "CSS",
    "Bootstrap"
  ],

  Backend: [
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js"
  ],

  Databases: [
    "PostgreSQL",
    "MongoDB",
    "Neo4j"
  ],

  Tools: [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Postman"
  ]
};

const projects = [

  {
    title: "Movie Recommendation Web App",
    category: "Web Development / ML",
    description: (
      <>
        <ul>
          <li>Built a movie recommendation web app that suggests similar movies based on fav genre, fav movie.</li>
          <li>Integrated React frontend with Flask and Express.js backends to serve ML-based recommendations.</li>
        </ul>
      </>
    ),
    tools: ["React.js", "Flask", "Express.js"],
    github: "https://github.com/khushi1315/RecommendMovie",
    LiveSite: "https://recommendmovie-xs00.onrender.com/",
    date: " Nov 2025"
  },
  {
    title: "Plagiarism Checker",
    category: "Web Development / AI",
    description: (
      <>
        <ul>
          <li>Developed an AI-based tool to detect text similarity and display plagiarism percentage with emoji feedback.</li>
          <li>Designed a clean, responsive UI and implemented backend string-matching logic.</li>
        </ul>
      </>
    ),
    tools: ["React", "Node.js", "Express", "Python", "AI"],
    github: "https://github.com/khushi1315/plag-checker-app",
    LiveSite: "https://khushi1315.github.io/plag-checker-app/",
    date: "May 2025"
  },
  
  {
    title: "Optimizing Retail Inventory – Multi-Agent System",
    category: "Machine Learning",
    description: (
      <>
        <ul>
          <li>Developed EOQ-based inventory simulator with Flask backend.</li>
          <li>Designed UI with store-wise filtering and visual dashboards.</li>
          <li>Integrated stock alerts (Out of Stock, Low, Healthy) for quick insights.</li>
          <li>Automated EOQ-based restocking using ML predictions.</li>
          <li>Tech Stack: Python, Flask, HTML/CSS/JS, ML, Chart.js, Pandas, Scikit-learn, Git</li>
          <li>LiveSite <a href="https://eoq-inventory-simulation.onrender.com/" target="_blank" rel="noopener noreferrer">here</a></li>
        </ul>
      </>
    ),
    tools: ["Python", "Flask", "ML", "Chart.js", "Pandas", "Scikit-learn"],
    github: "https://github.com/khushi1315/EOQ_Inventory_simulation",
    LiveSite: "https://eoq-inventory-simulation.onrender.com/",
    date: "April 2025"
  },
  {
    title: "Udaan Sakhi – Financial Management Platform",
    category: "Full Stack Web Development",
    description: (
      <>
        <ul>
          <li>Developed a financial management platform to help users monitor income, expenses, savings, and budgeting through an interactive dashboard.</li>

          <li>Built responsive user interfaces with real-time financial insights, charts, and expense tracking.</li>

          <li>Implemented secure authentication and intuitive navigation for a seamless user experience.</li>

          <li>Designed to promote financial awareness and smarter money management.</li>
        </ul>
      </>
    ),
    tools: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js"
    ],
    github: "https://github.com/khushi1315/Smart_Inventory_Manager",
    LiveSite: "https://udaan-sakhi-finance-main.onrender.com/",
    date: "2025"
  },
  {
    title: "Fraud Detection ML Model",
    category: "Machine Learning",
    description: (
      <>
        <ul>
          <li>Preprocessed the dataset using RobustScaler to handle skewed transaction data.</li>
          <li>Performed data visualization using pie charts, histograms, and KDE plots.</li>
          <li>Handled class imbalance by undersampling legitimate transactions.</li>
          <li>Built and trained a Logistic Regression model to predict fraudulent transactions.</li>
          <li>Evaluated model performance using accuracy and classification report.</li>
        </ul>
      </>
    ),
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    drive: "https://colab.research.google.com/drive/1BiF3fqjUtkOvmbpq1nOBofU-sKIF9A_T?usp=sharing##scrollTo=bc9ccf86-a638-48f0-9645-2d3eef49b7d2",
    date: "August 2024"
  }
];

const experience = [
  {
    period: "June 2026 – Present",
    role: "Software Engineering Intern",
    company: "CCRAS (Central Council for Research in Ayurvedic Sciences)",
    description: (
      <>
        <ul>
          <li>Contributed to RECAP/KRITA, a Literature Evidence & RAG Platform for scientific research.</li>

          <li>Designed PostgreSQL schemas and implemented JWT authentication.</li>

          <li>Developed multi-source academic paper ingestion pipelines integrating PubMed, OpenAlex, CrossRef, AYUSH, medRxiv and bioRxiv.</li>

          <li>Configured Docker-based backend infrastructure supporting scalable research data ingestion.</li>
        </ul>
      </>
    )
  },
  {
    period: "April 2025 – Present",
    role: "Python and Machine Learning Intern",
    company: "Centre of Excellence- AI, IGDTUW",
    description: (
      <>
        <ul>
          <li>Worked on Fraud Detection Machine Learning project.</li>
        </ul>
      </>
    )
  }
];
const achievements = [
  {
    period1: "Oct 2024",
    role1: "GirlScript Summer of Code 2024 Contributor",

    description1: (
      <>
        <ul>
          <li>Contributed to multiple open-source projects under GSSoC 2024.</li>
          <li>Improved features, resolved bugs, and enhanced project documentation.</li>
          <li>Collaborated with teams using GitHub, version control, and agile methodologies.</li>
          <li>Engaged in code reviews and discussions to improve project quality.</li>
        </ul>
      </>
    ),
  },
];


const certifications = [
  {
    name: "Aptitude",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1h8WisIN29ejCz5wHJIQOeO9sc-x1b3aC/view?usp=drive_link"
  },
  {
    name: "Python",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1DWBixubgiHL-CbnyD7FDjie_rodj0-j7/view?usp=drive_link"
  },
  {
    name: "Developing Soft Skills and Personality",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1ztUI6qzzRofLShJMUdBbftkLhyAwHTDZ/view?usp=sharing"
  },
  {
    name: "Complete SQL Bootcamp",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1oWY1Ag1_HtycKe468Q70b2_o4K6Iqy4h/view?usp=drive_link"
  }
];

const codingProfiles = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/khushi2507/"
  },

];

const contacts = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/khushi-%E2%9C%A8-b96625286/"
  },
  {
    name: "GitHub",
    link: "https://github.com/khushi1315"
  },
  {
    name: "Email",
    link: "mailto:officialkhushi2024@gmail.com"
  }
];

// Expandable project card
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      className={`project-card${expanded ? " expanded" : ""}`}
      whileHover={{ scale: 1.03 }}
      layout
      onClick={() => setExpanded((e) => !e)}
    >
      <h3>{project.title}</h3>
      <span className="category">{project.category}</span>
      <span className="date">{project.date}</span>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : "40px", overflow: "hidden" }}
        transition={{ duration: 0.3 }}
        className="project-desc"
      >
        {project.description}
      </motion.div>
      {expanded && (
        <motion.div className="project-details" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="tools">
            <strong>Tools:</strong> {project.tools.join(", ")}
          </div>
          <div className="links">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {project.LiveSite && <a href={project.LiveSite} target="_blank" rel="noopener noreferrer">LiveSite</a>}
            {project.drive && <a href={project.drive} target="_blank" rel="noopener noreferrer">Drive</a>}
          </div>
        </motion.div>
      )}

      <div className="expand-indicator">{expanded ? "View less ▲" : "View more ▼"}</div>
    </motion.div>
  );
}

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      {/* Navbar */}
      <Navbar expand="md" bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">KHUSHI</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              <ScrollLink to="home" smooth duration={500} className="nav-link" activeClass="active" spy>HOME</ScrollLink>
              <ScrollLink to="about" smooth duration={500} className="nav-link" activeClass="active" spy>ABOUT</ScrollLink>
              <ScrollLink to="skills" smooth duration={500} className="nav-link" activeClass="active" spy>SKILLS</ScrollLink>
              <ScrollLink to="projects" smooth duration={500} className="nav-link" activeClass="active" spy>PROJECTS</ScrollLink>
              <ScrollLink to="experience" smooth duration={500} className="nav-link" activeClass="active" spy>EXPERIENCE</ScrollLink>
              <ScrollLink to="achievement" smooth duration={500} className="nav-link" activeClass="active" spy>ACHIEVEMENTS</ScrollLink>
              <ScrollLink to="certifications" smooth duration={500} className="nav-link" activeClass="active" spy>CERTIFICATIONS</ScrollLink>
              <ScrollLink to="codingprofiles" smooth duration={500} className="nav-link" activeClass="active" spy>CODING PROFILES</ScrollLink>
              <ScrollLink to="contact" smooth duration={500} className="nav-link" activeClass="active" spy>CONTACT</ScrollLink>
              <Nav.Link as="button" onClick={() => setDark((d) => !d)} style={{ background: "none", border: "none" }}>
                {dark ? "TOGGLE MODE 🌙" : "TOGGLE MODE ☀️"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <Element name="home" className="section home-section">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="intro">
            <h1>HI, I'M<br />KHUSHI</h1>
            <h2>Software Engineer | Full-Stack Developer | AI & Backend Enthusiast</h2>
            <p>
              <p>
                Hi, I'm Khushi 👋 A fourth-year Computer Science (AI) student at IGDTUW with experience building full-stack applications, backend systems, and AI-powered solutions. I enjoy solving real-world problems through scalable software, from research intelligence platforms to inventory optimization and fintech applications.
              </p>
            </p>

            <button
              className="cta-btn"
              onClick={() =>
                scroller.scrollTo("projects", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart"
                })
              }
            >
              VIEW MY WORK
            </button>

          </div>
          <motion.div
            className="profile-pic-border"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/Images/profile.png" alt="Profile" className="profile-pic" />
          </motion.div>
        </motion.div>
      </Element>

      {/* About Me Section */}
      <Element name="about" className="section about-section">
        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>About Me</h2>
          <p>
            <p>
              I'm a fourth-year B.Tech Computer Science (AI) student at IGDTUW passionate about software engineering, backend development, and AI-driven applications. Over the past few years, I've worked on full-stack web applications, machine learning systems, and large-scale research infrastructure.

              Recently, I contributed to RECAP/KRITA, the Literature Evidence & RAG Platform developed under CCRAS, where I worked on backend infrastructure, PostgreSQL database design, Docker-based deployment, JWT authentication, and multi-source academic paper ingestion from platforms including PubMed, OpenAlex, CrossRef, and AYUSH.

              I enjoy building products that solve practical problems—from optimizing retail inventory and financial management to AI-powered recommendation systems. I'm continuously learning modern backend technologies and enjoy collaborating in team environments while writing clean, scalable software.
            </p>

          </p>
        </motion.div>
      </Element>

      {/* Skills Section */}
      <Element name="skills" className="section">
        <motion.div className="skills-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Skills</h2>
          <div className="skills-groups">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <ul>
                  {items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="section">
        <motion.div className="projects-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Projects</h2>
          <div className="project-cards">
            {projects.map((p) => <ProjectCard project={p} key={p.title} />)}
          </div>
        </motion.div>
      </Element>

      {/* Experience Section */}
      <Element name="experience" className="section ">
        <motion.div className="experience-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((exp, idx) => (
              <motion.div className="timeline-card" key={idx} initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.15 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="period">{exp.period}</span>
                  <h3>{exp.role} <span className="company">@ {exp.company}</span></h3>
                  <div>{exp.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Element>
      {/* Achievement Section */}
      <Element name="achievement" className="section ">
        <motion.div className="achievement-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Achievements</h2>
          <div className="timeline">
            {achievements.map((exp, idx) => (
              <motion.div className="timeline-card" key={idx} initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.15 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="period">{exp.period1}</span>
                  <h3>{exp.role1} <span className="company"></span></h3>
                  <div>{exp.description1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* Certifications Section */}
      <Element name="certifications" className="section ">
        <motion.div className="certifications-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Certifications</h2>
          <div className="cert-badges">
            {certifications.map((cert, idx) => (
              <motion.a
                className="cert-badge"
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
              >
                <span className="cert-title">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* Coding Profiles Section */}
      <Element name="codingprofiles" className="section">
        <motion.div className="codingprofiles-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Coding Profiles</h2>
          <div className="coding-links">
            {codingProfiles.map((profile, idx) => (
              <a href={profile.link} key={idx} target="_blank" rel="noopener noreferrer" className="coding-link">
                {profile.name}
              </a>
            ))}
          </div>
        </motion.div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="section">
        <motion.div className="contact-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2>Contact</h2>
          <div className="contact-links">
            {contacts.map((contact, idx) => (
              <a href={contact.link} key={idx} target="_blank" rel="noopener noreferrer" className="contact-link">
                {contact.name}
              </a>
            ))}
          </div>
        </motion.div>
      </Element>
    </div>
  );
}

export default App;
