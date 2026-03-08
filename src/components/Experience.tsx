import { motion } from 'motion/react';
import { GraduationCap, Award, Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Applied AI Engineer & Data Scientist',
    organization: 'Freelance / Independent Consultant',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Developing end-to-end machine learning solutions for clients. Specializing in predictive analytics, automation, and data visualization. Built and deployed multiple models using Python, TensorFlow, and Scikit-Learn.',
    icon: Briefcase,
    skills: ['Python', 'Machine Learning', 'Predictive Analytics', 'Deployment']
  },
  {
    type: 'education',
    title: 'Data Science & AI Certifications',
    organization: 'Professional Development',
    location: 'Online',
    period: '2023 - 2024',
    description: 'Completed rigorous certification programs to master modern data science workflows, deep learning architectures, and cloud AI services.',
    icon: Award,
    bullets: [
      'IBM Data Science Professional Certificate',
      'Google Advanced Data Analytics Professional Certificate',
      'Microsoft Certified: Azure AI Fundamentals'
    ]
  },
  {
    type: 'education',
    title: 'B.Sc. Physics & Nanotechnology',
    organization: 'University of Science',
    location: 'Campus',
    period: 'Graduated',
    description: 'Focused on computational physics, material simulation, and advanced mathematics. Thesis on nano-scale material properties using simulation models.',
    icon: GraduationCap,
    skills: ['Computational Physics', 'Mathematics', 'Data Analysis', 'Research']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Sticky Header Section */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cyan-400"></span>
                  Career Path
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
                  Experience & <br className="hidden lg:block" /> Education
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  A journey of continuous learning and practical application, bridging the gap between theoretical physics and applied artificial intelligence.
                </p>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors group">
                  Download Full Resume 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10 hidden md:block" />
              
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row gap-6 md:gap-8 group"
                  >
                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-col items-center mt-1 z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-[#050505] shadow-sm transition-colors duration-300 ${
                        item.type === 'work' 
                          ? 'bg-cyan-500 text-[#050505] group-hover:bg-cyan-400' 
                          : 'bg-[#0a0a0a] text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-sm hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="md:hidden w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-50">{item.title}</h4>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 font-medium">
                            <span className="flex items-center text-slate-300">
                              {item.type === 'work' ? <Briefcase className="w-4 h-4 mr-1.5" /> : <GraduationCap className="w-4 h-4 mr-1.5" />}
                              {item.organization}
                            </span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1.5" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 whitespace-nowrap h-fit">
                          <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                          {item.period}
                        </div>
                      </div>

                      <p className="text-slate-400 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {item.bullets && (
                        <ul className="space-y-2 mb-6">
                          {item.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.skills && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                          {item.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
