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
          title="Projects & security systems"
          subtitle="Implementations across endpoint telemetry, cloud security scanning, and systems automation."
        />

        {/* Category Filters */}
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
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent)' : 'var(--border-default)',
                  backgroundColor: isActive ? 'rgba(244, 63, 94, 0.08)' : 'transparent',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-xs)',
                  transition: 'all var(--transition-fast)',
                }}
              >
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

        {/* Project Technical Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
