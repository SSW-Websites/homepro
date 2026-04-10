# HomePro Stairlifts Landing Page

## Overview
A lead-generation landing page for a local stairlift installation business, migrated from Figma to Replit.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Radix UI, Wouter (routing), TanStack Query
- **Backend**: Express 5 (TypeScript), Node.js
- **Database/ORM**: Drizzle ORM with PostgreSQL, Zod validation
- **Dev Tools**: tsx, drizzle-kit

## Project Structure
- `client/` - React frontend (Vite + Tailwind)
  - `client/src/pages/MacbookPro.tsx` - Main landing page component
  - `client/src/index.css` - Global styles, CSS variables, animations
- `server/` - Express backend
  - `server/index.ts` - Server entry point
  - `server/routes.ts` - API route definitions
  - `server/storage.ts` - Data access layer
- `shared/` - Shared schemas (Drizzle ORM + Zod)
- `public/figmaAssets/` - Exported Figma images and assets

## Key Features
- Responsive layout (mobile, tablet, desktop)
- Clickable "Call Now" buttons with tel: links (678-909-9558)
- "Get Your Free Quote" button scrolls to lead capture form
- Google Rating badge (4.9 stars)
- Semantic HTML with accessibility attributes
- Stats section (27,000+ customers, 8,000+ zip codes, 4.9/5 rating, 1,000+ reviews)
- Trust section with feature grid and "Start with a Conversation" card
- 6-step roadmap section (dark blue background)
- Product showcase with 3 product cards (Straight, Curved, Outdoor)
- Model comparison table
- FAQ section with 4 questions/answers
- Final CTA section with Call Now and Get Quote buttons
- Footer with copyright

## Scripts
- `npm run dev` - Start dev server (port 5000)
- `npm run build` - Production build
- `npm run db:push` - Push Drizzle schema to database
