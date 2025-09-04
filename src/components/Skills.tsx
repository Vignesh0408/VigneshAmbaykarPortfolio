// src/components/Skills.tsx
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
        'Security Monitoring & Detection Engineering',
      ],
    },
    {
      icon: Brain,
      title: 'Frameworks & Standards',
      skills: ['MITRE ATT&CK', 'NIST Cybersecurity Framework', 'ISO/IEC 27001', 'Cyber Kill Chain'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        'Snort 3, PulledPork3 (rule automation)',
        'Splunk, Wazuh, ELK Stack',
        'LimaCharlie, Tines, Shuffle, TheHive',
        'VirusTotal, OS Ticket',
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://i.postimg.cc/59s9pbp3/Soc-image.jpg"
        alt="SOC Dashboard"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40 pointer-events-none" />

      {/* Foreground */}
      <div className="relative z-10 container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            // stagger-in per card
            const cardVisible = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

            return (
              <div key={category.title} className="relative group">
                {/* gradient border glow on hover */}
                <div
                  className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-indigo-500/40 via-cyan-400/30 to-emerald-400/30
                             opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                  aria-hidden
                />

                <div
                  className={`relative rounded-3xl bg-white p-8 shadow-sm border border-slate-200
                              dark:bg-slate-900/70 dark:border-slate-800
                              transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[0.3deg] ${cardVisible}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl mr-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const itemVisible = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2';
                      return (
                        <li
                          key={skill}
                          className={`flex items-start text-slate-700 dark:text-slate-300 transition-all duration-500 ${itemVisible}`}
                          style={{ transitionDelay: `${index * 120 + skillIndex * 60}ms` }}
                        >
                          <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-slate-900 dark:bg-white" />
                          <span className="leading-relaxed">{skill}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
