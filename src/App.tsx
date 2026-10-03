import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Focus } from './sections/Focus/Focus';
import { Projects } from './sections/Projects/Projects';
import { Journey } from './sections/Journey/Journey';
import { Skills } from './sections/Skills/Skills';
import { Clubs } from './sections/Clubs/Clubs';
import { Activities } from './sections/Activities/Activities';
import { Achievements } from './sections/Achievements/Achievements';
import { Now } from './sections/Now/Now';
import { GitHubSection } from './sections/GitHub/GitHubSection';
import { Hire } from './sections/Hire/Hire';
import { Contact } from './sections/Contact/Contact';

const sectionIds = [
  'about',
  'focus',
  'projects',
  'journey',
  'skills',
  'clubs',
  'activities',
  'achievements',
  'now',
  'github',
  'hire',
  'contact',
];

export const App: React.FC = () => {
  const activeSection = useScrollSpy(sectionIds, 160);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Accessibility: Skip to Content */}
      <a href="#about" className="skip-to-content font-mono">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <About />
        <div className="section-divider" />
        <Focus />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Clubs />
        <div className="section-divider" />
        <Activities />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Now />
        <div className="section-divider" />
        <GitHubSection />
        <div className="section-divider" />
        <Hire />
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
