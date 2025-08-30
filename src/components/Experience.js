import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: "diro",
      company: "DIRO",
      role: "Frontend Developer",
      period: "2023 - Present",
      description: "Overseeing the management and continuous improvement of the diro.io website using WordPress, ensuring a seamless user experience through optimized design and functionality. Spearheading the development of advanced product features to align with business goals and user needs. Leading the design and implementation of a React-based Client Portal, delivering a dynamic and intuitive platform for enhanced client interactions.",
      image: "/image/Writing_codes.png"
    },
    // Add more experiences here
  ];

  return (
    <div name="experience" className="relative w-full min-h-screen bg-gradient-to-tr from-white via-accent to-white pt-20 pb-20 overflow-hidden">
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
          className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl"
        />
       
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl font-bold text-textPrimary mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Professional <span className="text-secondary">experience</span>
          </motion.h2>
          <motion.p 
            className="text-textSecondary text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My journey in web development and software engineering
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-[350px] h-[350px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <motion.img 
                  src={experience.image} 
                  alt={experience.company}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-all duration-500"/>
              </div>

              {/* Initial Content */}
              <motion.div
                className="relative h-full flex flex-col items-center justify-center text-white p-8 text-center transform transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-full"
              >
                <h3 className="text-3xl font-bold mb-3">{experience.role}</h3>
                <p className="text-xl">{experience.company}</p>
              </motion.div>

              {/* Hover Content */}
              <motion.div
                className="absolute inset-0 p-8 bg-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"
              >
                <div className="text-white text-center">
                  <div className="flex items-center justify-center mb-4">
                    <FaCalendar className="mr-2 text-xl" />
                    <span className="text-lg">{experience.period}</span>
                  </div>
                  <p className="text-base mb-6 line-clamp-4">
                    {experience.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/experience/${experience.id}`}
                      className="inline-flex items-center text-secondary bg-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg font-medium"
                    >
                      View details
                      <FaArrowRight className="ml-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 