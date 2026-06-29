# 📁 File Structure — Cybersecurity Portfolio

```
portfolio/
│
├── 📄 index.html                    # Main entry point — all 9 sections
├── 📄 IMPLEMENTATION_PLAN.md        # Build plan & architecture docs
├── 📄 FILE_STRUCTURE.md             # This file — directory reference
│
├── 📂 css/
│   └── 📄 style.css                 # Complete stylesheet
│                                     #   → Design tokens (CSS custom props)
│                                     #   → Base reset & typography
│                                     #   → Component styles (nav, cards, etc.)
│                                     #   → Animations & keyframes
│                                     #   → Responsive breakpoints
│                                     #   → Utility classes
│                                     #   → Accessibility & print
│
├── 📂 js/
│   ├── 📄 config.js                 # ⭐ ALL EDITABLE CONTENT
│   │                                #   → Site meta & SEO
│   │                                #   → Section visibility toggles
│   │                                #   → Hero, About, Services data
│   │                                #   → Projects / case studies
│   │                                #   → Certifications & awards
│   │                                #   → Testimonials
│   │                                #   → Blog posts (optional)
│   │                                #   → Contact info & social links
│   │                                #   → Footer content
│   │
│   └── 📄 main.js                   # Dynamic rendering & interactions
│                                     #   → Matrix rain canvas animation
│                                     #   → Typing effect (hero taglines)
│                                     #   → Dynamic DOM rendering from CONFIG
│                                     #   → Project category filtering
│                                     #   → Smooth scroll & active nav
│                                     #   → Mobile menu toggle
│                                     #   → Scroll reveal animations
│                                     #   → Contact form validation
│                                     #   → Back-to-top button
│                                     #   → Section visibility controller
│
├── 📂 images/                       # All image assets
│   │
│   ├── 🖼️ hero-photo.png            # Hero section headshot (500×500px)
│   ├── 🖼️ about-photo.png           # About section photo (600×800px)
│   ├── 🖼️ og-preview.png            # Social media share preview (1200×630px)
│   │
│   ├── 📂 projects/                 # Project screenshots / diagrams
│   │   ├── 🖼️ project-01.png
│   │   ├── 🖼️ project-02.png
│   │   ├── 🖼️ project-03.png
│   │   ├── 🖼️ project-04.png
│   │   ├── 🖼️ project-05.png
│   │   └── 🖼️ project-06.png
│   │
│   ├── 📂 certs/                    # Certification badge logos
│   │   ├── 🖼️ ceh.png
│   │   ├── 🖼️ security-plus.png
│   │   ├── 🖼️ oscp.png
│   │   ├── 🖼️ aws-security.png
│   │   ├── 🖼️ gcih.png
│   │   └── 🖼️ cysa-plus.png
│   │
│   ├── 📂 testimonials/            # Testimonial author photos
│   │   ├── 🖼️ person-01.png
│   │   ├── 🖼️ person-02.png
│   │   └── 🖼️ person-03.png
│   │
│   └── 📂 blog/                    # Blog post thumbnails
│       ├── 🖼️ post-01.png
│       ├── 🖼️ post-02.png
│       └── 🖼️ post-03.png
│
└── 📂 .github/                     # (Phase 2) CI/CD workflows
    └── 📂 workflows/
        └── 📄 deploy.yml            # GitHub Actions deployment
```

---

## 🔑 Key Files to Edit

| What You Want to Change | File to Edit | What to Look For |
|------------------------|--------------|------------------|
| Your name, bio, skills | `js/config.js` | `hero`, `about` objects |
| Your projects | `js/config.js` | `projects.items` array |
| Your certifications | `js/config.js` | `certifications.items` array |
| Your social links | `js/config.js` | `contact.socialLinks` object |
| Show/hide a section | `js/config.js` | `sections` object (true/false) |
| Your photos | `images/` folder | Replace files, update paths in config |
| Colors & fonts | `css/style.css` | `:root` custom properties block |

---

## 📏 Recommended Image Sizes

| Image | Dimensions | Format |
|-------|-----------|--------|
| Hero headshot | 500 × 500 px | PNG or WebP |
| About photo | 600 × 800 px | PNG or WebP |
| OG preview | 1200 × 630 px | PNG |
| Project screenshots | 800 × 500 px | PNG or WebP |
| Cert badges | 200 × 200 px | PNG (transparent bg) |
| Testimonial photos | 150 × 150 px | PNG or WebP |
| Blog thumbnails | 600 × 400 px | PNG or WebP |
