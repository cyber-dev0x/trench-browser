// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════
const SIGNALS = {
  "ai startup": [
    { title:"AI agents for niche SaaS emerging as a dominant product pattern", confidence:82, trend:"↑", cat:"emerging", sources:["Twitter","HN","Reddit"], cnt:147 },
    { title:"Vertical AI attracting seed rounds 3× faster than horizontal plays", confidence:76, trend:"↑", cat:"market",   sources:["LinkedIn","Crunchbase"], cnt:89 },
    { title:"Foundation model commoditization accelerating product differentiation race", confidence:71, trend:"→", cat:"tech",     sources:["Medium","Substack","HN"], cnt:203 },
    { title:"Developer-led AI adoption outpacing top-down enterprise buying 4:1", confidence:68, trend:"↑", cat:"market",   sources:["Slack","Discord","Twitter"], cnt:312 },
    { title:"Inference cost optimization becoming primary competitive moat this cycle", confidence:65, trend:"↑", cat:"alpha",   sources:["GitHub","HN"], cnt:67 },
  ],
  "crypto": [
    { title:"DePIN narrative gaining traction in non-crypto developer communities", confidence:79, trend:"↑", cat:"emerging", sources:["Twitter","Reddit","Discord"], cnt:234 },
    { title:"Institutional ETF flows creating unusual floor pressure across majors", confidence:74, trend:"→", cat:"market",   sources:["Bloomberg","CoinDesk"], cnt:156 },
    { title:"L2 fee compression triggering migration wave from L1 communities", confidence:69, trend:"↑", cat:"tech",     sources:["GitHub","Discord"], cnt:89 },
    { title:"Stablecoin yield products re-emerging with reframed regulatory positioning", confidence:63, trend:"↑", cat:"alpha",   sources:["Twitter","Substack"], cnt:45 },
  ],
  "developer tooling": [
    { title:"AI-native IDEs cannibalizing the traditional editor plugin market", confidence:88, trend:"↑", cat:"tech",     sources:["Twitter","HN","GitHub"], cnt:421 },
    { title:"Cursor, Windsurf, Zed creating a new premium developer tools tier", confidence:81, trend:"↑", cat:"market",   sources:["Twitter","Reddit"], cnt:287 },
    { title:"MCP protocol adoption faster than any developer standard in 5 years", confidence:75, trend:"↑", cat:"emerging", sources:["GitHub","HN","Discord"], cnt:193 },
    { title:"CLI-first renaissance: AI makes TUI viable for non-technical users", confidence:67, trend:"→", cat:"alpha",   sources:["HN","GitHub"], cnt:78 },
  ],
  "saas": [
    { title:"Vertical SaaS bundling AI now table stakes for new entrants", confidence:84, trend:"↑", cat:"market",   sources:["Twitter","Substack"], cnt:267 },
    { title:"Usage-based pricing growing 2× faster than seat-based in SMB", confidence:77, trend:"↑", cat:"emerging", sources:["LinkedIn","HN"], cnt:134 },
    { title:"Product-led growth declining as PLG + AI outperforms pure PLG", confidence:71, trend:"→", cat:"alpha",   sources:["Substack","Medium"], cnt:89 },
  ],
};
const DEFAULT_SIGNALS = [
  { title:"Unusual signal concentration detected in target topic space", confidence:77, trend:"↑", cat:"emerging", sources:["Social","Forums","Articles"], cnt:186 },
  { title:"Early narrative formation matches 3 prior high-signal events", confidence:71, trend:"↑", cat:"alpha",   sources:["Twitter","Reddit"], cnt:134 },
  { title:"Cross-platform mention velocity +240% in last 72 hours", confidence:68, trend:"↑", cat:"market",   sources:["Twitter","LinkedIn","HN"], cnt:302 },
  { title:"Community sentiment shift — consensus forming around new framing", confidence:62, trend:"→", cat:"social",  sources:["Discord","Reddit","Slack"], cnt:89 },
  { title:"Institutional interest signals emerging from peripheral data sources", confidence:58, trend:"↑", cat:"market",  sources:["LinkedIn","News"], cnt:47 },
];
const MORPH = [
  "trend detected",
  "early signal detected",
  "high-potential narrative emerging",
  "cross-source validation active",
  "signal confidence increasing",
  "pattern match: 3 prior events",
  "alpha window: 12–48 hours",
  "signal locked. processing.",
];
const SOURCES = [
  { name:"Twitter / X",      icon:"𝕏",  cnt:847, pct:85, col:"#e5253a" },
  { name:"Hacker News",      icon:"▲",  cnt:312, pct:62, col:"#ff6520" },
  { name:"Reddit",           icon:"⊕",  cnt:523, pct:74, col:"#d42015" },
  { name:"LinkedIn",         icon:"in", cnt:189, pct:42, col:"#c0267a" },
  { name:"Substack / Blogs", icon:"◉",  cnt:134, pct:35, col:"#ff1a3c" },
];
const LIVE_SIGNALS = [
  {cat:"emerging",body:"Open-source AI agent frameworks seeing 400% star growth",conf:81,vel:"+34%",ago:"2m"},
  {cat:"alpha",   body:"Unusual VC scout activity around robotics simulation tools",conf:78,vel:"+220%",ago:"4m"},
  {cat:"market",  body:"Enterprise AI spend exceeding cloud budgets for first time",conf:74,vel:"+18%",ago:"7m"},
  {cat:"tech",    body:"New benchmarks invalidating previous LLM capability claims",conf:71,vel:"+55%",ago:"9m"},
  {cat:"social",  body:"Founder communities shifting from Twitter to Discord for signal",conf:67,vel:"+41%",ago:"12m"},
  {cat:"emerging",body:"No-code AI builders targeting SMBs gaining serious traction",conf:84,vel:"+110%",ago:"15m"},
  {cat:"alpha",   body:"Proprietary data moat narrative accelerating in AI discourse",conf:76,vel:"+88%",ago:"18m"},
  {cat:"market",  body:"AI copilot tools entering horizontal markets beyond coding",conf:73,vel:"+29%",ago:"22m"},
  {cat:"tech",    body:"Multimodal model costs dropping faster than transformer costs did",conf:69,vel:"+67%",ago:"26m"},
  {cat:"social",  body:"Indie hackers increasingly shipping AI-first products solo",conf:65,vel:"+38%",ago:"31m"},
  {cat:"emerging",body:"Synthetic data generation becoming viable enterprise workflow",conf:79,vel:"+92%",ago:"35m"},
  {cat:"alpha",   body:"Vertical-specific foundation models outperforming general LLMs",conf:82,vel:"+145%",ago:"38m"},
  {cat:"market",  body:"Infrastructure layer competition intensifying below application tier",conf:70,vel:"+22%",ago:"42m"},
  {cat:"tech",    body:"New RAG architectures significantly reducing hallucination rates",conf:77,vel:"+63%",ago:"47m"},
  {cat:"social",  body:"Technical founders over-indexing on model choice vs distribution",conf:63,vel:"+19%",ago:"52m"},
];
const ALPHA_CARDS = [
  { level:"critical", title:"AI agent orchestration layer — first-mover window is open now", conf:88, window:85, windowLabel:"Closing in ~18h" },
  { level:"critical", title:"Robotics simulation startups massively underpriced vs trajectory", conf:83, window:72, windowLabel:"Closing in ~2 days" },
  { level:"high",     title:"No-code AI tools for SMB accounting — zero strong incumbent", conf:79, window:60, windowLabel:"Closing in ~5 days" },
  { level:"high",     title:"MCP server ecosystem — infrastructure play emerging fast", conf:76, window:55, windowLabel:"Closing in ~6 days" },
  { level:"medium",   title:"Synthetic data generation for regulated industries (finance, health)", conf:71, window:40, windowLabel:"~2 week window" },
  { level:"medium",   title:"Voice AI B2B tools — still pre-mainstream in most verticals", conf:68, window:38, windowLabel:"~2 week window" },
  { level:"watch",    title:"Autonomous coding agents replacing junior dev roles narrative", conf:62, window:20, windowLabel:"Slow burn" },
  { level:"watch",    title:"AI-native browser market — new entrants gaining traction", conf:59, window:18, windowLabel:"Slow burn" },
];
const CLOSING = [
  { title:"AI agent frameworks — open-source momentum peaking", urgency:"48h", conf:88 },
  { title:"Robotic simulation tooling — before Series A wave hits", urgency:"72h", conf:83 },
  { title:"MCP ecosystem tooling — before commoditization", urgency:"5d", conf:76 },
];
const PANEL_DATA = {
  history: {
    title: "⊙ Recent",
    items: [
      {label:"AI startup trends",        sub:"12 signals · 2 min ago",  action:"search", q:"AI startup trends"},
      {label:"developer tooling",        sub:"8 signals · 18 min ago",  action:"search", q:"developer tooling"},
      {label:"crypto narrative shifts",  sub:"11 signals · 1h ago",     action:"search", q:"crypto narrative shifts"},
      {label:"early SaaS signals",       sub:"6 signals · 3h ago",      action:"search", q:"early SaaS signals"},
    ]
  },
  bookmarks: {
    title: "☆ Bookmarks",
    items: [
      {label:"AI agents for niche SaaS",  sub:"Confidence 82% · Saved",  action:"bookmark", conf:82, cat:"emerging", sources:["Twitter","HN","Reddit"], cnt:147},
      {label:"MCP protocol adoption",     sub:"Confidence 75% · Saved",  action:"bookmark", conf:75, cat:"tech",     sources:["GitHub","HN","Discord"], cnt:193},
      {label:"Foundation model moat",     sub:"Confidence 71% · Saved",  action:"bookmark", conf:71, cat:"market",   sources:["Medium","Substack"], cnt:203},
    ]
  },
  ai: {
    title: "✦ AI Tools",
    items: [
      {label:"Signal Summarizer",   sub:"Compress feed into key insights", action:"tool", icon:"◎"},
      {label:"Trend Forecaster",    sub:"Project signal trajectory",        action:"tool", icon:"↗"},
      {label:"Source Validator",    sub:"Cross-check against 47 sources",  action:"tool", icon:"⊛"},
      {label:"Alpha Scorer",        sub:"Rate opportunity windows",         action:"tool", icon:"⚡"},
    ]
  },
  map: {
    title: "◈ Signal Map",
    items: [
      {label:"AI / Tech cluster",           sub:"847 active nodes",  action:"cluster", count:847,  color:"var(--red)"},
      {label:"Market / Finance cluster",    sub:"312 active nodes",  action:"cluster", count:312,  color:"var(--amber)"},
      {label:"Social / Community cluster",  sub:"523 active nodes",  action:"cluster", count:523,  color:"#e879f9"},
      {label:"Emerging narrative cluster",  sub:"189 active nodes",  action:"cluster", count:189,  color:"var(--rose)"},
    ]
  },
  settings: {
    title: "⊞ Settings",
    items: [
      {label:"Sources",              sub:"47 active · Manage",          action:"settings", setting:"sources"},
      {label:"Confidence threshold", sub:"Currently: 60%",              action:"settings", setting:"confidence"},
      {label:"Signal refresh rate",  sub:"Every 2 minutes",             action:"settings", setting:"refresh"},
      {label:"Notification alerts",  sub:"Critical alpha only",         action:"settings", setting:"alerts"},
    ]
  },
};

