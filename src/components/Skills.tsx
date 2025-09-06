// src/components/Skills.tsx
import React, { useMemo, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/** ---------- Types ---------- */
type Evidence = { title: string; link: string; proof: string };
type Kind = 'core' | 'framework' | 'tool';

/** What you see on the page */
type DisplayChip = {
  label: string;      // shown on the chip
  kind: Kind;         // for styling + tooltip routing
  groupKey?: string;  // which evidence group this chip maps to
};

type TooltipState =
  | null
  | { label: string; kind: Kind; x: number; y: number; groupKey?: string };

/** ---------- Projects (mirrors Projects.tsx) ---------- */
const PROJECTS = {
  'snort3-ids': {
    title: 'Building an IDS with Snort 3',
    link:
      'https://medium.com/@vignesh3967/building-my-first-ids-lab-with-snort-3-37ac1ebc0345',
    oneLiner:
      'End-to-end IDS lab: custom rules, automated updates, PCAP validation.',
  },
  'ad-detection-response': {
    title: 'Active Directory Detection & Response',
    link:
      'https://medium.com/@vignesh3967/building-a-complete-soc-lab-active-directory-detection-response-automation-project-f48d2e82a84f',
    oneLiner:
      'RDP brute-force alerts in Splunk → auto-disable in AD (Shuffle + Slack).',
  },
  'wazuh-thehive-shuffle': {
    title: 'SOC Automation – Wazuh + TheHive + Shuffle',
    link: 'https://medium.com/@vignesh3967/soc-automation-with-soar-9203ed8f33b9',
    oneLiner:
      'Sysmon → Wazuh → TheHive triage with VirusTotal enrichment & response playbooks.',
  },
  'soar-edr-limacharlie-tines': {
    title: 'SOAR–EDR Integration – LimaCharlie + Tines',
    link:
      'https://medium.com/@vignesh3967/soar-edr-project-automating-incident-response-with-limacharlie-and-tines-9754364ec30c',
    oneLiner:
      'LaZagne detection triggers automated host isolation; Slack/Email notifications.',
  },
  'elk-30-day-soc': {
    title: '30-Day SOC Challenge – ELK Stack',
    link:
      'https://medium.com/@vignesh3967/installing-elastic-defend-a-step-by-step-guide-to-protecting-your-endpoints-6ee9a0008f96',
    oneLiner:
      'Elastic ingest + detections + dashboards; alert → OS Ticket automation.',
  },
  'ad-home-lab-splunk': {
    title: 'Active Directory Home Lab with Splunk',
    link:
      'https://medium.com/@vignesh3967/simulating-cyber-attack-and-analyzing-logs-in-an-active-directory-home-lab-with-splunk-640c4f88e667',
    oneLiner:
      'ATT&CK-mapped detections tuned with Atomic Red Team & Crowbar simulations.',
  },
} as const;

/** ---------- Evidence (group keys from your earlier version) ---------- */
const EVIDENCE_MAP: Record<string, Evidence[]> = {
  'SIEM & Log Analysis': [
    {
      title: PROJECTS['elk-30-day-soc'].title,
      link: PROJECTS['elk-30-day-soc'].link,
      proof: 'Elastic dashboards + detections; automated alert → ticket.',
    },
    {
      title: PROJECTS['ad-home-lab-splunk'].title,
      link: PROJECTS['ad-home-lab-splunk'].link,
      proof: 'Splunk parsing & queries for AD attack simulations.',
    },
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'Sysmon → Wazuh pipeline with alert triage.',
    },
    {
      title: PROJECTS['ad-detection-response'].title,
      link: PROJECTS['ad-detection-response'].link,
      proof: 'RDP brute-force detections and Slack alerts.',
    },
  ],
  'Intrusion Detection & Prevention (Snort 3, rule authoring, PCAP analysis)': [
    {
      title: PROJECTS['snort3-ids'].title,
      link: PROJECTS['snort3-ids'].link,
      proof:
        'Compiled Snort 3; authored rules; validated with malicious PCAPs; PulledPork3 automation.',
    },
  ],
  'SOAR & Automation Workflows': [
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'Automated triage in TheHive; Shuffle playbooks.',
    },
    {
      title: PROJECTS['soar-edr-limacharlie-tines'].title,
      link: PROJECTS['soar-edr-limacharlie-tines'].link,
      proof: 'Host isolation via Tines responding to EDR detections.',
    },
    {
      title: PROJECTS['ad-detection-response'].title,
      link: PROJECTS['ad-detection-response'].link,
      proof: 'Account disablement via LDAP using Shuffle.',
    },
  ],
  'Incident Response & Alert Triage': [
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'Case creation & enrichment in TheHive with VT.',
    },
    {
      title: PROJECTS['elk-30-day-soc'].title,
      link: PROJECTS['elk-30-day-soc'].link,
      proof: 'Alert → OS Ticket automation for streamlined handling.',
    },
  ],
  'Threat Detection & IOC Enrichment': [
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'VirusTotal enrichment and response playbooks.',
    },
    {
      title: PROJECTS['ad-home-lab-splunk'].title,
      link: PROJECTS['ad-home-lab-splunk'].link,
      proof: 'ATT&CK-mapped detections tuned with adversary sims.',
    },
  ],
  'Security Monitoring & Detection Engineering': [
    {
      title: PROJECTS['elk-30-day-soc'].title,
      link: PROJECTS['elk-30-day-soc'].link,
      proof: 'Elastic detection engineering & dashboards.',
    },
    {
      title: PROJECTS['ad-home-lab-splunk'].title,
      link: PROJECTS['ad-home-lab-splunk'].link,
      proof: 'Splunk detections & parsing for AD attack patterns.',
    },
    {
      title: PROJECTS['snort3-ids'].title,
      link: PROJECTS['snort3-ids'].link,
      proof: 'Network rules for IDS coverage.',
    },
  ],

  // Tools groups
  'Snort 3, PulledPork3 (rule automation)': [
    {
      title: PROJECTS['snort3-ids'].title,
      link: PROJECTS['snort3-ids'].link,
      proof: 'PulledPork3 for rule updates; rules validated with PCAPs.',
    },
  ],
  'Splunk, Wazuh, ELK Stack': [
    {
      title: PROJECTS['elk-30-day-soc'].title,
      link: PROJECTS['elk-30-day-soc'].link,
      proof: 'Elastic ingest + detections + dashboards.',
    },
    {
      title: PROJECTS['ad-home-lab-splunk'].title,
      link: PROJECTS['ad-home-lab-splunk'].link,
      proof: 'Splunk detections aligned to ATT&CK.',
    },
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'Wazuh pipeline from Sysmon telemetry.',
    },
  ],
  'LimaCharlie, Tines, Shuffle, TheHive': [
    {
      title: PROJECTS['soar-edr-limacharlie-tines'].title,
      link: PROJECTS['soar-edr-limacharlie-tines'].link,
      proof: 'LC detections kick off Tines isolation workflows.',
    },
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'Shuffle playbooks and TheHive cases.',
    },
    {
      title: PROJECTS['ad-detection-response'].title,
      link: PROJECTS['ad-detection-response'].link,
      proof: 'Shuffle + Slack for auto-disable notifications.',
    },
  ],
  'VirusTotal, OS Ticket': [
    {
      title: PROJECTS['wazuh-thehive-shuffle'].title,
      link: PROJECTS['wazuh-thehive-shuffle'].link,
      proof: 'IOC enrichment via VirusTotal during triage.',
    },
    {
      title: PROJECTS['elk-30-day-soc'].title,
      link: PROJECTS['elk-30-day-soc'].link,
      proof: 'Alert → OS Ticket for structured IR.',
    },
  ],
};

