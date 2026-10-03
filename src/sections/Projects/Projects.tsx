import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from '../../components/ui/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'EDR & Systems', 'AI & LLM Security', 'Tooling & Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          number="03 / WORK"
          title="Featured Projects & Security Systems"
          subtitle="Real-world engineering implementations: low-level endpoint telemetry, AI security scanning, and infrastructure automation."
          tag="DEPLOYED & IN-DEVELOPMENT"
        />

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`tech-pill ${isActive ? 'tech-pill--accent' : ''}`}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  borderColor: isActive ? 'var(--accent)' : 'var(--border-default)',
                }}
              >
                {isActive && <span style={{ color: 'var(--accent)' }}>▶ </span>}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onExplore={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
