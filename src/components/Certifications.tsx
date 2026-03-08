import { motion } from 'motion/react';
import { BadgeCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "2023",
    icon: BadgeCheck,
    link: "https://www.credly.com/badges/a701ce1c-e57e-4575-a744-45a82c2f9e28/linked_in_profile"
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    icon: BadgeCheck,
    link: "#"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    icon: BadgeCheck,
    link: "#"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    icon: BadgeCheck,
    link: "https://www.credly.com/earner/earned/badge/42249da2-aa04-4109-9679-a7140526356a"
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    date: "2023",
    icon: BadgeCheck,
    link: "https://www.credly.com/earner/earned/badge/631028b4-7231-42b1-b473-2280f8955d6b"
  },
  {
    title: "Aspire Leaders Program",
    issuer: "Aspire Institute",
    date: "2023",
    icon: BadgeCheck,
    link: "https://drive.google.com/file/d/1CvRm8ryX-l0O5wnLjSShLj7t7LkiCXK4/view"
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-slate-700 dark:text-blue-400 uppercase mb-3 flex items-center justify-center gap-2 transition-colors duration-300">
              <span className="w-8 h-[2px] bg-slate-700 dark:bg-blue-400 transition-colors duration-300"></span>
              Credentials
              <span className="w-8 h-[2px] bg-slate-700 dark:bg-blue-400 transition-colors duration-300"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Licenses & Certifications
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Continuous learning is at the core of my journey. Here are some of the professional certifications I have earned to stay at the forefront of AI and Data Science.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-[#111] rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-sm hover:border-slate-300 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-blue-900/20 text-slate-700 dark:text-blue-400 flex items-center justify-center border border-slate-200 dark:border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-6 h-6" />
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-blue-400 transition-colors"
                  aria-label={`Verify ${cert.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex-1">
                {cert.link && cert.link !== "#" ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hover:underline">
                      {cert.title}
                    </h4>
                  </a>
                ) : (
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                )}
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-4 transition-colors duration-300">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-auto transition-colors duration-300">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 transition-colors duration-300">
                  Issued {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
