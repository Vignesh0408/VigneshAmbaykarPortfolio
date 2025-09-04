// src/components/About.tsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black overflow-hidden"
    >
      {/* soft radial highlight */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/15"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <p className="mb-3 text-sm font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">
              A bit about me
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
              Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Vignesh</span> — a
              cybersecurity professional focused on <strong>detection engineering</strong> and
              <strong> SOC automation</strong>. With an MSc in Information Security from Royal Holloway, I build
              reproducible SOC labs, simulate real attacks, and automate incident response so teams can react
              faster and with more confidence.
            </p>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I specialize in <strong>log analysis</strong>, <strong>threat detection</strong>, and
              <strong> SOAR integrations</strong> across hybrid cloud. My work style is hands-on and iterative:
              measure, tune, automate, repeat. Driven by curiosity. Powered by purpose.
            </p>

            {/* Specialty chips */}
            <div
              className={`mb-8 flex flex-wrap gap-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {[
                'SIEM Engineering',
                'Detection Rules (ATT&CK)',
                'SOAR Playbooks',
                'EDR Response',
                'Threat Intel Enrichment',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 text-xs rounded-full border border-slate-300 bg-white text-slate-700
                             dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Metrics strip */}
            <div
              className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {[
                { k: 'Projects', v: '6' },
                { k: 'Detection Uplift', v: '40%' },
                { k: 'Response Time ↓', v: '85%' },
              ].map(({ k, v }) => (
                <div
                  key={k}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center
                             dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{v}</div>
                  <div className="text-xs mt-1 text-slate-600 dark:text-slate-300">{k}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold
                           bg-slate-900 text-white hover:bg-slate-800 transition
                           dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View Projects
              </a>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold
                           border border-slate-300 text-slate-800 bg-white hover:border-slate-500 transition
                           dark:border-slate-600 dark:text-slate-200 dark:bg-slate-900/40 dark:hover:border-slate-400"
              >
                Let’s Connect
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
            }`}
          >
            <div className="relative">
              {/* glow ring */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/40 via-cyan-400/30 to-emerald-400/40
                           blur opacity-0 md:group-hover:opacity-100 transition pointer-events-none"
                aria-hidden
              />
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                <img
                  src="https://i.postimg.cc/59s9pbp3/Soc-image.jpg"
                  alt="SOC dashboard"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
