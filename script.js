/* ============================================
   SAAJAN SAINI — PORTFOLIO v5 · script.js
   ============================================ */
(function () {
  'use strict';

  /* ─── TRANSLATIONS ─────────────────────────── */
  const i18n = {
    en: {
      'nav.logo':        '// saajansaini.com',
      'nav.work':        'Projects',
      'nav.exp':         'Experience',
      'nav.extra':       'Extra',
      'nav.about':       'About',

      'hero.kicker':     'Software Engineer',
      'hero.name':       'Saajan Saini',
      'hero.tagline':    'Crafting <strong>clean, scalable software</strong> — backend systems, open-source tools and AI pipelines.<br>Deeply interested in backend engineering, startups and building products from 0 to 1.',
      'hero.status':     'Available for Software Engineering Internships &amp; Roles',
      'hero.location':   'Italy / Europe',
      'hero.cta_email':  'Email Me',
      'hero.scroll':     'Scroll',

      'section.exp':       'Career',
      'heading.exp':       'Experience',
      'exp.uber.role':     'Automation Intern',
      'exp.uber.d1':       'Automated high-friction global operations processes using <strong>Python</strong>, deploying end-to-end solutions.',
      'exp.uber.d2':       'Integrated <strong>LLMs</strong> into the development workflow to accelerate prototyping and iteration cycles.',
      'exp.uber.d3':       'Partnered with cross-functional stakeholders to gather requirements and translate technical outcomes into business impact.',
      'exp.kosmo.role':    'AI Engineer',
      'exp.kosmo.d1':      'Built an end-to-end Python pipeline for document ingestion and preprocessing, cutting manual effort by <strong>80%</strong>.',
      'exp.kosmo.d2':      'Deployed a production <strong>RAG chatbot</strong> for client workflows using <strong>LangChain</strong>, <strong>Qdrant</strong> and FastAPI.',
      'exp.kosmo.d3':      'Implemented semantic similarity matching to improve retrieval accuracy over keyword-based approaches.',
      'exp.delta.role':    'Software developer',
      'exp.delta.d1':      'Developed real-time <strong>KPI dashboards</strong> for a CRM system, providing actionable insights.',
      'exp.delta.d2':      'Automated internal data workflows using <strong>Python, SQL and REST APIs</strong>.',

      'section.work':    'Selected Work',
      'heading.projects':'Projects',

      'proj.openuni.desc': 'Open-source platform for university students to navigate academic curricula, discover courses and share resources. Architected a full-stack web app with clean REST API separation.',

      'proj.thesis.name':  'Tomato Plant Leaf Recognition',
      'proj.thesis.desc':  'Deep learning leaf recognition system for tomato plants. Coordinated autonomous multi-view image acquisition with a robotic arm to achieve occlusion-resistant classification.',

      'proj.fugax.desc':   'Zero-knowledge secret-sharing service in Go. AES-256-GCM client-side encryption, TTL expiry via background goroutines and multi-stage Docker deployment.',

      'proj.stealth.name':  'AI Construction Manager',
      'proj.stealth.desc':  'AI-native platform with conversational interface to track site progress, budget and scheduling.',
      'proj.stealth.private':'⚿ Private Source',

      'proj.iot.desc':     'Real-time IoT monitoring system processing distributed sensor data via MQTT to detect hazardous conditions and trigger automated safety alerts.',

      'proj.obsidian.desc': 'Obsidian plugin enabling @-mention syntax for contacts within notes to improve knowledge graph density and personal CRM workflows.',

      'section.extra':     'Recognition &amp; Open Source',
      'heading.extra':     'Extra',
      'extra.gh.label':    'GitHub · <a href="https://github.com/saajann" target="_blank" rel="noopener">@saajann</a>',
      'extra.gh.view':     'View GitHub Profile →',
      'extra.gh.repos':    'Public Repositories',
      'extra.gh.tenure':   'Years on GitHub',
      'extra.gh.stars':    'Total Stars',
      'extra.gh.contributions':'Contributions (365d)',
      'extra.subheading.gh':'GitHub',
      'extra.subheading.awards':'Awards &amp; Recognition',

      'award.sciote.place':'🏆 1st Place',
      'award.sciote.title':'Hackathon — SCIoTeM 2026',
      'award.sciote.desc': 'Designed and shipped a fully working demand-adaptive public transport system for Bologna in under 48 hours — real-time route optimisation driven by citizen demand, built with Python and Flask.',
      'award.corda.place': 'Top 10 / ~500',
      'award.corda.title': 'Mathematics Merit Award — CORDA Project',
      'award.corda.desc':  'Mathematics Merit Award for ranking in the top 10 out of ~500 participants in the university-level CORDA mathematics assessment program.',

      'about.p1':          'Final-year <strong>Computer Engineering</strong> student, graduating with <strong>110/110 (expected, October 2026)</strong> from UNIMORE and starting an <strong>MSc in Computer Engineering</strong> directly after.',
      'about.p2':          'I specialise in backend engineering and applied AI — building production systems in Python and Go, shipping RAG pipelines and automating complex workflows end-to-end. I\'m deeply interested in backend engineering, startups and contributing to open-source software.',
      'about.p3':          'Currently looking for <strong>software engineering internships and junior roles</strong>. Feel free to <a href="mailto:info@saajansaini.com">reach out</a>.',

      'skills.prog':       'Programming Languages',
      'skills.frameworks': 'Frameworks &amp; Tools',
      'skills.practices':  'Engineering Practices',
      'skills.ai':         'AI &amp; Data',
      'skills.lang':       'Languages',

      'about.edu':         'Education Highlights',
      'about.bsc':         'B.Sc. Computer Engineering',
      'about.msc':         'M.Sc. Computer Engineering',

      'footer.cta':        'Let\'s build<br>something <em>great.</em>',
    },

    it: {
      'nav.logo':        '// saajann',
      'nav.work':        'Progetti',
      'nav.exp':         'Esperienza',
      'nav.extra':       'Extra',
      'nav.about':       'Chi sono',

      'hero.kicker':     'Ingegnere Software',
      'hero.name':       'Saajan Saini',
      'hero.tagline':    'Sviluppo <strong>software pulito e scalabile</strong> — sistemi backend, tool open-source e pipeline AI.<br>Appassionato di backend engineering, startup e creazione di prodotti da 0 a 1.',
      'hero.status':     'Disponibile per stage e ruoli di ingegneria del software',
      'hero.location':   'Italia / Europa',
      'hero.cta_email':  'Contattami',
      'hero.scroll':     'Scorri',

      'section.exp':       'Carriera',
      'heading.exp':       'Esperienza',
      'exp.uber.role':     'Automation Intern',
      'exp.uber.d1':       'Automatizzazione di processi operativi globali ad alto impatto usando <strong>Python</strong>, rilasciando soluzioni end-to-end.',
      'exp.uber.d2':       'Integrazione di <strong>LLM</strong> nei flussi interni per velocizzare lo sviluppo di prototipi e l\'iterazione del software.',
      'exp.uber.d3':       'Collaborazione diretta con stakeholder interfunzionali per tradurre requisiti di business in soluzioni tecniche concrete.',
      'exp.kosmo.role':    'AI Engineer',
      'exp.kosmo.d1':      'Sviluppo di una pipeline di ingestione e preprocessing documentale in Python, riducendo l\'attività manuale dell\'<strong>80%</strong>.',
      'exp.kosmo.d2':      'Rilascio in produzione di un <strong>assistente virtuale RAG</strong> per i workflow aziendali dei clienti basato su <strong>LangChain</strong>, <strong>Qdrant</strong> e FastAPI.',
      'exp.kosmo.d3':      'Implementazione di meccanismi di ricerca semantica per massimizzare la precisione del recupero rispetto alle ricerche a parole chiave.',
      'exp.delta.role':    'Software developer',
      'exp.delta.d1':      'Sviluppo di <strong>dashboard KPI</strong> in tempo reale integrate nel CRM aziendale per supportare le decisioni operative.',
      'exp.delta.d2':      'Automatizzazione dei flussi dati interni sfruttando <strong>Python, database SQL e API REST</strong>.',

      'section.work':    'Progetti principali',
      'heading.projects':'Progetti',

      'proj.openuni.desc': 'Piattaforma open-source pensata per gli studenti universitari per esplorare i piani di studio, scoprire nuovi corsi e condividere risorse. Web app full-stack con una netta separazione dell\'architettura API REST.',

      'proj.thesis.name':  'Tomato Plant Leaf Recognition',
      'proj.thesis.desc':  'Sistema di classificazione basato su deep learning per identificare lo stato delle foglie del pomodoro. Coordinamento di un braccio robotico per l\'acquisizione autonoma multi-vista delle immagini.',

      'proj.fugax.desc':   'Servizio Go per la condivisione di informazioni riservate con approccio zero-knowledge. Crittografia client-side AES-256-GCM, auto-eliminazione via goroutine e containerizzazione Docker multi-stage.',

      'proj.stealth.name':  'AI Construction Manager',
      'proj.stealth.desc':  'Piattaforma nativa AI con interfaccia conversazionale per il tracciamento dei progressi in cantiere, budget e pianificazione.',
      'proj.stealth.private':'⚿ Codice Privato',

      'proj.iot.desc':     'Sistema IoT in tempo reale per monitorare i sensori in cantiere tramite protocollo MQTT, rilevare condizioni anomale e inviare alert di sicurezza automatici.',

      'proj.obsidian.desc': 'Estensione per Obsidian che introduce la sintassi di menzione (@-mention) all\'interno delle note, migliorando la densità del grafo di conoscenza personale.',

      'section.extra':     'Attività Extra',
      'heading.extra':     'Extra',
      'extra.gh.label':    'GitHub · <a href="https://github.com/saajann" target="_blank" rel="noopener">@saajann</a>',
      'extra.gh.view':     'Profilo GitHub →',
      'extra.gh.repos':    'Repository Pubbliche',
      'extra.gh.tenure':   'Anni su GitHub',
      'extra.gh.stars':    'Stelle Totali',
      'extra.gh.contributions':'Contributi (365gg)',
      'extra.subheading.gh':'GitHub',
      'extra.subheading.awards':'Premi &amp; Riconoscimenti',

      'award.sciote.place':'🏆 1° Posto',
      'award.sciote.title':'Hackathon — SCIoTeM 2026',
      'award.sciote.desc': 'Progettazione e sviluppo in meno di 48 ore di un sistema di trasporto pubblico a chiamata per Bologna — ottimizzazione dei percorsi in tempo reale guidata dalla domanda, sviluppato in Python e Flask.',
      'award.corda.place': 'Top 10 / ~500',
      'award.corda.title': 'Premio al Merito in Matematica — Progetto CORDA',
      'award.corda.desc':  'Riconoscimento di merito per essermi classificato nella top 10 su circa 500 partecipanti nella valutazione di matematica a livello universitario del progetto CORDA.',

      'about.p1':          'Studente all\'ultimo anno di <strong>Ingegneria Informatica</strong> presso UNIMORE con votazione prevista di <strong>110/110 (laurea a ottobre 2026)</strong>. Successivamente inizierò la <strong>Laurea Magistrale in Ingegneria Informatica</strong>.',
      'about.p2':          'Mi occupo di backend engineering e intelligenza artificiale applicata: sviluppo sistemi stabili in produzione in Python e Go, implemento architetture RAG e ottimizzo pipeline di automazione complessi. Sono appassionato di backend engineering, startup e sviluppo software open-source.',
      'about.p3':          'Attualmente alla ricerca di <strong>opportunità di stage e posizioni junior in ingegneria del software</strong>. Contattami pure via <a href="mailto:info@saajansaini.com">email</a>.',

      'skills.prog':       'Linguaggi di Programmazione',
      'skills.frameworks': 'Framework &amp; Strumenti',
      'skills.practices':  'Pratiche di Sviluppo',
      'skills.ai':         'AI &amp; Dati',
      'skills.lang':       'Lingue',

      'about.edu':         'Dettagli Istruzione',
      'about.bsc':         'Laurea Triennale in Ingegneria Informatica',
      'about.msc':         'Laurea Magistrale in Ingegneria Informatica',

      'footer.cta':        'Costruiamo<br>qualcosa di <em>grande.</em>',
    }
  };

  /* ─── APPLY LANGUAGE ────────────────────────── */
  function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('preferred-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update active state on buttons
    document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update page title + meta description
    if (lang === 'it') {
      document.title = 'Saajan Saini — Ingegnere Software';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = 'Saajan Saini è un ingegnere software specializzato in sistemi backend, pipeline AI/ML e automazione intelligente. Disponibile per stage. Laurea Magistrale in Ingegneria Informatica.';
    } else {
      document.title = 'Saajan Saini — Software Engineer';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = 'Saajan Saini is a software engineer specialising in backend systems, AI/ML pipelines and intelligent automation. Available for internships. MSc Computer Engineering.';
    }
  }

  /* ─── LANGUAGE DETECTION & ROUTING ──────────── */
  function detectLang() {
    const path = window.location.pathname;
    if (path.includes('/it/')) return 'it';

    const saved = localStorage.getItem('preferred-lang');
    if (saved && i18n[saved]) return saved;

    const browser = (navigator.language || 'en').split('-')[0].toLowerCase();
    return i18n[browser] ? browser : 'en';
  }

  function switchLang(lang) {
    const path = window.location.pathname;
    const isOnIt = path.includes('/it/');

    if (lang === 'it' && !isOnIt) {
      localStorage.setItem('preferred-lang', 'it');
      window.location.href = '/it/';
      return;
    }
    if (lang === 'en' && isOnIt) {
      localStorage.setItem('preferred-lang', 'en');
      window.location.href = '../';
      return;
    }

    applyLang(lang);
  }

  /* ─── GITHUB STATS RETRIEVAL ───────────────── */
  function initGitHubStats() {
    const reposVal = document.getElementById('gh-repos-val');
    const starsVal = document.getElementById('gh-stars-val');
    const gistsVal = document.getElementById('gh-gists-val');
    const joinedVal = document.getElementById('gh-joined-val');

    // Fetch user profile stats
    fetch('https://api.github.com/users/saajann', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(r => r.json())
      .then(data => {
        if (data.public_repos !== undefined && reposVal) {
          reposVal.textContent = data.public_repos;
        }
        if (data.public_gists !== undefined && gistsVal) {
          gistsVal.textContent = data.public_gists;
        }
        if (data.created_at !== undefined && joinedVal) {
          const yearJoined = new Date(data.created_at).getFullYear();
          joinedVal.textContent = yearJoined;
        }
      });

    // Fetch repos to sum stargazers
    fetch('https://api.github.com/users/saajann/repos?per_page=100', {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    })
      .then(r => r.json())
      .then(repos => {
        if (Array.isArray(repos)) {
          const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
          if (starsVal) starsVal.textContent = totalStars;
        }
      })
      .catch(() => {
        if (starsVal) starsVal.textContent = '-';
      });
  }

  /* ─── SCROLL REVEAL ─────────────────────────── */
  function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ─── NAV SCROLL EFFECT ─────────────────────── */
  function initNavScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  /* ─── HAMBURGER MENU ────────────────────────── */
  window.closeMobile = function () {
    document.getElementById('hamburger')?.classList.remove('open');
    document.getElementById('mobileMenu')?.classList.remove('open');
    document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false');
  };

  function initHamburger() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = btn.classList.toggle('open');
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobile();
    });
  }

  /* ─── SMOOTH SCROLL ─────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 76,
          behavior: 'smooth'
        });
      });
    });
  }

  /* ─── HERO SCROLL INDICATOR ─────────────────── */
  function initScrollIndicator() {
    const el = document.querySelector('.hero__scroll');
    if (!el) return;
    let gone = false;
    window.addEventListener('scroll', () => {
      if (!gone && window.scrollY > 120) {
        el.style.cssText = 'opacity:0;transition:opacity .5s ease;pointer-events:none';
        gone = true;
      }
    }, { passive: true });
  }

  /* ─── FOOTER YEAR ───────────────────────────── */
  function initFooterYear() {
    const el = document.getElementById('footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ─── INIT ──────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectLang();
    applyLang(initialLang);

    document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      btn.addEventListener('click', () => switchLang(btn.dataset.lang));
    });

    initNavScroll();
    initReveal();
    initHamburger();
    initSmoothScroll();
    initScrollIndicator();
    initFooterYear();
    initGitHubStats();
  });
})();