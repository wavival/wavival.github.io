# Valentina Ramírez — Portfolio

> Third iteration of my personal portfolio. Built with Astro 5, Tailwind CSS v3, and a focus on performance, accessibility, and SEO.

![Portfolio Preview](public/images/mockup.png)

[![Deploy](https://github.com/wavival/wavival.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/wavival/wavival.github.io/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-wavival.github.io-1e90ff?style=flat)](https://wavival.github.io)

---

## About

Portfolio of **Valentina Ramírez**, Backend Developer, AppSec enthusiast, and Founder of [Lúmina W](https://luminaw.co). Designed to showcase real projects, technical stack, and professional identity — not just a résumé, but a reflection of how I think and build.

**Featured projects:** Lúmina W · TerraCore · NullBreach · Root · Forgotten Portal (pentesting lab)

---

## Features

- **Static site** with Astro 5 — zero unnecessary client-side JS
- **Design tokens** via CSS custom properties (`src/styles/tokens.css`)
- **Custom utility classes** layered on top of Tailwind (`@layer utilities`)
- **Dark / Light mode** with toggle and `localStorage` persistence
- **Fully responsive** — animated mobile menu with full keyboard support
- **Complete SEO:** meta tags, OpenGraph, Twitter Card, JSON-LD (Person + WebSite schemas), canonical URL, sitemap, robots.txt
- **Accessibility:** skip link, semantic heading hierarchy, ARIA labels, WCAG AA contrast, `prefers-reduced-motion` support, Escape key closes mobile menu
- **Performance:** hero image with `fetchpriority="high"`, non-blocking async font loading, explicit `width`/`height` on all images to prevent CLS
- **Scroll animations** via AOS, disabled when user prefers reduced motion
- **Google Analytics** (GA4) integrated
- **Auto-deploy** to GitHub Pages via GitHub Actions

---

## Brand Colors

| Token           | Hex       | Usage                          |
| --------------- | --------- | ------------------------------ |
| `--brand-blue`  | `#407bff` | Primary brand color            |
| `--brand-dark`  | `#1b1f28` | Dark backgrounds               |
| `--brand-light` | `#dee9ff` | Light backgrounds              |
| `--accent-link` | `#1e90ff` | Links and interactive elements |

---

## Tech Stack

| Tool                                         | Version | Role                      |
| -------------------------------------------- | ------- | ------------------------- |
| [Astro](https://astro.build)                 | 5.x     | Static site framework     |
| [Tailwind CSS](https://tailwindcss.com)      | 3.x     | CSS utilities + dark mode |
| [TypeScript](https://www.typescriptlang.org) | —       | Client-side scripts       |
| [AOS](https://michalsnik.github.io/aos/)     | 2.x     | Scroll animations         |
| [Prettier](https://prettier.io)              | 3.x     | Code formatting           |

---

## Structure

```
src/
├── components/
│   ├── sections/         # Hero · Projects · Stack · About · Contact
│   └── ui/               # Button · Link · NavBar · Footer
├── layouts/
│   └── Layout.astro      # Base layout (head, SEO, skip link, GA, JSON-LD)
├── pages/
│   ├── index.astro       # Main page
│   └── 404.astro         # Error page (noindex)
├── scripts/
│   ├── nav.ts            # Mobile menu + Escape key handler
│   └── theme.ts          # Dark/light toggle + localStorage
└── styles/
    ├── global.css         # Base styles + prefers-reduced-motion
    ├── tokens.css         # Design tokens (CSS custom properties)
    └── utilities.css      # Custom utility classes (@layer utilities)
public/
├── brand/                 # Logo (webp, ico)
├── icons/ui/              # Decorative SVG icons
├── images/                # Profile photo, mockup
├── robots.txt
├── sitemap.xml
└── cv_valentina_ramirez.pdf
```

---

## Getting Started

```bash
git clone https://github.com/wavival/wavival.github.io.git
cd wavival.github.io
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

```bash
npm run build       # Static build → ./dist/
npm run preview     # Preview the local build
npm run format      # Format code with Prettier
```

**Requires:** Node >= 22.12

---

## Deploy

Auto-deploy to **GitHub Pages** on every push to `main` via GitHub Actions. The site is built statically to `./dist/` with `astro build`.

To deploy to your own domain, update `site` in `astro.config.mjs`.

---

## Using as a Template

You're welcome to clone this repo as a base for your own portfolio. It's a clean, well-structured template with SEO and accessibility already configured.

**Important: do not copy the personal content** — copy, images, projects, and contact details belong to Valentina Ramírez and are not covered by the license.

### What to Replace

| File                                     | What to change                                                                                                    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `src/layouts/Layout.astro`               | Default title, description, site URL, JSON-LD (name, jobTitle, worksFor, sameAs), GA ID, Google Site Verification |
| `src/components/sections/Hero.astro`     | Name, description, specialty chips, CV URL, social links                                                          |
| `src/components/sections/Projects.astro` | All projects (title, tag, stack, problem, solution, links)                                                        |
| `src/components/sections/Stack.astro`    | Stack categories and tools                                                                                        |
| `src/components/sections/About.astro`    | Bio, personal quote, additional links                                                                             |
| `src/components/sections/Contact.astro`  | Contact email                                                                                                     |
| `src/components/ui/NavBar.astro`         | CTA email, external blog/resource URL                                                                             |
| `src/components/ui/Footer.astro`         | Your name in copyright, external links                                                                            |
| `astro.config.mjs`                       | `site:` with your production URL                                                                                  |
| `public/sitemap.xml`                     | URL, `lastmod` date                                                                                               |
| `public/robots.txt`                      | Sitemap URL if domain changes                                                                                     |
| `public/images/profile.webp`             | Your profile photo (640×640px recommended)                                                                        |
| `public/brand/logo-w.*`                  | Your logo                                                                                                         |
| `public/cv_*.pdf`                        | Your CV                                                                                                           |

The design system (tokens, typography, utilities) is built to adapt by changing values in `src/styles/tokens.css` without touching components.

---

## License

MIT — the **code** is free to use, modify, and distribute.

The **content** (copy, images, projects, and personal data) belongs to Valentina Ramírez and is not covered by this license.

---

Made by [Valentina Ramírez](https://github.com/wavival) · [luminaw.co](https://luminaw.co)
