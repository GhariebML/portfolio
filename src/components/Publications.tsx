import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const publications = [
  {
    title: "Cutting-edge development in waste-recycled nanomaterials for energy storage and conversion applications",
    authors: "", // Add authors here if needed later
    journal: "Nanotechnology Reviews",
    date: "Jun 21, 2022",
    description: "This review discussed the recent developments in waste-derived NMs, divided into three categories: carbon-based NMs, metal/metal oxides, and hybrid NMs, due to their cost-effectiveness, technical and economic feasibility, abundance, availability, simplicity, environmental benefits, and eco-friendliness energy applications. Millions of tons of various wastes are produced annually, with just a low percentage recycled globally.",
    link: "https://www.degruyterbrill.com/document/doi/10.1515/ntrev-2022-0129/html",
    icon: BookOpen
  }
];

const Publications = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="publications" ref={containerRef} className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
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
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3 flex items-center justify-center gap-2 transition-colors duration-300">
              <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400 transition-colors duration-300"></span>
              Research
              <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400 transition-colors duration-300"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
              Publications
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Contributing to the scientific community through rigorous research and peer-reviewed publications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              style={{ y, opacity }}
              className="group relative bg-white dark:bg-[#111] rounded-3xl p-8 border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <pub.icon className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {pub.title}
                    </h4>
                    {pub.authors && (
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 transition-colors duration-300">
                        {pub.authors}
                      </p>
                    )}
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                      {pub.journal} &bull; {pub.date}
                    </p>
                  </div>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                    aria-label={`Read ${pub.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 transition-colors duration-300">
                  {pub.description}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm w-fit"
                >
                  Show publication
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