// ════════════════════════════════════════
// STATE
// ════════════════════════════════════════
let morphTimer = null, morphIdx = 0, ticker = 0, sfeedInterval = null;
let activeSbPanel = null;

// ════════════════════════════════════════
// REFS
// ════════════════════════════════════════
const heroView    = document.getElementById("heroView");
const resultsView = document.getElementById("resultsView");
const loadingView = document.getElementById("loadingView");
const heroSearch  = document.getElementById("heroSearch");
const heroGo      = document.getElementById("heroGo");
const addrText    = document.getElementById("addrText");
const qDisplay    = document.getElementById("qDisplay");
const feedCnt     = document.getElementById("feedCnt");
const sigCards    = document.getElementById("sigCards");
const alphaArea   = document.getElementById("alphaArea");
const srcArea     = document.getElementById("srcArea");
const intelArea   = document.getElementById("intelArea");
const morphTxt    = document.getElementById("morphTxt");
const loadTxt     = document.getElementById("loadTxt");
const loadSub     = document.getElementById("loadSub");
const sbQuery     = document.getElementById("sbQuery");
const sbCount     = document.getElementById("sbCount");
const sfeedList   = document.getElementById("sfeedList");
const alphaGrid   = document.getElementById("alphaGrid");
const closingWindows = document.getElementById("closingWindows");
const sbPanel     = document.getElementById("sbPanel");
const sbPanelTitle= document.getElementById("sbPanelTitle");
const sbPanelContent=document.getElementById("sbPanelContent");

