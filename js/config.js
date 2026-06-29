/* ============================================================
 *  PORTFOLIO CONFIGURATION FILE
 *  ============================================================
 *  📝  UPDATE THIS FILE TO PERSONALISE YOUR PORTFOLIO
 *  
 *  Every section of the website reads from this single object.
 *  Change a value here → the website updates automatically.
 *  
 *  🖼️  Image paths are relative to the project root (index.html).
 *      Place your images in the /images/ folder and update paths.
 *  
 *  🔗  Social links: set a URL to "" (empty string) to hide it.
 *  
 *  👁️  Section toggles: set to false to hide an entire section.
 * ============================================================ */

const CONFIG = {

  /* ----------------------------------------------------------
   *  SITE META  — SEO & Open Graph
   * ---------------------------------------------------------- */
  siteMeta: {
    title: "SOMS | Cybersecurity Professional",
    description: "Cybersecurity analyst & ethical hacker specializing in SOC operations, threat hunting, and penetration testing. Available for hire.",
    keywords: "cybersecurity, SOC analyst, penetration testing, ethical hacker, threat intelligence, incident response",
    ogImage: "images/og-preview.png",       // Social share preview image
    siteUrl: "https://yourusername.github.io/portfolio/",
    locale: "en_US",
  },

  /* ----------------------------------------------------------
   *  SECTION VISIBILITY TOGGLES
   *  Set any to `false` to completely hide that section.
   * ---------------------------------------------------------- */
  sections: {
    showHero:          true,
    showAbout:         true,
    showServices:      true,
    showProjects:      true,
    showCertifications:true,
    showTestimonials:  true,
    showBlog:          false,   // ← Set to true when you have blog posts
    showContact:       true,
  },

  /* ----------------------------------------------------------
   *  NAVIGATION
   * ---------------------------------------------------------- */
  nav: {
    logo: "SOMS<span class='accent'>.</span>sec",   // HTML allowed
    links: [
      { label: "About",     href: "#about"     },
      { label: "Services",  href: "#services"  },
      { label: "Projects",  href: "#projects"  },
      { label: "Certs",     href: "#certifications" },
      { label: "Contact",   href: "#contact"   },
    ],
  },

  /* ----------------------------------------------------------
   *  HERO SECTION
   * ---------------------------------------------------------- */
  hero: {
    greeting: "Hello, I'm",
    name: "SOMS",
    // Rotating taglines for the typing effect
    taglines: [
      "Cybersecurity Analyst & Ethical Hacker",
      "SOC Operations Specialist",
      "Threat Hunter & Incident Responder",
      "Securing Digital Frontiers",
    ],
    description: "I protect organizations from cyber threats through proactive defense, threat intelligence, and security architecture. Let's fortify your digital assets.",
    ctaPrimary:   { label: "Hire Me",        href: "#contact"  },
    ctaSecondary: { label: "View My Work",   href: "#projects" },
    // REPLACE: Add your professional headshot (recommended 500×500px)
    image: "images/hero-photo.png",
  },

  /* ----------------------------------------------------------
   *  ABOUT SECTION
   * ---------------------------------------------------------- */
  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "The story behind the terminal",
    // REPLACE: Add your photo (recommended 600×800px)
    image: "images/about-photo.png",
    bio: [
      "I'm a passionate cybersecurity professional with 5+ years of experience defending enterprise networks against advanced persistent threats. My journey started with a fascination for how systems break — and evolved into a career dedicated to making them unbreakable.",
      "From building SOC workflows to hunting zero-days, I bring a relentless, methodical approach to every engagement. I believe in proactive defense: finding vulnerabilities before adversaries do.",
      "When I'm not in the terminal, you'll find me contributing to open-source security tools, writing CTF walkthroughs, and mentoring the next generation of defenders.",
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science & Cybersecurity",
        institution: "Your University Name",
        year: "2018 – 2022",
      },
      {
        degree: "Advanced Diploma in Network Security",
        institution: "Your Institution Name",
        year: "2022 – 2023",
      },
    ],
    skills: [
      "SIEM (Splunk / QRadar)",
      "Threat Intelligence",
      "SOC Analysis",
      "Penetration Testing",
      "Incident Response",
      "Vulnerability Assessment",
      "Malware Analysis",
      "Network Forensics",
      "Cloud Security (AWS/Azure)",
      "Python Scripting",
      "Wireshark",
      "Burp Suite",
      "OSINT",
      "IDS/IPS",
      "Firewalls & WAF",
      "Zero Trust Architecture",
    ],
  },

  /* ----------------------------------------------------------
   *  SERVICES SECTION
   * ---------------------------------------------------------- */
  services: {
    sectionTitle: "Services",
    sectionSubtitle: "What I bring to the table",
    items: [
      {
        icon: "fas fa-shield-halved",
        title: "SOC Analysis",
        description: "24/7 monitoring, alert triage, and threat detection using industry-leading SIEM platforms to keep your infrastructure safe.",
      },
      {
        icon: "fas fa-crosshairs",
        title: "Threat Hunting",
        description: "Proactive hypothesis-driven hunts to uncover hidden adversaries and advanced persistent threats within your environment.",
      },
      {
        icon: "fas fa-bug",
        title: "Vulnerability Assessment",
        description: "Comprehensive scanning and manual testing to identify, classify, and prioritize security weaknesses before attackers exploit them.",
      },
      {
        icon: "fas fa-fire-extinguisher",
        title: "Incident Response",
        description: "Rapid containment, eradication, and recovery services with detailed root-cause analysis and post-incident reporting.",
      },
      {
        icon: "fas fa-magnifying-glass",
        title: "Security Auditing",
        description: "Thorough audits of your security posture, policies, and compliance status aligned with frameworks like NIST, ISO 27001, and CIS.",
      },
      {
        icon: "fas fa-user-secret",
        title: "Penetration Testing",
        description: "Simulated real-world attacks on your applications, networks, and infrastructure to expose critical vulnerabilities.",
      },
    ],
  },

  /* ----------------------------------------------------------
   *  PROJECTS / CASE STUDIES
   * ---------------------------------------------------------- */
  projects: {
    sectionTitle: "Projects",
    sectionSubtitle: "Real-world impact, one engagement at a time",
    categories: ["All", "SOC", "Pentest", "Forensics", "Tool Dev", "CTF"],
    items: [
      {
        title: "Enterprise SOC Build-Out",
        category: "SOC",
        challenge: "A mid-size fintech company had zero centralized visibility into security events across 200+ endpoints.",
        role: "Lead SOC Engineer — designed architecture, wrote detection rules, and trained the analyst team.",
        tools: ["Splunk", "CrowdStrike", "SOAR", "Sigma Rules"],
        result: "Reduced mean-time-to-detect (MTTD) from 72 hours to under 15 minutes. Achieved 98% alert fidelity.",
        // REPLACE: Add project screenshot or diagram
        image: "images/projects/project-01.png",
      },
      {
        title: "Red Team Engagement — Banking App",
        category: "Pentest",
        challenge: "A tier-1 bank needed an external red team assessment of their customer-facing mobile banking application.",
        role: "Lead Pentester — performed OWASP Top 10 testing, API fuzzing, and social engineering simulation.",
        tools: ["Burp Suite", "Frida", "Metasploit", "Nuclei"],
        result: "Identified 3 critical and 7 high-severity vulnerabilities, including an IDOR allowing cross-account access.",
        image: "images/projects/project-02.png",
      },
      {
        title: "Ransomware Incident Response",
        category: "Forensics",
        challenge: "A healthcare provider suffered a LockBit 3.0 ransomware attack encrypting patient records across 5 servers.",
        role: "Incident Responder — led containment, forensic imaging, and recovery operations under a 48-hour SLA.",
        tools: ["Velociraptor", "Volatility", "KAPE", "Autopsy"],
        result: "Contained lateral movement within 4 hours. Recovered 100% of data from backups with zero ransom paid.",
        image: "images/projects/project-03.png",
      },
      {
        title: "Custom Threat Intel Platform",
        category: "Tool Dev",
        challenge: "The security team relied on manual processes to aggregate threat feeds, causing 48-hour intel delays.",
        role: "Developer & Architect — built an automated threat intelligence aggregation and enrichment pipeline.",
        tools: ["Python", "MISP", "VirusTotal API", "OpenCTI", "Docker"],
        result: "Automated ingestion from 12 feeds. Reduced threat intel processing time from 48 hours to real-time.",
        image: "images/projects/project-04.png",
      },
      {
        title: "CTF Championship — DefCon Qualifiers",
        category: "CTF",
        challenge: "Competed in DefCon CTF qualifiers against 500+ teams worldwide in a 48-hour jeopardy-style competition.",
        role: "Team Lead — focused on reverse engineering, cryptography, and web exploitation challenges.",
        tools: ["Ghidra", "GDB", "pwntools", "CyberChef", "John the Ripper"],
        result: "Placed in the top 5% globally. Solved 18 out of 24 challenges including two first-bloods.",
        image: "images/projects/project-05.png",
      },
      {
        title: "Cloud Security Hardening — AWS",
        category: "SOC",
        challenge: "A SaaS startup had misconfigured AWS infrastructure with public S3 buckets and overly permissive IAM roles.",
        role: "Cloud Security Consultant — performed assessment and implemented hardening across the entire AWS estate.",
        tools: ["ScoutSuite", "Prowler", "AWS Config", "Terraform", "CloudTrail"],
        result: "Remediated 47 critical misconfigurations. Achieved CIS AWS Benchmark compliance score of 96%.",
        image: "images/projects/project-06.png",
      },
    ],
  },

  /* ----------------------------------------------------------
   *  CERTIFICATIONS & AWARDS
   * ---------------------------------------------------------- */
  certifications: {
    sectionTitle: "Certifications",
    sectionSubtitle: "Validated expertise you can trust",
    items: [
      {
        name: "CEH — Certified Ethical Hacker",
        issuer: "EC-Council",
        // REPLACE: Add certification badge/logo image
        logo: "images/certs/ceh.png",
        link: "#",
      },
      {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        logo: "images/certs/security-plus.png",
        link: "#",
      },
      {
        name: "OSCP — Offensive Security Certified Professional",
        issuer: "OffSec",
        logo: "images/certs/oscp.png",
        link: "#",
      },
      {
        name: "AWS Certified Security – Specialty",
        issuer: "Amazon Web Services",
        logo: "images/certs/aws-security.png",
        link: "#",
      },
      {
        name: "GCIH — GIAC Certified Incident Handler",
        issuer: "SANS / GIAC",
        logo: "images/certs/gcih.png",
        link: "#",
      },
      {
        name: "CySA+ — CompTIA Cybersecurity Analyst",
        issuer: "CompTIA",
        logo: "images/certs/cysa-plus.png",
        link: "#",
      },
    ],
  },

  /* ----------------------------------------------------------
   *  TESTIMONIALS
   * ---------------------------------------------------------- */
  testimonials: {
    sectionTitle: "Testimonials",
    sectionSubtitle: "What collaborators & clients say",
    items: [
      {
        quote: "SOMS transformed our security posture overnight. His SOC build-out reduced our incident response time by 90%. An absolute game-changer for our team.",
        name: "Alex Carter",
        title: "CTO, FinSecure Technologies",
        // REPLACE: Add testimonial author photo
        photo: "images/testimonials/person-01.png",
      },
      {
        quote: "One of the sharpest penetration testers I've worked with. He found critical vulnerabilities our previous vendor missed entirely. Thorough, professional, and relentless.",
        name: "Priya Nair",
        title: "VP of Engineering, CloudVault Inc.",
        photo: "images/testimonials/person-02.png",
      },
      {
        quote: "During our worst ransomware incident, SOMS was the calm in the storm. His forensic skills and leadership under pressure saved us from catastrophic data loss.",
        name: "James O'Brien",
        title: "CISO, MedShield Healthcare",
        photo: "images/testimonials/person-03.png",
      },
    ],
  },

  /* ----------------------------------------------------------
   *  BLOG / CONTENT  (optional — set sections.showBlog = true)
   * ---------------------------------------------------------- */
  blog: {
    sectionTitle: "Latest Writes",
    sectionSubtitle: "Insights from the field",
    posts: [
      {
        title: "Dissecting a LockBit 3.0 Payload: A Malware Analysis Walkthrough",
        excerpt: "A technical deep-dive into the LockBit ransomware variant, covering unpacking, anti-analysis techniques, and IOC extraction.",
        date: "2026-05-15",
        link: "#",
        // REPLACE: Add blog post thumbnail
        image: "images/blog/post-01.png",
        tag: "Malware Analysis",
      },
      {
        title: "Building a Home Lab for Threat Hunting with ELK Stack",
        excerpt: "Step-by-step guide to setting up a detection lab using Elastic SIEM, Sysmon, and Atomic Red Team for purple team exercises.",
        date: "2026-04-22",
        link: "#",
        image: "images/blog/post-02.png",
        tag: "Blue Team",
      },
      {
        title: "Top 10 OSINT Techniques Every SOC Analyst Should Know",
        excerpt: "From Shodan queries to social media footprinting — essential open-source intelligence methods for proactive threat intelligence.",
        date: "2026-03-10",
        link: "#",
        image: "images/blog/post-03.png",
        tag: "OSINT",
      },
    ],
  },

  /* ----------------------------------------------------------
   *  CONTACT
   * ---------------------------------------------------------- */
  contact: {
    sectionTitle: "Get In Touch",
    sectionSubtitle: "Let's talk security",
    email: "your.email@example.com",
    // Formspree endpoint (sign up free at https://formspree.io)
    formAction: "https://formspree.io/f/your-form-id",
    socialLinks: {
      linkedin:  "https://linkedin.com/in/yourprofile",
      github:    "https://github.com/yourprofile",
      twitter:   "https://x.com/yourhandle",
      tryhackme: "https://tryhackme.com/p/yourprofile",
      hackthebox:"https://app.hackthebox.com/profile/your-id",
    },
  },

  /* ----------------------------------------------------------
   *  FOOTER
   * ---------------------------------------------------------- */
  footer: {
    copyright: "SOMS",  // Auto-appends current year
    tagline: "Securing the digital frontier, one system at a time.",
  },

};
