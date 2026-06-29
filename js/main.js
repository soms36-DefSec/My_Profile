/**
 * ============================================================================
 * CYBERSECURITY PORTFOLIO — main.js
 * ============================================================================
 * All dynamic behavior for the portfolio.
 * Reads from the global `CONFIG` object defined in js/config.js.
 *
 * Modules:
 *   0. Utilities
 *   1. Preloader
 *   2. Matrix Rain Canvas
 *   3. Typing Effect (hero taglines)
 *   4. Dynamic Content Renderer
 *   5. Project Filtering
 *   6. Smooth Scroll & Active Nav
 *   7. Mobile Navigation
 *   8. Scroll Reveal Animations
 *   9. Contact Form
 *  10. Section Visibility
 *  11. Navbar Scroll Effect
 *  12. Back to Top Button
 *  13. Boot
 * ============================================================================
 */

(function () {
  "use strict";

  /* -----------------------------------------------------------------------
   *  0. UTILITIES
   * ----------------------------------------------------------------------- */

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function debounce(fn, delay = 100) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /** Escape HTML to prevent XSS when using innerHTML */
  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str || "";
    return d.innerHTML;
  }

  /** Shorthand element creator */
  function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "className") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "text") e.textContent = v;
      else e.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  }


  /* -----------------------------------------------------------------------
   *  1. PRELOADER
   * ----------------------------------------------------------------------- */

  const Preloader = {
    init() {
      const preloader = $("#preloader");
      if (!preloader) return;

      window.addEventListener("load", () => {
        setTimeout(() => {
          preloader.style.opacity = "0";
          preloader.style.visibility = "hidden";
          preloader.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
          setTimeout(() => preloader.remove(), 600);
        }, 800);
      });
    },
  };


  /* -----------------------------------------------------------------------
   *  2. MATRIX RAIN CANVAS
   * ----------------------------------------------------------------------- */

  const MatrixRain = {
    canvas: null,
    ctx: null,
    columns: [],
    animId: null,
    isVisible: true,
    lastFrame: 0,

    chars: (() => {
      const k = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  };


  /* -----------------------------------------------------------------------
   *  3. TYPING EFFECT
   * ----------------------------------------------------------------------- */

  const TypingEffect = {
    el: null,
    phrases: [],
    phraseIdx: 0,
    charIdx: 0,
    isDeleting: false,
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseEnd: 2000,
    pauseStart: 500,

    init() {
      this.el = $("#hero-tagline");
      if (!this.el) return;

      this.phrases = CONFIG.hero?.taglines || ["Cybersecurity Professional"];
      this.tick();
    },

    tick() {
      const current = this.phrases[this.phraseIdx];

      if (this.isDeleting) {
        this.charIdx--;
        this.el.textContent = current.substring(0, this.charIdx);
      } else {
        this.charIdx++;
        this.el.textContent = current.substring(0, this.charIdx);
      }

      let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

      if (!this.isDeleting && this.charIdx === current.length) {
        delay = this.pauseEnd;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIdx === 0) {
        this.isDeleting = false;
        this.phraseIdx = (this.phraseIdx + 1) % this.phrases.length;
        delay = this.pauseStart;
      }

      setTimeout(() => this.tick(), delay);
    },
  };


  /* -----------------------------------------------------------------------
   *  4. DYNAMIC CONTENT RENDERER
   * ----------------------------------------------------------------------- */

  const Renderer = {
    init() {
      this.renderNav();
      this.renderHero();
      this.renderAbout();
      this.renderServices();
      this.renderProjects();
      this.renderCertifications();
      this.renderTestimonials();
      this.renderBlog();
      this.renderContact();
      this.renderFooter();
      this.updateSEO();
    },

    /* — Navigation — */
    renderNav() {
      const nav = CONFIG.nav;
      if (!nav) return;

      const logoEl = $("#nav-logo");
      if (logoEl) logoEl.innerHTML = nav.logo || "";

      const linksEl = $("#nav-links");
      if (linksEl && nav.links) {
        linksEl.innerHTML = nav.links.map(l =>
          `<li role="none"><a href="${esc(l.href)}" class="navbar__link" role="menuitem">${esc(l.label)}</a></li>`
        ).join("");
      }
    },

    /* — Hero — */
    renderHero() {
      const h = CONFIG.hero;
      if (!h) return;

      const greetEl = $("#hero-greeting");
      if (greetEl) greetEl.textContent = h.greeting || "";

      const nameEl = $("#hero-heading");
      if (nameEl) {
        nameEl.textContent = h.name || "";
        nameEl.setAttribute("data-text", h.name || "");
      }

      const descEl = $("#hero-description");
      if (descEl) descEl.textContent = h.description || "";

      // CTAs
      const ctaPrimary = $("#hero-cta-primary");
      if (ctaPrimary && h.ctaPrimary) {
        ctaPrimary.href = h.ctaPrimary.href || "#contact";
        ctaPrimary.innerHTML = `<i class="fas fa-paper-plane"></i> ${esc(h.ctaPrimary.label)}`;
      }
      const ctaSecondary = $("#hero-cta-secondary");
      if (ctaSecondary && h.ctaSecondary) {
        ctaSecondary.href = h.ctaSecondary.href || "#projects";
        ctaSecondary.innerHTML = `<i class="fas fa-briefcase"></i> ${esc(h.ctaSecondary.label)}`;
      }

      // Image
      const heroImg = $("#hero-image");
      if (heroImg && h.image) heroImg.src = h.image;
    },

    /* — About (Code Editor Style) — */
    renderAbout() {
      const a = CONFIG.about;
      if (!a) return;

      const subEl = $("#about-subtitle");
      if (subEl) subEl.textContent = a.sectionSubtitle || "";

      const editorContainer = $("#about-code-editor");
      if (!editorContainer) return;

      let codeLines = [];
      let lineNum = 1;

      // Function to push lines and auto-increment lineNum
      const addLine = (content) => {
        codeLines.push(`<div class="code-editor-line">${content}</div>`);
        lineNum++;
      };

      addLine(`<span class="syntax-keyword">const</span> <span class="syntax-variable">aboutMe</span> <span class="syntax-operator">=</span> {`);
      
      // Bio
      addLine(`  <span class="syntax-property">name</span><span class="syntax-operator">:</span> <span class="syntax-string">"${esc(CONFIG.hero.name)}"</span>,`);
      addLine(`  <span class="syntax-property">role</span><span class="syntax-operator">:</span> <span class="syntax-string">"${esc(CONFIG.hero.taglines[0])}"</span>,`);
      addLine(`  <span class="syntax-property">bio</span><span class="syntax-operator">:</span> [`);
      a.bio.forEach(p => {
        addLine(`    <span class="syntax-string">"${esc(p)}"</span>,`);
      });
      addLine(`  ],`);

      // Education
      if (a.education && a.education.length > 0) {
        addLine(`  <span class="syntax-property">education</span><span class="syntax-operator">:</span> [`);
        a.education.forEach(ed => {
          addLine(`    {`);
          addLine(`      <span class="syntax-property">degree</span><span class="syntax-operator">:</span> <span class="syntax-string">"${esc(ed.degree)}"</span>,`);
          addLine(`      <span class="syntax-property">institution</span><span class="syntax-operator">:</span> <span class="syntax-string">"${esc(ed.institution)}"</span>,`);
          addLine(`      <span class="syntax-property">year</span><span class="syntax-operator">:</span> <span class="syntax-string">"${esc(ed.year)}"</span>`);
          addLine(`    },`);
        });
        addLine(`  ],`);
      }

      // Skills
      if (a.skills && a.skills.length > 0) {
        addLine(`  <span class="syntax-property">skills</span><span class="syntax-operator">:</span> [`);
        addLine(`    <span class="syntax-string">"${esc(a.skills.join('", "'))}"</span>`);
        addLine(`  ]`);
      }

      addLine(`<span class="syntax-operator">};</span>`);
      addLine(``);
      addLine(`<span class="syntax-comment">// Reach out if you want to collaborate!</span>`);
      addLine(`<span class="syntax-variable">console</span><span class="syntax-operator">.</span><span class="syntax-property">log</span>(<span class="syntax-string">"Available for hire."</span>)<span class="syntax-operator">;</span>`);

      // Generate line numbers column
      let lineNumbersHTML = '';
      for (let i = 1; i < lineNum; i++) {
        lineNumbersHTML += `<div>${i}</div>`;
      }

      editorContainer.innerHTML = `
        <div class="code-editor-window">
          <div class="code-editor-header">
            <div class="code-editor-dots">
              <div class="code-editor-dot red"></div>
              <div class="code-editor-dot yellow"></div>
              <div class="code-editor-dot green"></div>
            </div>
            <div class="code-editor-title">about.js</div>
          </div>
          <div class="code-editor-body">
            <div class="code-editor-lines">${lineNumbersHTML}</div>
            <div class="code-editor-content">${codeLines.join('')}</div>
          </div>
        </div>
      `;
    },

    /* — Services — */
    renderServices() {
      const s = CONFIG.services;
      if (!s) return;

      const subEl = $("#services-subtitle");
      if (subEl) subEl.textContent = s.sectionSubtitle || "";

      const grid = $("#services-grid");
      if (!grid || !s.items) return;

      grid.innerHTML = s.items.map((svc, i) => `
        <div class="service-card reveal" style="transition-delay:${i * 80}ms">
          <div class="service-card__icon">
            <i class="${esc(svc.icon)}"></i>
          </div>
          <h3 class="service-card__title">${esc(svc.title)}</h3>
          <p class="service-card__desc">${esc(svc.description)}</p>
        </div>
      `).join("");
    },

    /* — Projects — */
    renderProjects() {
      const p = CONFIG.projects;
      if (!p) return;

      const subEl = $("#projects-subtitle");
      if (subEl) subEl.textContent = p.sectionSubtitle || "";

      // Filter buttons
      const filtersEl = $("#projects-filters");
      if (filtersEl && p.categories) {
        filtersEl.innerHTML = p.categories.map((cat, i) =>
          `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${esc(cat.toLowerCase())}" role="tab" aria-selected="${i === 0}">${esc(cat)}</button>`
        ).join("");
      }

      // Project cards
      const grid = $("#projects-grid");
      if (!grid || !p.items) return;

      grid.innerHTML = p.items.map((proj, i) => `
        <div class="project-card reveal" data-category="${esc(proj.category.toLowerCase())}" style="transition-delay:${i * 100}ms">
          <div class="project-card__image">
            <!-- REPLACE: Add project screenshot for "${esc(proj.title)}" -->
            <img src="${esc(proj.image)}" alt="${esc(proj.title)}" loading="lazy">
            <div class="project-card__overlay">
              <span class="project-card__category">${esc(proj.category)}</span>
            </div>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${esc(proj.title)}</h3>
            <div class="project-card__detail">
              <strong><i class="fas fa-exclamation-triangle"></i> Challenge:</strong>
              <p>${esc(proj.challenge)}</p>
            </div>
            <div class="project-card__detail">
              <strong><i class="fas fa-user-shield"></i> Role:</strong>
              <p>${esc(proj.role)}</p>
            </div>
            <div class="project-card__tools">
              ${proj.tools.map(t => `<span class="tool-tag">${esc(t)}</span>`).join("")}
            </div>
            <div class="project-card__result">
              <strong><i class="fas fa-chart-line"></i> Result:</strong>
              <p>${esc(proj.result)}</p>
            </div>
          </div>
        </div>
      `).join("");
    },

    /* — Certifications — */
    renderCertifications() {
      const c = CONFIG.certifications;
      if (!c) return;

      const subEl = $("#certs-subtitle");
      if (subEl) subEl.textContent = c.sectionSubtitle || "";

      const grid = $("#certs-grid");
      if (!grid || !c.items) return;

      grid.innerHTML = c.items.map((cert, i) => `
        <a href="${esc(cert.link || "#")}" class="cert-card reveal" target="_blank" rel="noopener noreferrer" style="transition-delay:${i * 80}ms">
          <div class="cert-card__logo">
            <!-- REPLACE: Add certification badge for "${esc(cert.name)}" -->
            <img src="${esc(cert.logo)}" alt="${esc(cert.name)}" loading="lazy">
          </div>
          <h4 class="cert-card__name">${esc(cert.name)}</h4>
          <p class="cert-card__issuer">${esc(cert.issuer)}</p>
        </a>
      `).join("");
    },

    /* — Testimonials — */
    renderTestimonials() {
      const t = CONFIG.testimonials;
      if (!t) return;

      const subEl = $("#testimonials-subtitle");
      if (subEl) subEl.textContent = t.sectionSubtitle || "";

      const grid = $("#testimonials-grid");
      if (!grid || !t.items) return;

      grid.innerHTML = t.items.map((item, i) => `
        <div class="testimonial-card reveal" style="transition-delay:${i * 120}ms">
          <div class="testimonial-card__quote">
            <i class="fas fa-quote-left" aria-hidden="true"></i>
            <blockquote>${esc(item.quote)}</blockquote>
          </div>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">
              <!-- REPLACE: Add testimonial photo for "${esc(item.name)}" -->
              <img src="${esc(item.photo)}" alt="${esc(item.name)}" loading="lazy">
            </div>
            <div>
              <strong>${esc(item.name)}</strong>
              <span>${esc(item.title)}</span>
            </div>
          </div>
        </div>
      `).join("");
    },

    /* — Blog (conditional) — */
    renderBlog() {
      if (!CONFIG.sections?.showBlog) {
        const section = $("#blog");
        if (section) section.classList.add("section-hidden");
        return;
      }

      const b = CONFIG.blog;
      if (!b) return;

      const subEl = $("#blog-subtitle");
      if (subEl) subEl.textContent = b.sectionSubtitle || "";

      const grid = $("#blog-grid");
      if (!grid || !b.posts) return;

      grid.innerHTML = b.posts.slice(0, 3).map((post, i) => `
        <a href="${esc(post.link || "#")}" class="blog-card reveal" target="_blank" rel="noopener noreferrer" style="transition-delay:${i * 100}ms">
          <div class="blog-card__image">
            <!-- REPLACE: Add blog thumbnail for "${esc(post.title)}" -->
            <img src="${esc(post.image)}" alt="${esc(post.title)}" loading="lazy">
            <span class="blog-card__tag">${esc(post.tag || "")}</span>
          </div>
          <div class="blog-card__body">
            <time class="blog-card__date">${esc(post.date)}</time>
            <h3 class="blog-card__title">${esc(post.title)}</h3>
            <p class="blog-card__excerpt">${esc(post.excerpt)}</p>
          </div>
        </a>
      `).join("");
    },

    /* — Contact — */
    renderContact() {
      const c = CONFIG.contact;
      if (!c) return;

      const subEl = $("#contact-subtitle");
      if (subEl) subEl.textContent = c.sectionSubtitle || "";

      // Email
      const emailLink = $("#contact-email-link");
      if (emailLink && c.email) {
        emailLink.href = `mailto:${c.email}`;
        emailLink.textContent = c.email;
      }

      // Form action
      const form = $("#contact-form");
      if (form && c.formAction) {
        form.setAttribute("action", c.formAction);
      }

      // Social links
      const socialsEl = $("#contact-socials");
      if (socialsEl && c.socialLinks) {
        const socialIcons = {
          linkedin:   { icon: "fab fa-linkedin-in", label: "LinkedIn" },
          github:     { icon: "fab fa-github",      label: "GitHub" },
          twitter:    { icon: "fab fa-x-twitter",   label: "X / Twitter" },
          tryhackme:  { icon: "fas fa-flag",        label: "TryHackMe" },
          hackthebox: { icon: "fas fa-cube",        label: "Hack The Box" },
        };

        socialsEl.innerHTML = Object.entries(c.socialLinks)
          .filter(([, url]) => url)
          .map(([key, url]) => {
            const info = socialIcons[key] || { icon: "fas fa-link", label: key };
            return `<a href="${esc(url)}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="${esc(info.label)}" title="${esc(info.label)}">
              <i class="${info.icon}"></i>
            </a>`;
          }).join("");
      }
    },

    /* — Footer — */
    renderFooter() {
      const f = CONFIG.footer;
      const nav = CONFIG.nav;
      const contact = CONFIG.contact;

      // Logo
      const logoEl = $("#footer-logo");
      if (logoEl && nav) logoEl.innerHTML = nav.logo || "";

      // Tagline
      const tagEl = $("#footer-tagline");
      if (tagEl && f) tagEl.textContent = f.tagline || "";

      // Nav links
      const navLinksEl = $("#footer-nav-links");
      if (navLinksEl && nav?.links) {
        navLinksEl.innerHTML = nav.links.map(l =>
          `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`
        ).join("");
      }

      // Social links
      const socialEl = $("#footer-social-links");
      if (socialEl && contact?.socialLinks) {
        const socialIcons = {
          linkedin:   "fab fa-linkedin-in",
          github:     "fab fa-github",
          twitter:    "fab fa-x-twitter",
          tryhackme:  "fas fa-flag",
          hackthebox: "fas fa-cube",
        };

        socialEl.innerHTML = Object.entries(contact.socialLinks)
          .filter(([, url]) => url)
          .map(([key, url]) => {
            const icon = socialIcons[key] || "fas fa-link";
            return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(key)}"><i class="${icon}"></i></a>`;
          }).join("");
      }

      // Copyright
      const copyEl = $("#footer-copyright");
      if (copyEl && f) {
        copyEl.innerHTML = `&copy; ${new Date().getFullYear()} ${esc(f.copyright)}. All rights reserved.`;
      }
    },

    /* — SEO Meta Update — */
    updateSEO() {
      const m = CONFIG.siteMeta;
      if (!m) return;

      if (m.title) document.title = m.title;

      const metas = {
        description: m.description,
        keywords: m.keywords,
        "og:title": m.title,
        "og:description": m.description,
        "og:image": m.ogImage,
        "og:url": m.siteUrl,
        "twitter:title": m.title,
        "twitter:description": m.description,
        "twitter:image": m.ogImage,
      };

      Object.entries(metas).forEach(([key, value]) => {
        if (!value) return;
        const selector = key.startsWith("og:") || key.startsWith("twitter:")
          ? `meta[property="${key}"], meta[name="${key}"]`
          : `meta[name="${key}"]`;
        const el = $(selector);
        if (el) el.setAttribute("content", value);
      });
    },
  };


  /* -----------------------------------------------------------------------
   *  5. PROJECT FILTERING
   * ----------------------------------------------------------------------- */

  const ProjectFilter = {
    active: "all",

    init() {
      const container = $("#projects-filters");
      if (!container) return;

      container.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        this.filter(btn.dataset.filter);
      });
    },

    filter(category) {
      this.active = category;

      // Update active button
      $$(".filter-btn").forEach(btn => {
        const isActive = btn.dataset.filter === category;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive);
      });

      // Animate cards
      $$(".project-card").forEach(card => {
        const match = category === "all" || card.dataset.category === category;

        if (match) {
          card.style.display = "";
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px) scale(0.95)";
          setTimeout(() => {
            if (this.active !== "all" && card.dataset.category !== this.active) {
              card.style.display = "none";
            }
          }, 350);
        }
      });
    },
  };


  /* -----------------------------------------------------------------------
   *  6. SMOOTH SCROLL & ACTIVE NAV
   * ----------------------------------------------------------------------- */

  const SmoothScroll = {
    init() {
      // Smooth scroll on anchor clicks
      document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute("href");
        if (targetId === "#") return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        const navHeight = $(".navbar")?.offsetHeight || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", targetId);
      });

      // Active link highlighting
      this.observeSections();
    },

    observeSections() {
      const sections = $$("section[id]");
      if (!sections.length || !("IntersectionObserver" in window)) return;

      const navHeight = $(".navbar")?.offsetHeight || 70;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            $$(".navbar__link").forEach(link => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      }, {
        rootMargin: `-${navHeight}px 0px -40% 0px`,
        threshold: 0.1,
      });

      sections.forEach(s => observer.observe(s));
    },
  };


  /* -----------------------------------------------------------------------
   *  7. MOBILE NAVIGATION
   * ----------------------------------------------------------------------- */

  const MobileNav = {
    isOpen: false,

    init() {
      const toggle = $("#nav-toggle");
      const menu = $("#nav-links");
      if (!toggle || !menu) return;

      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.isOpen = !this.isOpen;
        menu.classList.toggle("open", this.isOpen);
        toggle.classList.toggle("active", this.isOpen);
        toggle.setAttribute("aria-expanded", this.isOpen);
        document.body.style.overflow = this.isOpen ? "hidden" : "";
      });

      // Close on link click
      $$("a", menu).forEach(link => {
        link.addEventListener("click", () => this.close(toggle, menu));
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        if (this.isOpen && !menu.contains(e.target) && !toggle.contains(e.target)) {
          this.close(toggle, menu);
        }
      });

      // Close on Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) this.close(toggle, menu);
      });
    },

    close(toggle, menu) {
      this.isOpen = false;
      menu.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    },
  };


  /* -----------------------------------------------------------------------
   *  8. SCROLL REVEAL ANIMATIONS
   * ----------------------------------------------------------------------- */

  const ScrollRevealAnimations = {
    init() {
      if (!("IntersectionObserver" in window)) {
        // Fallback: show everything
        $$(".reveal").forEach(el => el.classList.add("revealed"));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

      $$(".reveal").forEach(el => observer.observe(el));
    },
  };


  /* -----------------------------------------------------------------------
   *  9. CONTACT FORM
   * ----------------------------------------------------------------------- */

  const ContactForm = {
    init() {
      const form = $("#contact-form");
      if (!form) return;

      form.addEventListener("submit", (e) => this.handleSubmit(e, form));

      // Live validation feedback
      $$(".form__input", form).forEach(input => {
        input.addEventListener("blur", () => this.validateField(input));
        input.addEventListener("input", () => {
          if (input.classList.contains("invalid")) this.validateField(input);
        });
      });
    },

    validateField(input) {
      const errorEl = $(`#error-${input.id?.replace("form-", "")}`) || input.nextElementSibling;
      let message = "";

      if (input.required && !input.value.trim()) {
        message = "This field is required";
      } else if (input.type === "email" && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) message = "Please enter a valid email";
      }

      input.classList.toggle("invalid", !!message);
      input.classList.toggle("valid", !message && input.value.trim());
      if (errorEl) errorEl.textContent = message;

      return !message;
    },

    async handleSubmit(e, form) {
      e.preventDefault();

      // Validate all fields
      let valid = true;
      $$("[required]", form).forEach(field => {
        if (!this.validateField(field)) valid = false;
      });
      if (!valid) return;

      const submitBtn = $("#form-submit", form);
      const statusEl = $("#form-status", form);
      const action = form.getAttribute("action");

      // Show loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
      }

      // Formspree or mailto fallback
      if (!action || action.includes("your-form-id")) {
        const email = CONFIG.contact?.email || "";
        const formData = new FormData(form);
        const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`;
        window.location.href = `mailto:${email}?subject=Portfolio Contact&body=${encodeURIComponent(body)}`;
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove("loading"); }
        return;
      }

      try {
        const response = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          this.showStatus(statusEl, "✅ Message sent successfully! I'll get back to you soon.", "success");
          form.reset();
          $$(".form__input", form).forEach(input => {
            input.classList.remove("valid", "invalid");
          });
        } else {
          throw new Error(`Server error: ${response.status}`);
        }
      } catch (err) {
        console.error("Form error:", err);
        this.showStatus(statusEl, "❌ Something went wrong. Please try again or email me directly.", "error");
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove("loading"); }
      }
    },

    showStatus(el, message, type) {
      if (!el) return;
      el.textContent = message;
      el.className = `form__status form__status--${type}`;
      setTimeout(() => {
        el.textContent = "";
        el.className = "form__status";
      }, 6000);
    },
  };


  /* -----------------------------------------------------------------------
   *  10. SECTION VISIBILITY
   * ----------------------------------------------------------------------- */

  const SectionVisibility = {
    init() {
      const map = {
        showHero:          "#hero",
        showAbout:         "#about",
        showServices:      "#services",
        showProjects:      "#projects",
        showCertifications:"#certifications",
        showTestimonials:  "#testimonials",
        showBlog:          "#blog",
        showContact:       "#contact",
      };

      const sections = CONFIG.sections;
      if (!sections) return;

      Object.entries(map).forEach(([flag, selector]) => {
        if (sections[flag] === false) {
          const section = $(selector);
          if (section) {
            section.classList.add("section-hidden");
            section.setAttribute("aria-hidden", "true");
          }
        }
      });
    },
  };


  /* -----------------------------------------------------------------------
   *  11. NAVBAR SCROLL EFFECT
   * ----------------------------------------------------------------------- */

  const NavbarEffect = {
    init() {
      const navbar = $("#navbar");
      if (!navbar) return;

      const update = () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      };

      window.addEventListener("scroll", debounce(update, 30), { passive: true });
      update();
    },
  };


  /* -----------------------------------------------------------------------
   *  12. BACK TO TOP BUTTON
   * ----------------------------------------------------------------------- */

  const BackToTop = {
    init() {
      const btn = $("#back-to-top");
      if (!btn) return;

      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const toggle = () => {
        const hero = $("#hero");
        const threshold = hero ? hero.offsetHeight : 400;
        btn.classList.toggle("visible", window.scrollY > threshold);
      };

      window.addEventListener("scroll", debounce(toggle, 50), { passive: true });
    },
  };


  /* -----------------------------------------------------------------------
   *  13. BOOT — Initialize everything
   * ----------------------------------------------------------------------- */

  function boot() {
    Preloader.init();
    SectionVisibility.init();
    Renderer.init();
  
    TypingEffect.init();
    ProjectFilter.init();
    SmoothScroll.init();
    MobileNav.init();
    NavbarEffect.init();
    BackToTop.init();
    ContactForm.init();

    // Scroll reveal must run last (after all dynamic content is rendered)
    ScrollRevealAnimations.init();

    console.log(
      "%c🛡️ Portfolio initialized",
      "color: #00ff41; font-size: 14px; font-weight: bold;"
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
