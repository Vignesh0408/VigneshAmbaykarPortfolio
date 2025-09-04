// src/components/Projects.tsx
import React, { useMemo, useState } from 'react';

type Category = 'SIEM' | 'SOAR' | 'Detection Rules' | 'Active Directory' | 'ELK';

type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  categories: Category[];
  impact: string;
  link: string; // external link to Medium/GitHub
  icon: string; // emoji
};

// --- Data (move to context later if you like) ---
const DATA: Project[] = [
  {
    slug: 'snort3-ids',
    title: 'Building an IDS with Snort 3',
    oneLiner: 'End-to-end IDS lab: custom rules, automated updates, PCAP validation.',
    categories: ['Detection Rules'],
    impact: 'Operational IDS lab with automated rule updates & PCAP validation.',
    link: 'https://medium.com/@vignesh3967/building-my-first-ids-lab-with-snort-3-37ac1ebc0345',
    icon: '🛡️',
  },
  {
    slug: 'ad-detection-response',
    title: 'Active Directory Detection & Response',
    oneLiner: '↑ detection accuracy 40% · ↓ response time 85% (RDP brute-force → auto-disable).',
    categories: ['SIEM', 'SOAR', 'Active Directory'],
    impact: 'Detection accuracy ↑40%; response time ↓85% via automation.',
    link: 'https://medium.com/@vignesh3967/building-a-complete-soc-lab-active-directory-detection-response-automation-project-f48d2e82a84f',
    icon: '🔐',
  },
  {
    slug: 'wazuh-thehive-shuffle',
    title: 'SOC Automation – Wazuh + TheHive + Shuffle',
    oneLiner: 'Sysmon → Wazuh → TheHive triage with VirusTotal enrichment; playbooks reduce toil.',
    categories: ['SOAR', 'SIEM', 'Detection Rules'],
    impact: 'Manual triage workload reduced ~70%.',
    link: 'https://medium.com/@vignesh3967/soc-automation-with-soar-9203ed8f33b9',
    icon: '🛠️',
  },
  {
    slug: 'soar-edr-limacharlie-tines',
    title: 'SOAR–EDR Integration – LimaCharlie + Tines',
    oneLiner: 'LaZagne detection triggers automated host isolation; Slack/Email notifications.',
    categories: ['SOAR'],
    impact: 'Faster EDR response & clearer visibility.',
    link: 'https://medium.com/@vignesh3967/soar-edr-project-automating-incident-response-with-limacharlie-and-tines-9754364ec30c',
    icon: '🧪',
  },
  {
    slug: 'elk-30-day-soc',
    title: '30-Day SOC Challenge – ELK Stack',
    oneLiner: 'Elastic ingest + rules + dashboards; alert → OS Ticket automation.',
    categories: ['ELK', 'SIEM'],
    impact: 'Streamlined alert handling & standardized tracking.',
    link: 'https://medium.com/@vignesh3967/installing-elastic-defend-a-step-by-step-guide-to-protecting-your-endpoints-6ee9a0008f96',
    icon: '📊',
  },
  {
    slug: 'ad-home-lab-splunk',
    title: 'Active Directory Home Lab with Splunk',
    oneLiner: 'ATT&CK-mapped detections tuned with Atomic Red Team & Crowbar simulations.',
    categories: ['Active Directory', 'SIEM'],
    impact: 'Detection logic quality ↑ ~25% with less noise.',
    link: 'https://medium.com/@vignesh3967/simulating-cyber-attack-and-analyzing-logs-in-an-active-directory-home-lab-with-splunk-640c4f88e667',
    icon: '🎯',
  },
];

const FILTERS: Array<'All' | Category> = ['All', 'SIEM', 'SOAR', 'Detection Rules', 'Active Directory', 'ELK'];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Category>('All');

  const projects = useMemo(() => {
    if (filter === 'All') return DATA;
    return DATA.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Featured Projects</h2>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm border transition
                ${filter === f
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:border-slate-400'
                }`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition
                         border-slate-200 dark:bg-slate-800 dark:border-slate-700"
              title={`Open ${p.title}`}
            >
              <div className="text-3xl mb-3">{p.icon}</div>

              <h3 className="text-lg font-semibold mb-1 text-slate-900 dark:text-white">{p.title}</h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">{p.oneLiner}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.categories.map((c) => (
                  <span
                    key={c}
                    className="px-2 py-0.5 text-xs rounded-full
                               bg-slate-100 text-slate-700 border border-slate-300
                               dark:bg-slate-700/50 dark:text-slate-200 dark:border-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-300 underline underline-offset-4">
                View Case Study →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
