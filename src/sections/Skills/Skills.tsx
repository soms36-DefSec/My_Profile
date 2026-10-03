import React from 'react';
import { skills } from '../../data/skills';
import { SkillCategory } from '../../types';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TechBadge } from '../../components/ui/TechBadge';
import { Cloud, Shield, Cpu, Terminal, Database } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    'Cloud & Infrastructure',
    'Defensive Security & SOC',
    'AI & ML Security',
    'Systems & Languages',
    'Databases & Protocols',
  ];

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'Cloud & Infrastructure':
        return <Cloud size={18} color="var(--cyan)" />;
      case 'Defensive Security & SOC':
        return <Shield size={18} color="var(--accent)" />;
      case 'AI & ML Security':
        return <Cpu size={18} color="var(--accent-light)" />;
      case 'Systems & Languages':
        return <Terminal size={18} color="var(--cyan)" />;
      case 'Databases & Protocols':
        return <Database size={18} color="var(--amber)" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          number="05 / SKILLS"
          title="Technical Arsenal & Tooling"
          subtitle="Grouped strictly by engineering discipline. No arbitrary percentage bars or vanity meters."
          tag="DISCIPLINARY MATRIX"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div
                key={category}
                className="surface-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Domain Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  {getCategoryIcon(category)}
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <TechBadge
                        name={skill.name}
                        variant={skill.featured ? 'accent' : 'default'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
