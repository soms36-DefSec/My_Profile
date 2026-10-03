import { CurrentPursuits } from '../types';

/**
 * / NOW — What Someshwar is actively building, learning, exploring, and researching.
 * Written in the spirit of Derek Sivers' /now page.
 */
export const current: CurrentPursuits = {
  building: [
    {
      title: 'InsiEDR Telemetry Sensor & Backend',
      desc: 'Developing Windows telemetry collection and high-speed ClickHouse ingestion for the MeitY-funded insider-threat platform.',
      tag: 'MeitY Funded',
      link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
    },
    {
      title: 'Automation & Prototyping Tools',
      desc: 'Writing focused Python utilities for security audits, log parsing, and routine automation.',
      tag: 'Tooling',
      link: 'https://github.com/soms36-DefSec/My_Scriptings',
    },
  ],
  learning: [
    {
      title: 'Rust for Systems Programming',
      desc: 'Working through ownership, concurrency, and async runtimes to write memory-safe sensor components.',
      tag: 'Systems',
    },
    {
      title: 'Windows Internals & ETW',
      desc: 'Studying Event Tracing for Windows (ETW), system call logging, and low-level process monitoring.',
      tag: 'OS Internals',
    },
  ],
  exploring: [
    {
      title: 'AI/LLM Security Surfaces',
      desc: 'Testing prompt injection risks and safety evaluation benchmarks for LLM-assisted coding and analysis tools.',
      tag: 'Security Research',
    },
    {
      title: 'ClickHouse Query Performance',
      desc: 'Testing materialized views and fast compression codecs for massive security event tables.',
      tag: 'Databases',
    },
  ],
  researching: [
    {
      title: 'Anomaly Scoring for Insider Threats',
      desc: 'Testing combinations of CERT heuristic rules and Isolation Forest models to minimize false positive alerts.',
      tag: 'Applied ML',
    },
  ],
};
