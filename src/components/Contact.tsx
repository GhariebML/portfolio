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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let's Build Something Extraordinary.</h3>
            <p className="text-slate-600 text-lg mb-8">
              Whether you have a project in mind, need a consultation on AI strategy, or just want to discuss the future of technology, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@mohamedgharieb.com" className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Me</p>
                  <p className="text-slate-900 font-semibold">contact@mohamedgharieb.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/ghariebml/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Connect</p>
                  <p className="text-slate-900 font-semibold">LinkedIn Profile</p>
                </div>
              </a>
              
              <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Follow Work</p>
                  <p className="text-slate-900 font-semibold">GitHub Profile</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden"
          >
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bg-green-50 border-b border-green-100 p-4 flex items-center justify-center text-green-700 z-10"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bg-red-50 border-b border-red-100 p-4 flex items-center justify-center text-red-700 z-10"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className={`space-y-6 ${submitStatus !== 'idle' ? 'pt-8' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.subject ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 outline-none transition-all resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="mt-1.5 text-sm text-red-500 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" />{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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
