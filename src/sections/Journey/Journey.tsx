import React from 'react';
import { journey } from '../../data/journey';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { TimelineItem } from './TimelineItem';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: 'var(--max-width-narrow)' }}>
        <SectionHeader
          number="04 / JOURNEY"
          title="Progression & Key Milestones"
          subtitle="A chronological timeline tracing security initiatives, funded research, engineering leadership, and academic foundations."
          tag="TIMELINE // 2023 – PRESENT"
        />

        <div style={{ marginTop: '2.5rem' }}>
          {journey.map((item, idx) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={idx === journey.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
