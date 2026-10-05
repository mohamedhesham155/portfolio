# Mohamed Hesham — Portfolio

A single-page portfolio site built with React + Vite. Dark, technical
aesthetic with a wire-drawing themed hero diagram — a nod to steel wire
drawing / tire bead wire production.

## Before you deploy

Open `src/data/content.js` and fill in your real contact details —
the `email`, `linkedin`, and `github` fields are placeholders:

```js
export const profile = {
  ...
  email: "your-email@example.com", // <-- replace
  linkedin: "",                    // <-- add your LinkedIn URL
  github: "",                      // <-- add your GitHub URL
  ...
};
```

All other page copy (About, Experience, Skills, Projects, etc.) also
lives in that one file, so you can edit text without touching any
component code.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy: GitHub → Vercel

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **Add New Project** → **Import Git Repository**.
3. Select the repo. Vercel auto-detects Vite — no config needed:
   - Build command: `vite build` (auto-filled)
   - Output directory: `dist` (auto-filled)
4. Click **Deploy**. You'll get a live URL in about a minute, and every
   future push to `main` redeploys automatically.

To use your own domain (e.g. mohamedhesham.online), add it under
**Project Settings → Domains** in Vercel and follow the DNS instructions
shown there.

## Tech

- React 19 + Vite
- Plain CSS (no framework) using CSS custom properties as design tokens
  — see `src/styles/global.css`
