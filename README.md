# The Helping Hands — Production Website

Modern Next.js website for The Helping Hands, focused on a clean, trustworthy service-business experience.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Next/Image for optimized local imagery
- App Router

## UI upgrade

The redesign introduces:

- Professional sticky navigation with desktop/mobile layouts
- Stronger visual hierarchy and conversion-focused hero
- Accessible CTA buttons for quote requests and WhatsApp
- Responsive service-business layout
- Trust/stat strip below the hero
- Modern cards, spacing, borders, shadows and typography
- Responsive footer with clear contact/navigation sections
- Reduced-motion support
- Cleaner SEO metadata and canonical URL
- LocalBusiness structured data without placeholder Google Business links
- Preserved existing service, gallery, FAQ and company-profile routes

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm start
```

## Deployment

The project is compatible with standard Next.js hosting, including Vercel and Node.js hosting.

Before launch, verify the business address, service areas, phone numbers, email address, company profile PDF and all production URLs.