// ════════════════════════════════════════
// TABS
// ════════════════════════════════════════
const tabBar = document.querySelector(".tabbar");
const tabAddBtn = document.querySelector(".tab-add");

// Built-in pages
const BUILTIN_PAGES = { explore: "trench://explore", signal: "trench://signal-feed", alpha: "trench://alpha" };

// Dynamic tab counter for "new" tabs
let newTabCounter = 0;

function bindTab(tab) {
  tab.addEventListener("click", e => {
    if (e.target.closest(".tab-x")) return;
    rippleEffect(tab, e);
    switchTab(tab.dataset.tab);
  });
  const x = tab.querySelector(".tab-x");
  if (x) x.addEventListener("click", e => {
    e.stopPropagation();
    rippleEffect(tab, e);
    closeTab(tab);
  });
}

// Bind existing tabs
document.querySelectorAll(".tab[data-tab]").forEach(bindTab);

// + New Tab
tabAddBtn.addEventListener("click", e => {
  rippleEffect(tabAddBtn, e);
  newTabCounter++;
  const id = "new-" + newTabCounter;
  const label = "New Tab";

  // Create tab element
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.dataset.tab = id;
  tab.innerHTML = `
    <div class="tab-fav" style="background:var(--text-muted);border-radius:4px;opacity:.5"></div>
    ${label}
    <div class="tab-x">×</div>`;
  tabBar.insertBefore(tab, tabAddBtn);

  // Create page element
  const page = document.createElement("div");
  page.className = "page";
  page.id = "page-" + id;
  page.innerHTML = `
    <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted)">New Tab</div>
      <div style="font-size:38px;font-weight:900;letter-spacing:-1px;background:linear-gradient(135deg,var(--red),var(--rose));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Trench</div>
      <div style="font-size:13px;color:var(--text-dim);max-width:320px;text-align:center;line-height:1.6">Type a query in the Explore tab or pick a signal below to start hunting.</div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <div class="hint" onclick="switchTab('explore')">→ Explore</div>
        <div class="hint" onclick="switchTab('signal')">→ Signal Feed</div>
        <div class="hint" onclick="switchTab('alpha')">→ Alpha</div>
      </div>
    </div>`;
  document.getElementById("mainContent").appendChild(page);

  bindTab(tab);
  switchTab(id);
});

function closeTab(tab) {
  const id = tab.dataset.tab;
  const isActive = tab.classList.contains("active");

  // Animate out
  tab.style.transition = "opacity .2s, transform .2s, max-width .25s, padding .25s";
  tab.style.opacity = "0";
  tab.style.transform = "translateY(-4px) scale(.9)";
  tab.style.maxWidth = "0";
  tab.style.padding = "0";
  tab.style.overflow = "hidden";

  setTimeout(() => {
    // Remove DOM
    tab.remove();
    const page = document.getElementById("page-" + id);
    if (page) page.remove();

    // If we closed the active tab, switch to the last remaining tab
    if (isActive) {
      const remaining = document.querySelectorAll(".tab[data-tab]");
      if (remaining.length > 0) {
        switchTab(remaining[remaining.length - 1].dataset.tab);
      }
    }
  }, 250);
}

function switchTab(id) {
  document.querySelectorAll(".tab[data-tab]").forEach(t => t.classList.remove("active"));
  const activeTab = document.querySelector(`.tab[data-tab="${id}"]`);
  if (activeTab) activeTab.classList.add("active");
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const page = document.getElementById("page-" + id);
  if (page) page.classList.add("active");
  const url = BUILTIN_PAGES[id] || `trench://tab/${id}`;
  addrText.textContent = url;
  sbQuery.textContent  = url;
  if (id === "signal") initSignalFeed();
  if (id === "alpha")  initAlphaPage();
}

// ════════════════════════════════════════
// SIDEBAR
// ════════════════════════════════════════
document.querySelectorAll(".sb-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    rippleEffect(btn, e);
    const key = btn.dataset.sb;

    // Explore = switch tab
    if (key === "explore") {
      document.querySelectorAll(".sb-btn").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      switchTab("explore");
      closeSbPanel();
      return;
    }

    // Toggle panel
    if (activeSbPanel === key) {
      closeSbPanel();
      document.querySelectorAll(".sb-btn").forEach(b => b.classList.remove("on"));
      document.querySelector(".sb-btn[data-sb='explore']").classList.add("on");
    } else {
      activeSbPanel = key;
      document.querySelectorAll(".sb-btn").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      openSbPanel(key);
    }
  });
});

