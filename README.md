# Zisan Aalam - Professional Portfolio

A complete rebuild of the previous Bootstrap/jQuery portfolio as a modern responsive React application.

## Stack
- React 19
- Vite 8
- Custom responsive CSS (no UI framework dependency)
- GitHub Actions deployment to GitHub Pages

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Push this project to the `main` branch of the GitHub repository.
2. In **GitHub → Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push a commit. The included `.github/workflows/deploy.yml` builds and deploys the `dist/` folder.

`vite.config.js` uses `base: './'`, so the build works on a GitHub project page such as `https://username.github.io/myportfolio/` without hard-coding the repository name.

## Images to replace
The design intentionally uses visible placeholders so you can add only high-quality, useful visuals.

### 1. Professional portrait
- Suggested path: `public/images/profile.jpg`
- Recommended: 1200 × 1500 px or larger, portrait orientation
- Chest-up framing, neutral/dark uncluttered background, soft natural light
- Avoid passport-style crop; use a modern professional portrait
- In `App.jsx`, replace the hero `ImagePlaceholder` with `<img src="./images/profile.jpg" ... />`

### 2. SA Power Networks capstone visual
- Suggested path: `public/images/capstone-architecture.png`
- Recommended: 1600 × 900 px
- Use a public-safe data-flow or methodology diagram only
- Do not expose confidential client datasets, internal dashboards, credentials or proprietary diagrams

### 3. RAG architecture diagram
- Suggested path: `public/images/rag-architecture.png`
- Recommended: 1600 × 900 px
- Ideal content: Documents → Chunking → Embeddings → ChromaDB → Retriever → Mistral-7B → RAGAS evaluation

### 4. Secure Overlay Chat Protocol architecture
- Suggested path: `public/images/socp-architecture.png`
- Recommended: 1600 × 900 px
- Show clients, a 3-server mesh, WebSocket routing, RSA signing/encryption boundaries and failure recovery

### 5. DQN project visual
- Suggested path: `public/images/dqn-flappy-bird.png`
- Recommended: 1600 × 1000 px
- Best option: gameplay screenshot plus a small training/reward plot or architecture callout

### 6. Petri Net project diagram
- Suggested path: `public/images/petri-net-adelaide.png`
- Recommended: 1600 × 1000 px
- Use a simplified Petri Net / track topology diagram rather than a generic stock train photo

### 7. Social preview / Open Graph image
- Suggested path: `public/images/og-cover.jpg`
- Recommended: 1200 × 630 px
- Put your name, role, a short stack line and subtle portrait/abstract system diagram

## Content decisions
- Removed birthday, age, street address and personal phone number from the public website.
- Replaced the old resume with the latest resume supplied for the rebuild.
- Professional experience appears before certifications.
- Java/backend positioning is primary; AI/ML is presented as a strong secondary capability.
- University work is written as engineering case studies rather than generic project tiles.
- No fake skill percentages.

## Before publishing
- Replace image placeholders.
- Verify LinkedIn URL in `src/App.jsx`.
- Add direct GitHub repository links for projects only when the repositories are public and presentation-ready.
- Consider removing old/low-signal repositories from the public GitHub profile or pinning the strongest 4–6 repositories.
