import { motion } from 'motion/react';
import { Leaf, Globe, Zap } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="vision" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background Elements matching Hero/Skills */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-slate-200 dark:border-blue-500/30 bg-slate-50 dark:bg-blue-950/30 backdrop-blur-md transition-colors duration-300">
              <span className="text-slate-700 dark:text-blue-400 font-mono text-xs md:text-sm tracking-wider font-medium uppercase transition-colors duration-300">
                Vision
              </span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-900 dark:text-slate-50 transition-colors duration-300">
              AI for a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-blue-400 dark:to-blue-400 transition-colors duration-300">Sustainable Future.</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed transition-colors duration-300">
              I believe that Artificial Intelligence is not just a tool for efficiency, but a crucial lever for achieving the UN Sustainable Development Goals (SDGs). By optimizing resources, predicting environmental shifts, and democratizing access to information, we can build a better world.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 rounded-2xl bg-white dark:bg-[#111]/80 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-slate-50 dark:bg-[#111] p-3 rounded-xl mr-5 border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-blue-500/30 transition-colors">
                  <Leaf className="text-slate-700 dark:text-blue-400 w-6 h-6 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-slate-50 tracking-wide transition-colors duration-300">Climate Action</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">Using ML to optimize energy grids and reduce carbon footprints.</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-2xl bg-white dark:bg-[#111]/80 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-slate-50 dark:bg-[#111] p-3 rounded-xl mr-5 border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-blue-500/30 transition-colors">
                  <Globe className="text-slate-700 dark:text-blue-400 w-6 h-6 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-slate-50 tracking-wide transition-colors duration-300">Global Connectivity</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">Bridging the digital divide through accessible AI solutions.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-white dark:bg-[#111]/80 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-slate-50 dark:bg-[#111] p-3 rounded-xl mr-5 border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-blue-500/30 transition-colors">
                  <Zap className="text-slate-700 dark:text-blue-400 w-6 h-6 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-slate-50 tracking-wide transition-colors duration-300">Innovation</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">Driving industry innovation through responsible AI deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-white dark:bg-[#111]/80 border border-slate-200/60 dark:border-white/5 backdrop-blur-xl flex items-center justify-center p-8 group transition-colors duration-300"
          >
            {/* Subtle hover gradient inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Abstract Globe/Network Visualization Placeholder */}
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="w-80 h-80 border border-slate-300 dark:border-blue-500/20 rounded-full absolute animate-[spin_10s_linear_infinite]" />
               <div className="w-64 h-64 border border-slate-200 dark:border-blue-500/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse] transition-colors duration-300" />
               <div className="w-48 h-48 border border-slate-100 dark:border-white/5 rounded-full absolute animate-[spin_20s_linear_infinite] transition-colors duration-300" />
               <div className="w-32 h-32 bg-gradient-to-br from-slate-200/50 to-slate-100/50 dark:from-blue-600/30 dark:to-blue-600/30 rounded-full blur-2xl absolute transition-colors duration-300" />
               <div className="z-10 text-center bg-white/80 dark:bg-[#050505]/50 px-8 py-6 rounded-2xl backdrop-blur-md border border-slate-200 dark:border-white/10 transition-colors duration-300">
                 <p className="text-3xl font-bold tracking-widest uppercase text-slate-900 dark:text-slate-50 transition-colors duration-300">Impact</p>
                 <p className="text-sm font-mono text-slate-600 dark:text-blue-400 mt-2 tracking-wider transition-colors duration-300">Driven by Data</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