function openSbPanel(key) {
  const data = PANEL_DATA[key];
  if (!data) return;
  sbPanelTitle.textContent = data.title;
  sbPanelContent.innerHTML = data.items.map((item, i) => `
    <div class="panel-item" data-panel-idx="${i}" data-panel-key="${key}" style="animation-delay:${i*50}ms;opacity:0;animation:card-in .3s ease forwards">
      <div style="display:flex;align-items:center;gap:7px">
        ${item.icon ? `<span style="font-size:13px;color:var(--red)">${item.icon}</span>` : ''}
        <span>${item.label}</span>
      </div>
      <div class="panel-item-label">${item.sub}</div>
    </div>`).join("");

  // Bind clicks
  sbPanelContent.querySelectorAll(".panel-item").forEach(el => {
    el.addEventListener("click", e => {
      rippleEffect(el, e);
      const idx = +el.dataset.panelIdx;
      const item = PANEL_DATA[key].items[idx];
      handlePanelAction(item);
    });
  });

  sbPanel.classList.add("open");
}

function handlePanelAction(item) {
  if (item.action === "search") {
    // Switch to Explore and run search
    switchTab("explore");
    closeSbPanel();
    setTimeout(() => {
      heroSearch.value = item.q;
      runSearch(item.q);
    }, 80);

  } else if (item.action === "bookmark") {
    openTabWithContent("★ " + item.label, "bookmark", item);

  } else if (item.action === "tool") {
    openTabWithContent(item.icon + " " + item.label, "tool", item);

  } else if (item.action === "cluster") {
    openTabWithContent("◈ " + item.label, "cluster", item);

  } else if (item.action === "settings") {
    openTabWithContent("⊞ " + item.label, "settings", item);
  }
}

function openTabWithContent(tabLabel, type, item) {
  newTabCounter++;
  const id = "custom-" + newTabCounter;
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.dataset.tab = id;

  const favColors = { bookmark:"var(--amber)", tool:"var(--red)", cluster:"#e879f9", settings:"var(--text-dim)" };
  tab.innerHTML = `
    <div class="tab-fav" style="background:${favColors[type]||'var(--red)'};border-radius:4px"></div>
    ${tabLabel}
    <div class="tab-x">×</div>`;
  tabBar.insertBefore(tab, tabAddBtn);

  const page = document.createElement("div");
  page.className = "page";
  page.id = "page-" + id;
  page.innerHTML = buildCustomPageHTML(type, item);
  document.getElementById("mainContent").appendChild(page);

  bindTab(tab);
  switchTab(id);
  closeSbPanel();
}

