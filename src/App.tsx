import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Download, ChevronRight, Code, Brain, 
  Database, Terminal, BookOpen, Coffee, Heart, Globe, Rocket, Award, 
  Gamepad, Music, Camera, Brush, Users, GitFork
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-600/50 backdrop-blur-sm"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className={`container mx-auto px-4 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 inline-block">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white/20 shadow-xl mb-6 mx-auto"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight gradient-text">
              Your Name
            </h1>
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-xl">B.Tech CSE Student @ SGSITS Indore</p>
            </div>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Aspiring Software Development Engineer
              </span>
              <span className="mx-3">•</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Full Stack Developer
              </span>
              <span className="mx-3">•</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                AI/ML Enthusiast
              </span>
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/yourusername" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-4 rounded-full transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-4 rounded-full transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-4 rounded-full transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </header>

      {/* Enhanced About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-xl text-gray-600 leading-relaxed animate-on-scroll">
                I'm a passionate third-year Computer Science Engineering student at SGSITS Indore, 
                driven by the desire to create innovative solutions through technology. My journey in 
                software development has equipped me with a diverse skill set and a keen interest in 
                emerging technologies.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border">
                <div className="p-8 card-hover">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      React, Next.js
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      Node.js, Express
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      MongoDB, PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      REST APIs
                    </li>
                  </ul>
                </div>
              </div>

              <div className="gradient-border">
                <div className="p-8 card-hover">
                  <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                    <Brain className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">AI/ML</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      TensorFlow
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      scikit-learn
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      Computer Vision
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-purple-500 mr-2" />
                      NLP
                    </li>
                  </ul>
                </div>
              </div>

              <div className="gradient-border">
                <div className="p-8 card-hover">
                  <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                    <Terminal className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      Git, GitHub
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      Docker
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      AWS
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      Linux
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-8 animate-on-scroll">Education</h3>
              <div className="bg-white rounded-xl shadow-xl p-8 animate-on-scroll">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">B.Tech in Computer Science Engineering</h4>
                    <p className="text-gray-600">SGSITS Indore</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      2021 - 2025
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    Current CGPA: 8.5/10
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    Relevant Coursework: Data Structures, Algorithms, Database Management, Machine Learning
                  </li>
                </ul>
              </div>
            </div>

            {/* Hobbies Section */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-8 animate-on-scroll">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll">
                <div className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                  <Gamepad className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <p>Gaming</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                  <Music className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p>Music</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                  <Camera className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p>Photography</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center card-hover">
                  <Brush className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <p>Digital Art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">Featured Projects</h2>
          
          {/* Project Filters */}
          <div className="flex justify-center mb-12 animate-on-scroll">
            <div className="bg-white rounded-full shadow-md p-2">
              <button 
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'web' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('web')}
              >
                Web Dev
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'ai' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('ai')}
              >
                AI/ML
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project Cards */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-2">AI Image Recognition</h3>
                  <div className="flex space-x-2">
                    <span className="bg-white/20 backdrop-blur-lg text-white text-sm px-3 py-1 rounded-full">Python</span>
                    <span className="bg-white/20 backdrop-blur-lg text-white text-sm px-3 py-1 rounded-full">TensorFlow</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A deep learning model that can recognize and classify objects in images with high accuracy.
                  Implemented using TensorFlow and trained on a custom dataset.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center group">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> View Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* More project cards... */}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Experience Card */}
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Software Development Intern</h3>
                  <p className="text-gray-600">Tech Company Name</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Summer 2023
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 ml-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Developed and maintained RESTful APIs using Node.js and Express
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Implemented real-time features using WebSocket technology
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  Optimized database queries resulting in 40% faster response times
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">Open Source</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <GitFork className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <p className="text-xl text-gray-600">
                I'm passionate about contributing to open source projects and giving back to the community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Github className="w-6 h-6 mr-2" />
                  Project Name
                </h3>
                <p className="text-gray-600 mb-4">
                  Description of your contribution to the open source project.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">TypeScript</span>
                </div>
              </div>
              {/* More open source contributions... */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">Achievements</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hackathon Winner</h3>
              <p className="text-gray-600">
                First place in the National Level Hackathon for developing an innovative 
                solution for healthcare using AI.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Research Paper</h3>
              <p className="text-gray-600">
                Published a research paper on "AI in Healthcare" in the International 
                Journal of Computer Science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-5xl font-bold mb-8 animate-on-scroll">Let's Connect</h2>
            <p className="text-xl mb-12 animate-on-scroll">
              I'm currently looking for SDE internship opportunities. Feel free to reach out 
              if you'd like to discuss potential collaborations!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-on-scroll">
              <a 
                href="mailto:your.email@example.com"
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-80">your.email@example.com</p>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm opacity-80">Connect with me</p>
              </a>
              <a 
                href="https://github.com/yourusername"
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm opacity-80">Check my repos</p>
              </a>
            </div>
            <div className="flex justify-center space-x-6 animate-on-scroll">
              <a 
                href="mailto:your.email@example.com" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center hover:bg-opacity-90 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> Email Me
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold flex items-center hover:bg-opacity-90 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;