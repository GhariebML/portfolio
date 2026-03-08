import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-400 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 transition-colors duration-300">
              MG<span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">.</span>
            </a>
            <p className="text-sm mt-2 max-w-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">
              Building intelligent systems for a better tomorrow.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-slate-200/60 dark:border-white/10 hover:border-slate-400 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-blue-500/10 hover:text-slate-900 dark:hover:text-blue-400 transition-all duration-300 group">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/ghariebml/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-slate-200/60 dark:border-white/10 hover:border-slate-400 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-blue-500/10 hover:text-slate-900 dark:hover:text-blue-400 transition-all duration-300 group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/GhariebML" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-slate-200/60 dark:border-white/10 hover:border-slate-400 dark:hover:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-blue-500/10 hover:text-slate-900 dark:hover:text-blue-400 transition-all duration-300 group">
              <Twitter size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm transition-colors duration-300">
          <p>&copy; {new Date().getFullYear()} Mohamed Gharieb. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
