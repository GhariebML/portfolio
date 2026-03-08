import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectModal, { Project } from './ProjectModal';

const projects: Project[] = [
  {
    title: "Telco Customer Churn Prediction",
    description: "End-to-End Telco Customer Churn Prediction with Machine Learning and an Interactive App.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Classification"],
    impact: "Predictive model to identify at-risk customers and improve retention strategies",
    image: "https://picsum.photos/seed/churn/800/600",
    github: "https://github.com/GhariebML/Telco_Churn_Prediction",
    demo: "#",
    problemStatement: "Customer churn is a major problem for telecommunication companies. This project builds an end-to-end machine learning pipeline to predict which customers are likely to churn, allowing the business to take proactive retention measures.",
    detailedImpact: [
      "Performed exploratory data analysis to identify key churn drivers.",
      "Engineered features and preprocessed data for modeling.",
      "Trained and evaluated multiple machine learning classification models.",
      "Developed an interactive application to predict churn for new customers."
    ],
    gallery: [
      "https://picsum.photos/seed/telco/800/600",
      "https://picsum.photos/seed/prediction/800/600",
      "https://picsum.photos/seed/retention/800/600"
    ]
  },
  {
    title: "Random Password Maker & Strength Analyzer",
    description: "A machine learning project to generate and analyze password strength using Logistic Regression, Random Forest, and KNN.",
    tags: ["Python", "Machine Learning", "Classification", "Jupyter"],
    impact: "Interactive password strength checker with real-time ML predictions",
    image: "https://picsum.photos/seed/password/800/600",
    github: "https://github.com/GhariebML/ICAIL_Final_Graduation_Project_Random_Password_Maker",
    demo: "#",
    problemStatement: "Users often struggle to create secure passwords and understand what makes them strong. This project bridges that gap by providing a tool that not only generates secure passwords based on custom rules but also evaluates their strength using trained machine learning models.",
    detailedImpact: [
      "Developed an interactive UI for password generation.",
      "Trained Logistic Regression, Random Forest, and KNN models on a labeled Kaggle dataset.",
      "Created a real-time password strength checker.",
      "Built a complete data science workflow from EDA to model deployment in a Jupyter environment."
    ],
    gallery: [
      "https://picsum.photos/seed/cybersecurity/800/600",
      "https://picsum.photos/seed/password/800/600",
      "https://picsum.photos/seed/lock/800/600"
    ]
  },
  {
    title: "Applied AI & Data Analytics Portfolio",
    description: "Hands-on projects developed during the Digilains Applied AI & Data Analytics Diploma, covering Python, SQL, ML, and Deep Learning.",
    tags: ["Python", "SQL", "Machine Learning", "Deep Learning"],
    impact: "Comprehensive portfolio of industry-ready data analytics projects",
    image: "https://picsum.photos/seed/analytics/800/600",
    github: "https://github.com/GhariebML/Applied_AI_Data_Analytics_Projects_Digilains_Diploma",
    demo: "#",
    problemStatement: "Building industry-ready skills requires practical, hands-on experience. This repository serves as a centralized portfolio of applied projects demonstrating proficiency in various data science and AI domains.",
    detailedImpact: [
      "Completed practical projects in Data Analysis using Python and SQL.",
      "Implemented Machine Learning and Deep Learning models for real-world scenarios.",
      "Demonstrated end-to-end applied AI workflows.",
      "Continuously updated with new skills and project implementations."
    ],
    gallery: [
      "https://picsum.photos/seed/data/800/600",
      "https://picsum.photos/seed/analytics/800/600",
      "https://picsum.photos/seed/dashboard/800/600"
    ]
  },
  {
    title: "IBM Data Science Professional Certificate",
    description: "A complete portfolio of all projects, notes, and assignments from the 10-course IBM Data Science Professional Certificate.",
    tags: ["Data Science", "Python", "SQL", "Data Visualization"],
    impact: "Completed 10 comprehensive courses covering the full data science methodology",
    image: "https://picsum.photos/seed/ibm/800/600",
    github: "https://github.com/GhariebML/IBM_Data_Science_Professional_Certificate",
    demo: "https://www.coursera.org/account/accomplishments/specialization/9JPL43YELY5B",
    problemStatement: "Mastering data science requires a structured approach covering methodology, tools, and applied projects. This repository documents the journey through the rigorous IBM certification program.",
    detailedImpact: [
      "Mastered Python, SQL, and data visualization libraries (Matplotlib, Seaborn).",
      "Applied data science methodology to real-world datasets.",
      "Completed the Applied Data Science Capstone project.",
      "Earned the official IBM Data Science Professional Certificate."
    ],
    gallery: [
      "https://picsum.photos/seed/certificate/800/600",
      "https://picsum.photos/seed/science/800/600",
      "https://picsum.photos/seed/ibm/800/600"
    ]
  },
  {
    title: "Machine Learning Complete Course",
    description: "Comprehensive implementation of machine learning algorithms and concepts using Python.",
    tags: ["Machine Learning", "Python", "Algorithms", "Data Science"],
    impact: "Extensive repository of ML algorithms and practical implementations",
    image: "https://picsum.photos/seed/mlcourse/800/600",
    github: "https://github.com/GhariebML/ML_Complete_Course_By_Python",
    demo: "#",
    problemStatement: "Understanding machine learning requires deep diving into algorithms and their implementations. This project serves as a comprehensive guide and code repository for various ML techniques.",
    detailedImpact: [
      "Implemented core machine learning algorithms from scratch and using libraries.",
      "Created educational notebooks for understanding complex ML concepts.",
      "Built a reference library for future machine learning projects.",
      "Demonstrated strong foundational knowledge in ML theory and practice."
    ],
    gallery: [
      "https://picsum.photos/seed/machinelearning/800/600",
      "https://picsum.photos/seed/algorithm/800/600",
      "https://picsum.photos/seed/pythoncode/800/600"
    ]
  },
  {
    title: "The Complete Deep Learning Course",
    description: "Comprehensive deep learning projects and hands-on notebooks covering core AI concepts, model building, and real-world applications.",
    tags: ["Deep Learning", "AI", "Python", "Neural Networks"],
    impact: "Extensive collection of deep learning models and real-world AI applications",
    image: "https://picsum.photos/seed/deeplearning/800/600",
    github: "https://github.com/GhariebML/The_Complete_Deep_Learning_Course",
    demo: "#",
    problemStatement: "Mastering deep learning requires hands-on practice with various architectures like CNNs, RNNs, and Transformers. This repository documents a comprehensive journey through building and training complex neural networks.",
    detailedImpact: [
      "Built and trained deep learning models for image and text data.",
      "Implemented core AI concepts using modern frameworks like TensorFlow and PyTorch.",
      "Developed real-world applications demonstrating the power of neural networks.",
      "Created a robust portfolio of advanced AI techniques."
    ],
    gallery: [
      "https://picsum.photos/seed/deeplearning/800/600",
      "https://picsum.photos/seed/neuralnetwork/800/600",
      "https://picsum.photos/seed/artificialintelligence/800/600"
    ]
  },
  {
    title: "NLP Text Representation Techniques",
    description: "A comprehensive notebook demonstrating various text representation techniques in Natural Language Processing (NLP), including Bag of Words, TF-IDF, Word2Vec, and BERT embeddings.",
    tags: ["NLP", "TF-IDF", "Word2Vec", "BERT"],
    impact: "Detailed exploration of text vectorization methods for machine learning",
    image: "https://picsum.photos/seed/nlp/800/600",
    github: "https://github.com/GhariebML/NLP_Text_Representation_Techniques",
    demo: "#",
    problemStatement: "Converting text into numerical data is a foundational step in NLP. This project explores and compares different text representation techniques to understand their strengths and optimal use cases.",
    detailedImpact: [
      "Implemented traditional text vectorization methods like Bag of Words and TF-IDF.",
      "Explored dense word embeddings using Word2Vec.",
      "Utilized state-of-the-art transformer models (BERT) for contextual embeddings.",
      "Provided a clear comparative analysis of different NLP representation techniques."
    ],
    gallery: [
      "https://picsum.photos/seed/nlp/800/600",
      "https://picsum.photos/seed/text/800/600",
      "https://picsum.photos/seed/language/800/600"
    ]
  },
  {
    title: "SQL Ultimate Course",
    description: "The most comprehensive SQL guide from a real-world expert! Learn everything from basics to advanced queries, optimizations, and real-world SQL.",
    tags: ["SQL", "Database", "Data Analysis", "Optimization"],
    impact: "Mastery of database querying and data manipulation",
    image: "https://img.youtube.com/vi/SSKVgrwhzus/maxresdefault.jpg",
    github: "https://github.com/GhariebML/sql-ultimate-course",
    demo: "#",
    problemStatement: "Efficient data retrieval and manipulation are critical for any data professional. This repository contains comprehensive exercises and notes covering advanced SQL querying and database optimization.",
    detailedImpact: [
      "Mastered complex SQL queries, including window functions and CTEs.",
      "Learned database optimization techniques for handling large datasets.",
      "Applied SQL to real-world data analysis scenarios.",
      "Built a strong foundation in relational database management."
    ],
    gallery: [
      "https://picsum.photos/seed/database/800/600",
      "https://picsum.photos/seed/sql/800/600",
      "https://picsum.photos/seed/server/800/600"
    ]
  },
  {
    title: "Computer Vision Projects",
    description: "All Computer Vision Projects - Beginner to Advanced. Covering image processing, object detection, and deep learning applications in vision.",
    tags: ["Computer Vision", "OpenCV", "Deep Learning", "Image Processing"],
    impact: "Diverse portfolio of computer vision applications and techniques",
    image: "https://picsum.photos/seed/cv/800/600",
    github: "https://github.com/GhariebML/Computer-Vision-Projects",
    demo: "#",
    problemStatement: "Computer vision is a rapidly evolving field with numerous applications. This repository aggregates various projects to demonstrate proficiency in image processing, object detection, and advanced visual AI tasks.",
    detailedImpact: [
      "Implemented fundamental image processing techniques using OpenCV.",
      "Built object detection and image classification models.",
      "Applied deep learning architectures to complex visual tasks.",
      "Created a comprehensive showcase of computer vision capabilities."
    ],
    gallery: [
      "https://picsum.photos/seed/computervision/800/600",
      "https://picsum.photos/seed/camera/800/600",
      "https://picsum.photos/seed/imageprocessing/800/600"
    ]
  }
];

