import React, { useState } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";

const skills = {
  Languages: ["Python", "Java", "JavaScript"],
  "Developer Tools": ["VS Code", "Jupyter Notebooks", "IntelliJ IDEA"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React"],
  "Soft Skills": [
    "Presentation Skills",
    "Communication Skills",
    "Event Promotion",
    "Team Collaboration"
  ]
};

const projects = [
  {
    title: "Plagiarism Checker (Main Project)",
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
    title: "TextUtils Web App",
    category: "Web Development",
    description: (
      <>
        <ul>
          <li>Developed a text manipulation web app with features like uppercase, lowercase, title case, and clear text.</li>
          <li>Integrated dark mode toggle for improved user experience.</li>
        </ul>
      </>
    ),
    tools: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/khushi1315/TEXTUTILS",
    LiveSite: "https://textutils-20so.onrender.com/",
    date: " April 2025"
  },
  {
    title: "Gym Website",
    category: "Web Development",
    description: (
      <>
        <ul>
          <li>Developed a responsive gym website under mentorship program by TechNeeds.</li>
          <li>LiveSite <a href="https://khushi1315.github.io/GymWebsite/" target="_blank" rel="noopener noreferrer">here</a></li>
        </ul>
      </>
    ),
    tools: ["HTML", "CSS"],
    github: "https://github.com/khushi1315/GymWebsite",
    LiveSite: "https://khushi1315.github.io/GymWebsite/",
    date: "January 2025"
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
            <h2>I’M A FRONT-END DEVELOPER</h2>
            <p>
              I’m a second year student seeking front-end developer internship. I am exploring machine learning and have completed a fraud detection project.
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
            Hi! I’m a second-year Computer Science and Artificial Intelligence (CSE-AI) student at IGDTUW, graduating in 2027. I’m deeply passionate about technology and continuously strive to improve my skills, particularly in full-stack development and machine learning.

            I believe in giving my best to everything I do — I’m the kind of person who can’t leave a task halfway. For instance, while learning machine learning, I realized that building models wasn't enough without a user interface. That drove me to start learning web development, so I could create complete, user-friendly applications end-to-end.

            Outside of coding, I have a creative side — I love sketching that tought me detail to attention and perfection.

            I’m always looking to grow, collaborate, and take on new challenges that help me evolve both technically and creatively.
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
