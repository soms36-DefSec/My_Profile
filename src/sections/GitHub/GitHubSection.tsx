import React, { useState, useEffect } from 'react';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

interface RepoSummary {
  name: string;
  description: string;
  language: string;
  url: string;
  isPinned?: boolean;
}

export const GitHubSection: React.FC = () => {
  const fallbackRepos: RepoSummary[] = [
    {
      name: 'InsiEDR_Server',
      description: 'Central backend, ML anomaly detection pipeline, and React 19 SOC console for the InsiEDR Zero-Trust platform.',
      language: 'Python',
      url: 'https://github.com/soms36-DefSec/InsiEDR_Server',
      isPinned: true,
    },
    {
      name: 'InsiEDR_agent',
      description: 'Windows endpoint telemetry agent collecting 30+ event channels with AES-256-GCM client encryption.',
      language: 'Python / Rust',
      url: 'https://github.com/soms36-DefSec/InsiEDR_agent',
      isPinned: true,
    },
    {
      name: 'llm-iac-security',
      description: 'Multi-agent LLM framework with RAG for autonomous AWS CloudFormation vulnerability scanning and patch synthesis.',
      language: 'Python',
      url: 'https://github.com/soms36-DefSec/llm-iac-security',
      isPinned: true,
    },
    {
      name: 'TrackMe',
      description: 'Type-safe event tracing and telemetry logging utility with pluggable sinks.',
      language: 'TypeScript',
      url: 'https://github.com/soms36-DefSec/TrackMe',
    },
    {
      name: 'My_Scriptings',
      description: 'Curated automation and security prototyping scripts for network probing and log extraction.',
      language: 'Python',
      url: 'https://github.com/soms36-DefSec/My_Scriptings',
    },
  ];

  const [repos] = useState<RepoSummary[]>(fallbackRepos);
  const [publicRepoCount, setPublicRepoCount] = useState<number | null>(7);

  useEffect(() => {
    let isMounted = true;
    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Rate limited or offline');
      })
      .then((data) => {
        if (isMounted && data.public_repos !== undefined) {
          setPublicRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        // Fallback to local cache
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          number="10 / CODE"
          title="Open source & repositories"
          subtitle="Public repositories and security experiments published under github.com/soms36-DefSec."
        />

        {/* Profile Link Header Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--border-default)',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xs)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <GithubIcon size={22} color="var(--text-primary)" />
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                github.com/{profile.githubUsername}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.15rem',
                }}
              >
                {publicRepoCount !== null ? `${publicRepoCount} public repositories` : 'Active on GitHub'}
              </div>
            </div>
          </div>

          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link--accent"
            style={{
              fontSize: '0.8125rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <span>View GitHub profile</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Repositories Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {repos.map((repo) => (
            <div
              key={repo.name}
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xs)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-default)';
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {repo.name}
                  </span>

                  {repo.isPinned && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6875rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '1rem',
                  }}
                >
                  {repo.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: repo.language.includes('Python') ? '#3572A5' : '#3178c6',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {repo.language}
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  style={{
                    fontSize: '0.75rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span>Repository ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
