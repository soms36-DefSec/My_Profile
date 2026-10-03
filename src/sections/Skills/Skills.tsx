import React from 'react';
import { skills } from '../../data/skills';
import { SkillCategory } from '../../types';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    'Defensive Security & SOC',
    'Systems & Languages',
    'Cloud & Infrastructure',
    'AI & ML Security',
    'Databases & Protocols',
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          number="04 / SKILLS"
          title="Technical skills & tooling"
          subtitle="Languages, architectures, and tools used across projects, research, and development."
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div
                key={category}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(220px, 280px) 1fr',
                  gap: '2rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.5rem',
                  alignItems: 'baseline',
                }}
                className="skills-category-row"
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {category}
                  </h3>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {categorySkills.length} technologies
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                  }}
                >
                  {categorySkills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      variant={skill.featured ? 'accent' : 'default'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .skills-category-row {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