function buildCustomPageHTML(type, item) {
  if (type === "bookmark") {
    const lvl = item.conf >= 75 ? "hi" : item.conf >= 60 ? "md" : "lo";
    const lvlColor = {hi:"var(--amber)",md:"var(--rose)",lo:"var(--red2)"}[lvl];
    return `<div style="position:absolute;inset:0;overflow-y:auto;padding:32px 40px">
      <div style="max-width:560px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:16px">☆ Saved Signal</div>
        <div style="font-size:22px;font-weight:700;line-height:1.35;color:var(--text);margin-bottom:24px">${item.label}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
          <span class="cat ${item.cat}">${item.cat.toUpperCase()}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim)">Saved to bookmarks</span>
        </div>
        <div style="background:rgba(255,26,60,.03);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:9px;margin-bottom:6px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text-dim)">CONFIDENCE</span>
            <div style="flex:1;height:3px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden"><div style="height:100%;width:${item.conf}%;background:${lvlColor};border-radius:2px;transition:width 1.2s ease"></div></div>
            <span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:${lvlColor}">${item.conf}%</span>
          </div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:24px">
          ${item.sources.map(s=>`<span class="sig-tag">${s}</span>`).join("")}
          <span class="sig-tag">${item.cnt} mentions</span>
        </div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">Notes</div>
        <textarea style="width:100%;height:90px;background:rgba(255,26,60,.03);border:1px solid var(--border);border-radius:10px;padding:12px;color:var(--text-dim);font-family:'Inter',sans-serif;font-size:12.5px;resize:none;outline:none" placeholder="Add notes to this signal..."></textarea>
      </div>
    </div>`;
  }

  if (type === "tool") {
    const toolOutputs = {
      "Signal Summarizer": ["AI agent tooling is emerging as the dominant product pattern in B2B SaaS","Funding velocity in vertical AI exceeded 2021 peaks in Q1","Developer adoption outpacing enterprise rollout 4:1 — bottom-up GTM confirmed"],
      "Trend Forecaster":  ["Signal strength: HIGH — trajectory suggests mainstream in 6–9 months","3 comparable prior events: blockchain dev tools (2018), no-code (2020), LLMs (2022)","Recommended action window: 30–60 days before commoditization"],
      "Source Validator":  ["Twitter: 847 mentions — organic, high signal-to-noise","Hacker News: 312 comments — technically validated","Reddit: 523 posts — early majority adoption confirmed","LinkedIn: 189 posts — enterprise awareness beginning"],
      "Alpha Scorer":      ["Opportunity score: 88/100","Window: 12–48 hours before mainstream pickup","Risk: Medium — fast-follower competition likely within 2 weeks","Verdict: High-conviction early signal. Act now."],
    };
    const outputs = toolOutputs[item.label] || ["Analyzing...","Processing signal data...","Compiling results..."];
    return `<div style="position:absolute;inset:0;overflow-y:auto;padding:32px 40px">
      <div style="max-width:580px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:12px">✦ AI Tool</div>
        <div style="font-size:22px;font-weight:700;color:var(--text);margin-bottom:6px">${item.icon} ${item.label}</div>
        <div style="font-size:13px;color:var(--text-dim);margin-bottom:28px">${item.sub}</div>
        <div style="background:rgba(255,26,60,.03);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:16px">
          <div style="font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:14px;display:flex;align-items:center;gap:7px"><div class="live-dot"></div>Output</div>
          ${outputs.map((o,i)=>`<div style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);animation:card-in .4s ease ${i*120}ms both">
            <span style="color:var(--red);font-size:12px;flex-shrink:0">→</span>
            <span style="font-size:13px;color:var(--text);line-height:1.45">${o}</span>
          </div>`).join("")}
        </div>
        <div style="background:rgba(255,26,60,.03);border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px">
          <input style="flex:1;background:transparent;border:none;outline:none;font-family:'Inter',sans-serif;font-size:13px;color:var(--text)" placeholder="Ask the AI a follow-up...">
          <button class="search-go" style="position:static;transform:none;width:30px;height:30px;font-size:13px" onclick="this.parentElement.querySelector('input').value=''">→</button>
        </div>
      </div>
    </div>`;
  }

  if (type === "cluster") {
    const clusterSignals = [
      "New entrants disrupting established players with AI-first approach",
      "Funding velocity in this cluster up 180% vs 6 months ago",
      "Community discourse shifting from skepticism to adoption",
      "Key influencers accelerating narrative spread",
      "Enterprise buyers beginning evaluation cycles",
      "Open-source alternatives gaining ground on paid tools",
    ];
    return `<div style="position:absolute;inset:0;overflow-y:auto;padding:32px 40px">
      <div style="max-width:580px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:12px">◈ Signal Cluster</div>
        <div style="font-size:22px;font-weight:700;color:var(--text);margin-bottom:6px">${item.label}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px">
          <div class="live-dot"></div>
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text-dim)">${item.count} active nodes</span>
          <div style="width:80px;height:3px;background:rgba(255,255,255,.05);border-radius:2px;overflow:hidden"><div style="height:100%;width:75%;background:${item.color};border-radius:2px"></div></div>
        </div>
        ${clusterSignals.map((s,i)=>`
          <div class="sig-card" style="animation-delay:${i*80}ms">
            <div class="sig-body">${s}</div>
            <div class="conf-row" style="margin-top:8px">
              <span class="conf-lbl">SIGNAL STRENGTH</span>
              <div class="conf-bar"><div class="conf-fill md" style="width:${55+Math.floor(Math.random()*35)}%"></div></div>
              <span class="conf-val md">${55+Math.floor(Math.random()*35)}%</span>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
  }

  if (type === "settings") {
    const settingUIs = {
      sources: `<div style="display:flex;flex-direction:column;gap:8px">
        ${[{n:"Twitter / X",on:true,c:847},{n:"Hacker News",on:true,c:312},{n:"Reddit",on:true,c:523},{n:"LinkedIn",on:true,c:189},{n:"Substack",on:true,c:134},{n:"GitHub",on:false,c:0},{n:"Discord",on:false,c:0}].map(s=>`
        <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(255,26,60,.02);border:1px solid var(--border);border-radius:10px;transition:border-color .2s" onmouseover="this.style.borderColor='rgba(255,26,60,.2)'" onmouseout="this.style.borderColor='rgba(200,20,50,.10)'">
          <div style="flex:1;font-size:12.5px;color:var(--text);font-weight:500">${s.n}</div>
          ${s.on?`<span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--text-dim)">${s.c} signals</span>`:''}
          <div onclick="this.classList.toggle('tog-on');this.querySelector('span').style.transform=this.classList.contains('tog-on')?'translateX(0)':'translateX(-14px)'" style="width:36px;height:20px;border-radius:10px;background:${s.on?'rgba(255,26,60,.4)':'rgba(255,255,255,.08)'};border:1px solid ${s.on?'rgba(255,26,60,.5)':'var(--border)'};cursor:pointer;position:relative;display:flex;align-items:center;padding:0 3px;transition:all .2s;${s.on?'':''}">
            <span style="width:14px;height:14px;border-radius:50%;background:#fff;display:block;transition:transform .2s;transform:translateX(${s.on?'14px':'0'})"></span>
          </div>
        </div>`).join("")}
      </div>`,
      confidence: `<div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.6;margin-bottom:20px">Signals below this threshold are filtered from all views.</div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
          <input type="range" min="40" max="90" value="60" style="flex:1;accent-color:var(--red);cursor:pointer" oninput="this.nextElementSibling.textContent=this.value+'%'">
          <span style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;color:var(--red);width:48px">60%</span>
        </div>
        <div style="background:rgba(255,26,60,.03);border:1px solid var(--border);border-radius:10px;padding:14px;font-size:12px;color:var(--text-dim);line-height:1.6">At 60%, you see strong signals only. Lower values surface weaker but potentially earlier signals.</div>
      </div>`,
      refresh: `<div style="display:flex;flex-direction:column;gap:8px">
        ${["30 seconds","1 minute","2 minutes","5 minutes","Manual only"].map((opt,i)=>`
        <div onclick="document.querySelectorAll('.ref-opt').forEach(x=>x.style.borderColor='rgba(200,20,50,.10)');this.style.borderColor='rgba(255,26,60,.4)'" class="ref-opt" style="padding:12px 16px;background:rgba(255,26,60,.02);border:1px solid ${i===2?'rgba(255,26,60,.4)':'var(--border)'};border-radius:10px;cursor:pointer;font-size:13px;color:var(--text);transition:border-color .2s;display:flex;align-items:center;justify-content:space-between">
          ${opt}
          ${i===2?`<span style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--red);letter-spacing:1px">ACTIVE</span>`:''}
        </div>`).join("")}
      </div>`,
      alerts: `<div style="display:flex;flex-direction:column;gap:8px">
        ${[{l:"Critical alpha only",s:"Windows closing in <24h",on:true},{l:"High confidence signals",s:"Confidence ≥80%",on:false},{l:"All new signals",s:"Every signal as it arrives",on:false},{l:"Cluster anomalies",s:"Unusual traction detected",on:true}].map(opt=>`
        <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:rgba(255,26,60,.02);border:1px solid var(--border);border-radius:10px">
          <div style="flex:1"><div style="font-size:12.5px;color:var(--text);font-weight:500;margin-bottom:2px">${opt.l}</div><div style="font-size:11px;color:var(--text-dim)">${opt.s}</div></div>
          <div onclick="this.classList.toggle('tog-on');this.querySelector('span').style.transform=this.classList.contains('tog-on')?'translateX(14px)':'translateX(0)'" style="width:36px;height:20px;border-radius:10px;background:${opt.on?'rgba(255,26,60,.4)':'rgba(255,255,255,.08)'};border:1px solid ${opt.on?'rgba(255,26,60,.5)':'var(--border)'};cursor:pointer;position:relative;display:flex;align-items:center;padding:0 3px;transition:all .2s">
            <span style="width:14px;height:14px;border-radius:50%;background:#fff;display:block;transition:transform .2s;transform:translateX(${opt.on?'14px':'0'})"></span>
          </div>
        </div>`).join("")}
      </div>`,
    };
    return `<div style="position:absolute;inset:0;overflow-y:auto;padding:32px 40px">
      <div style="max-width:520px">
        <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:12px">⊞ Settings</div>
        <div style="font-size:20px;font-weight:700;color:var(--text);margin-bottom:24px">${item.label}</div>
        ${settingUIs[item.setting] || ''}
      </div>
    </div>`;
  }

  return `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--text-dim)">Coming soon</div>`;
}

