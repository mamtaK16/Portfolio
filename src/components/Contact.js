import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: 'Email',
      value: 'mk6736767@gmail.com',
      link: 'mailto:mk6736767@gmail.com',
      bgColor: 'bg-purple-500',
      delay: 0.2
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      value: '+91 8882446553',
      link: 'https://wa.me/918882446553',
      bgColor: 'bg-green-500',
      delay: 0.4
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'Connect professionally',
      link: 'https://www.linkedin.com/in/mamta-kumari-48882b263',
      bgColor: 'bg-blue-600',
      delay: 0.6
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div name="contact" className="relative w-full min-h-screen bg-gradient-to-tr from-white via-accent to-white overflow-hidden">
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
     
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full mix-blend-multiply filter blur-xl"
        />
      </div>

      <div className="relative pt-20 pb-20">
        <div className="max-w-screen-xl mx-auto px-4">
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
              Get in <span className="text-secondary">touch</span>
            </motion.h2>
            <motion.p 
              className="text-textSecondary text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of these platforms!
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  translateY: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex h-full flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 min-h-[220px]"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`p-5 ${info.bgColor} text-white rounded-2xl mb-4 shadow-lg`}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-2 tracking-tight not-italic">{info.title}</h3>
                <div className="flex-1" />
                <p className="text-base md:text-lg text-textSecondary text-center font-medium tracking-wide select-all not-italic mt-auto">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 