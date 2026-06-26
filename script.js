// ── PARTICLES ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); init(); });

function rand(a, b) { return Math.random() * (b - a) + a; }

function init() {
  particles = [];
  const n = Math.floor(W / 12);
  for (let i = 0; i < n; i++) {
    particles.push({
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.2, 0.2), vy: rand(-0.2, 0.2),
      r: rand(1, 2.5),
      alpha: rand(0.2, 0.7)
    });
  }
}
init();

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let p of particles) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
    ctx.fill();
  }
  // draw lines between close particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();

// ── SCROLL FADE IN ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.tl-card, .project-card, .skill-category, .cert-card, .research-card, .about-grid, .contact-link').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(8,11,16,0.98)'
    : 'rgba(8,11,16,0.85)';
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#e2e8f0' : '';
  });
});

// ── CONTACT FORM ──
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('sendBtn');
  btn.textContent = '✅ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  setTimeout(() => {
    btn.textContent = 'Send Message ✉️';
    btn.style.background = '';
    document.getElementById('contactForm').reset();
  }, 3000);
});

// ── HAMBURGER MENU ──
const ham = document.getElementById('ham');
const navLinksContainer = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
  });
});

// ── TYPED EFFECT on hero ──
const roles = ['Software Development Engineer', 'Backend Developer', 'Gen AI Engineer', 'Open Source Contributor'];
let roleIdx = 0, charIdx = 0, deleting = false;
const heroSub = document.querySelector('.hero-sub');

function typeRole() {
  const role = roles[roleIdx];
  if (!deleting) {
    heroSub.textContent = role.slice(0, ++charIdx);
    if (charIdx === role.length) { deleting = true; setTimeout(typeRole, 1800); return; }
  } else {
    heroSub.textContent = role.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  }
  setTimeout(typeRole, deleting ? 45 : 80);
}
typeRole();

// ── PROJECT DETAILS MODAL & SANDBOXES ──
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

