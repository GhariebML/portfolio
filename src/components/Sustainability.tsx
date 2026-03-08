import { motion } from 'motion/react';
import { Leaf, Globe, Zap } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="vision" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Elements matching Hero/Skills */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
              <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider font-medium uppercase">
                Vision
              </span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-50">
              AI for a <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sustainable Future.</span>
            </h3>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I believe that Artificial Intelligence is not just a tool for efficiency, but a crucial lever for achieving the UN Sustainable Development Goals (SDGs). By optimizing resources, predicting environmental shifts, and democratizing access to information, we can build a better world.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 rounded-2xl bg-[#0a0a0a]/80 border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-[#111] p-3 rounded-xl mr-5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Leaf className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-50 tracking-wide">Climate Action</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Using ML to optimize energy grids and reduce carbon footprints.</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-2xl bg-[#0a0a0a]/80 border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-[#111] p-3 rounded-xl mr-5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Globe className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-50 tracking-wide">Global Connectivity</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Bridging the digital divide through accessible AI solutions.</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-[#0a0a0a]/80 border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="bg-[#111] p-3 rounded-xl mr-5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Zap className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-50 tracking-wide">Innovation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Driving industry innovation through responsible AI deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-xl flex items-center justify-center p-8 group"
          >
            {/* Subtle hover gradient inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Abstract Globe/Network Visualization Placeholder */}
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="w-80 h-80 border border-blue-500/20 rounded-full absolute animate-[spin_10s_linear_infinite]" />
               <div className="w-64 h-64 border border-cyan-500/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
               <div className="w-48 h-48 border border-white/5 rounded-full absolute animate-[spin_20s_linear_infinite]" />
               <div className="w-32 h-32 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-2xl absolute" />
               <div className="z-10 text-center bg-[#050505]/50 px-8 py-6 rounded-2xl backdrop-blur-md border border-white/10">
                 <p className="text-3xl font-bold tracking-widest uppercase text-slate-50">Impact</p>
                 <p className="text-sm font-mono text-cyan-400 mt-2 tracking-wider">Driven by Data</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
