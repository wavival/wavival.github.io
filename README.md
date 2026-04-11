# Valentina Ramírez | Personal Portfolio

> Third iteration of my personal portfolio. Built with performance, clean code, and UX principles.

![Portfolio Preview](/public/images/mockup.png)

[![Deploy](https://github.com/wavival/wavival.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/wavival/wavival.github.io/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-wavival.github.io-1e90ff?style=flat)](https://wavival.github.io)

## About

Personal portfolio of **Valentina Ramírez**, Backend Developer, AppSec enthusiast, and Founder of [Lúmina W](https://luminaw.co).

Built to showcase real projects, technical stack, and professional identity, not just a résumé, but a reflection of how I think and build.

## Features

- Static site with Astro 5.
- Design tokens & custom utility classes with Tailwind CSS v3.
- Dark / Light mode with `localStorage` persistence.
- Fully responsive, mobile menu included.
- Semantic HTML & accessible components.
- Auto-deploy via GitHub Actions to GitHub Pages.

## Brand Colors

| Name | Hex |
|------|-----|
| Brand Blue | `#407bff` |
| Dark | `#1b1f28` |
| Light | `#dee9ff` |

## Structure

```
src/
  components/
    sections/       # Hero · Projects · Stack · About · Contact
    ui/             # Button · Link · NavBar · Footer · Chip
  layouts/          # Base layout
  pages/            # index.astro · 404.astro
  scripts/          # nav.ts · theme.ts
  styles/           # global.css · tokens.css · utilities.css
public/
  brand/            # Logo & favicon
  icons/ui/         # SVG icons
  images/           # Profile & project images
```

## Tech Stack

- [Astro 5](https://astro.build)
- [Tailwind CSS v3](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Getting Started

You're welcome to clone this repo for inspiration. Please don't copy the content (copy, images, or personal data).

```bash
git clone https://github.com/wavival/wavival.github.io.git
cd wavival.github.io
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Deploy

Automatic deploy to GitHub Pages on every push to `main` via GitHub Actions.

## License

MIT. Use the code freely, but keep the content yours.

Made by [Valentina Ramírez](https://github.com/wavival)