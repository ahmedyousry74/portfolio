# Ahmed Yousry — Portfolio

Personal portfolio of **Ahmed Yousry**, Frontend Developer (Vue.js / Nuxt.js), based in Cairo, Egypt.

Built with **Nuxt 3** and **Tailwind CSS**, with a focus on clean UI, smooth animations, performance and SEO.

## Features

- Nuxt 3 (SSR) + Tailwind CSS + TypeScript
- Animated hero with letter reveal, self-typing code card and 3D tilt
- Scroll-reveal, spotlight hover and tilt directives (`v-reveal`, `v-spotlight`, `v-tilt`)
- Smooth scrolling with Lenis
- Scroll-linked experience timeline, project case-study modal, filterable project grid
- Fully responsive, `prefers-reduced-motion` aware, JSON-LD structured data

## Getting started

Requires **Node 20.19+ / 22** (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run generate  # static site (for GitHub Pages / Netlify / Vercel)
```

## Project structure

```
assets/css/main.css      global styles, utilities, reveal/spotlight animations
components/              one component per section + shared UI (AppIcon, CountUp, …)
data/cv.ts               all CV content (profile, experience, projects, skills)
plugins/directives.ts    v-reveal, v-spotlight, v-tilt
plugins/lenis.client.ts  smooth scrolling
public/                  favicon + downloadable CV
```

## Contact

- Email: ayousry750@gmail.com
- LinkedIn: https://www.linkedin.com/in/ahmed-yousry-45669b1b5/
- GitHub: https://github.com/ahmedyousry74
