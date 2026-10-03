import { CurrentPursuits } from '../types';

/**
 * / NOW — Real-time snapshot of what Someshwar is actively building, learning, exploring, and researching.
 * Update this single configuration object as priorities change.
 */
export const current: CurrentPursuits = {
  building: [
    {
      title: 'InsiEDR Agent & Server',
      desc: 'Developing low-overhead Windows telemetry collectors and high-throughput ClickHouse event ingestion for the MeitY-funded platform.',
      tag: 'MeitY Funded',
      link: 'https://github.com/soms36-DefSec/InsiEDR_Server',
    },
    {
      title: 'Multi-Agent Security Oracles',
      desc: 'Prototyping collaborative LLM workflows for contextual infrastructure vulnerability detection and auto-remediation.',
      tag: 'AI Security',
      link: 'https://github.com/soms36-DefSec/llm-iac-security',
    },
  ],
  learning: [
    {
      title: 'Rust Systems Programming',
      desc: 'Deep diving into memory safety, async runtimes (Tokio), and low-level kernel probes for endpoint telemetry sensors.',
      tag: 'Systems',
    },
    {
      title: 'Advanced eBPF & Windows Internals',
      desc: 'Studying ETW (Event Tracing for Windows), system calls, and kernel telemetry collection mechanisms.',
      tag: 'OS Internals',
    },
  ],
  exploring: [
    {
      title: 'AI/LLM Red Teaming & Guardrails',
      desc: 'Exploring prompt injection surfaces, jailbreaking defenses, and evaluation benchmarks for LLM-based applications.',
      tag: 'Security Research',
    },
    {
      title: 'High-Concurrency Ingestion (ClickHouse)',
      desc: 'Benchmarking real-time log ingestion, materialized views, and analytical querying at scale.',
      tag: 'Data Infrastructure',
    },
  ],
  researching: [
    {
      title: 'Behavior-Based Anomaly Attribution',
      desc: 'Evaluating hybrid models (Isolation Forest + XGBoost + RedRVFL) to minimize false positives in insider threat detection.',
      tag: 'Applied ML',
    },
    {
      title: 'Zero-Trust Telemetry Architectures',
      desc: 'Investigating end-to-end encrypted telemetry transport over untrusted corporate networks using HPKE.',
      tag: 'Cryptography',
    },
  ],
};
