# James Fei-Baffoe — Portfolio

[![CI](https://github.com/James23xr/react-portfolio-James/actions/workflows/ci.yml/badge.svg)](https://github.com/James23xr/react-portfolio-James/actions/workflows/ci.yml)

Personal portfolio of **James Bernard Amoah Fei-Baffoe** — software engineer and Computer Science & Mathematics student at Colby College. SWE Intern at LinkedIn (Summer 2026), previously at Gusto; first-place winner of JPMorgan Chase's Code for Good hackathon.

**Live site:** [jamesfeibaffoe.vercel.app](https://jamesfeibaffoe.vercel.app/)

## Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) — fast SPA with instant HMR
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered animations with `prefers-reduced-motion` support
- [React Icons](https://react-icons.github.io/react-icons/) — technology and social iconography

## Highlights

- **Single source of truth** — all content (experience, projects, education, links) lives in [`src/constants/index.js`](src/constants/index.js); components are purely presentational
- **SEO-ready** — Open Graph and Twitter cards, canonical URL, JSON-LD `Person` structured data, `robots.txt`, and `sitemap.xml`
- **Accessible** — semantic landmarks, skip-to-content link, ARIA labels on icon-only controls, visible focus rings, and animations that respect reduced-motion preferences
- **Performance-conscious** — no heavy 3D dependencies, lazy-loaded below-the-fold images with explicit dimensions to prevent layout shift
- **CI** — every push and pull request is linted and built via GitHub Actions

## Getting Started

```bash
git clone https://github.com/James23xr/react-portfolio-James.git
cd react-portfolio-James
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint (zero-warning policy)     |

## Project Structure

```
├── .github/workflows/   # CI (lint + build)
├── public/              # Static assets: resume, favicon, OG image, robots, sitemap
├── src/
│   ├── assets/          # Images
│   ├── components/      # Presentational React components
│   ├── constants/       # All site content and links (single source of truth)
│   ├── App.jsx          # Page layout and section composition
│   └── main.jsx         # Entry point
└── index.html           # SEO meta, fonts, structured data
```

## Deployment

Deployed on [Vercel](https://vercel.com/). Every push to `main` triggers a production deployment; the build is also verified in CI.

## Contact

- **Email:** [jbfeib27@colby.edu](mailto:jbfeib27@colby.edu)
- **LinkedIn:** [james-fei-baffoe](https://www.linkedin.com/in/james-fei-baffoe/)
- **GitHub:** [James23xr](https://github.com/James23xr)
