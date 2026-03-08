import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Database, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Data Analytics & BI',
    description: 'Transforming raw data into actionable insights using modern Business Intelligence tools and advanced analytics techniques.',
    icon: BarChart3,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'group-hover:border-blue-500/50',
    features: ['Interactive Dashboards', 'KPI Tracking', 'Trend Analysis', 'Data Visualization'],
  },
  {
    title: 'Machine Learning & AI',
    description: 'Developing predictive models and intelligent algorithms to solve complex business problems and automate decision-making.',
    icon: BrainCircuit,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'group-hover:border-indigo-500/50',
    features: ['Predictive Modeling', 'NLP Solutions', 'Computer Vision', 'Process Automation'],
  },
  {
    title: 'Data Engineering',
    description: 'Designing robust data pipelines and scalable infrastructure for efficient data processing, storage, and retrieval.',
    icon: Database,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Cloud Architecture', 'Data Quality'],
  },
  {
    title: 'Sustainability Consulting',
    description: 'Leveraging data to track, analyze, and optimize environmental impact and sustainability metrics for real-world impact.',
    icon: Leaf,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'group-hover:border-teal-500/50',
    features: ['Carbon Footprint Tracking', 'ESG Reporting', 'Resource Optimization', 'Impact Analysis'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I offer a comprehensive suite of services designed to help organizations leverage their data for strategic advantage, operational efficiency, and sustainable growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${service.borderColor}`}
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-[#111] dark:to-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight className={`w-5 h-5 ${service.color}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800/50">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
