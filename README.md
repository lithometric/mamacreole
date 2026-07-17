# mamacreole
Business: https://www.google.com/maps/place/?q=place_id:ChIJU4DUfdGtw4kRhGfL552zG34

Marketing site for **Mama Creole** — Haitian & Caribbean restaurant, 1029 Stuyvesant Ave., Union, NJ 07083 — generated from the business's public Google listing. The Next.js app lives in [`nextjs-app/`](nextjs-app/).

## Local development

```bash
cd nextjs-app
npm install
npm run dev
```

## Deploying to Vercel

- **Root Directory** = `nextjs-app` (set this at project import time or via the Vercel CLI/dashboard — Vercel does not read the root directory from `vercel.json`)
- **Build command** = `npm run build`
- Framework preset: Next.js (auto-detected)

## Content notes

- All facts on the site (name, address, phone, hours, dishes, review snippets) come from the business's public listings; nothing is invented.
- Photos in `nextjs-app/public/photos/` are still frames from Mama Creole's own public TikTok videos (@mama.creole) — the business's own promotional footage — re-hosted with the owner's permission (relayed by the client, July 2026). See `nextjs-app/lib/photos.ts`.
- No Google Maps photos, reviewer-uploaded photos, or third-party directory images are used or hotlinked anywhere. Decorative art is original CSS/SVG.
