import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  autoDownload?: boolean;
}

const ResumeModal = ({ isOpen, onClose, autoDownload = false }: ResumeModalProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isOpen && autoDownload && !isDownloading) {
      const timer = setTimeout(() => {
        handleDownloadPDF();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoDownload]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById('resume-content');
      if (!element) return;

      const opt = {
        margin: [15, 15, 15, 15] as [number, number, number, number], // top, left, bottom, right
        filename: 'Mohamed_Gharieb_CV.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm print:hidden"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col print:max-h-none print:shadow-none print:rounded-none print:h-auto print:w-full"
          >
            {/* Header / Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 print:hidden">
              <h2 className="text-lg font-semibold text-slate-900">Resume Preview</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  {isDownloading ? 'Generating CV...' : 'Download CV'}
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 print:overflow-visible print:p-0">
              <div id="resume-content" className="max-w-3xl mx-auto space-y-8 text-slate-900 print:max-w-none bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
                
                {/* Resume Header */}
                <header className="text-center border-b border-slate-200 pb-8">
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">Mohamed Gharieb</h1>
                  <p className="text-lg text-blue-600 font-medium mb-4">Data Scientist | Applied AI Practitioner | Machine Learning Engineer</p>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> Alexandria, Egypt
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" /> +20 102 248 7565
                    </div>
                    <a href="mailto:m.abdelslam00259@sci.dmu.edu.eg" className="flex items-center gap-1 hover:text-blue-600">
                      <Mail className="w-4 h-4" /> m.abdelslam00259@sci.dmu.edu.eg
                    </a>
                  </div>
                  <div className="flex justify-center gap-6 mt-3 text-sm font-medium">
                    <a href="https://www.linkedin.com/in/ghariebml/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a href="https://github.com/GhariebML" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-700 hover:text-blue-600">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </header>

                {/* Career Objective */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-3 uppercase tracking-wider">Career Objective</h3>
                  <p className="text-slate-700 leading-relaxed text-sm text-justify">
                    Results-driven Data Scientist and Applied AI practitioner with a strong academic foundation in Physics and Nanotechnology. Specialized in end-to-end machine learning pipelines—data preprocessing, feature engineering, EDA, model training, and evaluation. IBM & Google certified. Aspire Leaders Fellow (Harvard-founded) and McKinsey Forward Program Graduate. Proven track record of applying data-driven methodologies to real-world problems and leading impactful programs reaching 1,000+ beneficiaries. Passionate about leveraging AI, predictive analytics, and sustainable development (SDGs) for scientific and societal impact.
                  </p>
                </section>

                {/* Work Experience */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Work Experience</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-slate-900">Applied AI & Data Analytics Trainee</h4>
                        <span className="text-sm text-slate-500 font-medium">Dec 2025 – Present | Cairo, Egypt</span>
                      </div>
                      <p className="text-blue-700 font-medium mb-2">Digilians – Digital Pioneers Initiative (MCIT)</p>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
                        <li>Selected through a nationally competitive scholarship for Applied AI and Data Analytics led by Egypt's Ministry of Communications & IT (MCIT), in collaboration with top industry and academic partners.</li>
                        <li>Build and evaluate supervised ML models (classification, regression) using Python (Scikit-learn, Pandas, NumPy) for predictive analytics on real-world structured datasets.</li>
                        <li>Execute full-cycle data preprocessing, feature engineering, and exploratory data analysis (EDA) to extract actionable insights and identify patterns in complex datasets.</li>
                        <li>Optimize model performance via hyperparameter tuning, cross-validation, and F1/AUC-ROC evaluation; design data visualizations for both technical and non-technical stakeholders using Matplotlib and Seaborn.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-slate-900">Founder & CEO</h4>
                        <span className="text-sm text-slate-500 font-medium">Dec 2022 – Present | Alexandria, Egypt</span>
                      </div>
                      <p className="text-blue-700 font-medium mb-2">LEADUP – Youth-Led Non-Profit Organization</p>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
                        <li>Founded and scaled a youth-led non-profit focused on SDG 4 (Quality Education), climate action, and sustainable development, reaching 1,000+ young people across Egyptian governorates.</li>
                        <li>Applied data-driven planning and M&E frameworks to measure program impact, optimize outreach, and ensure stakeholder accountability; managed KPI tracking, reporting cycles, and program documentation.</li>
                        <li>Led strategic partnerships with UNICEF and the Ministry of Youth; won 3rd Place in the UNICEF Gender & Climate Guidebook competition.</li>
                        <li>Delivered training programs on digital skills, climate literacy, and civic leadership to diverse youth cohorts.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-lg font-bold text-slate-900">Teaching Assistant</h4>
                        <span className="text-sm text-slate-500 font-medium">Sep 2022 – Jun 2023 | Damanhour, Egypt</span>
                      </div>
                      <p className="text-blue-700 font-medium mb-2">Faculty of Science, Damanhour University</p>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-700">
                        <li>Supported undergraduate Physics courses; guided students through experimental data collection, statistical validation, and scientific reporting.</li>
                        <li>Managed LMS course content, prepared assessments, and contributed to accreditation and quality assurance documentation.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Projects</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Supervised ML Classification Pipeline (Digilians Capstone)</h4>
                      <p className="text-sm text-slate-600 italic mb-1">Tools: Python, Scikit-learn, Pandas, NumPy, Matplotlib, Jupyter Notebook</p>
                      <ul className="list-disc list-outside ml-5 text-sm text-slate-700">
                        <li>Developed an end-to-end ML pipeline for a real-world classification problem: data cleaning, EDA, feature engineering, model training (Random Forest, XGBoost, Logistic Regression), and performance evaluation using F1-score and AUC-ROC metrics; achieved strong generalization via cross-validation and hyperparameter tuning.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">Waste-Recycled Nanomaterials for Energy Storage – Published Research</h4>
                      <p className="text-sm text-slate-600 italic mb-1">Tools: Literature Analysis, Scientific Writing, Data Synthesis, Nanotechnology</p>
                      <ul className="list-disc list-outside ml-5 text-sm text-slate-700">
                        <li>Investigated sustainable production of carbon nanotubes and graphene from biomass, agricultural, and industrial waste for energy storage and conversion applications; findings published in Nanotechnology Reviews (De Gruyter, 2022) — peer-reviewed international journal.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">LEADUP Program Impact Dashboard</h4>
                      <p className="text-sm text-slate-600 italic mb-1">Tools: Google Sheets, Tableau, Excel, M&E Frameworks</p>
                      <ul className="list-disc list-outside ml-5 text-sm text-slate-700">
                        <li>Designed a monitoring & evaluation (M&E) data dashboard to track program outreach, beneficiary demographics, and SDG-aligned KPIs across 5 Egyptian governorates, enabling data-driven decision-making and transparent stakeholder reporting.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Education</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-bold text-slate-900">Diploma in Nanotechnology</h4>
                        <span className="text-sm text-slate-500">Sep 2024 – Present</span>
                      </div>
                      <p className="text-slate-700">Faculty of Postgraduate Studies for Advanced Sciences, Beni-Suef University</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg font-bold text-slate-900">B.Sc. in Physics & Chemistry</h4>
                        <span className="text-sm text-slate-500">Sep 2018 – Jul 2022</span>
                      </div>
                      <p className="text-slate-700">Faculty of Science, Damanhour University</p>
                      <p className="text-sm text-slate-600 mt-1">GPA: 3.3/4.0 · Graduation Project: Excellent</p>
                      <p className="text-sm text-slate-600 italic">Relevant Coursework: Solid-State Physics, Quantum Mechanics, Thermodynamics, Nanotechnology, Analytical Chemistry</p>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="text-sm text-slate-700">
                      <span className="font-bold text-slate-900">IBM Data Science Professional Certificate</span> · IBM / Coursera · Dec 2022 – May 2023
                      <p className="text-slate-600 ml-4 mt-1">• 10-course program covering Python, SQL, machine learning, data visualization, and end-to-end data science project workflows using real-world datasets.</p>
                    </li>
                    <li className="text-sm text-slate-700">
                      <span className="font-bold text-slate-900">Google Data Analytics Professional Certificate</span> · Google / Coursera · Sep 2021 – Feb 2022
                      <p className="text-slate-600 ml-4 mt-1">• Comprehensive training in data cleaning, visualization, SQL querying, and R programming for data-driven decision-making.</p>
                    </li>
                    <li className="text-sm text-slate-700">
                      <span className="font-bold text-slate-900">Machine Learning with Big Data</span> · SRTACity · Jan 2022 – Jun 2022
                      <p className="text-slate-600 ml-4 mt-1">• Training in ML techniques and big data processing for advanced analytics applications.</p>
                    </li>
                  </ul>
                </section>

                {/* Fellowships */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Fellowships & Leadership Programs</h3>
                  <ul className="space-y-3">
                    <li className="text-sm text-slate-700">
                      <span className="font-bold text-slate-900">Aspire Leaders Fellow</span> · Aspire Institute (Harvard-founded) · Apr – Oct 2025
                      <p className="text-slate-600 ml-4 mt-1">• Selected through a highly competitive global process; trained in leadership, systems thinking, ethical decision-making, and social impact with an international cohort.</p>
                    </li>
                    <li className="text-sm text-slate-700">
                      <span className="font-bold text-slate-900">McKinsey Forward Program Graduate</span> · McKinsey & Company · May – Sep 2025
                      <p className="text-slate-600 ml-4 mt-1">• Developed structured problem-solving, digital transformation, and professional communication skills through McKinsey's globally recognized leadership program.</p>
                    </li>
                  </ul>
                </section>

                {/* Publication */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Publication</h3>
                  <div className="text-sm text-slate-700">
                    <p className="font-bold text-slate-900">Cutting-Edge Development in Waste-Recycled Nanomaterials for Energy Storage & Conversion</p>
                    <p className="text-slate-600 italic">Nanotechnology Reviews, De Gruyter, 2022</p>
                    <p className="mt-1">• Investigated sustainable production of carbon nanotubes and graphene from biomass, agricultural, and industrial waste; explored environmental impact of waste recycling for energy storage and conversion in combating climate change.</p>
                  </div>
                </section>

                {/* Technical Skills */}
                <section>
                  <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase tracking-wider">Technical Skills & Keywords</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Programming & Data</h4>
                      <p className="text-slate-700">Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, SQL, R, Jupyter Notebook, Git, GitHub</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Machine Learning & AI</h4>
                      <p className="text-slate-700">Supervised Learning, Unsupervised Learning, Feature Engineering, EDA, Predictive Analytics, Hyperparameter Tuning, Cross-Validation, Model Evaluation (F1, AUC-ROC), Computer Vision (Foundational), Generative AI</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Visualization & BI</h4>
                      <p className="text-slate-700">Tableau, Power BI, Microsoft Excel, Google Sheets</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Domain Knowledge</h4>
                      <p className="text-slate-700">Nanotechnology, Solid-State Physics, Quantum Mechanics, Analytical Chemistry, Sustainable Development (SDGs), M&E Frameworks</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Soft Skills</h4>
                      <p className="text-slate-700">Data Storytelling, Strategic Planning, Cross-functional Collaboration, Project Management, Leadership, Stakeholder Engagement</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Languages</h4>
                      <p className="text-slate-700">Arabic (Native), English (C1 – Proficient)</p>
                    </div>
                  </div>
                </section>

              </div>
              
              {/* Bottom Download Button */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex justify-center print:hidden">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                  {isDownloading ? 'Generating PDF...' : 'Download Full CV'}
                </button>
              </div>
            </div>
            {/* Floating Download Button */}
            <div className="absolute bottom-6 right-6 z-50 print:hidden">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                {isDownloading ? 'Generating...' : 'Download CV'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
