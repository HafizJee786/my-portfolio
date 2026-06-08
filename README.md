<div align="center">

# ✦ Hafiz Ali Hasnain — Personal Portfolio

**Creative Software Developer · UI Engineer · AI Enthusiast**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Motion](https://img.shields.io/badge/Motion-12.x-FF4154?style=flat-square)](https://motion.dev/)

</div>

---

## Overview

A high-performance, editorial portfolio built to reflect precision, creativity, and technical depth. This site goes beyond a simple showcase — it features **live code simulators**, **custom UI sandboxes**, and an **AI-powered experience layer** via the Gemini API, all wrapped in a modern typography-driven layout.

> Built from scratch with React 19, TypeScript, Tailwind CSS, and Vite — no templates, no shortcuts.

---

## Live Demo

> 🔗 *Deploy link coming soon — [Vercel](https://vercel.com) recommended*

---

## Features

- ⚡ **Blazing fast** — Vite-powered dev server with HMR and optimized production builds
- 🧠 **AI-integrated** — Gemini API integration via server-side capability for intelligent interactions
- 🎨 **Precision-styled** — Tailwind CSS v4 with utility-first design patterns and cross-browser autoprefixing
- 🪄 **Fluid animations** — Motion (Framer Motion v12) for polished, production-grade transitions
- 🧩 **Component architecture** — Fully typed, modular React components with strong TypeScript interfaces
- 🌐 **Express-ready** — Optional Express server for API endpoints and server-side functionality
- 🔒 **Environment-safe** — dotenv-based config management with `.env.example` for easy onboarding

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| UI Framework | React 19 | Component-based interface rendering |
| Language | TypeScript 5.8 | Type safety and developer experience |
| Build Tool | Vite 6 | Fast dev server & optimized builds |
| Styling | Tailwind CSS 4 | Utility-first, responsive design |
| Animation | Motion 12 | Smooth, declarative UI transitions |
| Icons | Lucide React | Consistent, accessible icon system |
| AI Layer | Google Gemini API | AI-powered features & interactions |
| Server | Express 4 | Optional server-side endpoints |
| Config | dotenv | Secure environment variable management |

---

## Project Structure

```
my-portfolio/
├── index.html              # Vite entry point
├── vite.config.ts          # Vite + Tailwind + React plugin config
├── tsconfig.json           # TypeScript compiler options
├── metadata.json           # App metadata & capability declarations
├── .env.example            # Environment variable template
│
└── src/
    ├── main.tsx            # React application entry
    ├── App.tsx             # Root component & layout orchestration
    ├── data.ts             # Static content & configuration data
    ├── types.ts            # Shared TypeScript type definitions
    │
    └── components/
        ├── Navbar.tsx          # Navigation bar
        ├── Hero.tsx            # Landing / hero section
        ├── ProjectsShowcase.tsx # Project gallery & sandbox demos
        ├── ContactForm.tsx     # Contact / inquiry form
        └── Footer.tsx          # Site footer
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A valid **Gemini API key** from [Google AI Studio](https://aistudio.google.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HafizJee786/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR on port 3000 |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type-checking |
| `npm run clean` | Remove build artifacts (`dist/`, `server.js`) |

---

## Deployment

This project is optimized for deployment on **Vercel** with zero configuration.

```bash
# Build for production
npm run build

# Preview before deploying
npm run preview
```

For Vercel deployment, set the `GEMINI_API_KEY` environment variable in your project settings before deploying.

---

## Environment Variables

Copy `.env.example` to `.env.local` and populate the following:

```env
GEMINI_API_KEY=""
```

> **Never commit your `.env.local` file.** It is already included in `.gitignore`.

---

## License

This project is personal and proprietary. All rights reserved by **Hafiz Ali Hasnain**.
Feel free to explore the code for learning purposes, but please do not reproduce or redistribute it.

---

<div align="center">

Crafted with care by **[Hafiz Ali Hasnain](https://github.com/HafizJee786)**

</div>
