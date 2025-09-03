// src/App.tsx
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';

// Lazy-load sections so a bad import won’t crash everything
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* SEO / Social */}
      <Helmet>
        <title>Vignesh Ambaykar · SOC Automation & Data Analytics</title>
        <meta
          name="description"
          content="SOC automation, detection engineering, and data analytics projects with measurable impact."
        />
        <meta property="og:title" content="Vignesh Ambaykar · Portfolio" />
        <meta
          property="og:description"
          content="Built Snort 3 IDS, automated compliance reporting, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vigneshambaykarportfolio.netlify.app/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vigneshambaykarportfolio.netlify.app/" />
      </Helmet>

      {/* Top sticky scroll progress bar */}
      <ScrollProgress />

      <Suspense fallback={<div className="p-6 text-center opacity-70">Loading…</div>}>
        <ErrorBoundary name="Header">
          <Header />
        </ErrorBoundary>

        <main id="hero">
          <ErrorBoundary name="Hero">
            <Hero />
          </ErrorBoundary>

          <ErrorBoundary name="About">
            <About />
          </ErrorBoundary>

          <ErrorBoundary name="Skills">
            <Skills />
          </ErrorBoundary>

          <ErrorBoundary name="Projects">
            <Projects />
          </ErrorBoundary>

          <ErrorBoundary name="Experience">
            <Experience />
          </ErrorBoundary>

          <ErrorBoundary name="Certifications">
            <Certifications />
          </ErrorBoundary>

          <ErrorBoundary name="Contact">
            <Contact />
          </ErrorBoundary>
        </main>

        <ErrorBoundary name="Footer">
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
