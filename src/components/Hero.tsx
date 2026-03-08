import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, Briefcase } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);

  const handleOpenResume = (download = false) => {
    setAutoDownload(download);
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    // Reset autoDownload after a short delay so the modal can close cleanly
    setTimeout(() => setAutoDownload(false), 300);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} autoDownload={autoDownload} />
      {/* Background Gradient & Animated Movement */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-900/10 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse duration-[5000ms]" />
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-indigo-900/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay (Subtle Tech Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full pt-20 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 lg:flex-[1.4] text-center lg:text-left">
            
            {/* Name Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md">
                <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider font-medium uppercase">
                  Data Scientist & Applied AI Practitioner
                </span>
              </div>
              
              <h1 className="font-black tracking-tight leading-[0.9] text-slate-50">
                <span className="block text-[12vw] sm:text-[10vw] lg:text-[6.5rem] xl:text-[7.5rem] drop-shadow-xl">
                  MOHAMED
                </span>
                <span className="block text-[12vw] sm:text-[10vw] lg:text-[6.5rem] xl:text-[7.5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
                  GHARIEB
                </span>
              </h1>
              {/* Soft Radial Glow behind Name */}
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
            </motion.div>

            {/* Value Proposition */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300 mb-8 max-w-4xl mx-auto lg:mx-0 leading-tight"
            >
              Transforming Data into Intelligent Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">Sustainable Real-World Impact.</span>
            </motion.h2>
            
            {/* Authority Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 mb-12 text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Data Science</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Applied AI</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Predictive Analytics</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Sustainable Development</span>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Portfolio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => handleOpenResume(false)}
                  className="group inline-flex items-center justify-center px-6 py-4 bg-transparent text-cyan-400 font-semibold rounded-full border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/10 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  <FileText className="mr-2 w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  View Resume
                </button>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center px-6 py-4 bg-transparent text-slate-300 font-semibold rounded-full border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  <Briefcase className="mr-2 w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  Projects
                </a>
              </div>
            </motion.div>

            {/* Let's Build Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-center lg:text-left"
            >
              <a
                href="#contact"
                className="group inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                Let’s Build Intelligent Systems
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 lg:flex-[1.2] relative flex justify-center lg:justify-end w-full max-w-[700px] lg:max-w-none mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-[650px] lg:max-w-[800px]"
            >
              {/* Subtle Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 blur-[60px] rounded-full transform translate-y-4 opacity-60" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative group flex justify-center items-center">
                  {/* Smooth blending container */}
                  <div 
                    className="relative w-full max-w-[650px] lg:max-w-[750px] aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{
                      maskImage: 'radial-gradient(ellipse at 50% 45%, black 50%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 50%, transparent 70%)'
                    }}
                  >
                    <img 
                      src="/mohamed-gharieb.png" 
                      alt="Mohamed Gharieb" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-[10px] text-slate-500 mb-2 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-slate-500/50 to-transparent"
          animate={{ height: [48, 24, 48], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
