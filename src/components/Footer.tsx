import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-slate-400 py-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tight text-slate-50">
              MG<span className="text-cyan-400">.</span>
            </a>
            <p className="text-sm mt-2 max-w-xs text-slate-400">
              Building intelligent systems for a better tomorrow.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ghariebml/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 group">
              <Twitter size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mohamed Gharieb. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