/** ---------- Framework one-liners ---------- */
const FRAMEWORK_ONE_LINERS: Record<string, string> = {
  'MITRE ATT&CK': 'Used to design & validate detections across adversary TTPs.',
  'NIST Cybersecurity Framework':
    'Guides control selection and SOC process maturity.',
  'ISO/IEC 27001':
    'Familiar with ISMS concepts, risk treatment, and Annex A controls.',
  'Cyber Kill Chain': 'Applied to map detection coverage and response points.',
};

/** ---------- Display chips (split like your 2nd image) ---------- */
const displayChips: DisplayChip[] = [
  // Row 1
  { label: 'SIEM', kind: 'core', groupKey: 'SIEM & Log Analysis' },
  { label: 'Log Analysis', kind: 'core', groupKey: 'SIEM & Log Analysis' },
  {
    label: 'Intrusion Detection & Prevention (Snort 3)',
    kind: 'core',
    groupKey: 'Intrusion Detection & Prevention (Snort 3, rule authoring, PCAP analysis)',
  },
  { label: 'Rule Authoring', kind: 'core', groupKey: 'Intrusion Detection & Prevention (Snort 3, rule authoring, PCAP analysis)' },

  // Row 2
  { label: 'PCAP Analysis', kind: 'core', groupKey: 'Intrusion Detection & Prevention (Snort 3, rule authoring, PCAP analysis)' },
  { label: 'SOAR & Automation Workflows', kind: 'core', groupKey: 'SOAR & Automation Workflows' },
  { label: 'Incident Response', kind: 'core', groupKey: 'Incident Response & Alert Triage' },
  { label: 'Alert Triage', kind: 'core', groupKey: 'Incident Response & Alert Triage' },

  // Row 3
  { label: 'Threat Detection', kind: 'core', groupKey: 'Threat Detection & IOC Enrichment' },
  { label: 'IOC Enrichment', kind: 'core', groupKey: 'Threat Detection & IOC Enrichment' },
  { label: 'Security Monitoring', kind: 'core', groupKey: 'Security Monitoring & Detection Engineering' },
  { label: 'Detection Engineering', kind: 'core', groupKey: 'Security Monitoring & Detection Engineering' },

  // Frameworks
  { label: 'MITRE ATT&CK', kind: 'framework' },
  { label: 'NIST Cybersecurity Framework', kind: 'framework' },
  { label: 'ISO/IEC 27001', kind: 'framework' },
  { label: 'Cyber Kill Chain', kind: 'framework' },

  // Tools – split
  { label: 'Snort 3', kind: 'tool', groupKey: 'Snort 3, PulledPork3 (rule automation)' },
  { label: 'PulledPork3', kind: 'tool', groupKey: 'Snort 3, PulledPork3 (rule automation)' },

  { label: 'Splunk', kind: 'tool', groupKey: 'Splunk, Wazuh, ELK Stack' },
  { label: 'Wazuh', kind: 'tool', groupKey: 'Splunk, Wazuh, ELK Stack' },
  { label: 'ELK Stack', kind: 'tool', groupKey: 'Splunk, Wazuh, ELK Stack' },

  { label: 'LimaCharlie', kind: 'tool', groupKey: 'LimaCharlie, Tines, Shuffle, TheHive' },
  { label: 'Tines', kind: 'tool', groupKey: 'LimaCharlie, Tines, Shuffle, TheHive' },
  { label: 'Shuffle', kind: 'tool', groupKey: 'LimaCharlie, Tines, Shuffle, TheHive' },
  { label: 'TheHive', kind: 'tool', groupKey: 'LimaCharlie, Tines, Shuffle, TheHive' },

  { label: 'VirusTotal', kind: 'tool', groupKey: 'VirusTotal, OS Ticket' },
  { label: 'OS Ticket', kind: 'tool', groupKey: 'VirusTotal, OS Ticket' },
];

