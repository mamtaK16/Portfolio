import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiPython, SiCplusplus, SiAndroid, SiGit, SiNodedotjs, SiNestjs, SiCss3 } from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { FaPaintBrush, FaDatabase, FaLaptop } from 'react-icons/fa';
import GitHubGraph from './GitHubGraph';

const Hero = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const waveAnimation = {
    rotate: [0, 15, -5, 15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 5,
    }
  };

  return (
    <div name="home" className="min-h-[100vh] w-full bg-gradient-to-br from-white via-accent to-white overflow-hidden pt-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:flex-row md:justify-between relative">
        {/* Subtle background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-secondary/[0.03] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-tertiary/[0.03] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col justify-center max-w-xl z-10 pt-8 md:pt-0"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center gap-3 text-xl sm:text-2xl text-secondary/90 font-medium tracking-wide"
          >
            <span className="uppercase tracking-widest">Frontend developer</span>
            <motion.span 
              className="inline-block origin-bottom-right text-2xl"
              animate={waveAnimation}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-7xl font-bold mt-4 text-textPrimary"
          >
            Hi, I'm <span className="text-secondary">Mamta</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-6">
            <TypeAnimation
              sequence={[
                'Builds fast, clean UIs',
                2000,
                'Shipped real products',
                2000,
                'Open to opportunities',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl text-textSecondary font-bold"
            />
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="text-textSecondary/90 py-6 max-w-md leading-relaxed text-lg"
          >
            I design and build responsive React apps focused on performance and clarity.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-5 mt-2"
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group relative inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              View projects
              <motion.span 
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </Link>

            <motion.a
              href={`${process.env.PUBLIC_URL}/mamta-resume11[1].pdf`}
              download
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-secondary/20 hover:border-secondary text-secondary hover:bg-secondary/5 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex gap-8 mt-10"
          >
            {[
              // { href: "https://www.linkedin.com/in/mamta-kumari-48882b263", Icon: BsLinkedin, label: "LinkedIn" },
              // { href: "https://github.com", Icon: BsGithub, label: "GitHub" },
              // { href: "https://instagram.com", Icon: BsInstagram, label: "Instagram" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-textSecondary/70 hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/2 mt-8 md:mt-0 z-10"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="absolute -top-4 right-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg px-5 py-3 flex items-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="w-2 h-2 bg-secondary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-textPrimary">1.8</span>
                <span className="text-sm text-textSecondary/70">Years of Experience</span>
              </div>
            </motion.div>
            
            <div className="relative">
              <img 
                src={`${process.env.PUBLIC_URL}/image/Writing_codes.png`}
                alt="Developer illustration"
                className="w-full max-w-lg mx-auto rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Focus Areas Section */}
      <div className="relative w-full bg-gradient-to-tr from-white via-accent to-white pt-20 pb-20 overflow-hidden">
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
              Focusing on the <span className="text-secondary">best</span>
            </motion.h2>
            <motion.p 
              className="text-textSecondary text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Delivering excellence through modern technologies and design principles
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  <span className="text-secondary">Multiple</span> tech stack
                </h3>
                <p className="text-textSecondary text-lg">
                  I have worked with multiple technologies and frameworks to build scalable and efficient applications.
                </p>
              </div>

              {/* Floating Icons */}
              <div className="absolute inset-0 overflow-hidden">
                {[
                  { Icon: SiJavascript, top: "10%", left: "10%", duration: 15 },
                  { Icon: SiTypescript, top: "20%", left: "80%", duration: 12 },
                  { Icon: SiReact, top: "60%", left: "15%", duration: 18 },
                  { Icon: SiVuedotjs, top: "75%", left: "70%", duration: 14 },
                  { Icon: SiPython, top: "40%", left: "60%", duration: 16 },
                  { Icon: SiCplusplus, top: "85%", left: "30%", duration: 13 },
                  { Icon: SiAndroid, top: "15%", left: "40%", duration: 17 },
                  { Icon: SiGit, top: "50%", left: "85%", duration: 15 },
                  { Icon: SiNodedotjs, top: "30%", left: "20%", duration: 14 },
                  { Icon: SiNestjs, top: "70%", left: "50%", duration: 16 },
                  { Icon: SiCss3, top: "25%", left: "65%", duration: 13 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-secondary/20 transition-colors duration-300 group-hover:text-secondary/40"
                    style={{ top: item.top, left: item.left }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: item.duration,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <item.Icon className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Dev & Design Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-8 mb-8">
                <motion.div
                  className="flex items-center gap-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaDatabase className="w-12 h-12 text-secondary" />
                  <div className="h-[2px] w-16 bg-secondary" />
                  <FaLaptop className="w-12 h-12 text-secondary" />
                  <div className="h-[2px] w-16 bg-secondary" />
                  <FaPaintBrush className="w-12 h-12 text-secondary" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-textPrimary mb-4 text-center">
                Dev & <span className="text-secondary">design</span>
              </h3>
              <p className="text-textSecondary text-lg text-center">
                Excels in both development and design to create a seamless and intuitive user experience.
              </p>
            </motion.div>

            {/* Collaboration Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">
                    Open to <span className="text-secondary">collaborations</span>
                  </h3>
                  <p className="text-textSecondary text-lg">
                    Whether a small minor project or your next big SaaS, I am always open to collaborations and new projects.
                  </p>
                </div>
                <motion.div
                  className="md:w-1/2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/image/code backgroundimage.jpg`}
                    alt="MacBook Pro"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 