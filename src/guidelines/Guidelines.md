# Project Guidelines

## 1. Project Overview
"OBSIDIAN" is a high-end restaurant website with a "Noir & Luxe" aesthetic. It functions as a mood piece, prioritizing cinematic visuals, atmospheric design, and smooth animations over standard informational layouts. The site is a Single Page Application (SPA) built with React.

**Key Aesthetics:**
- **Noir & Luxe:** Deep blacks, gold accents, dramatic lighting.
- **Cinematic:** Full-screen visuals, slow pans, parallax effects.
- **Editorial:** High-contrast typography, broken grid layouts, extensive negative space.
- **Atmospheric:** Focus on mood and feeling rather than dense information.

## 2. Tech Stack
- **Framework:** React 18+
- **Build Tool:** Vite (implied environment)
- **Styling:** Tailwind CSS v4 (configured via CSS variables and `@theme`)
- **Animations:** Motion (import from `motion/react`)
- **Routing:** React Router DOM (`react-router-dom`)
- **Icons:** Lucide React (`lucide-react`)
- **Fonts:** Google Fonts (Cinzel for headings, Lato for body) via CSS import

## 3. Design System & Tokens

### Colors
- **Background:** `#0A0A0A` (Deep Black) - Used for main page backgrounds.
- **Text (Primary):** `#F5F5F5` (Off-White) - Used for headings and high-contrast text.
- **Text (Secondary):** `#F5F5F5` at 80% opacity or similar - Used for body text.
- **Accent:** `#D4AF37` (Gold) - Used for buttons, borders, lines, and highlights.
- **Overlay:** `bg-black/60` - Standard overlay for text readability over images.

### Typography
- **Headings:** `font-serif` (Cinzel)
  - Often `uppercase`, `tracking-widest` (or `tracking-[0.2em]`).
  - Used for section titles, hero headers.
- **Body:** `font-sans` (Lato)
  - Often `font-light`, `tracking-wide`.
  - Used for paragraphs, navigational links, small labels.

### UI Patterns
- **Broken Grid:** Layouts where images and text overlap or are asymmetrically aligned.
- **Vertical Lines:** Usage of thin vertical lines (`w-px bg-[#D4AF37]`) to guide the eye.
- **Interactive Borders:** Buttons often feature hover effects with sliding backgrounds or border color changes.
- **Parallax:** Background images moving at different speeds than foreground content.

## 4. Project Structure
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

## 5. Coding Standards

### Data Driven
- **Centralized Content:** All text, links, and image URLs must be stored in `data/content.ts`.
- **Import Pattern:**
  ```tsx
  import { siteContent } from "../../data/content";
  const { sectionName } = siteContent;
  ```
- **Avoid Hardcoding:** Do not hardcode text inside components unless it is purely structural (e.g., a separator character).

### Styling
- **Tailwind v4:** Use standard Tailwind classes.
- **Overrides:** explicit styling (e.g., `tracking-[0.2em]`) is often needed to override default user agent styles to match the luxury aesthetic.
- **Responsive:** Always use mobile-first approaches (`md:`, `lg:` prefixes) but default to the mobile view.

### Images
- **Alt Text:** Must be provided, preferably from the data file.
- **Fallbacks:** Use `ImageWithFallback` if there is risk of broken links, or standard `img` tags if using reliable imports.
- **Styling:** Images often have `grayscale` filters that vanish on hover (`grayscale hover:grayscale-0`).

### Routing
- **Internal Links:** Use `Link` from `react-router-dom`.
- **Scroll Anchors:** For on-page navigation (e.g. "Philosophy" section on Home), handle scrolling via hash links or programmatic scrolling.
- **Path Resolution:**
  - **CRITICAL:** Use relative paths for internal imports (e.g., `../../components/ui/button`).
  - **FORBIDDEN:** Do NOT use `@/` aliases.

## 6. Extension Guidelines
- **Adding Sections:** Create new components in `components/` (or specific subfolders like `components/home/`).
- **Animation Consistency:**
  - Use `motion/react`.
  - Standard reveal: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}`.
  - Use `viewport={{ once: true }}` to keep the experience calm and not chaotic on scroll up/down.
- **New Pages:**
  - Create page component in `pages/`.
  - Add route in `App.tsx`.
  - Wrap page content in `<Layout>` to ensure Nav and Footer are present.
