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



</div>




1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
