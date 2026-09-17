import { useEffect, useMemo, useState } from 'react'
import ImagePlaceholder from './components/ImagePlaceholder.jsx'
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from './components/Icons.jsx'
import {
  careerFacts,
  certifications,
  experience,
  navItems,
  projects,
  skillGroups,
} from './data.js'

const links = {
  github: 'https://github.com/ZisanAalam',
  linkedin: 'https://www.linkedin.com/in/zisan-aalam',
  email: 'mailto:aalamzisan@gmail.com',
  resume: './resume/zisan-aalam-resume.pdf',
}

function SectionHeading({ label, title, copy, action }) {
  return (
    <div className="section-heading reveal">
      <p className="section-label">{label}</p>
      <div className="section-title-row">
        <div>
          <h2>{title}</h2>
          {copy && <p className="section-copy">{copy}</p>}
        </div>
        {action}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="Zisan Aalam home">
            <span className="brand-name">Zisan Aalam</span>
            <span className="brand-role">Software Engineer</span>
          </a>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle colour theme"
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <button
              className="icon-button mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal visible">
            <p className="availability"><span /> Adelaide, South Australia · Open to software engineering roles</p>
            <h1>Software Engineer | Full-Stack • Cloud • AI/ML</h1>
            <p className="hero-lead">Software Engineer building full-stack applications, cloud systems and AI/ML solutions.</p>
            <p className="hero-support">
              Software Engineer with 3+ years of experience building and supporting full-stack applications, REST APIs, microservices and AWS-based systems. Experienced across Java, Node.js, React, Angular, Vert.x, databases, automation and cloud services, with postgraduate study in machine learning, Generative AI, distributed systems and secure software engineering.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <ArrowRight /></a>
              <a className="button secondary" href={links.resume} target="_blank" rel="noreferrer">
                Download Resume <Download />
              </a>
            </div>

            <div className="hero-links" aria-label="Professional links">
              <a href={links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a href={links.email}><Mail /> Email</a>
            </div>
          </div>

          <div className="hero-photo reveal visible">
            <ImagePlaceholder
              src={`${import.meta.env.BASE_URL}images/profile.png`}
              alt="Zisan Aalam, Software Engineer"
              label="Professional portrait"
              note="Add public/images/profile.png"
              ratio="4 / 5"
              fit="cover"
              priority
            />
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-shell about-grid">
            <div className="about-copy reveal">
              <p className="section-label">About me</p>
              <h2>I design and deliver software that feels dependable, useful and scalable.</h2>
            </div>
            <div className="about-story reveal">
              <p>
                I enjoy turning complex technical problems into reliable, maintainable software. My experience spans backend services, cloud infrastructure, data-intensive applications and full-stack development, while my postgraduate work has expanded into AI/ML, distributed systems and secure software engineering.
              </p>
              <div className="about-signals">
                <span>Backend systems</span>
                <span>Cloud delivery</span>
                <span>AI & ML</span>
              </div>
            </div>
          </div>
        </section>

        <section className="facts section-shell" aria-label="Career summary">
          {careerFacts.map((fact) => (
            <div className="fact reveal" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </section>

        <section className="section-shell content-section" id="experience">
          <SectionHeading
            label="Experience"
            title="Commercial software engineering experience"
            copy="The work below is the part of my background I want hiring teams to see first: production systems, migrations, automation and ongoing support."
          />

          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-item reveal" key={`${job.company}-${job.role}`}>
                <div className="experience-meta">
                  <p className="experience-period">{job.period}</p>
                  <p>{job.location}</p>
                </div>
                <div className="experience-content">
                  <div className="experience-heading">
                    <h3>{job.role}</h3>
                    <p className="company-name">{job.company}</p>
                    <div className="company-details">
                      <span className="experience-period">{job.period}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="job-summary">{job.summary}</p>
                  <ul className="bullet-list">
                    {job.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="tags" aria-label={`${job.company} technologies`}>
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-shell content-section">
            <SectionHeading
              label="Projects"
              title="Selected work across systems, security and AI"
              copy="I focus on problem-driven engineering: building reliable systems, secure architectures, data-intensive services and applied machine-learning solutions with measurable technical impact."
              action={<a className="text-link" href={links.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a>}
            />

            <div className="projects-list">
              {projects.map((project, index) => (
                <article className={`project-card reveal ${project.featured ? 'featured' : ''}`} key={project.title}>
                  <div className="project-image">
                    <ImagePlaceholder
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.imageAlt || project.imageLabel}
                      label={project.imageLabel}
                      note={project.imageNote}
                      ratio="16 / 10"
                      fit="contain"
                    />
                  </div>
                  <div className="project-content">
                    <p className="project-meta">{project.meta}</p>
                    <h3>{project.title}</h3>
                    {project.partner && <p className="project-partner">Industry Partner: {project.partner}</p>}
                    <p className="project-description">{project.description}</p>
                    <ul className="project-details">
                      {project.details.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="tags">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell content-section" id="skills">
          <SectionHeading
            label="Skills"
            title="Technical capabilities across backend, cloud and intelligent systems"
            copy="My skill set is centred on backend engineering and Java-based software development, with strong supporting capability in AWS cloud delivery, data-intensive systems and applied AI/ML solutions."
          />

          <div className="skills-list">
            {skillGroups.map((group) => (
              <div className="skill-row reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-shell content-section">
            <SectionHeading
              label="Education"
              title="Computer science education"
              copy="My postgraduate study has added security, distributed systems, AI/ML and industry research to my professional software engineering background."
            />

            <div className="education-list">
              <article className="education-item reveal">
                <div>
                  <p className="education-period">2025 - Current</p>
                  <h3>Master of Computer Science</h3>
                  <p>The University of Adelaide · Adelaide, SA</p>
                </div>
                <div className="education-detail">
                  <p><strong>GPA 6.417 / 7.0</strong></p>
                  <p>
                    <strong>Current:</strong> Generative Artificial Intelligence, Computer Networking, ICT Master Capstone Project
                  </p>
                  <p>
                    <strong>Selected completed study:</strong> Machine Learning Algorithms, Advanced Topics in AI & ML, Distributed Systems, Event-Driven Computing, Secure Programming, Secure Software Engineering, Specialised Programming
                  </p>
                </div>
              </article>

              <article className="education-item reveal">
                <div>
                  <p className="education-period">2017 - 2021</p>
                  <h3>Bachelor of Computer Science and Engineering</h3>
                  <p>Vellore Institute of Technology · India</p>
                </div>
                <div className="education-detail">
                  <p><strong>CGPA 8.47 / 10</strong></p>
                  <p>Graduated with a strong foundation in software engineering, data structures,
                  computer systems, and applied computing.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell certifications-section">
          <div className="certifications reveal">
            <div>
              <p className="section-label">Additional learning</p>
              <h2>Certifications</h2>
            </div>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <a href={cert.url} target="_blank" rel="noreferrer">{cert.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-grid reveal">
            <div>
              <p className="section-label">Contact</p>
              <h2>Interested in working together?</h2>
              <p>
                I’m currently seeking opportunities in software engineering, cloud engineering and AI/ML, with a particular interest in backend systems, cloud platforms, APIs and AI-enabled applications.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={links.email}>Email me <ArrowUpRight /></a>
              <p className="location"><MapPin /> Adelaide, South Australia</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-shell footer-grid">
          <div>
            <strong>Zisan Aalam</strong>
            <p>Software Engineer · Adelaide, Australia</p>
          </div>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
          <span>© {year}</span>
        </div>
      </footer>
    </>
  )
}

export default App