/** ===================================================== */
const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [tip, setTip] = useState<TooltipState>(null);
  const chips = useMemo(() => displayChips, []);

  const handleEnter =
    (label: string, kind: Kind, groupKey?: string) =>
    (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
      const pos =
        'clientX' in e
          ? { x: e.clientX, y: e.clientY }
          : {
              x: window.innerWidth / 2,
              y: (e.target as HTMLElement).getBoundingClientRect().top + 40,
            };
      setTip({ label, kind, groupKey, ...pos });
    };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tip) return;
    setTip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t));
  };

  const handleLeave = () => setTip(null);

  const renderTooltip = () => {
    if (!tip) return null;

    const evidences =
      tip.kind === 'framework'
        ? []
        : tip.groupKey
        ? EVIDENCE_MAP[tip.groupKey] || []
        : [];

    const fwLine =
      tip.kind === 'framework' ? FRAMEWORK_ONE_LINERS[tip.label] : undefined;

    return (
      <div
        className="fixed z-[60] pointer-events-none"
        style={{ left: tip.x + 18, top: tip.y + 18, maxWidth: 'min(88vw, 520px)' }}
      >
        <div className="rounded-2xl border border-white/20 bg-slate-900/85 text-slate-100 shadow-2xl backdrop-blur-md p-4">
          <div className="text-sm font-semibold mb-2">{tip.label}</div>

          {fwLine ? (
            <div className="text-xs text-slate-300">{fwLine}</div>
          ) : evidences.length ? (
            <ul className="space-y-2">
              {evidences.map((ev) => (
                <li key={ev.title} className="text-xs leading-snug">
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200 underline underline-offset-2"
                  >
                    {ev.title}
                  </a>
                  <span className="text-slate-400"> — {ev.proof}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-xs text-slate-300">Evidence coming soon.</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background */}
      <img
        src="https://i.postimg.cc/59s9pbp3/Soc-image.jpg"
        alt="SOC Dashboard"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 pointer-events-none" />

      {/* Foreground */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Explore My
          <span className="block">Skills</span>
        </h2>

        {/* Wide wrap to reduce side gaps on large screens */}
        <div
          className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-6xl lg:max-w-7xl xl:max-w-[88rem] mx-auto"
          onMouseMove={handleMove}
        >
          {chips.map((chip, i) => (
            <button
              key={`${chip.label}-${i}`}
              type="button"
              onMouseEnter={handleEnter(chip.label, chip.kind, chip.groupKey)}
              onMouseLeave={handleLeave}
              onFocus={handleEnter(chip.label, chip.kind, chip.groupKey)}
              onBlur={handleLeave}
              className={`px-6 py-3 rounded-2xl border text-base md:text-lg whitespace-nowrap
                          transition-all duration-300 outline-none
                          bg-white/10 border-white/20 text-white backdrop-blur-sm
                          hover:border-white/50 hover:shadow
                          focus-visible:ring-2 focus-visible:ring-indigo-300/60
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 35}ms` }}
              aria-label={`${chip.label} — hover or focus to see supporting evidence`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {renderTooltip()}
    </section>
  );
};

export default Skills;
