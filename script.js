/**
 * NAGU PORTFOLIO — SCRIPT.JS
 * Modular vanilla JS — no frameworks.
 * Dual identity: Cyber Security ↔ Python Developer
 */

'use strict';

/* ══════════════════════════════════════════════════════════════
   DATA — Two complete identities
══════════════════════════════════════════════════════════════ */
const DATA = {
  cyber: {
    mode: 'cyber',
    nav: { logo: 'sec', resumeLabel: 'Resume (Security)', resumeFile: 'nagu-security-resume.pdf' },
    hero: {
      eyebrow: 'Blue Team · DFIR · Threat Intelligence',
      roles: ['Cyber Security Engineer', 'Blue Team Builder', 'DFIR Enthusiast', 'Python Security Dev'],
      subtitle: 'Building defensive systems, automation tools,\nand secure software — quietly, consistently.',
      stats: [
        { num: 847, label: 'Days consistent' },
        { num: 24,  label: 'Security projects' },
        { num: 6,   label: 'Research papers' },
      ],
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in Touch',
      card: {
        label: 'threat-monitor.py',
        status: 'Monitoring active',
        code: `# Narasimha IDS — Packet Monitor
import scapy.all as scapy
from datetime import datetime

def analyze_packet(pkt):
    if pkt.haslayer(scapy.TCP):
        flags = pkt[scapy.TCP].flags
        if flags == 0x002:  # SYN
            log_event("SYN_SCAN", pkt.src)
        elif flags == 0x001:  # FIN
            log_event("FIN_PROBE", pkt.src)

def log_event(event, src):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] ⚑ {event} from {src}")

scapy.sniff(prn=analyze_packet, store=0)`,
      },
    },
    about: {
      eyebrow: 'About Me',
      title: 'The engineer behind the defence.',
      p1: 'I\'m <strong>Naga Veera Venkata Satya Narasimha Murthy</strong> — Nagu — a B.Tech Cyber Security Engineering student who writes Python and works at the Robotics Lab.',
      p2: 'I don\'t think like a hacker first. I think like an engineer. Understanding how systems are <em>correctly built</em> is the prerequisite for understanding how they fail. That order matters, and it shapes everything I build.',
      p3: 'Most of my best work happens between 11 PM and 3 AM. Not hustle — just silence, focus, and zero interruptions. I automate what repeats, dig into what\'s hard, and don\'t ship until I understand what I\'ve built.',
    },
    projects: [
      {
        name: 'Narasimha IDS',
        type: 'Security Tool',
        status: 'active',
        desc: 'Rule-based intrusion detection system that monitors live network traffic, matches signatures, and generates structured incident reports. Built to understand detection logic from first principles.',
        tags: ['Python', 'Scapy', 'Linux', 'YARA'],
        link: '#',
      },
      {
        name: 'Netra — Secure Code Review',
        type: 'SAST Tool',
        status: 'active',
        desc: 'Static analysis tool for Python codebases that flags injection vulnerabilities, insecure patterns, and hardcoded secrets. Outputs structured SARIF reports.',
        tags: ['Python', 'AST', 'SARIF', 'CLI'],
        link: '#',
      },
      {
        name: 'Threat Intelligence Dashboard',
        type: 'SOC Tool',
        status: 'active',
        desc: 'Aggregates threat feeds, enriches IOCs with context, and displays risk maps. Backend written in Python, designed for a SOC analyst workflow.',
        tags: ['Python', 'APIs', 'SQLite', 'Viz'],
        link: '#',
      },
      {
        name: 'Log Analyzer',
        type: 'Automation',
        status: 'complete',
        desc: 'High-throughput log parsing engine that identifies anomalous patterns across syslog, auth.log, and web server logs. Supports custom rule definitions.',
        tags: ['Python', 'Regex', 'Bash', 'JSON'],
        link: '#',
      },
      {
        name: 'File Integrity Monitor',
        type: 'Security Tool',
        status: 'active',
        desc: 'Daemon that watches critical system paths, hashes files on write, and alerts on unauthorized modifications. Lightweight, persistent, configurable.',
        tags: ['Python', 'SHA-256', 'Daemon', 'Linux'],
        link: '#',
      },
      {
        name: 'Malware Analysis Toolkit',
        type: 'DFIR',
        status: 'active',
        desc: 'Python-based triage toolkit for static malware analysis: string extraction, entropy scoring, PE header parsing, and YARA rule matching.',
        tags: ['Python', 'YARA', 'PE', 'DFIR'],
        link: '#',
      },
    ],
    skills: [
      {
        icon: '🛡️', name: 'Defensive Security', cat: 'Core Domain',
        items: [
          { label: 'Network Defence',        pct: 0.88 },
          { label: 'Incident Response',      pct: 0.82 },
          { label: 'Threat Intelligence',    pct: 0.78 },
          { label: 'Digital Forensics',      pct: 0.75 },
        ],
      },
      {
        icon: '🐍', name: 'Python & Tooling', cat: 'Primary Language',
        items: [
          { label: 'Security Scripting',     pct: 0.92 },
          { label: 'Automation',             pct: 0.90 },
          { label: 'CLI Tool Development',   pct: 0.85 },
          { label: 'Data Processing',        pct: 0.80 },
        ],
      },
      {
        icon: '🔧', name: 'Systems & Networks', cat: 'Foundation',
        items: [
          { label: 'Linux Administration',   pct: 0.88 },
          { label: 'TCP/IP & Protocols',     pct: 0.85 },
          { label: 'Firewall & IDS/IPS',     pct: 0.78 },
          { label: 'Packet Analysis',        pct: 0.80 },
        ],
      },
      {
        icon: '🔍', name: 'Analysis Tools', cat: 'Forensics & Recon',
        items: [
          { label: 'Wireshark',              pct: 0.82 },
          { label: 'Burp Suite',             pct: 0.72 },
          { label: 'Nmap / Masscan',         pct: 0.85 },
          { label: 'Volatility / FTK',       pct: 0.68 },
        ],
      },
      {
        icon: '☁️', name: 'Cloud & DevOps', cat: 'Infrastructure',
        items: [
          { label: 'Docker & Containers',    pct: 0.75 },
          { label: 'Cloud Security',         pct: 0.70 },
          { label: 'Git & CI/CD',            pct: 0.85 },
          { label: 'Virtualization',         pct: 0.78 },
        ],
      },
      {
        icon: '🤖', name: 'Robotics & Embedded', cat: 'Lab Work',
        items: [
          { label: 'Embedded Security',      pct: 0.72 },
          { label: 'IoT Attack Surface',     pct: 0.70 },
          { label: 'Sensor Integration',     pct: 0.65 },
          { label: 'Protocol Fuzzing',       pct: 0.60 },
        ],
      },
    ],
    timeline: [
      { year: '2021', title: 'Started B.Tech Cyber Security Engineering', body: 'Began formal study in cyber security. Built first network scanner in week two. Realised this was the right path.' },
      { year: '2022', title: 'Joined Robotics Lab', body: 'Started working on embedded systems and IoT security research. First exposure to hardware-level attack surfaces.' },
      { year: '2022', title: 'Built first IDS prototype', body: 'Rule-based intrusion detection using Python and Scapy. Learned packet internals from the ground up, not from tutorials.' },
      { year: '2023', title: 'Narasimha IDS — v1.0', body: 'Released the first public version of Narasimha IDS. First project built entirely from my own architecture decisions.' },
      { year: '2023', title: 'Netra Code Review Tool', body: 'Developed static analysis tool for Python security. Learned AST manipulation and SARIF output standards.' },
      { year: '2024', title: 'Threat Intelligence Research', body: 'Started publishing research on threat feed aggregation and IOC enrichment patterns. Six papers in progress.' },
      { year: '2025', title: 'SOC Tooling Suite', body: 'Building a complete SOC analyst toolkit — log analysis, TI dashboard, incident response automation — all in Python.' },
    ],
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something\nworth defending.",
      intro: 'Open to research collaborations, security tooling projects, and conversations with people who care about doing things properly.',
    },
    footer: { build: 'Built with discipline. No frameworks.' },
  },

  python: {
    mode: 'python',
    nav: { logo: 'py', resumeLabel: 'Resume (Dev)', resumeFile: 'nagu-developer-resume.pdf' },
    hero: {
      eyebrow: 'Python · Automation · Backend Engineering',
      roles: ['Python Developer', 'Automation Engineer', 'Software Builder', 'Backend Enthusiast'],
      subtitle: 'Creating efficient software, automation tools,\ndeveloper utilities, and scalable applications.',
      stats: [
        { num: 847,  label: 'Days consistent' },
        { num: 38,   label: 'Python projects' },
        { num: 12,   label: 'Tools in production' },
      ],
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in Touch',
      card: {
        label: 'file-organizer.py',
        status: 'Script running',
        code: `# AutoOrg — Smart File Organizer
from pathlib import Path
from datetime import datetime
import shutil, json

CONFIG = json.load(open("config.json"))

def organize(source: Path):
    for file in source.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            dest = Path(CONFIG.get(ext, "misc"))
            dest.mkdir(exist_ok=True)
            shutil.move(str(file), dest / file.name)
            print(f"  ↳ {file.name} → {dest}/")

organize(Path("~/Downloads").expanduser())
print("Done. Files organized cleanly.")`,
      },
    },
    about: {
      eyebrow: 'About Me',
      title: 'The developer behind the tools.',
      p1: 'I\'m <strong>Naga Veera Venkata Satya Narasimha Murthy</strong> — Nagu — a B.Tech student who builds Python software and automation tools, and applies an engineering mindset to every project.',
      p2: 'I don\'t copy tutorials. I identify real problems, understand the requirements fully, then build something <em>genuinely useful</em>. Every tool I ship has to earn its place on someone\'s system.',
      p3: 'I work mostly at night. Not for the aesthetic — because silence and focus compound. Most of my automation ideas come from the tenth time I do something manually and finally say "never again."',
    },
    projects: [
      {
        name: 'AutoOrg — File Organizer',
        type: 'Automation',
        status: 'active',
        desc: 'Intelligent file organizer that categorizes downloads, renames files by convention, and deduplicates. Configurable via JSON. Runs as a daemon or on-demand.',
        tags: ['Python', 'Pathlib', 'JSON', 'CLI'],
        link: '#',
      },
      {
        name: 'PyTask — Task Automation Suite',
        type: 'CLI Tool',
        status: 'active',
        desc: 'Extensible task runner for repetitive developer workflows. Define tasks in YAML, chain them, run them with one command. Eliminates bash script sprawl.',
        tags: ['Python', 'YAML', 'Subprocess', 'CLI'],
        link: '#',
      },
      {
        name: 'DataFlow REST API',
        type: 'Backend',
        status: 'active',
        desc: 'FastAPI-based REST service with SQLite persistence, JWT authentication, Pydantic validation, and auto-generated OpenAPI docs. Clean architecture pattern.',
        tags: ['FastAPI', 'SQLite', 'JWT', 'Pydantic'],
        link: '#',
      },
      {
        name: 'Scrapify — Web Scraper Framework',
        type: 'Dev Tool',
        status: 'complete',
        desc: 'Configurable scraping framework with retry logic, rate limiting, proxy rotation, and structured JSON output. Built for reliability, not quick hacks.',
        tags: ['Python', 'aiohttp', 'BeautifulSoup', 'Async'],
        link: '#',
      },
      {
        name: 'DevEnv Bootstrap',
        type: 'Automation',
        status: 'active',
        desc: 'One-shot Python + Bash script that provisions a complete, clean development environment from scratch on any Linux machine. Idempotent. Runs at 2 AM.',
        tags: ['Python', 'Bash', 'Ansible', 'Linux'],
        link: '#',
      },
      {
        name: 'AI Summarizer CLI',
        type: 'AI Utility',
        status: 'active',
        desc: 'Terminal tool that summarizes documents, code files, and web pages using LLM APIs. Accepts stdin, files, or URLs. Designed for developer workflow integration.',
        tags: ['Python', 'APIs', 'Click', 'Async'],
        link: '#',
      },
    ],
    skills: [
      {
        icon: '🐍', name: 'Core Python', cat: 'Primary Language',
        items: [
          { label: 'Python 3.x',             pct: 0.95 },
          { label: 'OOP & Design Patterns',  pct: 0.88 },
          { label: 'Async Programming',      pct: 0.82 },
          { label: 'Testing & pytest',       pct: 0.80 },
        ],
      },
      {
        icon: '⚡', name: 'Web & APIs', cat: 'Backend',
        items: [
          { label: 'FastAPI',                pct: 0.85 },
          { label: 'Flask',                  pct: 0.82 },
          { label: 'REST API Design',        pct: 0.88 },
          { label: 'Web Scraping',           pct: 0.85 },
        ],
      },
      {
        icon: '🗄️', name: 'Data & Storage', cat: 'Persistence',
        items: [
          { label: 'SQLite / PostgreSQL',    pct: 0.78 },
          { label: 'JSON / YAML',            pct: 0.92 },
          { label: 'Data Processing',        pct: 0.85 },
          { label: 'Pandas',                 pct: 0.72 },
        ],
      },
      {
        icon: '🔧', name: 'Dev Tooling', cat: 'Infrastructure',
        items: [
          { label: 'Git & Version Control',  pct: 0.90 },
          { label: 'Docker',                 pct: 0.75 },
          { label: 'Virtual Environments',   pct: 0.95 },
          { label: 'PyInstaller / Packaging', pct: 0.78 },
        ],
      },
      {
        icon: '⚙️', name: 'Automation', cat: 'Force Multiplier',
        items: [
          { label: 'Task Automation',        pct: 0.92 },
          { label: 'Bash + Python combo',    pct: 0.88 },
          { label: 'Scheduled Jobs / Cron',  pct: 0.85 },
          { label: 'File Processing',        pct: 0.90 },
        ],
      },
      {
        icon: '🖥️', name: 'CLI & Desktop', cat: 'User-Facing Tools',
        items: [
          { label: 'Click / Typer CLI',      pct: 0.85 },
          { label: 'Rich / Terminal UI',     pct: 0.78 },
          { label: 'Desktop Apps (Tkinter)', pct: 0.68 },
          { label: 'Cross-platform scripts', pct: 0.82 },
        ],
      },
    ],
    timeline: [
      { year: '2020', title: 'First Python script', body: 'Wrote a script to rename 200 files automatically. Immediately saw the leverage. Python became the default thinking tool.' },
      { year: '2021', title: 'Started B.Tech — Applied Python seriously', body: 'Built automation tools for academic work. Realised scripting was not the goal — software architecture was.' },
      { year: '2022', title: 'First REST API', body: 'Built a FastAPI service with auth, validation, and database. First time I thought in terms of systems, not scripts.' },
      { year: '2022', title: 'DevEnv Bootstrap v1', body: 'One-shot Linux dev environment script. The project that made me care about idempotency and reproducibility.' },
      { year: '2023', title: 'AutoOrg & PyTask', body: 'Released two automation tools that I actually use daily. First projects that solved my own real problems.' },
      { year: '2024', title: 'DataFlow API & Scrapify', body: 'More complex projects: async web scraping framework and a proper REST API with clean architecture. Quality bar raised.' },
      { year: '2025', title: 'AI Tooling & Developer Productivity', body: 'Integrating LLM APIs into developer workflows. Focus on tools that make developers faster without adding complexity.' },
    ],
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something\nactually useful.",
      intro: 'Open to open source collaborations, developer tooling projects, and conversations with people who care about building things properly.',
    },
    footer: { build: 'Built with Python philosophy. No frameworks.' },
  },
};

