# Legacy React SPA to Next.js Migration Demo

This repo demonstrates a staged migration from a legacy React SPA to Next.js.

## Structure

- `app/` - Next.js App Router pages (migrated routes live here)
- `app/legacy/[[...slug]]/page.tsx` - catch-all route that mounts the legacy SPA
- `legacy/` - full legacy React app with Redux + React Router

## What to see

- `/` and `/about` are native Next.js pages (no React Router)
- `/legacy/*` still uses the React Router-driven legacy SPA
- `/legacy/mails` is protected by legacy auth and uses query params

## Run

```bash
npm install
npm run dev
```
