import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* 🔹 Background image */}
      <img
        src="https://i.postimg.cc/sXjp53DW/f19731c2-12c4-48df-928e-a554d43cf992.jpg"
        alt="Cybersecurity Intern Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-15 pointer-events-none"
      />

      {/* 🔹 Overlay to slightly darken for readability */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>

        {/* 🧑‍💻 Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                👨‍💻 Cyber Security Intern
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">Verzeo</p>
            </div>

            <div className="mt-4 sm:mt-0 text-sm text-gray-600 dark:text-gray-400 space-y-1 sm:text-right">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                Mar 2021 – Apr 2021
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Chennai, India
              </div>
            </div>
          </div>

          {/* 💬 Narrative */}
          <div className="text-gray-800 dark:text-gray-200 space-y-5">
            <p>
              During my internship at Verzeo, I performed in-depth vulnerability assessments on real-world web
              applications using tools like <strong>Nmap</strong> and <strong>Burp Suite</strong>.
              I also built automated exploits using <strong>Metasploit</strong>, delivering payloads via `.bat` scripts.
            </p>
            <p>
              One of my most impactful projects involved designing and executing phishing simulations for employees,
              followed by hands-on awareness sessions to boost the security culture within the company.
            </p>
            <p>
              As a result, we improved detection coverage and enhanced the company’s security posture by an estimated <strong>15%</strong>.
            </p>
          </div>

          {/* 🛠️ Tools */}
          <div className="mt-6">
            <p className="text-sm font-medium uppercase text-gray-500 dark:text-gray-400 mb-2">Tools Used</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {['Nmap', 'Burp Suite', 'Metasploit', 'Batch Scripting'].map((tool) => (
                <span
                  key={tool}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;