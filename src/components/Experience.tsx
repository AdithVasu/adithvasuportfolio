import { experiences } from '../data/Experiences';

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-emerald-200 py-10">
      <h2 className="text-3xl font-semibold text-emerald-900 mb-8">Experience</h2>

      <div className="flex flex-col gap-6 max-w-4xl">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 min-w-14 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center overflow-hidden p-2">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<span class="font-bold text-emerald-700 text-lg">${exp.company[0]}</span>`;
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-950">{exp.role}</h3>
                  <p className="text-emerald-800 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="text-left sm:text-right text-sm text-emerald-600">
                <p className="font-semibold">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 mt-4 text-emerald-900/90 text-sm leading-relaxed">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;