// src/components/Experience.tsx
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
      className="relative py-20 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-black overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://i.postimg.cc/sXjp53DW/f19731c2-12c4-48df-928e-a554d43cf992.jpg"
        alt="Cybersecurity Intern Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-15 pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative group max-w-4xl mx-auto"
        >
          {/* glowing gradient border */}
          <div
            className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-indigo-500/40 via-cyan-400/30 to-emerald-400/40 opacity-0 group-hover:opacity-100 blur-lg transition duration-700"
            aria-hidden
          />

          <div className="relative bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  👨‍💻 Cyber Security Intern
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300">Verzeo</p>
              </div>

              <div className="mt-4 sm:mt-0 text-sm text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
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

            {/* Narrative with staggered fade-in */}
            <div className="text-slate-800 dark:text-slate-200 space-y-5">
              {[
                `During my internship at Verzeo, I performed in-depth vulnerability assessments on real-world web applications using tools like Nmap and Burp Suite. I also built automated exploits using Metasploit, delivering payloads via .bat scripts.`,
                `One of my most impactful projects involved designing and executing phishing simulations for employees, followed by hands-on awareness sessions to boost the security culture within the company.`,
                `As a result, we improved detection coverage and enhanced the company’s security posture by an estimated 15%.`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  className="leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-8">
              <p className="text-sm font-medium uppercase text-slate-500 dark:text-slate-400 mb-3">
                Tools Used
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 text-sm"
              >
                {['Nmap', 'Burp Suite', 'Metasploit', 'Batch Scripting'].map((tool, idx) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                    style={{ transitionDelay: `${0.1 * idx}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
