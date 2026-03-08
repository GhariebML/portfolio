import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';

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
  return (
    <section id="publications" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-600"></span>
              Research
              <span className="w-8 h-[2px] bg-cyan-600"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Publications
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Contributing to the scientific community through rigorous research and peer-reviewed publications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-cyan-200 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 group-hover:scale-110 transition-transform duration-300">
                <pub.icon className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {pub.title}
                    </h4>
                    {pub.authors && (
                      <p className="text-sm font-medium text-slate-500 mb-1">
                        {pub.authors}
                      </p>
                    )}
                    <p className="text-sm text-cyan-600 font-semibold">
                      {pub.journal} &bull; {pub.date}
                    </p>
                  </div>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-cyan-50 hover:text-cyan-600 transition-colors shrink-0"
                    aria-label={`Read ${pub.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {pub.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