function closeSbPanel() {
  activeSbPanel = null;
  sbPanel.classList.remove("open");
}

// ════════════════════════════════════════
// SEARCH (Explore)
// ════════════════════════════════════════
heroGo.addEventListener("click", e => { rippleEffect(heroGo, e); runSearch(heroSearch.value); });
heroSearch.addEventListener("keydown", e => { if (e.key === "Enter") runSearch(heroSearch.value); });
document.querySelectorAll(".hint").forEach(h => h.addEventListener("click", e => {
  rippleEffect(h, e);
  heroSearch.value = h.dataset.q;
  runSearch(h.dataset.q);
}));

function runSearch(q) {
  if (!q.trim()) return;
  q = q.trim();
  addrText.textContent = `trench://search?q=${encodeURIComponent(q)}`;
  sbQuery.textContent  = `trench://search?q=${q}`;
  loadingView.classList.add("on");
  const steps = [
    { t:"Scanning signal space...",   s:"Activating AI engine" },
    { t:"Crawling 47 data sources...",s:"Cross-referencing signals" },
    { t:"Pattern matching...",        s:"Evaluating confidence scores" },
    { t:"Compiling insights...",      s:"Rendering results" },
  ];
  let si = 0;
  const iv = setInterval(() => {
    si = Math.min(si+1, steps.length-1);
    loadTxt.textContent = steps[si].t;
    loadSub.textContent = steps[si].s;
  }, 450);
  setTimeout(() => {
    clearInterval(iv);
    loadingView.classList.remove("on");
    showResults(q);
  }, 2000);
}

function showResults(q) {
  heroView.classList.add("out");
  resultsView.classList.add("in");
  const fr = document.getElementById("splineResults");
  if (!fr.src) fr.src = "https://my.spline.design/skillskeyboard-2fFEFV0GgZpaCFW9SbtxlBZC/";
  qDisplay.textContent = `"${q}"`;
  const lq = q.toLowerCase();
  let sigs = DEFAULT_SIGNALS;
  for (const k of Object.keys(SIGNALS)) {
    if (lq.includes(k) || k.split(" ").some(w => lq.includes(w))) { sigs = SIGNALS[k]; break; }
  }
  sigCards.innerHTML = "";
  let total = 0;
  sigs.forEach((s, i) => {
    setTimeout(() => {
      const card = buildCard(s);
      sigCards.appendChild(card);
      total++;
      feedCnt.textContent = `${total} signals`;
      sbCount.textContent = total;
      setTimeout(() => {
        const fill = card.querySelector(".conf-fill");
        if (fill) fill.style.width = s.confidence + "%";
      }, 80);
    }, i * 200);
  });
  const base = sigs.length * 200 + 280;
  setTimeout(() => buildAlpha(q), base);
  setTimeout(() => buildSources(), base + 180);
  setTimeout(() => buildIntel(q), base + 360);
  startMorph();
  startNodes();
}

function buildCard(s) {
  const lvl = s.confidence >= 75 ? "hi" : s.confidence >= 60 ? "md" : "lo";
  const el = document.createElement("div");
  el.className = "sig-card" + (lvl === "hi" ? " high" : "");
  el.innerHTML = `
    <div class="card-top">
      <span class="cat ${s.cat}">${s.cat.toUpperCase()}</span>
      <span class="trend-icon">${s.trend}</span>
    </div>
    <div class="sig-body">${s.title}</div>
    <div class="conf-row">
      <span class="conf-lbl">CONFIDENCE</span>
      <div class="conf-bar"><div class="conf-fill ${lvl}" style="width:0"></div></div>
      <span class="conf-val ${lvl}">${s.confidence}%</span>
    </div>
    <div class="sig-tags">
      ${s.sources.map(x=>`<span class="sig-tag">${x}</span>`).join("")}
      <span class="sig-tag">${s.cnt} mentions</span>
    </div>`;
  return el;
}

function buildAlpha(q) {
  alphaArea.innerHTML = `
    <div class="alpha-card">
      <div class="alpha-hdr">⚡ Unusual traction detected</div>
      <div class="alpha-body">Mention velocity +240% over baseline in 48 hours. Pattern matches 3 prior high-signal events from 2022–2023.</div>
      <div class="tl-bar" id="tlBar">
        ${Array(20).fill(0).map((_,i)=>`<div class="tl-seg" id="tls${i}"></div>`).join("")}
      </div>
    </div>`;
  const h = [5,6,5,8,7,10,9,13,11,16,14,20,18,25,21,27,26,30,29,31];
  setTimeout(() => {
    h.forEach((v,i) => {
      const el = document.getElementById(`tls${i}`);
      if (el) { el.style.height=v+"px"; el.style.background=v>23?"rgba(255,26,60,.55)":"rgba(255,26,60,.16)"; }
    });
  }, 150);
}

