# Project Guidelines & Coding Standards

## Project Overview
"OBSIDIAN" is a high-end restaurant website with a "Noir & Luxe" aesthetic. It functions as a mood piece, prioritizing cinematic visuals, atmospheric design, and smooth animations over standard informational layouts. The site is a Single Page Application (SPA) built with React.

## Tech Stack
- **Framework:** React 18+
- **Build Tool:** Vite (implied environment)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (import from `motion/react`)
- **Routing:** React Router DOM (`react-router-dom`)
- **Icons:** Lucide React (`lucide-react`)
- **Fonts:** Google Fonts (Cinzel, Lato) via CSS import

## Directory Structure
```
/
├── App.tsx                 # Main application entry point & routing
├── components/
│   ├── figma/              # Figma specific components (ImageWithFallback)
│   ├── home/               # Home page specific sections (Hero, Philosophy, etc.)
│   ├── layout/             # Global layout components (Layout.tsx, Nav, Footer)
│   └── ui/                 # Shadcn UI reusable components
├── data/
│   └── content.ts          # Centralized text and image content
├── pages/                  # Page components (HomePage, MenuPage, GalleryPage)
├── styles/
│   └── globals.css         # Global Tailwind v4 configuration and base styles
└── guidelines/
    └── Guidelines.md       # This file
```

## Coding Standards

### 1. Component Structure
- **Functional Components:** Use React functional components with hooks.
- **Exports:** Use named exports (e.g., `export const ComponentName = () => {}`).
- **Imports:**
  - Use relative paths for internal imports (e.g., `../../data/content`).
  - **Crucial:** Do NOT use `@/` aliases. Always calculate relative paths.
  - Motion: `import { motion } from "motion/react";`

### 2. Styling (Tailwind CSS & Design System)
- **Theme Colors:**
  - Background: `#0A0A0A` (Deep Black)
  - Text: `#F5F5F5` (Off-White)
  - Accent: `#D4AF37` (Gold)
  - Overlay: `bg-black/60`
- **Fonts:**
  - Headings: `font-serif` (Cinzel) - Tracking widest/upper case often used.
  - Body: `font-sans` (Lato) - Tracking wide/light weight often used.
- **Typography Classes:**
  - Use `tracking-[0.2em]` or similar for the "luxurious" spaced look.
  - Use `uppercase` for headings and labels.
  - Use `font-light` or `opacity-80` for body text to maintain elegance.
- **Tailwind v4:**
  - Configuration is inline in `styles/globals.css` using `@theme`.
  - Do not look for `tailwind.config.js`.

### 3. Animation (Motion)
- Use `motion.div`, `motion.section`, etc., for animated elements.
- **Standard Reveal:**
  - `initial={{ opacity: 0, y: 20 }}`
  - `whileInView={{ opacity: 1, y: 0 }}` (or `animate` for hero)
  - `transition={{ duration: 0.8, ease: "easeOut" }}`
- **Viewport:** Use `viewport={{ once: true }}` for scroll-triggered animations to avoid repetitive triggering.

### 4. Data Management
- **Separation of Concerns:** All static content (text, links, image URLs) must be stored in `data/content.ts`.
- **Usage:** Import `siteContent` in components:
  ```tsx
  import { siteContent } from "../../data/content";
  const { sectionName } = siteContent;
  ```

### 5. Routing
- Use `react-router-dom`.
- **Links:**
  - Use `<Link to="/path">` for internal navigation.
  - Use `<a>` tags or `Link` with hash (e.g., `to="/#section"`) for scroll targets, but ensure `ScrollToTop` logic in `App.tsx` handles hash scrolling.

## Design Principles ("Noir & Luxe")
1.  **Negative Space:** Don't crowd the UI. Use large padding (`py-32`, `px-12`).
2.  **Contrast:** High contrast between text and background, but softened by opacity or off-white colors.
3.  **Broken Grid:** Elements should overlap or be offset (e.g., text overlapping images) to create interest.
4.  **Cinematic:** Use full-width images, slow pans (scale effects), and dramatic lighting/overlays.
5.  **Typography:** Typography is treated as a graphic element.

## Reusability Guidelines
- When creating new sections, check `components/ui` for existing primitives (Buttons, Inputs, etc.) provided by Shadcn.
- If modifying the layout, ensure the `Layout` component in `components/layout/Layout.tsx` is wrapped around page content.
- Images should always have an `alt` prop, preferably sourced from `content.ts`.

## Common Patterns
**Hero Section Pattern:**
```tsx
<section className="h-screen relative overflow-hidden">
  <BackgroundParallaxImage />
  <ContentOverlay>
    <MotionTitle />
    <MotionSubtitle />
  </ContentOverlay>
</section>
```

**Section Header Pattern:**
```tsx
<div className="text-center mb-24">
  <h2 className="text-5xl font-serif tracking-widest uppercase">{title}</h2>
  <div className="w-px h-24 bg-[#D4AF37] mx-auto mt-8" />
</div>
```
