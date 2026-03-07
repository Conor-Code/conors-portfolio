# Conor's Portfolio

Personal portfolio site with **The Daily Ship** as the flagship project, plus XRA, Proof of Push, and more.

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect Next.js — just click Deploy
4. (Optional) Connect your custom domain in Vercel settings

## TODOs

- [ ] Replace profile photo placeholder in `/app/about/page.js` with actual image (add to `/public/`)
- [ ] Add actual Chrome Web Store link for XRA in `/app/projects/page.js`
- [ ] Wire up waitlist form to Supabase or Formspree in `/components/WaitlistForm.js`
- [ ] Add project screenshots/demos
- [ ] Add OG image for social sharing
- [ ] Add any live links for projects

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans, IBM Plex Sans, JetBrains Mono (via Google Fonts)
- **Hosting**: Vercel
