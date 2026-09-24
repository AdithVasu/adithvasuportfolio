
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <div className="min-h-screen bg-[#f3f0e8] font-sans text-stone-900">
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 pt-4">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
