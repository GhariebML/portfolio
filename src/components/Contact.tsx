import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: !formData.name.trim() ? 'Name is required' : '',
      email: !formData.email.trim() ? 'Email is required' : !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      subject: !formData.subject.trim() ? 'Subject is required' : '',
      message: !formData.message.trim() ? 'Message is required' : ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3 transition-colors duration-300">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Let's Build Something Extraordinary.</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 transition-colors duration-300">
              Whether you have a project in mind, need a consultation on AI strategy, or just want to discuss the future of technology, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@mohamedgharieb.com" className="flex items-center p-6 bg-white dark:bg-[#111] rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 mr-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 transition-colors duration-300">Email Me</p>
                  <p className="text-slate-900 dark:text-white font-bold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">contact@mohamedgharieb.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/ghariebml/" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-[#111] rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 mr-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 transition-colors duration-300">Connect</p>
                  <p className="text-slate-900 dark:text-white font-bold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn Profile</p>
                </div>
              </a>
              
              <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white dark:bg-[#111] rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 mr-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 transition-colors duration-300">Follow Work</p>
                  <p className="text-slate-900 dark:text-white font-bold transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">GitHub Profile</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all duration-300 relative overflow-hidden"
          >
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-500/20 p-4 flex items-center justify-center text-green-700 dark:text-green-400 z-10 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-500/20 p-4 flex items-center justify-center text-red-700 dark:text-red-400 z-10 transition-colors duration-300"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className={`space-y-6 ${submitStatus !== 'idle' ? 'pt-8' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white border ${errors.name ? 'border-red-300 dark:border-red-500/50 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-blue-200 dark:focus:ring-blue-500/20'} focus:ring-2 outline-none transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center transition-colors duration-300"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white border ${errors.email ? 'border-red-300 dark:border-red-500/50 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-blue-200 dark:focus:ring-blue-500/20'} focus:ring-2 outline-none transition-all duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center transition-colors duration-300"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white border ${errors.subject ? 'border-red-300 dark:border-red-500/50 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-blue-200 dark:focus:ring-blue-500/20'} focus:ring-2 outline-none transition-all duration-300`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center transition-colors duration-300"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white border ${errors.message ? 'border-red-300 dark:border-red-500/50 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-500/20' : 'border-slate-200 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-500/50 focus:ring-blue-200 dark:focus:ring-blue-500/20'} focus:ring-2 outline-none transition-all duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400 flex items-center transition-colors duration-300"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 flex items-center justify-center shadow-lg shadow-slate-900/20 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-slate-900/30 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
