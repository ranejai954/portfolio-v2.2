# Jai Rane — Cinematic Cybersecurity Portfolio

A responsive, static personal portfolio with a reference-led editorial hero: oversized crimson typography, a layered portrait, compact navigation, restrained grain, and a dark near-black visual system. The site is an original implementation inspired by the screenshot and design notes supplied by the owner; it does not reuse the reference site's source code or personal content.

## Stack

- React 19 + Vite
- Framer Motion 12
- Lucide React
- Vanilla CSS and CSS custom properties
- Static deployment; no backend or database required

## Run locally

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The deployable website is generated in `dist/`. Upload the contents of `dist/` to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or another static host.

## Edit personal content

- `src/config/site.js` — identity, headline, bio, location, email, portrait, favicon, SEO description, theme values, and Motion preference key.
- `src/data/projects.js` — project titles, descriptions, roles, tools, years, images, and optional live/source links.
- `src/data/experience.js` — internships, education, coursework, skills, and certifications.
- `src/styles.css` — layout, typography, colors, responsive breakpoints, and visual effects. The reference-inspired hero styles are grouped near the end of the file under `Reference-led cinematic hero`.
- `public/assets/` — portrait, project covers, logo, and résumé.

The Vite metadata plugin reads `src/config/site.js` to generate the page title, SEO/Open Graph metadata, favicon link, and canonical URL. A canonical tag is omitted until `websiteUrl` is set to the real deployed domain.

## Contact form

The form performs browser-side required-field validation and opens the visitor's default email application with a pre-filled `mailto:` draft. It does not send or store messages on a server.

## Motion and accessibility

The header Motion control toggles Framer Motion reveals and the ambient ticker animation. Its preference is stored under the site-specific key in `src/config/site.js`. The site also respects `prefers-reduced-motion`. Navigation, project cards, dialogs, and form controls are keyboard accessible; press Escape to close the mobile menu or project dialog.

## Before publishing

1. Set `websiteUrl` in `src/config/site.js` to the actual deployed domain.
2. Review the public email and project descriptions.
3. Add or remove verified social profile URLs in `src/config/site.js` as desired.
4. The résumé is stored at `public/assets/resume.pdf` and linked from the header and hero section. Replace that file to update the downloadable résumé.
5. Run `npm install`, `npm run build`, and test at 320px, 390px, 768px, and desktop widths before publishing.
