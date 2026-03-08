import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import Markdown from 'react-markdown';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogModal = ({ post, onClose }: BlogModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  return (
    <AnimatePresence>
      {post && (
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
              className="bg-white dark:bg-[#0a0a0a] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col pointer-events-auto border border-slate-200 dark:border-white/10 transition-colors duration-300"
            >
              {/* Header Image Area */}
              <div className="relative h-48 sm:h-64 md:h-80 shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h2>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-10 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-3xl mx-auto">
                  
                  {/* Article Content */}
                  <div className="prose prose-slate dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-200 prose-blockquote:font-medium prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white">
                    <p className="lead text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-10 font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Markdown>{post.content}</Markdown>
                  </div>

                  {/* Footer / Tags */}
                  <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Related Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/10">
                          <Tag className="w-3.5 h-3.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="mt-12 text-center">
                    <button
                      onClick={onClose}
                      className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Back to Articles
                    </button>
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

export default BlogModal;