function buildSources() {
  srcArea.innerHTML = `<div class="src-panel">
    ${SOURCES.map(s=>`
      <div class="src-row">
        <div class="src-icon" style="background:${s.col}20;color:${s.col}">${s.icon}</div>
        <div class="src-info"><div class="src-name">${s.name}</div><div class="src-meta">Active conversations</div></div>
        <div class="src-right">
          <div class="src-cnt">${s.cnt}</div>
          <div class="src-mini"><div class="src-mini-fill" style="background:${s.col};width:0" data-w="${s.pct}"></div></div>
        </div>
      </div>`).join("")}
  </div>`;
  setTimeout(() => {
    document.querySelectorAll(".src-mini-fill").forEach(el => { el.style.width = el.dataset.w + "%"; });
  }, 80);
}

function buildIntel(q) {
  const slug = q.replace(/\s+/g,"-").toLowerCase();
  const tabs = [
    {url:`techcrunch.com/signals/${slug}`,body:"Strong bullish framing. Identifies this as a structural shift, cites 4 independent data sources.",sent:"pos",rel:91},
    {url:`hn.algolia.com/search?q=${q}`,body:"Mixed community response. Technical skeptics balanced by practitioner validation. Top 10% comment velocity.",sent:"neu",rel:78},
    {url:`reddit.com/r/entrepreneur/top`,body:"High engagement thread with first-hand practitioner evidence. Moderately filtered for survivorship bias.",sent:"pos",rel:74},
  ];
  intelArea.innerHTML = tabs.map(t=>`
    <div class="intel-card">
      <div class="intel-url">↗ ${t.url}</div>
      <div class="intel-body">${t.body}</div>
      <div class="intel-tags">
        <span class="itag ${t.sent}">${t.sent==="pos"?"↑ Positive":"→ Neutral"}</span>
        <span class="itag neu">Relevance: ${t.rel}%</span>
      </div>
    </div>`).join("");
}

// ════════════════════════════════════════
// MORPH TEXT
// ════════════════════════════════════════
function startMorph() {
  if (morphTimer) clearInterval(morphTimer);
  morphIdx = 0; morphTxt.textContent = MORPH[0]; morphTxt.style.opacity="1";
  morphTimer = setInterval(() => {
    morphTxt.style.opacity="0";
    setTimeout(() => {
      morphIdx = (morphIdx+1) % MORPH.length;
      morphTxt.textContent = MORPH[morphIdx];
      morphTxt.style.opacity="1";
    }, 320);
  }, 2500);
}

// ════════════════════════════════════════
// CANVAS NODES
// ════════════════════════════════════════
function startNodes() {
  const canvas = document.getElementById("nodeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let raf;
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); window.addEventListener("resize", resize);
  const labels = ["signal.detect","conf:82%","pattern.match","vel:+240%","alpha.window","narrative.form","cross.validate","trend:emerging","mentions:847","AI.engine","source:verified","window:18h"];
  const nodes = Array.from({length:9},(_,i)=>({
    x:Math.random()*(canvas.width||600),
    y:Math.random()*(canvas.height||400),
    vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,
    lbl:labels[i%labels.length], a:0, ta:.45+Math.random()*.3, sz:.85+Math.random()*.28
  }));
  function frame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    nodes.forEach(n => {
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<-120)n.x=canvas.width+120; if(n.x>canvas.width+120)n.x=-120;
      if(n.y<-50)n.y=canvas.height+50;  if(n.y>canvas.height+50)n.y=-50;
      n.a=Math.min(n.ta,n.a+.003);
      ctx.save(); ctx.globalAlpha=n.a;
      ctx.font=`${10.5*n.sz}px 'JetBrains Mono',monospace`;
      const tw=ctx.measureText(n.lbl).width;
      const p=8,bw=tw+p*2,bh=21*n.sz,bx=n.x-bw/2,by=n.y-bh/2;
      ctx.fillStyle="rgba(255,26,60,.04)"; ctx.strokeStyle="rgba(255,26,60,.22)"; ctx.lineWidth=1;
      rrect(ctx,bx,by,bw,bh,4); ctx.fill(); ctx.stroke();
      ctx.fillStyle="rgba(255,80,100,.75)";
      ctx.fillText(n.lbl,n.x-tw/2,n.y+3.5*n.sz);
      ctx.restore();
    });
    ctx.save();
    nodes.forEach((a,i)=>nodes.slice(i+1).forEach(b=>{
      const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<180){
        ctx.globalAlpha=(1-d/180)*.07*Math.min(a.a,b.a);
        ctx.strokeStyle="rgba(255,26,60,1)"; ctx.lineWidth=.5;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }));
    ctx.restore();
    raf=requestAnimationFrame(frame);
  }
  if(raf)cancelAnimationFrame(raf); frame();
}
function rrect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}

// ════════════════════════════════════════
// SIGNAL FEED PAGE
// ════════════════════════════════════════
let sfeedActive = false;
function initSignalFeed() {
  if (sfeedActive) return;
  sfeedActive = true;
  sfeedList.innerHTML = "";
  LIVE_SIGNALS.forEach((s,i) => {
    setTimeout(() => addFeedRow(s, false), i * 80);
  });
  // Live-add new rows periodically
  if (sfeedInterval) clearInterval(sfeedInterval);
  const newSignals = [
    {cat:"alpha",   body:"Seed-stage AI infra deals closing in under 2 weeks — anomalous",conf:87,vel:"+310%",ago:"now"},
    {cat:"emerging",body:"AI slop saturation triggering audience flight to curated sources",conf:80,vel:"+170%",ago:"now"},
    {cat:"tech",    body:"New open-source model matches GPT-4 on reasoning benchmarks",conf:88,vel:"+520%",ago:"now"},
    {cat:"market",  body:"Enterprise AI contracts now requiring explainability clauses",conf:74,vel:"+44%",ago:"now"},
    {cat:"social",  body:"Non-technical founders increasingly shipping AI products",conf:69,vel:"+95%",ago:"now"},
  ];
  let newIdx = 0;
  sfeedInterval = setInterval(() => {
    const s = newSignals[newIdx % newSignals.length];
    newIdx++;
    addFeedRow(s, true);
    ticker += 3; sbCount.textContent = ticker;
  }, 4000);
}

