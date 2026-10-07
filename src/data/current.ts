import { CurrentPursuits } from '../types';

/**
 * / NOW — What Someshwar is actively building, learning, exploring, and researching.
 * Written in the spirit of Derek Sivers' /now page.
 */
export const current: CurrentPursuits = {
  building: [
    {
      title: 'InsiEDR — Insider Threat Detection & Response',
      desc: 'Developing native Windows telemetry sensor in Rust and high-speed ClickHouse ingestion for the MeitY-funded InsiEDR system.',
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
      desc: 'Writing memory-safe Windows endpoint sensors and telemetry collectors with Win32 APIs.',
      tag: 'Systems',
    },
    {
      title: 'Windows Internals & Event Telemetry',
      desc: 'Studying Event Tracing for Windows (ETW), system call logging, and low-level process monitoring.',
      tag: 'OS Internals',
    },
  ],
  exploring: [
    {
      title: 'ClickHouse Query Performance',
      desc: 'Testing materialized views and fast compression codecs for high-throughput security event tables.',
      tag: 'Databases',
    },
    {
      title: 'IaC Security Automation',
      desc: 'Testing AST parsing and automated policy checks for Terraform & AWS CloudFormation.',
      tag: 'DevSecOps',
    },
  ],
  researching: [
    {
      title: 'Detection Engineering & Threat Heuristics',
      desc: 'Evaluating CERT insider-threat heuristics and behavioral correlation rules for real-time SOC alerting.',
      tag: 'Detection Engineering',
    },
  ],
};