const ProjectCard = ({ project, index, onClick, selectedTags = [] }: { key?: number | string, project: Project, index: number, onClick: () => void, selectedTags?: string[] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-700 z-10" />
        <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover origin-center"
            variants={{
              hover: { 
                scale: 1.15,
                x: "-3%",
                y: "-2%",
                transition: {
                  duration: 8,
                  ease: "linear"
                }
              }
            }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <span 
                key={i} 
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                  isSelected 
                    ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-sm' 
                    : 'bg-slate-50 text-slate-600 border-slate-100'
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h4>
        
        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="mb-6 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
          <p className="text-sm text-blue-800 font-medium">
            <span className="font-bold">Impact:</span> {project.impact}
          </p>
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <button 
            className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
          >
            <Github className="w-4 h-4 mr-2" /> Code
          </button>
          <button 
            className="flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank'); }}
          >
            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const projectsPerPage = 4;

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
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-600"></span>
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h3>
          </div>
          <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-slate-600 hover:text-cyan-600 font-medium transition-colors mt-4 md:mt-0">
            View GitHub Profile <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-slate-700 mr-1">Filter by:</span>
            
            <button
              onClick={clearFilters}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedTags.length === 0
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              All Projects
              {selectedTags.length > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors">
                  <X size={12} />
                </span>
              )}
            </button>
            
            <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-cyan-600 text-white shadow-md scale-105 ring-2 ring-cyan-600 ring-offset-2'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-cyan-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard 
                key={startIndex + index} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
                selectedTags={selectedTags}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-500 text-lg">No projects found matching all selected filters.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-blue-600 font-medium hover:underline inline-flex items-center"
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
              className={`p-2 rounded-full transition-colors ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'}`}
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
                      ? 'bg-blue-600 text-white shadow-md scale-110' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full transition-colors ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'}`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
        
        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-medium">
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
