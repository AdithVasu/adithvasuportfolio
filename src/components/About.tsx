const About = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t border-emerald-200 py-10">
      <h2 className="text-3xl font-semibold text-emerald-900">About</h2>
      <div className="mt-6 w-full rounded-xl border border-emerald-100 bg-white p-6 text-emerald-800 shadow-sm sm:p-8">
        <p className="whitespace-normal break-words leading-relaxed">
          I&apos;m a 4th-year undergraduate studying CS & Statistics and an incoming CS Master&apos;s student at Washington University in St. Louis. I specialize in backend engineering, frontend development, and data pipelines.
        </p>
        <p className="whitespace-normal break-words leading-relaxed">
          Previously, I was a Software Engineering Intern at Reinsurance Group of America, where I worked on API testing and internal tooling.
        </p>
        <p className="whitespace-normal break-words leading-relaxed">
          Feel free to explore my site to check out my experience, skills, and recent projects!
        </p>
      </div>
    </section>
  )
}

export default About;