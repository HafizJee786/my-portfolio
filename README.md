# new_portfolio

## Overview

This repository contains a personal portfolio built with React and TypeScript using Vite as the build tool. It is designed for fast development and production builds and includes modern tooling for styling, icons, and optional server features.

## Live Demo
- (Add your deployed URL here after deploying to Vercel)

## Tech Stack (Professional Summary)

- **React 19** — A modern UI library for building component-based user interfaces with efficient rendering. React drives the interactive parts of the portfolio (navigation, hero, project showcase, contact form).
- **TypeScript** — Adds strong typing to the codebase, improving readability, developer experience, and reducing runtime bugs.
- **Vite** — Development server and build tool that provides lightning-fast HMR and optimized production builds. Used here with `vite` scripts in `package.json`.
- **Tailwind CSS** and **Autoprefixer** — Utility-first CSS framework (configured via Tailwind) for rapid, consistent styling, plus autoprefixer for cross-browser compatibility.
- **Lucide React** — Lightweight icon library used for crisp, accessible icons.
- **esbuild** — Fast bundling/transforming tool used as part of the toolchain (dev dependency).
- **Express + dotenv (optional)** — Lightweight Express server and dotenv for environment variable management (present in dependencies; used if adding server-side endpoints later).

### Why these choices

- Vite + React + TypeScript provides a developer experience focused on speed, correctness, and maintainability — ideal for a professional portfolio that needs stable, production-ready output.
- Tailwind accelerates styling while keeping CSS small and maintainable.

## Project Structure

- `index.html` — App entry point used by Vite.
- `src/` — Source code.
  - `main.tsx` — React entry file.
  - `App.tsx` — Root application component.
  - `components/` — Reusable UI components (Hero, Navbar, ProjectsShowcase, ContactForm, Footer, etc.).
  - `data.ts` — Static content used to populate the UI.
  - `types.ts` — Common TypeScript types for the project.

## Files to Push (What to include)

Push everything in the repository except:

- `node_modules/` — large dependency folder (ignored via `.gitignore`).
- `dist/` — build output. Let CI or Vercel build from source instead of committing builds.
- Any local secrets or environment files like `.env`, `.env.local` — do not push secrets. Use repository secrets in GitHub or environment variables in Vercel.

Include:

- All source files under `src/`.
- `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`.
- `.gitignore`, `README.md`, and any config files needed to reproduce the project.

## Getting Started (Local Development)

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Creating the GitHub repo and pushing

Option A — Create repo on GitHub website:

1. Create a new repository on GitHub.
2. On your machine in project root:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Option B — Use GitHub CLI (if authenticated):

```bash
gh repo create <repo-name> --public --source=. --remote=origin --push
```

Replace `--public` with `--private` if you prefer.

## Deploying to Vercel

1. Sign into Vercel and click **New Project** → Import from GitHub.
2. Select your repository and configure settings:
   - Framework: `Other` or Vite/React (Vercel will detect)
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add any environment variables in Vercel dashboard (e.g., API keys), using the **Environment Variables** settings.
4. Deploy — Vercel will build and publish your site. Future pushes to `main` will trigger automatic deploys.


</div>




1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
