# Open Graph / Social Preview Builder

A static, client-side builder to design a 1200×630 Open Graph image, preview it, export a PNG, and copy OG/Twitter meta tags.

## Run locally
Open `index.html` in your browser.

## Deploy on GitHub Pages
1. Create a repo (for example `og-preview-builder`)
2. Commit these files to the repo root
3. In GitHub: Settings → Pages
4. Source: Deploy from branch
5. Branch: `main` / root
6. Your site will be available at `https://<username>.github.io/<repo>/`

## Notes
- If PNG export fails when using remote images, it is usually a CORS restriction. Use images hosted with permissive CORS headers or remove background/logo URLs.
