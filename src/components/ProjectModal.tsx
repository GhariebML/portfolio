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
              className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
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
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900">
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
                              className="absolute top-0 left-0 w-full h-full object-contain bg-slate-100"
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
                                  activeMediaIndex === idx ? 'border-blue-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
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
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-600 rounded-full" />
                        The Challenge
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {project.problemStatement}
                      </p>
                    </section>

                    {/* Solution / Description */}
                     <section>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyan-500 rounded-full" />
                        The Solution
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </section>
                  </div>

                  {/* Right Column: Impact & Links */}
                  <div className="space-y-8">
                    
                    {/* Key Impact Stats */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Key Impact</h3>
                      <ul className="space-y-4">
                        {project.detailedImpact.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
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
                        className="flex items-center justify-center w-full px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-medium rounded-xl transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-0.5"
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
