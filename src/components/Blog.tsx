import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import BlogModal, { BlogPost } from './BlogModal';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Predictive Analytics in Telecommunications",
    excerpt: "Exploring how machine learning models are revolutionizing customer retention and network optimization in the telecom industry.",
    category: "Data Science",
    date: "Oct 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["Machine Learning", "Telecom", "Predictive Modeling"],
    content: `
### Introduction
The telecommunications industry is undergoing a massive transformation, driven by the exponential growth of data and the increasing complexity of network infrastructure. Predictive analytics, powered by advanced machine learning models, is no longer a luxury but a necessity for telecom operators aiming to maintain a competitive edge.

### Customer Churn Prediction
One of the most significant applications of predictive analytics in telecom is customer churn prediction. By analyzing historical data, usage patterns, billing information, and customer service interactions, machine learning models can identify customers at high risk of leaving.

* **Behavioral Analysis:** Models can detect subtle changes in usage, such as a sudden drop in data consumption or an increase in dropped calls, which often precede churn.
* **Proactive Intervention:** Armed with these insights, telecom companies can deploy targeted retention campaigns, offering personalized discounts or service upgrades before the customer decides to switch providers.

### Network Optimization and Predictive Maintenance
Beyond customer retention, predictive analytics is revolutionizing how telecom networks are managed and maintained.

* **Traffic Forecasting:** Machine learning algorithms can accurately forecast network traffic patterns, allowing operators to dynamically allocate resources and prevent congestion during peak hours.
* **Predictive Maintenance:** By analyzing sensor data from cell towers and network equipment, models can predict hardware failures before they occur. This shift from reactive to proactive maintenance significantly reduces downtime and operational costs.

### The Role of 5G and IoT
The rollout of 5G networks and the proliferation of Internet of Things (IoT) devices are generating unprecedented volumes of data. This data explosion provides a rich training ground for even more sophisticated predictive models.

> "The true value of 5G lies not just in faster speeds, but in the massive amounts of actionable data it generates, fueling the next generation of predictive analytics."

### Conclusion
As the telecom landscape becomes increasingly competitive, the ability to anticipate customer needs and network issues will be the key differentiator. Predictive analytics offers a clear path to improved operational efficiency, higher customer satisfaction, and sustainable revenue growth.
    `
  },
  {
    id: 2,
    title: "Building Scalable RAG Systems with LangChain",
    excerpt: "A comprehensive guide to implementing Retrieval-Augmented Generation for enterprise applications using modern AI stacks.",
    category: "AI",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tags: ["LLMs", "LangChain", "RAG"],
    content: `
### Understanding Retrieval-Augmented Generation (RAG)
Large Language Models (LLMs) are powerful, but they suffer from limitations such as hallucinations and a lack of access to proprietary or up-to-date information. Retrieval-Augmented Generation (RAG) addresses these issues by grounding the LLM's responses in a curated knowledge base.

### The Role of LangChain
LangChain has emerged as the de facto framework for building LLM applications, providing a robust set of tools for orchestrating the various components of a RAG system.

### Key Components of a Scalable RAG Architecture

#### 1. Document Ingestion and Chunking
The first step is to ingest documents from various sources (PDFs, databases, wikis) and split them into manageable chunks.
* **Semantic Chunking:** Instead of splitting by character count, semantic chunking ensures that related concepts remain together, improving retrieval accuracy.

#### 2. Vector Embeddings and Storage
Once chunked, the text is converted into vector embeddings using models like OpenAI's \`text-embedding-ada-002\` or open-source alternatives. These embeddings are stored in a vector database (e.g., Pinecone, Weaviate, or Milvus) optimized for similarity search.

#### 3. The Retrieval Pipeline
When a user submits a query, it is also converted into an embedding. The system then queries the vector database to find the most semantically similar document chunks.

* **Advanced Retrieval Techniques:** To improve relevance, techniques like Multi-Query Retrieval (generating variations of the user's query) or Contextual Compression (extracting only the relevant parts of the retrieved chunks) can be employed.

#### 4. Generation
The retrieved chunks are injected into the LLM's prompt as context, along with the original query. The LLM then generates a response based on this provided context.

### Challenges in Scaling RAG
* **Latency:** As the vector database grows, retrieval times can increase. Efficient indexing and approximate nearest neighbor (ANN) algorithms are crucial.
* **Data Freshness:** Keeping the vector database synchronized with the underlying data sources requires robust data pipelines.

### Conclusion
Building a scalable RAG system involves more than just connecting an LLM to a vector database. By leveraging frameworks like LangChain and implementing advanced retrieval strategies, organizations can build robust AI applications that deliver accurate and contextually relevant information.
    `
  },
  {
    id: 3,
    title: "Optimizing Deep Learning Models for Edge Devices",
    excerpt: "Techniques for model quantization and pruning to deploy complex neural networks on resource-constrained hardware.",
    category: "Technology",
    date: "Aug 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Deep Learning", "Edge AI", "Optimization"],
    content: `
### The Shift to Edge AI
The traditional paradigm of sending data to the cloud for processing is increasingly being challenged by the need for low latency, enhanced privacy, and reduced bandwidth consumption. This has led to the rise of Edge AI—deploying deep learning models directly on devices like smartphones, IoT sensors, and autonomous vehicles.

### Challenges of Edge Deployment
Edge devices typically have severe constraints regarding compute power, memory, and energy consumption. Deploying massive, state-of-the-art neural networks on these devices is often infeasible without significant optimization.

### Key Optimization Techniques

#### 1. Model Quantization
Quantization involves reducing the precision of the numbers used to represent a model's weights and activations.
* **FP32 to INT8:** Converting 32-bit floating-point numbers to 8-bit integers can reduce the model size by 4x and significantly speed up inference on hardware that supports integer math, often with minimal loss in accuracy.
* **Post-Training Quantization vs. Quantization-Aware Training:** While post-training quantization is simpler, quantization-aware training (simulating lower precision during the training process) generally yields better accuracy for highly compressed models.

#### 2. Network Pruning
Pruning involves identifying and removing redundant or less important connections (weights) within the neural network.
* **Unstructured vs. Structured Pruning:** Unstructured pruning removes individual weights, leading to sparse matrices that require specialized hardware to realize speedups. Structured pruning removes entire neurons or filters, resulting in a smaller, dense network that runs faster on standard hardware.

#### 3. Knowledge Distillation
Knowledge distillation is a technique where a smaller, faster "student" model is trained to mimic the behavior of a larger, more accurate "teacher" model. The student learns to approximate the teacher's output distribution, often achieving better performance than if it were trained from scratch on the original dataset.

### Hardware Acceleration
Beyond software optimization, the deployment of specialized hardware accelerators (like NPUs or TPUs) on edge devices is crucial for achieving real-time performance.

### Conclusion
Optimizing deep learning models for the edge is a multi-faceted challenge that requires a combination of algorithmic techniques and hardware awareness. As edge devices become more powerful and optimization tools mature, we can expect to see increasingly sophisticated AI applications running directly in our hands and environments.
    `
  },
  {
    id: 4,
    title: "Data Engineering Best Practices for 2026",
    excerpt: "Modern data pipeline architectures, focusing on real-time processing, data quality, and scalable storage solutions.",
    category: "Data Science",
    date: "Jul 05, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Data Engineering", "Pipelines", "Architecture"],
    content: `
### The Evolving Data Landscape
As organizations increasingly rely on data to drive decision-making and power AI applications, the role of the data engineer has never been more critical. The landscape is shifting from batch-oriented, monolithic architectures to real-time, decentralized, and highly scalable systems.

### 1. Embrace the Data Mesh Paradigm
The centralized data lake model is often a bottleneck in large organizations. The Data Mesh paradigm advocates for decentralized, domain-oriented data ownership.
* **Data as a Product:** Treat data assets as products with clear ownership, SLAs, and quality metrics.
* **Self-Serve Infrastructure:** Provide domain teams with the tools and infrastructure they need to build and manage their own data pipelines.

### 2. Shift Towards Real-Time Processing
Batch processing is no longer sufficient for many modern use cases. Organizations are increasingly adopting streaming architectures using tools like Apache Kafka, Flink, and Spark Streaming.
* **Event-Driven Architectures:** Build systems that react to data as it arrives, enabling real-time analytics and automated responses.

### 3. Prioritize Data Quality and Observability
"Garbage in, garbage out" remains a fundamental truth. Robust data quality checks and observability are essential for maintaining trust in data assets.
* **Automated Testing:** Implement automated data quality tests within your pipelines (e.g., using Great Expectations or dbt tests).
* **Data Lineage:** Track the flow of data from source to destination to understand dependencies and troubleshoot issues quickly.

### 4. Adopt Modern Data Stack Tools
The Modern Data Stack (MDS) continues to evolve, offering cloud-native, scalable solutions for every stage of the data lifecycle.
* **ELT over ETL:** Leverage the compute power of cloud data warehouses (like Snowflake or BigQuery) to transform data after it has been loaded.
* **Infrastructure as Code (IaC):** Manage your data infrastructure using tools like Terraform or Pulumi to ensure reproducibility and version control.

### Conclusion
Data engineering in 2026 is about building robust, scalable, and agile data platforms that empower organizations to extract maximum value from their data. By embracing decentralization, real-time processing, and rigorous data quality practices, data engineers can build the foundation for the next generation of data-driven applications.
    `
  },
  {
    id: 5,
    title: "Ethical AI: Mitigating Bias in Machine Learning",
    excerpt: "Strategies and frameworks for identifying and reducing bias in training datasets and model predictions.",
    category: "AI",
    date: "Jun 18, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    tags: ["Ethics", "Bias", "Responsible AI"],
    content: `
### The Imperative for Ethical AI
As machine learning models are increasingly deployed in high-stakes domains like criminal justice, hiring, and healthcare, the potential for these systems to perpetuate or even amplify existing societal biases has become a critical concern. Ethical AI is not just a philosophical concept; it is a practical necessity.

### Understanding the Sources of Bias
Bias can enter a machine learning system at various stages of the development lifecycle:
* **Historical Bias:** The training data reflects existing prejudices and inequalities in society.
* **Representation Bias:** The training data is not representative of the population the model will be applied to (e.g., facial recognition systems trained primarily on lighter-skinned faces).
* **Measurement Bias:** The features chosen to represent a concept are flawed or proxy variables that correlate with protected attributes (like race or gender).

### Strategies for Mitigation

#### 1. Diverse and Representative Datasets
The most fundamental step is ensuring that training datasets are diverse and accurately represent the target population. This requires careful data collection, auditing, and sometimes augmenting the data to address imbalances.

#### 2. Algorithmic Fairness Techniques
Researchers have developed various techniques to enforce fairness constraints during model training:
* **Pre-processing:** Reweighting or transforming the training data to remove underlying biases before training.
* **In-processing:** Modifying the learning algorithm itself to penalize discriminatory outcomes.
* **Post-processing:** Adjusting the model's predictions after training to ensure fairness across different demographic groups.

#### 3. Explainability and Transparency
Black-box models are inherently difficult to audit for bias. Utilizing explainable AI (XAI) techniques helps practitioners understand *why* a model is making specific predictions, making it easier to identify and correct biased behavior.

#### 4. Continuous Monitoring and Auditing
Bias mitigation is not a one-time fix. Models must be continuously monitored in production to ensure that they do not drift or develop new biases over time. Regular audits by diverse teams are essential.

### Conclusion
Building ethical AI requires a proactive and multi-disciplinary approach. By understanding the sources of bias and implementing rigorous mitigation strategies throughout the AI lifecycle, we can build systems that are not only accurate but also fair and equitable.
    `
  },
  {
    id: 6,
    title: "Getting Started with MLOps",
    excerpt: "An introduction to Machine Learning Operations, covering CI/CD for ML models, monitoring, and automated retraining.",
    category: "Tutorials",
    date: "May 22, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    tags: ["MLOps", "Deployment", "Tutorial"],
    content: `
### What is MLOps?
Machine Learning Operations (MLOps) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It bridges the gap between data science (building models) and IT operations (running software).

### Why MLOps Matters
Many organizations struggle to move models from Jupyter notebooks into production. MLOps addresses this "deployment gap" by introducing engineering rigor, automation, and reproducibility to the ML lifecycle.

### Core Components of an MLOps Pipeline

#### 1. Version Control for Data and Models
Just as code is versioned in Git, data and models must also be versioned. Tools like DVC (Data Version Control) or MLflow allow teams to track changes to datasets and model artifacts, ensuring reproducibility.

#### 2. Automated Training Pipelines
Model training should not be a manual process. Automated pipelines (using tools like Kubeflow, Apache Airflow, or GitHub Actions) ensure that models can be retrained consistently whenever new data arrives or code changes.

#### 3. Continuous Integration and Continuous Deployment (CI/CD)
CI/CD practices, standard in software engineering, are crucial for MLOps.
* **CI:** Automatically testing data validation, model training code, and model evaluation metrics.
* **CD:** Automating the deployment of validated models to staging and production environments (e.g., as REST APIs or batch inference jobs).

#### 4. Model Monitoring and Management
Once a model is in production, it must be continuously monitored.
* **Data Drift:** Detecting when the distribution of incoming data changes significantly from the training data, which can degrade model performance.
* **Concept Drift:** Detecting when the relationship between the input features and the target variable changes.
When drift is detected, the MLOps system should automatically trigger an alert or initiate a retraining pipeline.

### Getting Started
Implementing MLOps doesn't require adopting every tool at once. Start small:
1. Begin by versioning your code and models.
2. Automate your training script.
3. Implement basic monitoring for your deployed model.

### Conclusion
MLOps is essential for scaling machine learning efforts. By adopting MLOps practices, organizations can reduce the time to market for AI solutions, improve model reliability, and ensure that their ML investments deliver continuous value.
    `
  }
];

const categories = ["All", "AI", "Data Science", "Technology", "Tutorials"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Insights & <span className="text-blue-500">Articles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Thoughts, tutorials, and insights on AI, data science, and the future of technology.
          </motion.p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:w-72"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            )}
          </motion.div>
        </div>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-[#111111] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-semibold text-slate-900 dark:text-white rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow cursor-pointer" onClick={() => setSelectedPost(post)}>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
                      <button className="focus:outline-none text-left">
                        {post.title}
                      </button>
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPost(post);
                        }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Try adjusting your search or category filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default Blog;
