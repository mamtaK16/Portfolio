import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';

const projects = {
  "portfolio": {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    longDescription: `This portfolio website showcases my work and skills in web development. 
    Built with modern technologies and best practices, it features:
    
    • Responsive design that works seamlessly across all devices
    • Smooth animations and transitions using Framer Motion
    • Dark/Light theme support
    • Interactive components and dynamic content loading
    • Optimized performance and SEO`,
    images: ["/image/code backgroundimage.jpg"],
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript }
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    features: [
      "Responsive Design",
      "Animation Effects",
      "Dark/Light Theme",
      "Contact Form",
      "Project Showcase"
    ]
  },
  // Add more projects here
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-textPrimary mb-4">Project not found</h2>
          <Link to="/" className="text-secondary hover:text-secondary/80">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
            {project.title}
          </h1>

          {/* Project Image */}
          <div className="relative rounded-xl overflow-hidden mb-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-textPrimary mb-4">Overview</h2>
                <p className="text-textSecondary whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-textPrimary mb-4">Key features</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-textSecondary"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-textPrimary mb-4">Technologies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-textSecondary"
                      whileHover={{ scale: 1.05 }}
                    >
                      <tech.icon className="w-6 h-6 text-secondary mr-2" />
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-textPrimary mb-4">Links</h2>
                <div className="space-y-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaGithub className="w-6 h-6 mr-2" />
                    View source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail; 