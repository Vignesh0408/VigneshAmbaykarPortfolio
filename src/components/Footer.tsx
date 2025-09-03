import React from 'react';
import { Heart, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/vigneshambaykar'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Vignesh0408'
    },
    {
      icon: ExternalLink,
      label: 'Medium',
      url: 'https://medium.com/@vignesh3967'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Vignesh Ambaykar</h3>
            <p className="text-gray-400">SOC Analyst & Cybersecurity Professional</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Vignesh Ambaykar. Made with 
            <Heart size={16} className="text-red-500" /> 
            and passion for cybersecurity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;