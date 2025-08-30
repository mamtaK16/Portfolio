import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaBuilding, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = {
  "diro": {
    company: "DIRO",
    role: "Frontend Developer",
    period: "2023 - Present",
    location: "Okhla phase 3, New Delhi",
    description: `As a Frontend Developer at DIRO, I've been responsible for:

    • Managing and maintaining the diro.io website using WordPress
    • Developing new features for the product using React
    • Creating a client portal with modern UI/UX principles
    • Implementing responsive design across all platforms
    • Optimizing website performance and SEO
    • Collaborating with the design team for UI/UX improvements`,
    achievements: [
      "Improved website load time by 40% through optimization",
      "Developed 5+ custom landing pages resulting in 25% increase in conversions",
      "Implemented new React-based features that enhanced user engagement",
      "Created responsive designs that work seamlessly across all devices",
      "Collaborated with cross-functional teams to deliver projects on time"
    ],
    technologies: [
      "React",
      "WordPress",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Git",
      "REST APIs"
    ],
    projects: [
      {
        name: "Client portal redesign",
        description: "Led the redesign of the client portal, improving user experience and adding new features.",
        link: "https://client.diro.io"
      },
      {
        name: "Landing page optimization",
        description: "Created and optimized landing pages that increased conversion rates significantly."
      },
      { 
        name: "DIRO website management",
        description: "Managing and maintaining the main DIRO website, implementing security measures, and optimizing performance.",
        link: "https://diro.io"
      }
    ]
  },
  // Add more experiences here
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = experiences[id];

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-textPrimary mb-4">Experience not found</h2>
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
          Back to experience
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
              {experience.role}
            </h1>
            <div className="flex flex-wrap gap-4 text-textSecondary">
              <div className="flex items-center">
                <FaBuilding className="mr-2 text-secondary" />
                {experience.company}
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-secondary" />
                {experience.period}
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-secondary" />
                {experience.location}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-textPrimary mb-4">Role overview</h2>
                <p className="text-textSecondary whitespace-pre-line">
                  {experience.description}
                </p>
              </div>

              {/* Key Projects */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-textPrimary mb-4">Key projects</h2>
                <div className="space-y-6">
                  {experience.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-textPrimary">{project.name}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-secondary/80 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-textSecondary">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-textPrimary mb-4">Key achievements</h2>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="flex items-start text-textSecondary"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-textPrimary mb-4">Technologies used</h2>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail; 