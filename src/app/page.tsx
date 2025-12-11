"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, Award, ExternalLink, Menu, X, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Flask', 'LangChain', 'Streamlit'],
    databases: ['MongoDB', 'MySQL', 'Firebase', 'Redis', 'ChromaDB', 'Pinecone'],
    aiml: ['BLIP2', 'CLIP', 'LLaMA', 'Mistral', 'Gemini API', 'RAG Pipeline', 'FAISS']
  };

  const projects = [
    {
      title: 'Route Optimization for Last-Mile Logistics (CVRPTW)',
      period: 'Jan 2025 - Present',
      description: 'Developed a full-stack intelligent logistics optimization system that plans optimal routes from a single source to multiple destinations with heterogeneous vehicles and variable customer demands. Enhanced the Clarke–Wright Savings algorithm to handle complex real-world constraints such as capacity, demand variation, delivery windows, and time optimization.',
      highlights: [
        'Achieved 20-30% reduction in total route distance and fuel consumption',
        'Increased vehicle utilization to 94% in dense delivery clusters',
        'Compared results with Google OR-Tools and other heuristic approaches',
        'Built interactive routing maps with real-time analytics dashboard'
      ],
      tech: ['Python', 'MERN Stack', 'Google OR-Tools', 'MongoDB', 'React.js', 'Leaflet.js', 'JWT'],
      github: 'https://github.com/rahulbamaniya/route-optimization',
      demo: 'https://route-optimization-demo.vercel.app',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
    },
    {
      title: 'AI-Powered Cold Email Generator',
      period: 'Jun 2025 - Jul 2025',
      description: 'Developed an AI system for personalized outreach and automated cold-email generation. Integrated LLaMA 3.1 with LangChain and ChromaDB for context-aware semantic retrieval and high-conversion email workflows.',
      highlights: [
        'Reduced manual email writing effort by 60%',
        'Implemented semantic retrieval using ChromaDB vector database',
        'Built intuitive Streamlit interface for non-technical users',
        'Generated personalized emails based on job postings and portfolios'
      ],
      tech: ['LLaMA 3.1', 'LangChain', 'Streamlit', 'ChromaDB', 'Python'],
      github: 'https://github.com/rahulbamaniya/ai-email-generator',
      demo: 'https://ai-email-generator.streamlit.app',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80'
    },
    {
      title: 'Dream Nest – Hotel Booking Platform',
      period: 'Aug 2024 - Oct 2024',
      description: 'Built a full-stack MERN web application that enables users to explore, book, and manage vacation stays seamlessly. The system supports secure authentication, image uploads via Cloudinary, and Twilio SMS notifications for booking confirmations.',
      highlights: [
        'Implemented JWT authentication and bcrypt password hashing',
        'Integrated Cloudinary for optimized image storage and delivery',
        'Added Twilio SMS notifications for booking confirmations',
        'Built responsive UI with category-based browsing and real-time pricing'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Twilio', 'Cloudinary', 'JWT'],
      github: 'https://github.com/rahulbamaniya/dream-nest',
      demo: 'https://dream-nest-hotel.vercel.app',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
    },
    {
      title: 'Smart Tenant Billing Web App',
      period: 'Feb 2025 - Present',
      description: 'An efficient solution for property managers to handle tenant billing and communication. Allows seamless management of tenant details, bill history tracking, and secure WhatsApp notifications for timely updates.',
      highlights: [
        'Automated WhatsApp bill notifications using WhatsApp Business API',
        'Implemented secure JWT authentication for admin access',
        'Built comprehensive billing history and tenant management dashboard',
        'Encrypted sensitive data for enhanced security'
      ],
      tech: ['Node.js', 'Express.js', 'Firebase', 'WhatsApp API', 'JWT', 'HTML/CSS/JavaScript'],
      github: 'https://github.com/rahulbamaniya/tenant-billing',
      demo: 'https://tenant-billing-app.vercel.app',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    }
  ];

  const experiences = [
    {
      title: 'AI Research Intern',
      company: 'MANIT Bhopal',
      period: 'June 2025 - July 2025',
      location: 'Bhopal, Madhya Pradesh',
      description: 'Fine-tuned BLIP2 on RSICD dataset for satellite image captioning, improving captioning quality by 15%. Built CLIP-based semantic retrieval system on EarthVQA and integrated Mistral-powered RAG pipeline for visual question answering. Enhanced satellite image annotation accuracy via multi-modal reasoning, reducing manual verification effort by 20%.'
    },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      period: 'Oct 2024 - Nov 2024',
      location: 'Remote',
      description: 'Contributed to open source projects during GSSoC\'24, securing Rank 240/17,000. Worked on various web development and AI projects with meaningful contributions.'
    },
    {
      title: 'Open Source Developer',
      company: 'Hacktoberfest',
      period: 'Oct 2024 - Nov 2024',
      location: 'Remote',
      description: 'Participated in Hacktoberfest 2024, making meaningful contributions to open source repositories through bug fixes and feature implementations.'
    },
    {
      title: 'Campus Ambassador',
      company: 'E-Cell, IIT Bombay',
      period: 'June 2024 - Aug 2024',
      location: 'India',
      description: 'Represented E-Cell IIT Bombay on campus, promoting entrepreneurship and organizing events to foster innovation culture.'
    },
    {
      title: 'Summer Intern',
      company: 'Encryptix',
      period: 'June 2024 - July 2024',
      location: 'Indore, Madhya Pradesh',
      description: 'Worked on software development projects during summer internship, gaining hands-on experience in full-stack development.'
    }
  ];

  const certifications = [
    'MongoDB Developer Toolkit – GeeksforGeeks',
    'NVIDIA DLI – Deploying RAG Pipelines at Scale',
    'Data Analytics with Python (79%) – NPTEL',
    'OCI AI Foundations Associate – Oracle',
    'Building LLM Applications With Prompt Engineering',
    'Develop GenAI Apps with Gemini and Streamlit',
    'Google/NASSCOM GenAI Program 2025 on LLMs'
  ];

  const achievements = [
    'Solved 450+ DSA problems on LeetCode, GeeksforGeeks & Codeforces',
    'Secured Rank 240 out of 17,000 in GSSoC 2024',
    'Ranked in top 10% in Madhya Pradesh Board exams',
    'Contributed to Hacktoberfest & GSSoC 2024 via bug fixes and features'
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RB
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-purple-900/30 rounded"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                    alt="Rahul Bamaniya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Rahul Bamaniya
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              CSE Undergrad @ SGSITS, Indore | CGPA: 7.37
            </p>
            <p className="text-lg text-gray-400 mb-8">
              AI Research Intern | Full-Stack Developer | Open Source Contributor
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/rahul-bamaniya-1375772a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/rahulbamaniya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="mailto:rahulbamniya93184@gmail.com"
                className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full transition-all hover:scale-105"
              >
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-purple-400" /> Education
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-2 border-purple-500 pl-4">
                  <p className="font-semibold text-white text-lg">Bachelor of Technology - Computer Science</p>
                  <p className="text-purple-400">SGSITS, Indore</p>
                  <p className="text-sm text-gray-400">Nov 2022 - Present | CGPA: 7.37</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-4">
                  <p className="font-semibold text-white">XII (MP Board) - PCM</p>
                  <p className="text-pink-400">Excellence Bal Vinay Mandir, Indore</p>
                  <p className="text-sm text-gray-400">2019 - 2021 | 94%</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <p className="font-semibold text-white">X (MP Board)</p>
                  <p className="text-purple-400">MGM Higher Secondary School, Indore</p>
                  <p className="text-sm text-gray-400">2007 - 2019 | 93%</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="text-pink-400" /> Contact Info
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <MapPin size={20} className="text-purple-400 flex-shrink-0" />
                  <span>Indore, Madhya Pradesh, India</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-purple-400 flex-shrink-0" />
                  <span>+91 9340475725</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={20} className="text-purple-400 flex-shrink-0" />
                  <span className="break-all">rahulbamniya93184@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
                    <p className="text-lg text-white">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02] flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-purple-400 flex-1">{project.title}</h3>
                  <Rocket className="text-pink-400 flex-shrink-0 ml-2" size={24} />
                </div>
                <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-pink-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-600/20 px-3 py-1 rounded-full text-xs text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="bg-purple-600/20 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="bg-pink-600/20 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <span key={i} className="bg-purple-600/20 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill, i) => (
                  <span key={i} className="bg-pink-600/20 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-start gap-3"
                  >
                    <Award className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-pink-400">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 p-4 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all flex items-start gap-3"
                  >
                    <Award className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300 text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, and collaborations in AI, Full-Stack Development, and Open Source.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:rahulbamniya93184@gmail.com"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all hover:scale-105 text-lg"
            >
              <Mail size={24} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-bamaniya-1375772a6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full transition-all hover:scale-105 text-lg"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
            <a
              href="https://github.com/rahulbamaniya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-full transition-all hover:scale-105 text-lg"
            >
              <Github size={24} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Rahul Bamaniya. Built with React & Tailwind CSS.</p>
          <p className="text-sm mt-2">Crafted with passion for innovation and technology</p>
        </div>
      </footer>
    </div>
  );
}