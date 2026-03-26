# Trench Browser

**Hunt signal, not noise.**

A browser UI concept with a built-in AI engine that surfaces trends, narratives, and early alpha — before the crowd catches on.

🌐 **Live demo:** [trnchbrowser.vercel.app](https://trnchbrowser.vercel.app)

---

## Features

- **Signal Feed** — live stream of categorized signals (EMERGING, MARKET, TECH, ALPHA, SOCIAL)
- **Explore** — AI-powered search that returns ranked signal cards with confidence scores
- **Alpha Detection** — surfaces early-stage opportunities with velocity tracking
- **Multi-Source Overlay** — aggregates signals across multiple data sources
- **Tab Intelligence** — per-tab context awareness
- **Signal Map** — visual node graph of signal relationships

## Stack

- Vanilla HTML / CSS / JS — zero dependencies
- Hosted on Vercel

## Project Structure

```
trench/
├── index.html              # Entry point
├── src/
│   ├── styles/
│   │   └── main.css        # All styles
│   ├── scripts/
│   │   └── main.js         # All logic
│   └── assets/             # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy to Vercel
├── vercel.json
└── package.json
```

## Local dev

```bash
npx serve . -p 3000
```
