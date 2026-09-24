import { projects } from '../data/Projects';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-emerald-200 py-10">
      <h2 className="text-3xl font-semibold text-emerald-900 mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-between rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-emerald-950">{project.title}</h3>
                <span className="text-xs text-emerald-600 font-medium">{project.period}</span>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-emerald-900/90 text-sm leading-relaxed">
                {project.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;