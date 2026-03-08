# Conor's Portfolio

Personal portfolio site and newsletter with **The Daily Ship** as the flagship project, plus XRA, Program-Pit, and more.

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Conor Collins — Portfolio
Personal portfolio site showcasing The Daily Ship (flagship project), previous work, and a weekly newsletter. Built with Next.js, deployed on Vercel.
Stack

Framework: Next.js 14 (App Router, JavaScript)
Styling: Tailwind CSS
Database: Supabase (waitlist + newsletter subscribers)
Email: Resend (newsletter notifications)
Hosting: Vercel
Fonts: DM Sans, IBM Plex Sans, JetBrains Mono

Pages

/ — The Daily Ship hero, waitlist signup, feature overview
/projects — Project cards (The Daily Ship, XRA, Program-Pit, Mechanic site)
/newsLetter — Weekly build updates with browse-by-date sidebar
/newsLetter/[slug] — Individual newsletter posts (markdown-based)
/about — Bio, tech stack, social links

Newsletter
Posts are markdown files in content/newsletter/. Add a new post:
---
title: "Your Title"
date: "2026-03-24"
summary: "A short preview for the email."
---

Your content here...
Commit and deploy — the post appears automatically.
Sending email notifications
bashcurl.exe -X POST https://your-site.vercel.app/api/send-newsletter -H "Content-Type: ap