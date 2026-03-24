# XXL Sports Center

Marketing landing page for XXL Sports Center built with React, Vite, Tailwind CSS v4, and Motion.

## Overview

This project is a single-page gym website focused on:

- bold premium visual design
- smooth section reveals and hover interactions
- mobile-friendly responsive layout
- lightweight production output

The page is split into these sections:

- hero
- about
- facilities
- membership
- gallery
- trainers
- map / contact
- call to action
- footer

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Motion (`motion/react`)
- Lucide icons

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will start a local development server and print the local URL in the terminal.

### Production build

```bash
npm run build
```

The compiled production files are generated in [`/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/dist`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/dist).

## Project Structure

```text
src/
  app/
    App.tsx
    components/
      Hero.tsx
      About.tsx
      Facilities.tsx
      Membership.tsx
      Gallery.tsx
      Trainers.tsx
      Map.tsx
      CTA.tsx
      Footer.tsx
      Navbar.tsx
      hooks/
        useInView.tsx
  styles/
    index.css
    fonts.css
    tailwind.css
    theme.css
```

## Important Files

- [`App.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/App.tsx): page composition and section order
- [`Navbar.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Navbar.tsx): sticky navigation and mobile menu
- [`Hero.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Hero.tsx): top fold and primary CTA
- [`useInView.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/hooks/useInView.tsx): one-time section reveal trigger
- [`theme.css`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/styles/theme.css): custom visual system, motion tuning, neon/glass styles

## Editing Content

Most page content is hardcoded directly inside the section components.

Update these files to change content:

- gym story and feature points: [`About.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/About.tsx)
- facility cards: [`Facilities.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Facilities.tsx)
- pricing plans: [`Membership.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Membership.tsx)
- gallery items: [`Gallery.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Gallery.tsx)
- trainer profiles: [`Trainers.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Trainers.tsx)
- address, phone, map embed: [`Map.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/Map.tsx)
- final conversion section: [`CTA.tsx`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/app/components/CTA.tsx)

## Styling

Global styling is assembled through [`index.css`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/styles/index.css), which imports:

- [`fonts.css`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/styles/fonts.css)
- [`tailwind.css`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/styles/tailwind.css)
- [`theme.css`](/Users/danispreldzic/Desktop/Danis/PROJECTS/DiskoGym/src/styles/theme.css)

Custom utility classes defined in `theme.css` include:

- `.neon-text`
- `.neon-button`
- `.glass-card`
- `.glass-button`
- `.neon-border`
- `.interactive-surface`
- `.media-zoom`
- `.ambient-glow`

## Animation and Performance Notes

This project uses Motion for section entrances and CSS transitions for hover behavior.

Current performance guardrails:

- section observers disconnect after the first reveal
- navbar scroll updates are throttled with `requestAnimationFrame`
- heavy hover scaling was reduced to smaller transforms
- images outside the hero use lazy loading and async decoding
- reduced-motion users get motion minimization through CSS
- ambient background effects use static blurred layers instead of constant pulse animations

When adding new motion:

- prefer `transform` and `opacity`
- avoid large animated `blur()`, `box-shadow`, and `text-shadow` effects
- avoid stacking multiple infinite animations on the same screen
- lazy load non-critical images

## Images and External Assets

The current implementation uses remote Unsplash images and Google Fonts.

For production-hardening, consider replacing them with local optimized assets so you get:

- better load consistency
- less third-party dependency risk
- better caching control
- lower layout and decode variability

## Deployment

This is a standard static Vite app. Any host that can serve static files will work, including:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages

Typical deployment flow:

```bash
npm install
npm run build
```

Then deploy the contents of `dist/`.

## Known Improvement Areas

- replace remote images with compressed local assets
- replace remote placeholder imagery with real XXL Sports Center media
- connect CTA buttons to a real form, checkout, or lead funnel
- review Google Maps embed details against the real business location
- add automated linting and test scripts if this project will keep evolving

## Source

This codebase originated from a Figma export and has since been refined into a smoother, more production-ready landing page implementation.
