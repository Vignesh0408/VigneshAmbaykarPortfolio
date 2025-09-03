// src/components/Projects.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Building an IDS with Snort 3',
      description:
        'Compiled Snort 3 from source (Hyperscan, Flatbuffers, DAQ), wrote custom rules, automated rule updates with PulledPork3, and validated using malicious PCAPs (e.g., WhisperGate).',
      impact: 'End-to-end IDS lab: rules, automation, PCAP validation',
      stack: ['Snort 3', 'PulledPork3', 'Hyperscan', 'Flatbuffers', 'DAQ'],
      icon: '🛡️',
      link: 'https://medium.com/@vignesh3967/building-my-first-ids-lab-with-snort-3-37ac1ebc0345',
    },
    {
      title: 'Active Directory Detection & Response',
      description:
        'Detected unauthorized RDP attempts in Splunk and automated AD account disablement via LDAP using Shuffle + Slack alerts.',
      impact: '↑ detection accuracy 40% · ↓ response time 85%',
      stack: ['Splunk', 'Active Directory', 'Slack', 'Shuffle'],
      icon: '🔐',
      link: 'https://medium.com/@vignesh3967/building-a-complete-soc-lab-active-directory-detection-response-automation-project-f48d2e82a84f',
    },
    {
      title: 'SOC Automation – Wazuh + TheHive + Shuffle',
      description:
        'Simulated Mimikatz credential dumping with Sysmon; automated triage in TheHive with VirusTotal enrichment and response playbooks.',
      impact: '↓ manual triage 70%',
      stack: ['Wazuh', 'Sysmon', 'VirusTotal', 'TheHive', 'Shuffle'],
      icon: '🛠',
      link: 'https://medium.com/@vignesh3967/soc-automation-with-soar-9203ed8f33b9',
    },
    {
      title: 'SOAR-EDR Integration – LimaCharlie + Tines',
      description:
        'Automated host isolation for Lazagne.exe detections; real-time Slack/Email alerts using Tines playbooks.',
      impact: 'Faster EDR response & visibility',
      stack: ['LimaCharlie', 'Tines', 'Python', 'Slack'],
      icon: '🧪',
      link: 'https://medium.com/@vignesh3967/soar-edr-project-automating-incident-response-with-limacharlie-and-tines-9754364ec30c',
    },
    {
      title: '30-Day SOC Challenge – ELK Stack',
      description:
        'Monitored Windows/Linux telemetry with Elastic; automated alert→ticket creation using OS Ticket.',
      impact: 'Streamlined alert handling in lab SOC',
      stack: ['ELK Stack', 'Sysmon', 'OS Ticket'],
      icon: '📊',
      link: 'https://medium.com/@vignesh3967/installing-elastic-defend-a-step-by-step-guide-to-protecting-your-endpoints-6ee9a0008f96',
    },
    {
      title: 'Active Directory Home Lab with Splunk',
      description:
        'Simulated attacks using Atomic Red Team & Crowbar; tuned Splunk detections and parsing for AD attack patterns.',
      impact: '↑ detection logic quality 25%',
      stack: ['Splunk', 'Active Directory', 'Atomic Red Team', 'Crowbar'],
      icon: '🎯',
      link: 'https://medium.com/@vignesh3967/simulating-cyber-attack-and-analyzing-logs-in-an-active-directory-home-lab-with-splunk-640c4f88e667',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* soft background image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Technology background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className={[
                'group relative overflow-hidden rounded-2xl border',
                'bg-white dark:bg-gray-800 p-8 shadow-xl hover:shadow-2xl',
                'transition-all duration-500 hover:-translate-y-2',
                'border-gray-200 dark:border-gray-700',
              ].join(' ')}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const x = e.clientX - r.left;
                const y = e.clientY - r.top;
                (e.currentTarget as HTMLDivElement).style.setProperty('--x', `${x}px`);
                (e.currentTarget as HTMLDivElement).style.setProperty('--y', `${y}px`);
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.removeProperty('--x');
                (e.currentTarget as HTMLDivElement).style.removeProperty('--y');
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="View Project"
                >
                  <ExternalLink size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-6">
                <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                  <span className="font-bold">Impact:</span> {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* cursor-follow glow */}
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(220px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.18), transparent 40%)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