/* ══════════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════════ */
let currentMode = 'cyber';
let typewriterTimer = null;
let statsAnimated = { cyber: false, python: false };
let skillBarsAnimated = { cyber: false, python: false };

/* ══════════════════════════════════════════════════════════════
   MODULE: BACKGROUND CANVAS
══════════════════════════════════════════════════════════════ */
const BgCanvas = (() => {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], nodes = [], frameId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initCyber() {
    particles = [];
    nodes = [];
    // Create network nodes
    for (let i = 0; i < 28; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 1,
      });
    }
  }

  function initPython() {
    particles = [];
    nodes = [];
    // Floating subtle geometric shapes
    for (let i = 0; i < 18; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 30 + 10,
        opacity: Math.random() * 0.04 + 0.01,
        speed: Math.random() * 0.2 + 0.05,
        type: Math.random() > 0.5 ? 'circle' : 'rect',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.003,
      });
    }
  }

  function drawCyber() {
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(21,101,192,0.05)';
    ctx.lineWidth = 1;
    const gSize = 60;
    for (let x = 0; x < W; x += gSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // Connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.15;
          ctx.strokeStyle = `rgba(0,180,216,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Node dots
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,180,216,0.35)';
      ctx.fill();
    });
  }

  function drawPython() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.y -= p.speed;
      p.rotation += p.rotSpeed;
      if (p.y + p.size < 0) p.y = H + p.size;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      if (p.type === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.strokeStyle = '#3776AB';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.strokeStyle = '#FFD43B';
        ctx.lineWidth = 1;
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx.restore();
    });
    ctx.globalAlpha = 1;
  }

  function loop() {
    if (currentMode === 'cyber') drawCyber();
    else drawPython();
    frameId = requestAnimationFrame(loop);
  }

  return {
    init(mode) {
      resize();
      cancelAnimationFrame(frameId);
      if (mode === 'cyber') initCyber();
      else initPython();
      loop();
    },
    resize,
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: TYPEWRITER
══════════════════════════════════════════════════════════════ */
const Typewriter = (() => {
  const el = document.getElementById('hero-role-display');
  let roleIdx = 0, charIdx = 0, deleting = false, timer = null;

  function tick(roles) {
    const current = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        timer = setTimeout(() => tick(roles), 2200);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    const delay = deleting ? 45 : 80;
    timer = setTimeout(() => tick(roles), delay);
  }

  return {
    start(roles) {
      clearTimeout(timer);
      el.textContent = '';
      roleIdx = 0; charIdx = 0; deleting = false;
      timer = setTimeout(() => tick(roles), 400);
    },
    stop() { clearTimeout(timer); },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: HERO CARD CODE ANIMATION
══════════════════════════════════════════════════════════════ */
const HeroCard = (() => {
  const codeEl = document.getElementById('hcard-code');
  const labelEl = document.getElementById('hcard-label');
  const statusEl = document.getElementById('hcard-status');
  let timer = null, charIdx = 0;

  return {
    render(card) {
      clearInterval(timer);
      labelEl.textContent = card.label;
      statusEl.textContent = card.status;
      codeEl.textContent = '';
      const code = card.code;
      charIdx = 0;
      timer = setInterval(() => {
        charIdx += 3;
        codeEl.textContent = code.slice(0, charIdx);
        if (charIdx >= code.length) { codeEl.textContent = code; clearInterval(timer); }
      }, 18);
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: STATS COUNTER
══════════════════════════════════════════════════════════════ */
const StatsCounter = (() => {
  function countUp(el, target, duration = 1400) {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  return {
    animate() {
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        if (target) countUp(el, target);
      });
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: SKILL BARS
══════════════════════════════════════════════════════════════ */
const SkillBars = (() => {
  return {
    animate() {
      document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('animated'), i * 60);
      });
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: PROJECTS RENDERER
══════════════════════════════════════════════════════════════ */
const Projects = (() => {
  const grid = document.getElementById('projects-grid');

  return {
    render(list) {
      grid.innerHTML = list.map(p => `
        <article class="project-card reveal" role="listitem" tabindex="0" aria-label="${p.name}">
          <div class="project-card-header">
            <div class="project-meta">
              <span class="project-type-badge">${p.type}</span>
              <span class="project-status ${p.status === 'active' ? 'active' : ''}">${p.status === 'active' ? '● Active' : p.status === 'complete' ? '✓ Complete' : p.status}</span>
            </div>
            <h3 class="project-name">${p.name}</h3>
            <p class="project-desc">${p.desc}</p>
          </div>
          <div class="project-card-footer">
            <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            <a href="${p.link}" class="project-link" aria-label="View ${p.name} on GitHub">GitHub <span aria-hidden="true">→</span></a>
          </div>
        </article>
      `).join('');
      // Re-observe newly rendered cards
      document.querySelectorAll('.project-card.reveal').forEach(el => Reveal.observe(el));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: SKILLS RENDERER
══════════════════════════════════════════════════════════════ */
const Skills = (() => {
  const layout = document.getElementById('skills-layout');

  function levelLabel(pct) {
    if (pct >= 0.9) return 'Expert';
    if (pct >= 0.8) return 'Advanced';
    if (pct >= 0.7) return 'Proficient';
    return 'Learning';
  }

  return {
    render(groups) {
      layout.innerHTML = groups.map(g => `
        <div class="skill-group reveal" role="group" aria-label="${g.name}">
          <div class="skill-group-header">
            <div class="skill-group-icon" aria-hidden="true">${g.icon}</div>
            <div>
              <div class="skill-group-name">${g.name}</div>
              <div class="skill-group-cat">${g.cat}</div>
            </div>
          </div>
          <div class="skill-items">
            ${g.items.map(s => `
              <div class="skill-item">
                <div class="skill-item-label">
                  <span>${s.label}</span>
                  <span class="skill-level">${levelLabel(s.pct)}</span>
                </div>
                <div class="skill-bar-track" role="progressbar" aria-valuenow="${Math.round(s.pct * 100)}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.label}">
                  <div class="skill-bar-fill" style="transform: scaleX(${s.pct})"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
      document.querySelectorAll('.skill-group.reveal').forEach(el => Reveal.observe(el));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: TIMELINE RENDERER
══════════════════════════════════════════════════════════════ */
const Timeline = (() => {
  const list = document.getElementById('timeline-list');

  return {
    render(items) {
      list.innerHTML = items.map(item => `
        <div class="timeline-item" role="listitem">
          <div class="timeline-dot" aria-hidden="true"></div>
          <div class="timeline-year">${item.year}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-body">${item.body}</p>
        </div>
      `).join('');
      // Timeline items use their own observer
      document.querySelectorAll('.timeline-item').forEach((el, i) => {
        TimelineObserver.observe(el, i);
      });
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: REVEAL OBSERVER
══════════════════════════════════════════════════════════════ */
const Reveal = (() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const siblings = [...e.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(e.target);
        setTimeout(() => {
          e.target.classList.add('visible');
          // Animate skill bars when skills section comes in
          if (e.target.classList.contains('skill-group') && !skillBarsAnimated[currentMode]) {
            skillBarsAnimated[currentMode] = true;
            setTimeout(() => SkillBars.animate(), 200);
          }
        }, idx * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  return {
    observe(el) { io.observe(el); },
    observeAll() {
      document.querySelectorAll('.reveal:not(.project-card):not(.skill-group)').forEach(el => io.observe(el));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: TIMELINE OBSERVER
══════════════════════════════════════════════════════════════ */
const TimelineObserver = (() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  return {
    observe(el, delay = 0) {
      setTimeout(() => io.observe(el), delay * 80);
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: STATS OBSERVER (one-shot on hero)
══════════════════════════════════════════════════════════════ */
const StatsObserver = (() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !statsAnimated[currentMode]) {
        statsAnimated[currentMode] = true;
        StatsCounter.animate();
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  return {
    observe(el) { io.observe(el); },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: NAV
══════════════════════════════════════════════════════════════ */
const Nav = (() => {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link[data-section]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
      }
    });
  }, { threshold: 0.35 });

  return {
    init() {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });

      hamburger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });

      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });

      document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));
    },

    update(data) {
      document.getElementById('logo-mode').textContent = data.nav.logo;
      document.getElementById('resume-label').textContent = 'Resume';
      const btn = document.getElementById('nav-resume-btn');
      btn.onclick = () => {
        const a = document.createElement('a');
        a.href = data.nav.resumeFile;
        a.download = data.nav.resumeFile;
        a.click();
      };
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: PROGRESS BAR
══════════════════════════════════════════════════════════════ */
const ProgressBar = (() => {
  const bar = document.getElementById('progress-bar');
  return {
    init() {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
      }, { passive: true });
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: BACK TO TOP
══════════════════════════════════════════════════════════════ */
const BackToTop = (() => {
  const btn = document.getElementById('back-to-top');
  return {
    init() {
      window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: KEYBOARD SHORTCUTS
══════════════════════════════════════════════════════════════ */
const Keyboard = (() => ({
  init() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 't' || e.key === 'T') ModeToggle.toggle();
      if (e.key === 'ArrowUp' && (e.metaKey || e.ctrlKey)) window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
}))();

/* ══════════════════════════════════════════════════════════════
   MODULE: CONTENT UPDATER
   All text/content changes for a given mode go here
══════════════════════════════════════════════════════════════ */
const Content = (() => {
  function setText(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return {
    update(data) {
      const h = data.hero;

      // Hero
      setText('eyebrow-text', h.eyebrow);
      setText('hero-subtitle', h.subtitle.replace('\n', '<br/>'));
      setText('hero-cta-primary', h.ctaPrimary);
      setText('hero-cta-secondary', h.ctaSecondary);

      // Stats
      const statsEl = document.getElementById('hero-stats');
      if (statsEl) {
        statsEl.innerHTML = h.stats.map(s => `
          <div class="stat-item">
            <span class="stat-num" data-target="${s.num}">0</span>
            <span class="stat-label">${s.label}</span>
          </div>
        `).join('');
      }
      statsAnimated[data.mode] = false;
      setTimeout(() => StatsCounter.animate(), 100);

      // About
      setText('about-eyebrow', data.about.eyebrow);
      setText('about-title', data.about.title);
      setText('about-p1', data.about.p1);
      setText('about-p2', data.about.p2);
      setText('about-p3', data.about.p3);

      // Sections eyebrows
      const secEyebrows = {
        'projects-eyebrow': 'Projects',
        'skills-eyebrow':   'Capabilities',
        'timeline-eyebrow': 'Journey',
        'contact-eyebrow':  data.contact.eyebrow,
      };
      Object.entries(secEyebrows).forEach(([id, t]) => setText(id, t));

      setText('projects-title',  'Things I actually built.');
      setText('skills-title',    'What I actually know.');
      setText('timeline-title',  'Continuous improvement.');
      setText('contact-title',   data.contact.title.replace('\n', '<br/>'));
      setText('contact-intro',   data.contact.intro);
      setText('footer-build',    data.footer.build);

      // Dynamic sections
      Projects.render(data.projects);
      Skills.render(data.skills);
      Timeline.render(data.timeline);
      HeroCard.render(h.card);
      Typewriter.start(h.roles);
      Nav.update(data);

      // Reset skill bars for this mode
      skillBarsAnimated[data.mode] = false;

      // Re-run reveal for new elements
      setTimeout(() => Reveal.observeAll(), 50);
      StatsObserver.observe(document.getElementById('hero-stats'));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: MODE TOGGLE (the badge flip)
══════════════════════════════════════════════════════════════ */
const ModeToggle = (() => {
  const badgeInner = document.getElementById('badge-inner');
  const html = document.documentElement;
  let isAnimating = false;

  function ripple(color) {
    const el = document.createElement('div');
    el.className = 'mode-ripple';
    el.style.cssText = `
      width: 200vmax; height: 200vmax;
      background: ${color};
      position: fixed;
      right: 1.5rem; top: 50%;
      margin: -100vmax -100vmax 0 0;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }

  return {
    toggle() {
      if (isAnimating) return;
      isAnimating = true;

      const nextMode = currentMode === 'cyber' ? 'python' : 'cyber';
      const rippleColor = nextMode === 'python'
        ? 'rgba(55,118,171,0.06)'
        : 'rgba(0,180,216,0.06)';

      ripple(rippleColor);
      badgeInner.classList.toggle('flipped');

      setTimeout(() => {
        currentMode = nextMode;
        html.setAttribute('data-mode', currentMode);
        Content.update(DATA[currentMode]);
        BgCanvas.init(currentMode);
        isAnimating = false;
      }, 320);
    },

    init() {
      document.getElementById('mode-toggle').addEventListener('click', this.toggle.bind(this));
    },
  };
})();

/* ══════════════════════════════════════════════════════════════
   MODULE: MOUSE PARALLAX (hero glow)
══════════════════════════════════════════════════════════════ */
const Parallax = (() => ({
  init() {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;
    const hero = document.getElementById('hero');
    if (!hero) return;
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 25;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 15;
      hero.style.setProperty('--mx', `${x}px`);
      hero.style.setProperty('--my', `${y}px`);
    });
  },
}))();

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Initial content load
  Content.update(DATA.cyber);

  // Init modules
  Nav.init();
  ProgressBar.init();
  BackToTop.init();
  Keyboard.init();
  ModeToggle.init();
  Parallax.init();
  Reveal.observeAll();
  StatsObserver.observe(document.getElementById('hero-stats'));

  // Background canvas
  BgCanvas.init('cyber');
  window.addEventListener('resize', () => {
    BgCanvas.resize();
  }, { passive: true });

  // Initial stat count on first load
  setTimeout(() => StatsCounter.animate(), 600);

  // Keyboard hint in footer
  if ('ontouchstart' in window) {
    const hint = document.querySelector('.footer-keyboard');
    if (hint) hint.style.display = 'none';
  }
});