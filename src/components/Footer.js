import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={20} />,
      href: '#',
      label: 'GitHub',
    },
    {
      id: 2,
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/mamta-kumari-48882b263',
      label: 'LinkedIn',
    },
    {
      id: 3,
      icon: <FaTwitter size={20} />,
      href: '#',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-textSecondary text-sm ">
            © {new Date().getFullYear()} Mamta. Short and sweet.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={`${process.env.PUBLIC_URL}/mamta-resume11[1].pdf`}
              download
              className="px-4 py-2 rounded-md border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors text-sm"
            >
              Download Resume
            </a>
            {/* {socialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 