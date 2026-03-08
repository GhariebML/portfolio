import { motion } from 'motion/react';
import { Database, Brain, Code, Globe } from 'lucide-react';

const stats = [
  { label: 'ML Models Built', value: '50+', icon: Brain },
  { label: 'Projects Delivered', value: '30+', icon: Globe },
  { label: 'Technologies Used', value: '20+', icon: Code },
  { label: 'Data Analyses', value: '100+', icon: Database },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-700 dark:text-blue-400 uppercase mb-3 flex items-center gap-2 transition-colors duration-300">
              <span className="w-8 h-[2px] bg-slate-700 dark:bg-blue-400 transition-colors duration-300"></span>
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              From Physics to Applied AI: <br />
              <span className="text-slate-500 dark:text-slate-400 transition-colors duration-300">A Journey of Analytical Discovery.</span>
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              <p>
                My journey began in the rigorous world of Physics and Nanotechnology, where I developed a deep appreciation for first-principles thinking and complex system modeling.
              </p>
              <p>
                Transitioning into Applied AI and Data Science was a natural evolution—applying the same analytical rigor to solve challenges and uncover hidden patterns in data.
              </p>
              <p>
                Today, I focus on building scalable machine learning solutions and AI-driven systems that not only perform technically but drive tangible impact, with a strong commitment to sustainability and ethical AI development.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/10 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">Education</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">B.Sc. in Physics & Nanotechnology</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1 transition-colors duration-300">Focus</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">AI Systems, Sustainability, Data Strategy</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-[#111] rounded-3xl border border-slate-200/60 dark:border-white/10 hover:border-slate-300 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 group shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 dark:border-blue-500/20 group-hover:scale-110 transition-transform text-slate-700 dark:text-blue-400">
                  <stat.icon size={24} />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{stat.value}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
