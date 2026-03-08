import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, X, Play, AlertCircle } from 'lucide-react';
import ProjectModal, { Project } from './ProjectModal';

const ProjectMedia = ({ project, y }: { project: Project, y: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const hasVideo = !!project.videoUrl;

  useEffect(() => {
    if (hasVideo && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, hasVideo]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative h-64 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700 z-10 pointer-events-none" />
      
      <motion.div 
        style={{ y }} 
        className="w-full h-[120%] -mt-[10%]"
        animate={{
          y: isHovered ? -20 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {hasVideo ? (
          <div className="w-full h-full relative">
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className={`absolute inset-0 w-full h-full object-cover origin-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              animate={{
                x: isHovered ? mousePosition.x * -30 : 0,
                y: isHovered ? mousePosition.y * -30 : 0,
                scale: isHovered ? 1.15 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            {project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('youtu.be') || project.videoUrl?.includes('vimeo.com') ? (
              <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <iframe
                  src={`${project.videoUrl}${project.videoUrl.includes('?') ? '&' : '?'}autoplay=${isHovered ? 1 : 0}&mute=1&controls=0&loop=1`}
                  className="w-full h-full object-cover pointer-events-none"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                ref={videoRef}
                src={project.videoUrl}
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
            {/* Video Indicator */}
            <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/10">
                <Play className="w-3.5 h-3.5 fill-current" />
                Video
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt={`${project.title} - Image ${currentIndex + 1}`} 
              className="w-full h-full object-cover origin-center"
              animate={{
                x: isHovered ? mousePosition.x * -30 : 0,
                y: isHovered ? mousePosition.y * -30 : 0,
                scale: isHovered ? 1.15 : 1,
                opacity: 1
              }}
              initial={{ opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              loading="lazy"
            />
          </div>
        )}
      </motion.div>

      {/* Navigation Controls for Gallery */}
      {!hasVideo && images.length > 1 && (
        <div className={`absolute inset-0 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index, onClick, onTagClick, selectedTags = [] }: { key?: number | string, project: Project, index: number, onClick: () => void, onTagClick: (tag: string) => void, selectedTags?: string[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      layout
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)] hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer min-h-[500px]"
    >
      {isInView ? (
        <>
          <ProjectMedia project={project} y={y} />
          
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <motion.button 
                    key={i} 
                    whileTap={{ scale: 0.95 }}
                    animate={isSelected ? { 
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        "0px 0px 0px rgba(59, 130, 246, 0)",
                        "0px 0px 15px rgba(59, 130, 246, 0.5)",
                        "0px 0px 0px rgba(59, 130, 246, 0)"
                      ],
                      transition: { duration: 0.4 }
                    } : {}}
                    onClick={(e) => { e.stopPropagation(); onTagClick(tag); }}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      isSelected 
                        ? 'bg-slate-800 dark:bg-blue-900/30 text-white dark:text-blue-300 border-slate-900 dark:border-blue-500/30 shadow-sm' 
                        : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/30'
                    }`}
                  >
                    {tag}
                  </motion.button>
                );
              })}
            </div>
            
            <h4 
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 hover:underline inline-block"
            >
              {project.title}
            </h4>
            
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3 transition-colors duration-300">
              {project.description}
            </p>
            
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] uppercase tracking-wider font-semibold rounded border border-slate-200 dark:border-white/10">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] uppercase tracking-wider font-semibold rounded border border-slate-200 dark:border-white/10">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            )}
            
            <div className="mb-6 p-3 bg-slate-50 dark:bg-blue-900/10 rounded-lg border border-slate-200 dark:border-blue-500/20 transition-colors duration-300">
              <p className="text-sm text-slate-700 dark:text-blue-300 font-medium transition-colors duration-300">
                <span className="font-bold">Impact:</span> {project.impact}
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
              <button 
                className="flex items-center justify-center w-full px-4 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
              >
                <Github className="w-4 h-4 mr-2" /> View on GitHub
              </button>
              <button 
                className="flex items-center justify-center w-full px-4 py-2 bg-white dark:bg-[#111] hover:bg-slate-50 dark:hover:bg-[#1a1a1a] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 text-sm font-medium rounded-lg transition-all hover:border-blue-200 dark:hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm hover:-translate-y-0.5"
                onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank'); }}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </button>
            </div>
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

const ProjectSkeleton = () => (
  <div className="bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 min-h-[500px] animate-pulse">
    {/* Image placeholder */}
    <div className="h-64 bg-slate-200 dark:bg-slate-800 w-full"></div>
    
    {/* Content placeholder */}
    <div className="p-8">
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="h-6 w-14 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
      </div>
      
      {/* Title */}
      <div className="h-7 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-4"></div>
      
      {/* Description */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
      </div>
      
      {/* Impact box */}
      <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg mb-6"></div>
      
      {/* Buttons */}
      <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg w-full"></div>
        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg w-full"></div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const projectsPerPage = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

  const filteredProjects = projects.filter(project => 
    selectedTags.length === 0 || selectedTags.every(tag => project.tags.includes(tag))
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-colors duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-slate-700 dark:text-blue-400 uppercase mb-3 flex items-center gap-2 transition-colors duration-300">
              <span className="w-8 h-[2px] bg-slate-700 dark:bg-blue-400 transition-colors duration-300"></span>
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Featured Projects</h3>
          </div>
          <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-blue-400 font-medium transition-colors mt-4 md:mt-0">
            View GitHub Profile <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mr-1 transition-colors duration-300">Filter by:</span>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-md ${
                selectedTags.length === 0
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-white dark:bg-[#111] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/30'
              }`}
            >
              All Projects
              {selectedTags.length > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <X size={12} />
                </span>
              )}
            </motion.button>
            
            <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-1 hidden sm:block transition-colors duration-300"></div>

            {allTags.map(tag => (
              <motion.button
                key={tag}
                whileTap={{ scale: 0.95 }}
                animate={selectedTags.includes(tag) ? { 
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0px 0px 0px rgba(59, 130, 246, 0)",
                    "0px 0px 15px rgba(59, 130, 246, 0.5)",
                    "0px 0px 0px rgba(59, 130, 246, 0)"
                  ],
                  transition: { duration: 0.4 }
                } : {}}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
                  selectedTags.includes(tag)
                    ? 'bg-slate-800 dark:bg-blue-600 text-white shadow-md scale-105 ring-2 ring-slate-800 dark:ring-blue-600 ring-offset-2 dark:ring-offset-[#0a0a0a]'
                    : 'bg-white dark:bg-[#111] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/30'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[...Array(projectsPerPage)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-3xl border border-red-200 dark:border-red-900/30 transition-colors duration-300">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Oops! Something went wrong</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Try Again
            </button>
          </div>
        ) : currentProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {currentProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index} 
                  onClick={() => setSelectedProject(project)}
                  onTagClick={toggleTag}
                  selectedTags={selectedTags}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/10 transition-colors duration-300">
            <p className="text-slate-500 dark:text-slate-400 text-lg transition-colors duration-300">No projects found matching all selected filters.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-slate-700 dark:text-blue-400 font-medium hover:underline inline-flex items-center transition-colors duration-300"
            >
              <X size={16} className="mr-1" /> Clear all filters
            </button>
          </div>
        )}
        
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button 
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full transition-colors ${currentPage === 1 ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-blue-400'}`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                    currentPage === i + 1 
                      ? 'bg-slate-800 dark:bg-blue-600 text-white shadow-md scale-110' 
                      : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-blue-500/50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full transition-colors ${currentPage === totalPages ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-blue-400'}`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-700 dark:text-blue-400 font-medium transition-colors duration-300">
            View GitHub Profile <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
