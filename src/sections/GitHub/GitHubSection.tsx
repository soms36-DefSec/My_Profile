import React, { useState, useEffect } from 'react';
import { profile } from '../../data/profile';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../../components/ui/Icons';

interface RepoSummary {
  name: string;
  description: string;
  language: string;
  url: string;
  isPinned?: boolean;
}

export const GitHubSection: React.FC = () => {
  // Pre-configured local repository cache (guaranteed to render offline without API rate limits)
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

  // Progressive enhancement: optional fetch without any token
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
        // Silent fallback to local cache
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
          title="Open Source & GitHub Repositories"
          subtitle="Explore public repositories, security tools, and telemetry engines published under soms36-DefSec."
          tag="GITHUB ECOSYSTEM"
        />

        {/* GitHub Header Card */}
        <div
          className="surface-card"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '2rem',
            borderColor: 'var(--border-strong)',
            backgroundColor: 'var(--bg-surface-elevated)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xs)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GithubIcon size={24} color="var(--text-primary)" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  github.com/{profile.githubUsername}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--accent)',
                    border: '1px solid rgba(255, 51, 85, 0.3)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '2px',
                  }}
                >
                  VERIFIED BUILDER
                </span>
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.2rem',
                }}
              >
                {publicRepoCount !== null ? `${publicRepoCount} Public Repositories` : 'Active Security Builder'} // CloudSec & DevSecOps
              </div>
            </div>
          </div>

          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill tech-pill--accent"
            style={{
              padding: '0.55rem 1.1rem',
              fontSize: '0.8125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <GithubIcon size={15} />
            <span>FOLLOW ON GITHUB ↗</span>
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
              className="surface-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Code2 size={16} color="var(--accent)" />
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {repo.name}
                    </span>
                  </div>

                  {repo.isPinned && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.625rem',
                        color: 'var(--cyan)',
                        border: '1px solid rgba(0, 210, 180, 0.3)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: '2px',
                      }}
                    >
                      PINNED
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
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
                  className="tech-pill"
                  style={{
                    fontSize: '0.6875rem',
                    padding: '0.2rem 0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <span>SOURCE</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
