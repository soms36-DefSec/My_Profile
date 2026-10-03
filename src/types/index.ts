/**
 * SOMS Portfolio — Domain Models & TypeScript Interfaces
 */

export interface LocationInfo {
  city: string;
  country: string;
  coordinates: string;
  timezone: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  status: string;
  notes?: string;
}

export interface StatusIndicator {
  label: string;
  state: 'active' | 'building' | 'exploring';
  details?: string;
}

export interface StatItem {
  label: string;
  value: string;
  caption?: string;
}

export interface Profile {
  name: string;
  displayName: string;
  handle: string;
  githubUsername: string;
  title: string;
  headline: string;
  subheadline: string;
  status: StatusIndicator;
  location: LocationInfo;
  education: EducationInfo;
  email: string;
  summary: string[];
  stats: StatItem[];
}

export type ProjectCategory = 
  | 'EDR & Systems' 
  | 'AI & LLM Security' 
  | 'Cloud & DevSecOps' 
  | 'Tooling & Automation';

export type ProjectStatus = 
  | 'Active Development' 
  | 'Research & Prototype' 
  | 'Production Ready' 
  | 'Maintained';

export interface ProjectArchitectureLayer {
  name: string;
  items: string[];
}

export interface ProjectArchitecture {
  summary: string;
  layers: ProjectArchitectureLayer[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  architecture?: ProjectArchitecture;
  repositoryUrl: string;
  liveUrl?: string;
  featured: boolean;
  fundingNotice?: string;
  badge?: string;
}

export type SkillCategory = 
  | 'Cloud & Infrastructure' 
  | 'Defensive Security & SOC' 
  | 'AI & ML Security' 
  | 'Systems & Languages' 
  | 'Databases & Protocols';

export interface Skill {
  name: string;
  category: SkillCategory;
  tag?: string;
  description?: string;
  featured?: boolean;
}

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  capabilities: string[];
}

export type JourneyCategory = 
  | 'Academics' 
  | 'Leadership' 
  | 'Project' 
  | 'Research' 
  | 'Milestone';

export interface JourneyItem {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  category: JourneyCategory;
  description: string;
  highlights?: string[];
  current?: boolean;
  link?: string;
}

export interface Club {
  id: string;
  name: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  link?: string;
}

export type ActivityType = 
  | 'CTF & Defense' 
  | 'Workshop & Mentorship' 
  | 'Open Source' 
  | 'Technical Demonstration';

export interface Activity {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: ActivityType;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'Grant' | 'Academic' | 'Competition' | 'Recognition' | 'Leadership';
  link?: string;
  badge?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  status: 'Completed' | 'In Progress';
}

export interface FocusPursuit {
  title: string;
  desc: string;
  tag?: string;
  link?: string;
}

export interface CurrentPursuits {
  building: FocusPursuit[];
  learning: FocusPursuit[];
  exploring: FocusPursuit[];
  researching: FocusPursuit[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: 'github' | 'linkedin' | 'mail' | 'terminal';
}

export interface HireRole {
  id: string;
  title: string;
  scope: string;
  description: string;
  capabilities: string[];
  tools: string[];
  freelanceFocus: string;
}

export interface HiringOverview {
  availability: string;
  freelanceStatement: string;
  engagementTypes: string[];
  roles: HireRole[];
}

