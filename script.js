/* ============================================
   SAAJAN SAINI — PORTFOLIO v4 · script.js
   ============================================ */
(function () {
  'use strict';

  /* ─── TRANSLATIONS ─────────────────────────── */
  const i18n = {
    en: {
      'nav.logo':        '// saajansaini.com',
      'nav.work':        'Projects',
      'nav.exp':         'Experience',
      'nav.awards':      'Awards',
      'nav.skills':      'Skills',
      'nav.about':       'About',
      
      'hero.kicker':     'Software Engineer',
      'hero.tagline':    'Building <strong>scalable backend systems</strong>, open-source tools, and AI pipelines.<br>Deeply interested in startups and building products from 0 to 1.<br>Soon starting MSc&nbsp;Computer&nbsp;Engineering.',
      'hero.status':     'Available for SWE Internships &amp; Roles',
      'hero.location':   'Italy / Europe',
      'hero.cta_email':  '<svg viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg> Email Me',
      'hero.cta_work':   'View Work',
      'hero.scroll':     'Scroll',

      'section.exp':       'Career',
      'heading.exp':       'Experience',
      'exp.uber.role':     'Automation Engineer Intern',
      'exp.uber.d1':       'Automated high-friction global operations processes using <strong>Python</strong>, deploying end-to-end solutions.',
      'exp.uber.d2':       'Integrated <strong>LLMs</strong> into the development workflow to accelerate prototyping and iteration cycles.',
      'exp.uber.d3':       'Partnered with cross-functional stakeholders to gather requirements and translate technical outcomes into business impact.',
      'exp.kosmo.role':    'AI/Software Engineer',
      'exp.kosmo.d1':      'Built an end-to-end Python pipeline for document ingestion and preprocessing, cutting manual effort by <strong>80%</strong>.',
      'exp.kosmo.d2':      'Deployed a production <strong>RAG chatbot</strong> for client workflows using <strong>LangChain</strong>, <strong>Qdrant</strong>, and FastAPI.',
      'exp.kosmo.d3':      'Implemented semantic similarity matching to improve retrieval accuracy over keyword-based approaches.',
      'exp.delta.role':    'Software Developer',
      'exp.delta.d1':      'Developed real-time <strong>KPI dashboards</strong> for a CRM system, providing actionable insights.',
      'exp.delta.d2':      'Automated internal data workflows utilizing <strong>Python, SQL, and REST APIs</strong>.',

      'section.work':    'Selected Work',
      'heading.projects':'Projects',

      'proj.openuni.desc': 'Open-source platform for university students to navigate academic curricula, discover courses, and share resources. Architected a full-stack web app with clean REST API separation.',
      
      'proj.thesis.name':  'Tomato Plant Disease Recognition',
      'proj.thesis.desc':  'Deep learning disease recognition system for tomato plants. Coordinated autonomous multi-view image acquisition with a robotic arm to achieve occlusion-resistant classification.',

      'proj.fugax.desc':   'Zero-knowledge secret-sharing service in Go. AES-256-GCM client-side encryption, TTL expiry via background goroutines, and multi-stage Docker deployment.',

      'proj.stealth.name':  'AI Construction Manager',
      'proj.stealth.desc':  'AI-native platform with conversational interface to track site progress, budget, and scheduling. Designed the AI layer for structured memory and proactive anomaly detection using LLMs.',
      'proj.stealth.private':'⚿ Private Source',

      'proj.iot.desc':     'Real-time IoT monitoring system processing distributed sensor data via MQTT to detect hazardous conditions and trigger automated safety alerts.',

      'proj.followers.desc':'Tool mapping the GitHub social graph to identify non-reciprocal followers, visualizing network statistics through an interactive dashboard.',
      
      'proj.obsidian.desc': 'Obsidian plugin enabling @-mention syntax for contacts within notes to improve knowledge graph density and personal CRM workflows.',
      
      'proj.playground.desc':'Django application exploring modern backend patterns: authentication flows, CRUD operations, REST API design, and server-side rendering.',

      'gh.caption':        'Open Source Contributions — <a href="https://github.com/saajann" class="gh-graph__link" target="_blank" rel="noopener">@saajann</a>',

      'section.awards':    'Recognition',
      'heading.awards':    'Awards &amp; Achievements',
      'award.sciote.place':'🏆 1st Place',
      'award.sciote.title':'Hackathon — SCIoTeM 2026',
      'award.sciote.desc': 'Designed and shipped a fully working demand-adaptive public transport system for Bologna in under 48 hours — real-time route optimisation driven by citizen demand, built with Python and Flask.',
      'award.corda.place': 'Top 10 / ~500',
      'award.corda.title': 'Mathematics Merit Award — CORDA Project',
      'award.corda.desc':  'Mathematics Merit Award for ranking in the top 10 out of ~500 participants in the university-level CORDA mathematics assessment program.',

      'section.about':     'Background',
      'heading.about':     'About',
      'about.p1':          'Final-year <strong>Computer Engineering</strong> student graduating with <strong>110/110 (expected, October 2026)</strong> from UNIMORE, and starting an <strong>MSc in Computer Engineering</strong> directly after.',
      'about.p2':          'I specialise in backend engineering and applied AI — building production systems in Python and Go, shipping RAG pipelines, and automating complex workflows end-to-end. I\'m deeply interested in <strong>startups</strong>, 0-to-1 product building, and contributing to <strong>open-source</strong> software.',
      'about.p3':          'Currently, I am looking for <strong>software engineering internships and junior roles</strong>. Feel free to <a href="mailto:info@saajansaini.com">reach out</a>.',
      
      'skills.prog':       'Programming &amp; Engineering',
      'skills.ai':         'AI &amp; Data',
      'skills.lang':       'Languages',

      'about.edu':         'Education Highlights',
      'about.bsc':         'B.Sc. Computer Engineering',
      'about.msc':         'M.Sc. Computer Engineering',
      'about.hs':          'Scientific High School',

      'footer.cta':        'Let\'s build<br>something <em>great.</em>',
    },

    it: {
      'nav.logo':        '// saajann',
      'nav.work':        'Progetti',
      'nav.exp':         'Esperienza',
      'nav.awards':      'Premi',
      'nav.skills':      'Competenze',
      'nav.about':       'Chi sono',
      
      'hero.kicker':     'Ingegnere Software',
      'hero.tagline':    'Costruisco <strong>sistemi backend scalabili</strong>, tool open-source e pipeline AI.<br>Fortemente interessato alle startup e allo sviluppo di prodotti da 0 a 1.<br>Prossimamente Magistrale in Ingegneria Informatica.',
      'hero.status':     'Disponibile per Stage e Ruoli Software Engineering',
      'hero.location':   'Italia / Europa',
      'hero.cta_email':  '<svg viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg> Contattami',
      'hero.cta_work':   'Vedi i lavori',
      'hero.scroll':     'Scorri',

      'section.exp':       'Carriera',
      'heading.exp':       'Esperienza',
      'exp.uber.role':     'Automation Engineer Intern',
      'exp.uber.d1':       'Automatizzato processi operativi globali critici utilizzando <strong>Python</strong>, rilasciando soluzioni end-to-end.',
      'exp.uber.d2':       'Integrati <strong>LLM</strong> nel ciclo di sviluppo per accelerare le fasi di prototipazione e iterazione.',
      'exp.uber.d3':       'Collaborato con team interfunzionali per la raccolta dei requisiti e la traduzione dei risultati tecnici in impatto aziendale.',
      'exp.kosmo.role':    'AI/Software Engineer',
      'exp.kosmo.d1':      'Sviluppato una pipeline Python end-to-end per l\'ingestione di documenti, riducendo il lavoro manuale dell\'<strong>80%</strong>.',
      'exp.kosmo.d2':      'Rilasciato in produzione un <strong>RAG chatbot</strong> per i flussi di lavoro dei clienti utilizzando <strong>LangChain</strong>, <strong>Qdrant</strong> e FastAPI.',
      'exp.kosmo.d3':      'Implementato il semantic similarity matching per migliorare l\'accuratezza del recupero delle informazioni rispetto agli approcci basati su keyword.',
      'exp.delta.role':    'Software Developer',
      'exp.delta.d1':      'Sviluppato <strong>dashboard KPI</strong> in tempo reale per un sistema CRM, fornendo insight azionabili.',
      'exp.delta.d2':      'Automatizzato flussi di dati interni utilizzando <strong>Python, SQL e REST API</strong>.',

      'section.work':    'Lavori selezionati',
      'heading.projects':'Progetti',

      'proj.openuni.desc': 'Piattaforma open-source per studenti universitari per navigare curricula accademici, scoprire corsi e condividere risorse. Architettata una web app full-stack con chiara separazione API REST.',
      
      'proj.thesis.name':  'Riconoscimento Malattie Piante di Pomodoro',
      'proj.thesis.desc':  'Sistema di riconoscimento malattie basato su deep learning. Coordinato l\'acquisizione autonoma di immagini multi-vista con un braccio robotico per ottenere classificazioni resistenti alle occlusioni.',

      'proj.fugax.desc':   'Servizio di condivisione segreti zero-knowledge in Go. Crittografia AES-256-GCM lato client, scadenza TTL tramite goroutine in background e deploy Docker multi-stage.',

      'proj.stealth.name':  'AI Construction Manager',
      'proj.stealth.desc':  'Piattaforma AI-native con interfaccia conversazionale per tracciare lo stato dei cantieri, budget e programmazione. Progettato il livello AI per memoria strutturata e rilevamento proattivo delle anomalie usando LLM.',
      'proj.stealth.private':'⚿ Codice Privato',

      'proj.iot.desc':     'Sistema di monitoraggio IoT in tempo reale che elabora dati di sensori distribuiti via MQTT per rilevare condizioni pericolose e attivare allarmi di sicurezza.',

      'proj.followers.desc':'Strumento che mappa il grafo sociale GitHub per identificare follower non reciproci, visualizzando statistiche di rete tramite una dashboard interattiva.',
      
      'proj.obsidian.desc': 'Plugin Obsidian che abilita la sintassi @-mention per i contatti all\'interno delle note, migliorando la densità del grafo della conoscenza e i flussi CRM personali.',
      
      'proj.playground.desc':'Applicazione Django che esplora pattern backend moderni: flussi di autenticazione, operazioni CRUD, progettazione API REST e server-side rendering.',

      'gh.caption':        'Contributi Open Source — <a href="https://github.com/saajann" class="gh-graph__link" target="_blank" rel="noopener">@saajann</a>',

      'section.awards':    'Riconoscimenti',
      'heading.awards':    'Premi &amp; Risultati',
      'award.sciote.place':'🏆 1° Posto',
      'award.sciote.title':'Hackathon — SCIoTeM 2026',
      'award.sciote.desc': 'Progettato e rilasciato un sistema di trasporto pubblico demand-adaptive per Bologna in meno di 48 ore — ottimizzazione percorsi in tempo reale guidata dalla domanda, costruito con Python e Flask.',
      'award.corda.place': 'Top 10 / ~500',
      'award.corda.title': 'Premio Merito Matematica — Progetto CORDA',
      'award.corda.desc':  'Premio Merito Matematica per essermi posizionato nella top 10 su ~500 partecipanti al programma universitario di valutazione matematica CORDA.',

      'section.about':     'Background',
      'heading.about':     'Chi sono',
      'about.p1':          'Studente all\'ultimo anno di <strong>Ingegneria Informatica</strong>, laureando con <strong>110/110 (previsto, ottobre 2026)</strong> presso UNIMORE, e in procinto di iniziare subito dopo una <strong>MSc in Ingegneria Informatica</strong>.',
      'about.p2':          'Mi specializzo in backend engineering e AI applicata — costruendo sistemi in produzione in Python e Go, rilasciando pipeline RAG e automatizzando flussi di lavoro complessi. Sono profondamente interessato alle <strong>startup</strong>, alla costruzione di prodotti da 0 a 1 e al contributo al software <strong>open-source</strong>.',
      'about.p3':          'Attualmente cerco <strong>stage in ingegneria del software e ruoli junior</strong>. Sentiti libero di <a href="mailto:info@saajansaini.com">contattarmi</a>.',
      
      'skills.prog':       'Programmazione &amp; Ingegneria',
      'skills.ai':         'AI &amp; Dati',
      'skills.lang':       'Lingue',

      'about.edu':         'Dettagli Istruzione',
      'about.bsc':         'B.Sc. Ingegneria Informatica',
      'about.msc':         'M.Sc. Ingegneria Informatica',
      'about.hs':          'Liceo Scientifico',

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

    // Update page title + meta description for basic bilingual UX
    if (lang === 'it') {
      document.title = 'Saajan Saini — Ingegnere Software';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = 'Saajan Saini è un ingegnere software specializzato in sistemi backend, pipeline AI/ML e automazione intelligente. Disponibile per stage. MSc Ingegneria Informatica.';
    } else {
      document.title = 'Saajan Saini — Software Engineer';
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = 'Saajan Saini is a software engineer specializing in backend systems, AI/ML pipelines, and intelligent automation. Available for internships. MSc Computer Engineering.';
    }
  }

  function detectLang() {
    const saved = localStorage.getItem('preferred-lang');
    if (saved && i18n[saved]) return saved;
    const browser = (navigator.language || 'en').split('-')[0].toLowerCase();
    return i18n[browser] ? browser : 'en';
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
    // Close on Escape
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
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height') || '60', 10);
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset - 16,
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
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    initNavScroll();
    initReveal();
    initHamburger();
    initSmoothScroll();
    initScrollIndicator();
    initFooterYear();
  });
})();