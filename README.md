# TORNATO website

React + Vite frontend for the TORNATO snack brand.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then test it locally with `npm run preview`.

## Before publishing

1. Put the supplied, unmodified official logo at `public/assets/tornato-logo.png`. The logo was not included with the pasted brief; the site deliberately shows an explicit placeholder until this asset is supplied.
2. Replace every `*_HERE` value in `src/data/products.ts` with approved product, marketplace, contact and legal information.
3. Add final legal copy to the corresponding pages.

## Deploy

Push this project to GitHub, import it in Vercel or Netlify, and use the default Vite build settings: build command `npm run build`, publish directory `dist`. The included `_redirects` file supports client-side routes on Netlify. For Vercel, the SPA fallback works from the static deployment configuration.

## Extending products

Add a product object to `src/data/products.ts`; product cards automatically appear on the site. A dedicated route can then be added in `src/main.tsx`. Marketplace URLs remain centralized per product, which keeps a future direct-commerce layer isolated from the present marketplace CTAs.
