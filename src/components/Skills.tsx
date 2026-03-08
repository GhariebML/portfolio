import { motion } from 'motion/react';
import { Code2, Layers, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    description: "Core languages I use to build intelligent systems and applications.",
    skills: [
      "Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML5", "CSS3", "R"
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    description: "Frameworks and libraries that power my machine learning models and web apps.",
    skills: [
      "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "React", "Node.js", "Tailwind CSS", "XGBoost", "Matplotlib"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-indigo-500" />,
    description: "Development tools, platforms, and environments I use daily.",
    skills: [
      "Git", "GitHub", "Docker", "AWS", "Google Colab", "Power BI", "Excel", "VS Code", "Jupyter", "Linux"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Elements matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md"
          >
            <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider font-medium uppercase">
              Expertise
            </span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-50 mb-6 tracking-tight"
          >
            Technical Arsenal
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of the technologies, languages, and tools I leverage to solve complex problems and build robust solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15, ease: "easeOut" }}
              className="bg-[#0a0a0a]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/10 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-500">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-50 mb-3 tracking-wide">
                  {category.title}
                </h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed h-10">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.15) + (skillIndex * 0.05) + 0.3,
                        ease: "backOut"
                      }}
                      className="px-4 py-2 bg-white/5 text-slate-300 text-sm font-medium rounded-full border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
