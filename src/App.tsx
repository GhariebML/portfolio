import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Database, Brain, Code, ChevronRight, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm font-medium text-white">MG.</span>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
              Mohamed Gharieb
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Applied AI Engineer & Data Scientist building intelligent systems and scalable machine learning solutions.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Get in touch <ChevronRight size={16} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:onlinebusiness770@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                I specialize in bridging the gap between cutting-edge AI research and production-ready applications. With a strong foundation in data science and software engineering, I build systems that process complex data and deliver actionable insights.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My approach combines rigorous analytical thinking with modern engineering practices, ensuring that machine learning models are not just accurate, but also scalable, maintainable, and aligned with business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <Brain className="text-emerald-400 mb-4" size={24} />
                <h3 className="text-white font-medium mb-2">Machine Learning</h3>
                <p className="text-sm text-zinc-500">PyTorch, TensorFlow, Scikit-learn, LLMs, Computer Vision</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <Database className="text-blue-400 mb-4" size={24} />
                <h3 className="text-white font-medium mb-2">Data Engineering</h3>
                <p className="text-sm text-zinc-500">SQL, Spark, Airflow, Data Pipelines, ETL</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <Code className="text-purple-400 mb-4" size={24} />
                <h3 className="text-white font-medium mb-2">Software Dev</h3>
                <p className="text-sm text-zinc-500">Python, TypeScript, React, FastAPI, Docker</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <Terminal className="text-orange-400 mb-4" size={24} />
                <h3 className="text-white font-medium mb-2">MLOps</h3>
                <p className="text-sm text-zinc-500">AWS, GCP, MLflow, CI/CD, Model Deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-white/5">
          <h2 className="text-3xl font-semibold text-white mb-12">Experience</h2>
          <div className="space-y-12">
            
            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="text-zinc-500 font-mono text-sm mt-1">2022 — Present</div>
              <div>
                <h3 className="text-xl font-medium text-white mb-1">Senior AI Engineer</h3>
                <div className="text-emerald-400 mb-4">Tech Innovators Inc.</div>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Led the development of a generative AI platform for automated content creation. Architected scalable inference pipelines serving 100k+ daily requests. Fine-tuned open-source LLMs for domain-specific tasks, improving accuracy by 35%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">PyTorch</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">FastAPI</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">AWS</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">LLMs</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
              <div className="text-zinc-500 font-mono text-sm mt-1">2019 — 2022</div>
              <div>
                <h3 className="text-xl font-medium text-white mb-1">Data Scientist</h3>
                <div className="text-emerald-400 mb-4">DataCorp Solutions</div>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Developed predictive models for customer churn, reducing attrition by 15%. Built end-to-end data pipelines using Apache Spark and Airflow. Created interactive dashboards for executive stakeholders.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">Python</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">Scikit-learn</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">Spark</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-zinc-300">SQL</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-white/5">
          <h2 className="text-3xl font-semibold text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Brain size={24} />
                </div>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Neural Vision Engine</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                A real-time computer vision system for defect detection in manufacturing. Deployed on edge devices using TensorRT, achieving 60 FPS processing speed.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-zinc-500">TensorFlow</span>
                <span className="text-xs font-mono text-zinc-500">C++</span>
                <span className="text-xs font-mono text-zinc-500">TensorRT</span>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Database size={24} />
                </div>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Semantic Search API</h3>
              <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                High-performance vector search engine built on top of pgvector and sentence-transformers. Handles millions of documents with sub-50ms latency.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs font-mono text-zinc-500">FastAPI</span>
                <span className="text-xs font-mono text-zinc-500">PostgreSQL</span>
                <span className="text-xs font-mono text-zinc-500">Transformers</span>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-white/5 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Let's Work Together</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10">
            I'm currently exploring new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:onlinebusiness770@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </section>
      </main>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5">
        <p>Designed & Built by Mohamed Gharieb</p>
      </footer>
    </div>
  );
}

export default App;
