import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, CheckCircle2, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  github: string;
  demo: string;
  problemStatement: string;
  detailedImpact: string[];
  gallery?: string[];
  videoUrl?: string;
  techStack?: string[];
  environment?: string;
  algorithms?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setActiveMediaIndex(0); // Reset media index when project changes
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const mediaItems: { type: 'video' | 'image', url: string }[] = [];
  if (project.videoUrl) {
    mediaItems.push({ type: 'video', url: project.videoUrl });
  }
  if (project.gallery) {
    project.gallery.forEach(img => mediaItems.push({ type: 'image', url: img }));
  }

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-slate-50 dark:bg-[#0a0a0a] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col pointer-events-auto border border-transparent dark:border-white/10 transition-colors duration-300"
            >
              {/* Header Image Area */}
              <div className="relative h-48 sm:h-64 md:h-80 shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-10">
                
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* Media Gallery */}
                    {mediaItems.length > 0 && (
                      <section className="space-y-4">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 bg-slate-900 dark:bg-black transition-colors duration-300">
                          {mediaItems[activeMediaIndex].type === 'video' ? (
                            mediaItems[activeMediaIndex].url.includes('youtube.com') || mediaItems[activeMediaIndex].url.includes('youtu.be') || mediaItems[activeMediaIndex].url.includes('vimeo.com') ? (
                              <iframe
                                src={mediaItems[activeMediaIndex].url}
                                title="Project Video"
                                className="absolute top-0 left-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <video
                                src={mediaItems[activeMediaIndex].url}
                                controls
                                className="absolute top-0 left-0 w-full h-full object-contain"
                              />
                            )
                          ) : (
                            <img
                              src={mediaItems[activeMediaIndex].url}
                              alt="Project Media"
                              className="absolute top-0 left-0 w-full h-full object-contain bg-slate-100 dark:bg-[#111] transition-colors duration-300"
                              referrerPolicy="no-referrer"
                            />
                          )}
                        </div>

                        {/* Thumbnails */}
                        {mediaItems.length > 1 && (
                          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                            {mediaItems.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveMediaIndex(idx)}
                                className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                                  activeMediaIndex === idx ? 'border-blue-600 dark:border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                              >
                                {item.type === 'video' ? (
                                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                    <Play className="w-6 h-6 text-white/70" />
                                  </div>
                                ) : (
                                  <img
                                    src={item.url}
                                    alt={`Thumbnail ${idx}`}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </section>
                    )}

                    {/* Problem Statement */}
                    <section>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                        <span className="w-1 h-6 bg-blue-600 dark:bg-blue-500 rounded-full transition-colors duration-300" />
                        The Challenge
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg transition-colors duration-300">
                        {project.problemStatement}
                      </p>
                    </section>

                    {/* Solution / Description */}
                     <section>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                        <span className="w-1 h-6 bg-blue-500 dark:bg-blue-500 rounded-full transition-colors duration-300" />
                        The Solution
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                        {project.description}
                      </p>
                    </section>

                    {/* Technical Details */}
                    {(project.techStack || project.environment || project.algorithms) && (
                      <section className="pt-6 border-t border-slate-200 dark:border-white/10">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors duration-300">
                          <span className="w-1 h-6 bg-purple-500 dark:bg-purple-500 rounded-full transition-colors duration-300" />
                          Technical Details
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {project.techStack && project.techStack.length > 0 && (
                            <div className="bg-slate-50 dark:bg-[#111] p-5 rounded-xl border border-slate-200/60 dark:border-white/5">
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider opacity-80">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                  <span key={i} className="px-2.5 py-1 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-white/10">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.algorithms && project.algorithms.length > 0 && (
                            <div className="bg-slate-50 dark:bg-[#111] p-5 rounded-xl border border-slate-200/60 dark:border-white/5">
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider opacity-80">Algorithms / Libraries</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.algorithms.map((algo, i) => (
                                  <span key={i} className="px-2.5 py-1 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-white/10">
                                    {algo}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.environment && (
                            <div className="bg-slate-50 dark:bg-[#111] p-5 rounded-xl border border-slate-200/60 dark:border-white/5 md:col-span-2">
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider opacity-80">Development Environment</h4>
                              <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {project.environment}
                              </p>
                            </div>
                          )}
                        </div>
                      </section>
                    )}
                  </div>

                  {/* Right Column: Impact & Links */}
                  <div className="space-y-8">
                    
                    {/* Key Impact Stats */}
                    <div className="bg-white dark:bg-[#111] rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 shadow-sm transition-colors duration-300">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Key Impact</h3>
                      <ul className="space-y-4">
                        {project.detailedImpact.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5 transition-colors duration-300" />
                            <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-medium rounded-xl transition-all shadow-lg shadow-slate-900/20 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-slate-900/30 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-6 py-3 bg-white dark:bg-[#111] hover:bg-slate-50 dark:hover:bg-[#1a1a1a] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-medium rounded-xl transition-all hover:border-blue-200 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg hover:shadow-blue-900/5 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