function addFeedRow(s, isNew) {
  const confClass = s.conf >= 80 ? "hi" : s.conf >= 65 ? "md" : "lo";
  const confColor = { hi:"var(--amber)", md:"var(--rose)", lo:"var(--red2)" }[confClass];
  const div = document.createElement("div");
  div.className = "sf-row" + (isNew ? " new-row" : "");
  div.innerHTML = `
    <div class="sf-cat"><span class="cat ${s.cat}">${s.cat.toUpperCase()}</span></div>
    <div class="sf-body">${s.body}</div>
    <div class="sf-conf" style="color:${confColor}">${s.conf}%</div>
    <div class="sf-vel" style="color:var(--text-dim)">${s.vel}</div>
    <div class="sf-time">${s.ago}</div>`;
  if (isNew) {
    sfeedList.insertBefore(div, sfeedList.firstChild);
    // Update time on old rows
    sfeedList.querySelectorAll(".sf-time").forEach((el,i) => {
      if(i===0) return;
      const v = parseInt(el.textContent) || 0;
      if(!el.textContent.includes("now") && !isNaN(v)) el.textContent = (v+1)+"m";
    });
  } else {
    sfeedList.appendChild(div);
  }
}

// Filter buttons
document.querySelectorAll(".sfilter").forEach(f => {
  f.addEventListener("click", e => {
    rippleEffect(f, e);
    document.querySelectorAll(".sfilter").forEach(x => x.classList.remove("on","on-amber","on-purple"));
    const key = f.dataset.f;
    if(key==="ALPHA"||key==="MARKET") f.classList.add("on-amber");
    else if(key==="EMERGING") f.classList.add("on-purple");
    else f.classList.add("on");
    // Filter rows
    sfeedList.querySelectorAll(".sf-row").forEach(row => {
      const cat = row.querySelector(".cat");
      if (!cat) return;
      const rowCat = cat.textContent.trim();
      row.style.display = (key==="ALL" || rowCat===key) ? "" : "none";
    });
  });
});

// ════════════════════════════════════════
// ALPHA PAGE
// ════════════════════════════════════════
let alphaPageReady = false;
function initAlphaPage() {
  if (alphaPageReady) return;
  alphaPageReady = true;
  alphaGrid.innerHTML = "";
  ALPHA_CARDS.forEach((c,i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "ag-card";
      div.style.animationDelay = "0ms";
      const levelColors = { critical:"var(--red)", high:"var(--amber)", medium:"#e879f9", watch:"var(--text-dim)" };
      const fillColor = { critical:"var(--red)", high:"var(--amber)", medium:"#e879f9", watch:"rgba(255,255,255,.2)" }[c.level];
      div.innerHTML = `
        <div class="ag-level ${c.level}">
          <div class="ag-level-dot"></div>
          ${c.level.toUpperCase()}
        </div>
        <div class="ag-title">${c.title}</div>
        <div class="ag-meta">
          <div class="ag-window">
            <div class="ag-window-bar"><div class="ag-window-fill" style="background:${fillColor};width:0" data-w="${c.window}"></div></div>
            ${c.windowLabel}
          </div>
          <div class="ag-conf" style="color:${levelColors[c.level]}">${c.conf}%</div>
        </div>`;
      alphaGrid.appendChild(div);
      setTimeout(() => {
        const fill = div.querySelector(".ag-window-fill");
        if (fill) fill.style.width = fill.dataset.w + "%";
        fill.style.transition = "width 1.2s cubic-bezier(.4,0,.2,1)";
      }, 100);
    }, i * 100);
  });

  closingWindows.innerHTML = CLOSING.map(c => `
    <div class="alpha-card" style="margin-bottom:8px">
      <div class="alpha-hdr">🔴 ${c.urgency} window</div>
      <div class="alpha-body">${c.title}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--text-dim)">CONFIDENCE</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:var(--red)">${c.conf}%</span>
      </div>
    </div>`).join("");
}

// ════════════════════════════════════════
// AI BADGE TOOLTIP
// ════════════════════════════════════════
const aiBadge   = document.getElementById("aiBadge");
const aiTooltip = document.getElementById("aiTooltip");
aiBadge.addEventListener("click", e => {
  rippleEffect(aiBadge, e);
  aiTooltip.classList.toggle("show");
});
document.addEventListener("click", e => {
  if (!aiBadge.contains(e.target) && !aiTooltip.contains(e.target)) {
    aiTooltip.classList.remove("show");
  }
});

// ════════════════════════════════════════
// RIPPLE EFFECT
// ════════════════════════════════════════
function rippleEffect(el, e) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = (e.clientX || rect.left + rect.width/2) - rect.left - size/2;
  const y = (e.clientY || rect.top + rect.height/2) - rect.top - size/2;
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px`;
  el.style.position = el.style.position || "relative";
  el.style.overflow = "hidden";
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);
}

// ════════════════════════════════════════
// RELOAD BUTTON
// ════════════════════════════════════════
document.getElementById("btnReload").addEventListener("click", function(e) {
  rippleEffect(this, e);
  this.style.animation = "spin .5s linear";
  setTimeout(() => { this.style.animation = ""; }, 500);
});
document.getElementById("btnBack").addEventListener("click", function(e) {
  rippleEffect(this, e);
  if (resultsView.classList.contains("in")) {
    resultsView.classList.remove("in");
    heroView.classList.remove("out");
    addrText.textContent = "trench://explore";
    sbQuery.textContent  = "trench://explore";
  }
});

// ════════════════════════════════════════
// STATUS TICKER
// ════════════════════════════════════════
setInterval(() => {
  ticker += Math.floor(Math.random()*5+1);
  sbCount.textContent = ticker;
}, 2200);

// ════════════════════════════════════════
// ADDRESS BAR FOCUS STYLE
// ════════════════════════════════════════
const addrBar = document.getElementById("addrBar");
addrBar.addEventListener("click", () => addrBar.classList.add("focused"));
document.addEventListener("click", e => {
  if (!addrBar.contains(e.target)) addrBar.classList.remove("focused");
});
