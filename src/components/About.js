import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiHtml5, SiCss3, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub, SiOpenai, SiSwagger, SiWordpress } from 'react-icons/si';
import { FaDatabase, FaAws, FaCode, FaPalette, FaLaptopCode, FaGraduationCap, FaAward, FaCertificate, FaRobot, FaBrain } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { BiCodeCurly } from 'react-icons/bi';

const About = () => {
  const skills = [
    {
      icon: <SiJavascript className="w-12 h-12" style={{ color: '#F7DF1E' }} />,
      name: "JavaScript",
      description: "Modern JavaScript"
    },
    {
      icon: <SiTypescript className="w-12 h-12" style={{ color: '#3178C6' }} />,
      name: "TypeScript",
      description: "Type-safe JavaScript development"
    },
    {
      icon: <SiReact className="w-12 h-12" style={{ color: '#61DAFB' }} />,
      name: "React",
      description: "Frontend development with React.js"
    },
    {
      icon: <SiRedux className="w-12 h-12" style={{ color: '#764ABC' }} />,
      name: "Redux",
      description: "State management for React apps"
    },
    {
      icon: <SiHtml5 className="w-12 h-12" style={{ color: '#E34F26' }} />,
      name: "HTML5",
      description: "Semantic HTML, Accessibility"
    },
    {
      icon: <SiCss3 className="w-12 h-12" style={{ color: '#1572B6' }} />,
      name: "CSS3",
      description: "Modern CSS, Flexbox, Grid"
    },
    {
      icon: <SiTailwindcss className="w-12 h-12" style={{ color: '#06B6D4' }} />,
      name: "Tailwind",
      description: "Utility-first CSS framework"
    },
    {
      icon: <SiGit className="w-12 h-12" style={{ color: '#F05032' }} />,
      name: "Git",
      description: "Version control & collaboration"
    },
    {
      icon: <SiGithub className="w-12 h-12" style={{ color: '#181717' }} />,
      name: "GitHub",
      description: "Project hosting & collaboration"
    },
    {
      icon: <SiOpenai className="w-12 h-12" style={{ color: '#412991' }} />,
      name: "OpenAI",
      description: "AI integration & development"
    },
    {
      icon: <BiCodeCurly className="w-12 h-12" style={{ color: '#8B5CF6' }} />,
      name: "Cursor",
      description: "AI-powered code editor"
    },
    {
      icon: <FaBrain className="w-12 h-12" style={{ color: '#4F46E5' }} />,
      name: "DeepSeek",
      description: "Advanced AI code generation"
    },
    {
      icon: <SiWordpress className="w-12 h-12" style={{ color: '#21759B' }} />,
      name: "WordPress",
      description: "CMS development & customization"
    },
    {
      icon: <SiSwagger className="w-12 h-12" style={{ color: '#85EA2D' }} />,
      name: "Swagger",
      description: "API documentation & testing"
    }
  ];

  const education = [
    {
      degree: "B.A (Political Honours)",
      institution: "Delhi University",
      year: "2023",
      description: "Completed Bachelor's degree with focus on Political Science and related studies."
    },
 
  ];

  const certificates = [
    {
      name: "MERN Stack Development",
      issuer: "Aptron Pvt Ltd Institute",
      date: "2023",
      link: "#"
    }
  ];

  const achievements = [

    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects with 1800+ contributions on GitHub",
      date: "2022-Present"
    }
  ];

  return (
    <div name="about" className="relative w-full min-h-screen bg-gradient-to-tr from-white via-accent to-white pt-20 pb-20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl"
        />
       
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl font-bold text-textPrimary mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About <span className="text-secondary">me</span>
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-textSecondary">
              A passionate frontend developer focused on creating impactful web solutions. Dedicated to building user-friendly and engaging digital experiences.
            </p>
            <p className="text-lg text-textSecondary leading-relaxed">
              My journey into coding began with a curiosity about how systems work and how code enables functionality used by people worldwide. Over time, I discovered that coding is not just a skill but a fascinating way to create innovative solutions and bring ideas to life—an experience that feels almost magical.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-secondary">
                <FaCertificate className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-textPrimary">Certificates</h3>
            </div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl"
            >
              <h4 className="text-xl font-bold text-textPrimary mb-3">MERN Stack Development</h4>
              <p className="text-secondary text-lg mb-2">Aptron Pvt Ltd Institute</p>
              <p className="text-textSecondary">2023</p>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-secondary">
                <FaGraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-textPrimary">Education</h3>
            </div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl"
            >
              <h4 className="text-xl font-bold text-textPrimary mb-3">B.A (Political Honours)</h4>
              <p className="text-secondary text-lg mb-2">Delhi University • 2023</p>
              <p className="text-textSecondary">Completed Bachelor's degree with focus on Political Science and related studies.</p>
            </motion.div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-secondary">
                <FaAward className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-textPrimary">Achievements</h3>
            </div>
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl"
            >
              <h4 className="text-xl font-bold text-textPrimary mb-3">Open Source Contributor</h4>
              <p className="text-textSecondary">Active contributor to various open-source projects with 1100+ contributions on GitHub</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technical Skills Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-secondary">
              <FaCode className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-textPrimary">Technical skills & tools</h3>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-purple-500/20"
              >
                {/* Front side */}
                <div className="flex flex-col items-center gap-4 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-secondary transition-transform duration-300 group-hover:scale-90">
                    {skill.icon}
                  </div>
                  <p className="text-textSecondary text-lg font-medium">{skill.name}</p>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90">
                  <p className="text-textSecondary text-base text-center font-medium">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 