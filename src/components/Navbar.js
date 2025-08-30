import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'experience', label: 'Experience' },
    { id: 3, link: 'about', label: 'About' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setShadow(isScrolled);
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: { 
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        shadow 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 2xl:px-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <h1 className="font-bold text-3xl text-secondary">{"<Mamta k/>"}</h1>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ id, link, label, isExternal, href }, index) => (
            <motion.div
              key={id}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold cursor-pointer text-textSecondary hover:text-secondary transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  to={link}
                  smooth
                  spy
                  offset={-100}
                  duration={500}
                  activeClass="text-secondary"
                  className="text-base font-bold cursor-pointer text-textSecondary hover:text-secondary transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="md:hidden cursor-pointer"
          whileTap={{ scale: 0.9 }}
          onClick={() => setNav(!nav)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={nav ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {nav ? (
                <XIcon className="w-6 text-secondary" />
              ) : (
                <MenuIcon className="w-6 text-secondary" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 w-[60%] h-screen bg-white p-10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-y-8 mt-16">
              {links.map(({ id, link, label, isExternal, href }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold cursor-pointer text-textSecondary hover:text-secondary transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={link}
                      smooth
                      spy
                      offset={-100}
                      duration={500}
                      onClick={() => setNav(false)}
                      activeClass="text-secondary"
                      className="text-lg font-bold cursor-pointer text-textSecondary hover:text-secondary transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 