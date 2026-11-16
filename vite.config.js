import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/config/site.js';

function portfolioMetadata() {
  return {
    name: 'portfolio-metadata',
    transformIndexHtml(html) {
      const title = `${site.identity.fullName} — ${site.identity.profession}`;
      const description = site.seoDescription;
      const canonical = site.websiteUrl
        ? `<link rel="canonical" href="${site.websiteUrl}" />`
        : '';
      const image = site.websiteUrl
        ? `${site.websiteUrl.replace(/\/$/, '')}${site.identity.portrait}`
        : site.identity.portrait;
      const tags = [
        `<meta name="description" content="${description}" />`,
        `<meta name="theme-color" content="${site.appearance.background}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<link rel="icon" type="image/svg+xml" href="${site.identity.favicon}" />`,
        canonical,
      ].filter(Boolean).join('\n    ');
      return html
        .replace('<!-- PORTFOLIO_METADATA -->', tags)
        .replace('<title>Portfolio</title>', `<title>${title}</title>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), portfolioMetadata()],
  build: { target: 'es2022', outDir: 'dist', assetsDir: 'assets' },
});
