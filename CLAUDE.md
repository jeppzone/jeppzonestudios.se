# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Svelte type checking
npm run lint         # Check formatting + ESLint
npm run format       # Auto-format with Prettier
npm run test:unit    # Run Vitest unit tests
npm run test:integration  # Run Playwright e2e tests (builds first)
```

## Architecture

This is a **SvelteKit personal portfolio site** for Jeppzone Studios, deployed as a static site (`export const prerender = true`). It uses a single-page layout with section-based navigation via anchor links.

**Page structure:** `src/routes/+page.svelte` assembles the page by composing all section components in order. The layout (`+layout.svelte`) provides the fixed nav header.

**Components** (`src/components/`) are standalone Svelte section components exported via a barrel file (`index.js`). Each component maps to a portfolio section (Hero, Technologies, WorkExperience, Education, SideProjects, ContentCreation, SocialLinks, ContactCTA). `SEOHead` and `AnimatedBackground` are utility components.

**Styling:** Tailwind CSS with custom theme extensions defined in `tailwind.config.js` (custom animations: `float`, `glow`; custom shadow utilities: `shadow-glow`, `shadow-glow-lg`). Global styles in `src/app.pcss` — Inter font is loaded here via `@fontsource/inter`.

**SEO routes:** `/sitemap.xml` and `/robots.txt` are SvelteKit server endpoints under `src/routes/`.

**Adapter:** `adapter-auto` with `nodejs20.x` runtime target.
