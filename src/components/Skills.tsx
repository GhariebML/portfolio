import { motion } from 'motion/react';
import { Code2, Layers, Wrench } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    description: "Core languages I use to build intelligent systems and applications.",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
      { name: "R", level: 70 },
      { name: "HTML5/CSS3", level: 85 }
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    description: "Frameworks and libraries that power my machine learning models and web apps.",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "Pandas/NumPy", level: 95 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-indigo-500" />,
    description: "Development tools, platforms, and environments I use daily.",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "Google Colab", level: 95 },
      { name: "Power BI", level: 85 },
      { name: "Jupyter", level: 95 },
      { name: "Linux", level: 80 }
    ]
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="text-sm font-bold text-slate-900 dark:text-white">{payload[0].payload.name}</p>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Proficiency: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background Elements matching Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/30 backdrop-blur-md transition-colors duration-300"
          >
            <span className="text-blue-600 dark:text-blue-400 font-mono text-xs md:text-sm tracking-wider font-medium uppercase transition-colors duration-300">
              Expertise
            </span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6 tracking-tight transition-colors duration-300"
          >
            Technical Arsenal
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg transition-colors duration-300"
          >
            A comprehensive overview of the technologies, languages, and tools I leverage to solve complex problems and build robust solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.6, delay: categoryIndex * 0.15, ease: "easeOut" }
                },
                hover: {
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                },
                tap: {
                  scale: 0.97,
                  transition: { duration: 0.1 }
                }
              }}
              className="bg-white dark:bg-[#0a0a0a]/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-colors duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  variants={{
                    hover: {
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5, ease: "easeInOut" }
                    },
                    tap: { scale: 0.9 }
                  }}
                  className="w-14 h-14 bg-white dark:bg-[#111] rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-slate-100 dark:border-white/10 group-hover:border-blue-200 dark:group-hover:border-blue-500/30 transition-colors duration-500"
                >
                  {category.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 tracking-wide transition-colors duration-300">
                  {category.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed h-10 transition-colors duration-300">
                  {category.description}
                </p>
                
                <div className="h-64 w-full mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={category.skills}>
                      <PolarGrid stroke={theme === 'dark' ? '#334155' : '#e2e8f0'} />
                      <PolarAngleAxis 
                        dataKey="name" 
                        tick={{ fill: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: 11 }} 
                      />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Tooltip content={<CustomTooltip />} />
                      <Radar
                        name="Skills"
                        dataKey="level"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.5}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
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