const projectDetails = {
  rag: {
    title: "ContextFlow RAG Engine | Adaptive RAG Platform",
    sub: "Self-Correcting Retrieval-Augmented Generation Simulator",
    bullets: [
      "Built a production-grade adaptive Retrieval-Augmented Generation (RAG) engine using FastAPI, LangGraph, and Qdrant for context-aware and grounded response generation.",
      "Designed agentic RAG workflows with query routing, retrieval validation, query rewriting, and iterative context refinement to improve retrieval quality and answer relevance.",
      "Implemented hybrid retrieval pipelines using BM25, vector search (Qdrant/FAISS), and Flashrank reranking to increase contextual accuracy and reduce noisy retrieval.",
      "Developed automated response evaluation using an LLM-as-a-Judge framework for hallucination detection, source grounding, and response verification.",
      "Built document ingestion, embedding generation, indexing, and conversational memory pipelines enabling scalable knowledge retrieval and context persistence."
    ],
    sandboxHtml: `
      <div class="sandbox-sec">
        <div class="sandbox-title">🧠 ContextFlow Agentic Console</div>
        <p class="sandbox-desc">Enter a search query to test the agentic self-correcting RAG loop (e.g. try asking: "What is the OCR processing speed?").</p>
        <div class="sandbox-input-row">
          <input type="text" id="ragInput" class="sandbox-input" placeholder="Type query here..." value="What is the OCR processing speed?" />
          <button class="sandbox-btn" id="ragRunBtn">Run RAG Loop</button>
        </div>
        <div class="sandbox-console" id="ragConsole">
          <div class="console-line console-system">[System] Engine idle. Waiting for user query...</div>
        </div>
      </div>
    `,
    initSandbox: () => {
      document.getElementById('ragRunBtn').addEventListener('click', () => {
        const consoleEl = document.getElementById('ragConsole');
        const inputVal = document.getElementById('ragInput').value.trim();
        if (!inputVal) return;
        
        consoleEl.innerHTML = '';
        const log = (text, type = '') => {
          const div = document.createElement('div');
          div.className = `console-line ${type ? 'console-' + type : ''}`;
          div.innerHTML = text;
          consoleEl.appendChild(div);
          consoleEl.scrollTop = consoleEl.scrollHeight;
        };

        log(`[System] Initializing RAG query state for: "${inputVal}"`);
        
        setTimeout(() => {
          log(`🔍 State 1: Querying vector store (Qdrant)...`);
          setTimeout(() => {
            log(`📊 State 2: Evaluating context chunk scores...`);
            setTimeout(() => {
              // Simulate self-correcting rewrite
              const isSpecific = inputVal.toLowerCase().includes('ocr') || inputVal.toLowerCase().includes('latency') || inputVal.toLowerCase().includes('kornia');
              if (!isSpecific) {
                log(`⚠️ Context relevance score low (0.38 < threshold 0.70)`, 'warn');
                setTimeout(() => {
                  log(`🔄 State 3: Self-Correction: Rewriting query to expand semantic scope...`);
                  setTimeout(() => {
                    log(`🔍 Re-querying Qdrant index with expanded query...`);
                    setTimeout(() => {
                      log(`✅ Success: Context relevance score improved to 0.89 (Passed)`);
                      runHallucinationCheck(true);
                    }, 800);
                  }, 800);
                }, 800);
              } else {
                log(`✅ Success: Direct context hit found (Score: 0.94)`);
                runHallucinationCheck(false);
              }
            }, 800);
          }, 800);
        }, 500);

        function runHallucinationCheck(rewrote) {
          setTimeout(() => {
            log(`🧠 State 4: Initiating LLM-as-Judge hallucination metrics...`);
            setTimeout(() => {
              log(`✅ Grounding assessment: 100% factual mapping (Passed)`, 'success');
              setTimeout(() => {
                const answer = rewrote 
                  ? "Based on self-corrected search: Rahul Bamaniya's production OCR pipeline was migrated to GPU-accelerated Kornia architectures, reducing document pre-processing speed from 3 seconds to just 140 milliseconds (98% reduction)."
                  : "Based on direct search: The GPU-accelerated document pre-processing pipeline achieves a 140ms latency compared to the legacy 3-second CPU bottleneck.";
                log(`✨ Final Answer:<br/><span style="color:#fff">${answer}</span>`, 'success');
              }, 800);
            }, 800);
          }, 800);
        }
      });
    }
  },
  route: {
    title: "RouteOptimizer — Last-Mile Logistics Platform",
    sub: "CVRPTW Savings Optimization Sandbox",
    bullets: [
      "Led end-to-end architecture, planning, and execution of a full-stack logistics optimization platform; managed sprint planning, task ownership, technical decisions, code reviews, and cross-module integration in an Agile/Scrum environment.",
      "Designed and developed a multi-service architecture with an independent Python optimization engine and Node.js/Express backend, enabling scalable routing computation and service decoupling through REST-based communication and Dockerized deployment.",
      "Built a custom route optimization pipeline for CVRPTW incorporating vehicle capacity, delivery time windows, road restrictions, and multi-trip scheduling to improve fleet utilization and operational efficiency.",
      "Integrated OpenStreetMap and OSRM for real road-network routing, implemented QR-based driver workflows and route visualization, achieving 20–30% route distance reduction and 97.1% delivery fulfillment."
    ],
    sandboxHtml: `
      <div class="sandbox-sec">
        <div class="sandbox-title">🚚 Dispatch Control Panel</div>
        <p class="sandbox-desc">Configure simulation nodes to calculate optimal routes. Click optimize to solve vehicle sweeps.</p>
        <div class="sandbox-input-row">
          <label style="font-size:0.8rem; display:flex; align-items:center; gap:0.5rem; color:#94a3b8;">
            Stops: 
            <select id="routeStops" class="sandbox-input" style="padding: 0.4rem 0.6rem; min-width:80px;">
              <option value="5">5 Locations</option>
              <option value="10">10 Locations</option>
            </select>
          </label>
          <label style="font-size:0.8rem; display:flex; align-items:center; gap:0.5rem; color:#94a3b8;">
            Fleet: 
            <select id="routeFleet" class="sandbox-input" style="padding: 0.4rem 0.6rem; min-width:80px;">
              <option value="2">2 Vehicles</option>
              <option value="3">3 Vehicles</option>
            </select>
          </label>
          <button class="sandbox-btn" id="routeRunBtn">Optimize Routes</button>
        </div>
        <div class="sandbox-map-wrap" id="routeMap">
          <svg class="sandbox-map-svg" viewBox="0 0 400 180" id="routeSvg">
            <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
            <line x1="200" y1="0" x2="200" y2="180" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
            <circle cx="200" cy="90" r="6" fill="#6366f1" />
            <text x="210" y="94" fill="#6366f1" font-size="9" font-family="monospace">DEPOT</text>
            <circle cx="80" cy="50" r="4" fill="#94a3b8" class="stop-node" />
            <circle cx="120" cy="140" r="4" fill="#94a3b8" class="stop-node" />
            <circle cx="320" cy="60" r="4" fill="#94a3b8" class="stop-node" />
            <circle cx="280" cy="130" r="4" fill="#94a3b8" class="stop-node" />
            <circle cx="150" cy="40" r="4" fill="#94a3b8" class="stop-node" />
          </svg>
        </div>
        <div class="sandbox-console" id="routeConsole">
          <div class="console-line console-system">[System] Dispatcher offline. Configure fleet and click Optimize.</div>
        </div>
      </div>
    `,
    initSandbox: () => {
      document.getElementById('routeRunBtn').addEventListener('click', () => {
        const consoleEl = document.getElementById('routeConsole');
        const svgEl = document.getElementById('routeSvg');
        const count = document.getElementById('routeStops').value;
        const fleet = document.getElementById('routeFleet').value;

        consoleEl.innerHTML = '';
        const paths = svgEl.querySelectorAll('path');
        paths.forEach(p => p.remove());

        const log = (text, type = '') => {
          const div = document.createElement('div');
          div.className = `console-line ${type ? 'console-' + type : ''}`;
          div.innerHTML = text;
          consoleEl.appendChild(div);
          consoleEl.scrollTop = consoleEl.scrollHeight;
        };

        log(`[System] Initializing Clarke-Wright solver for ${count} stops, Fleet capacity: ${fleet * 50} units...`);
        
        setTimeout(() => {
          log(`🛰️ Fetching OSRM road distance matrices...`);
          setTimeout(() => {
            log(`⚡ Calculating saving matrices between nodes...`);
            setTimeout(() => {
              log(`🔄 Clustering coordinates and assigning constraint blocks...`);
              setTimeout(() => {
                log(`✅ Optimization complete. Latency reduced by 40% (Solved in 32ms)`, 'success');
                
                const p1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                p1.setAttribute('d', 'M 200 90 L 80 50 L 150 40 L 200 90 Z');
                p1.setAttribute('stroke', '#06b6d4');
                p1.setAttribute('stroke-width', '2');
                p1.setAttribute('fill', 'none');
                p1.setAttribute('stroke-dasharray', '500');
                p1.setAttribute('stroke-dashoffset', '500');
                p1.style.animation = 'drawRoute 1.5s forwards';
                svgEl.appendChild(p1);

                const p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                p2.setAttribute('d', 'M 200 90 L 320 60 L 280 130 L 120 140 Z');
                p2.setAttribute('stroke', '#8b5cf6');
                p2.setAttribute('stroke-width', '2');
                p2.setAttribute('fill', 'none');
                p2.setAttribute('stroke-dasharray', '600');
                p2.setAttribute('stroke-dashoffset', '600');
                p2.style.animation = 'drawRoute 1.5s forwards 0.3s';
                svgEl.appendChild(p2);

                log(`🟢 Vehicle 1 Route: Depot ➜ Node 1 ➜ Node 2 ➜ Depot (Cap: 45/100)`, 'success');
                log(`🟣 Vehicle 2 Route: Depot ➜ Node 3 ➜ Node 4 ➜ Node 5 ➜ Depot (Cap: 80/100)`, 'success');
              }, 600);
            }, 600);
          }, 600);
        }, 400);
      });

      if (!document.getElementById('svgKeyframes')) {
        const style = document.createElement('style');
        style.id = 'svgKeyframes';
        style.innerHTML = `
          @keyframes drawRoute {
            to { stroke-dashoffset: 0; }
          }
          .stop-node { animation: nodePulse 2s infinite alternate; }
          @keyframes nodePulse { from{r:4;opacity:0.6} to{r:6;opacity:1} }
        `;
        document.head.appendChild(style);
      }
    }
  },
  booking: {
    title: "DreamNest | Full-Stack Hotel Booking Platform",
    sub: "Secure Transaction & Booking Simulator",
    bullets: [
      "Built a full-stack MERN hotel booking platform enabling hotel discovery, room availability management, and end-to-end reservation workflows.",
      "Developed scalable REST APIs using Node.js and Express.js for authentication, hotel management, room allocation, and booking operations.",
      "Implemented secure access control with JWT authentication, password hashing, role-based authorization, and protected user/admin workflows.",
      "Designed MongoDB data models and booking validation logic to manage hotels, rooms, and reservations while preventing inconsistent booking states.",
      "Integrated Cloudinary for media management and Twilio for real-time booking notifications, improving platform usability and booking experience.",
      "Developed a responsive React frontend with admin dashboards, search and filtering, and booking management capabilities."
    ],
    sandboxHtml: `
      <div class="sandbox-sec">
        <div class="sandbox-title">🏨 DreamNest Booking Wizard</div>
        <p class="sandbox-desc">Interact with the core transaction workflow. Complete all three steps below.</p>
        
        <div id="bookingSteps" style="display:flex; justify-content:space-between; margin-bottom:1.5rem; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:1rem; gap: 0.5rem;">
          <button class="sandbox-btn" id="stepAuthBtn" style="flex:1;">1. Authenticate (JWT)</button>
          <button class="sandbox-btn" id="stepLockBtn" style="opacity:0.5; flex:1;" disabled>2. Lock Room</button>
          <button class="sandbox-btn" id="stepPayBtn" style="opacity:0.5; flex:1;" disabled>3. Stripe Payment</button>
        </div>

        <div class="sandbox-console" id="bookingConsole">
          <div class="console-line console-system">[System] Booking system ready. Step 1 required: Authenticate user.</div>
        </div>
      </div>
    `,
    initSandbox: () => {
      let hasToken = false;
      let hasLock = false;

      const authBtn = document.getElementById('stepAuthBtn');
      const lockBtn = document.getElementById('stepLockBtn');
      const payBtn = document.getElementById('stepPayBtn');
      const consoleEl = document.getElementById('bookingConsole');

      const log = (text, type = '') => {
        const div = document.createElement('div');
        div.className = `console-line ${type ? 'console-' + type : ''}`;
        div.innerHTML = text;
        consoleEl.appendChild(div);
        consoleEl.scrollTop = consoleEl.scrollHeight;
      };

      authBtn.addEventListener('click', () => {
        consoleEl.innerHTML = '';
        log(`🔐 POST /api/auth/login - payload: { email: "guest@example.com" }`);
        setTimeout(() => {
          log(`🔑 Generating JWT Token utilizing HS256 algorithm...`);
          setTimeout(() => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3Vlc3QiLCJyb2xlIjoiY3VzdG9tZXIifQ...";
            log(`✅ Token Generated: <span style="font-size:7px; color:#94a3b8">${token}</span>`, 'success');
            log(`[System] Authentication successful. Token stored in session. Proceed to Step 2.`);
            
            hasToken = true;
            authBtn.style.opacity = '0.5';
            authBtn.disabled = true;
            lockBtn.style.opacity = '1';
            lockBtn.disabled = false;
          }, 800);
        }, 500);
      });

      lockBtn.addEventListener('click', () => {
        if (!hasToken) return;
        log(`📂 POST /api/bookings/lock - Header: { Authorization: "Bearer eyJhbG..." }`);
        setTimeout(() => {
          log(`🔍 Running database transaction to evaluate room availability...`);
          setTimeout(() => {
            log(`🔒 Room ID 104 locked for 10 minutes. Session record created.`, 'success');
            log(`[System] Room locked. Proceed to payment verification (Step 3).`);
            
            hasLock = true;
            lockBtn.style.opacity = '0.5';
            lockBtn.disabled = true;
            payBtn.style.opacity = '1';
            payBtn.disabled = false;
          }, 800);
        }, 500);
      });

      payBtn.addEventListener('click', () => {
        if (!hasLock) return;
        log(`💳 Triggering Stripe payment webhook - Amount: $150.00`);
        setTimeout(() => {
          log(`⏳ Processing transaction with Stripe token validation...`);
          setTimeout(() => {
            log(`✅ PaymentIntent succeeded: pi_3M7490AFL13`, 'success');
            log(`💾 Updating database record: Booking status updated to CONFIRMED.`, 'success');
            log(`🎉 SUCCESS! Booking completed for Deluxe Suite (Room 104). Check-in date initialized.`, 'success');
            
            payBtn.style.opacity = '0.5';
            payBtn.disabled = true;
          }, 1000);
        }, 500);
      });
    }
  }
};

// Open Modal
function openProject(type) {
  const data = projectDetails[type];
  if (!data) return;

  const bulletsHtml = data.bullets.map(b => `<li>${b}</li>`).join('');
  
  modalBody.innerHTML = `
    <div class="modal-header">
      <h3>${data.title}</h3>
      <p>${data.sub}</p>
    </div>
    <div class="modal-details">
      <h4>Key Project Features</h4>
      <ul>${bulletsHtml}</ul>
    </div>
    ${data.sandboxHtml}
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Initialize sandbox interactive script
  if (data.initSandbox) {
    data.initSandbox();
  }
}

// Close Modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ── COLLAPSIBLE BULLETS INTERACTION ──
function toggleBullets(btn) {
  const panel = btn.previousElementSibling;
  panel.classList.toggle('active');
  const isExpanded = panel.classList.contains('active');
  if (isExpanded) {
    panel.style.maxHeight = panel.scrollHeight + "px";
    btn.innerHTML = 'Show Less ▴';
  } else {
    panel.style.maxHeight = null;
    btn.innerHTML = 'Show More Details ▾';
  }
}

