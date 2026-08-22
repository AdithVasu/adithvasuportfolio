import './App.css'

const projects = [
  {
    number: '01',
    title: 'Nexa Commerce',
    description:
      'A conversion-focused storefront that turns complex product catalogs into a calm, fast shopping experience.',
    tags: ['React', 'TypeScript', 'Stripe'],
    color: 'coral',
  },
  {
    number: '02',
    title: 'Orbit Dashboard',
    description:
      'A real-time analytics workspace helping teams spot the signals that matter without drowning in data.',
    tags: ['Next.js', 'Data viz', 'Design system'],
    color: 'blue',
  },
  {
    number: '03',
    title: 'Form & Function',
    description:
      'A flexible brand system and marketing site for a studio building thoughtful digital products.',
    tags: ['Branding', 'UX', 'Webflow'],
    color: 'yellow',
  },
]

const skills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'CSS', 'Figma']

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {

  return (
    <div className="site-shell">
      <header className="nav container">
        <a className="brand" href="#top" aria-label="Adith Vasu home">
          AV<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:hello@adithvasu.dev">
          <span className="status-dot" /> Available for work
        </a>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">Front-end developer · India</p>
            <h1>I make digital things feel <em>human.</em></h1>
            <p className="hero-intro">
              I’m Adith, a developer who cares about the details between an
              idea and a great experience. I build expressive, useful products
              for the web.
            </p>
            <a className="button button-dark" href="#work">
              See selected work <ArrowUpRight />
            </a>
          </div>
          <div className="hero-art" aria-label="Abstract colorful portrait illustration">
            <div className="sun" />
            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="shape shape-three" />
            <div className="shape shape-four" />
            <span className="art-label">SELECTED<br />OBSERVATIONS<br />2024—25</span>
          </div>
        </section>

        <section className="marquee" aria-label="Services">
          <div className="marquee-track">
            <span>Strategy</span><i>✳</i><span>Interface design</span><i>✳</i>
            <span>Development</span><i>✳</i><span>Strategy</span><i>✳</i>
            <span>Interface design</span><i>✳</i><span>Development</span>
          </div>
        </section>

        <section id="work" className="work container section">
          <div className="section-heading">
            <p className="eyebrow">A few things I’ve made</p>
            <h2>Selected <em>work</em></h2>
            <p className="section-note">Thoughtful work for ambitious people.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.color}`} key={project.title}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  <div className="visual-window">
                    <div className="window-bar"><span /><span /><span /></div>
                    <div className="window-content"><b>{project.title}</b><i /><i /><i /></div>
                  </div>
                  <ArrowUpRight />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-layout">
            <div className="section-heading">
              <p className="eyebrow">A little about me</p>
              <h2>Curious by <em>nature.</em></h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">Good work lives where clarity meets character. I bring a developer’s eye to design and a designer’s curiosity to every line of code.</p>
              <p>Whether I’m shaping a visual language or polishing the last interaction, I’m happiest making things that are simple to use, satisfying to explore, and built to last.</p>
              <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container section">
          <p className="eyebrow">Have a good idea?</p>
          <h2>Let’s make it <em>real.</em></h2>
          <a className="contact-link" href="mailto:hello@adithvasu.dev">hello@adithvasu.dev <ArrowUpRight /></a>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2025 Adith Vasu</span>
        <div><a href="https://github.com/AdithVasu" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
