import { skillCategories } from '../data/Skills';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-emerald-200 py-10">
      <h2 className="text-3xl font-semibold text-emerald-900 mb-8">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx} 
            className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-sm font-semibold text-emerald-950 uppercase tracking-wider mb-4">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;