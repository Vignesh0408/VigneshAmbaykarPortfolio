import React from 'react';
import { Shield, Brain, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Shield,
      title: 'Core Cybersecurity Concepts',
      skills: [
        'SIEM & Log Analysis',
        'Intrusion Detection & Prevention (Snort 3, rule authoring, PCAP analysis)',
        'SOAR & Automation Workflows',
        'Incident Response & Alert Triage',
        'Threat Detection & IOC Enrichment',
        'Security Monitoring & Detection Engineering'
      ]
    },
    {
      icon: Brain,
      title: 'Frameworks & Standards',
      skills: [
        'MITRE ATT&CK',
        'NIST Cybersecurity Framework',
        'ISO/IEC 27001',
        'Cyber Kill Chain'
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        'Snort 3, PulledPork3 (rule automation)',
        'Splunk, Wazuh, ELK Stack',
        'LimaCharlie, Tines, Shuffle, TheHive',
        'VirusTotal, OS Ticket'
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* 🔳 Background Image */}
      <img
        src="https://i.postimg.cc/59s9pbp3/Soc-image.jpg"
        alt="SOC Dashboard"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />

      {/* 🔳 Overlay (darker for readability) */}
      <div className="absolute inset-0 bg-black opacity-30 dark:opacity-40 pointer-events-none" />

      {/* 🔳 Foreground content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-900 dark:bg-white rounded-lg mr-4">
                    <Icon size={24} className="text-white dark:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
