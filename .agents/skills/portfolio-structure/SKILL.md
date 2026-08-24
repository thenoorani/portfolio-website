---
name: portfolio-structure
description: >-
  The foundational layout and design architecture of the user's React Portfolio. 
  Read this skill whenever you need to add new experiences, gallery images, PDFs, 
  or modify the grid layout, typography, or mobile views.
---

# Portfolio Design & Architecture Guide

## 1. Typography & Fonts
- **Source of Truth:** The user designs in InDesign. Font weights, spacing, and grids must be exact.
- **Font Implementation:** Do NOT use standard CSS font-weights (e.g., `font-weight: 300`). They fail to map correctly on macOS webkit. Instead, use explicit PostScript font names in `index.css` (e.g., `font-family: "HelveticaNeue-Thin"`, `HelveticaNeue-Medium`, `HelveticaNeue-Light`).

## 2. Layout & Grid System
- **Desktop Grid:** The layout relies on CSS Grid (`.cv-grid`) defining a `145px` left column (for dates), a `20px` gap, and a `1fr` right column (for content).
- **Date Formatting:** Period dates must have a line break inserted after the em-dash to match the InDesign spec (e.g., `2018 –<br/>2023`).
- **Section Order:** Header -> Bio -> Professional Experience -> Awards & Public Engagement -> Personal Work -> Educational Experience.
- **Mobile Viewport Hack:** DO NOT use `@media` queries to collapse the layout into a single column. The site uses a hardcoded `<meta name="viewport" content="width=712" />` in `index.html`. This forces mobile devices to render the strict InDesign 4-column layout and natively zoom out, preserving the side-by-side date column.

## 3. Gallery Scrolling Architecture
- **Full-Bleed Scroll:** `.gallery-scroll` uses `width: 100vw` with negative margins to break out of its container and bleed to the edges of the screen.
- **Alignment:** It uses calculated `padding-left` to start the content perfectly on the grid, and `padding-right: 640px` to enforce the user's requirement that scrolling stops at the "4th grid line from the right".
- **Height:** The container requires a strict `min-height: 278px` so vertical rhythm doesn't collapse on text-only rows.

## 4. Media Components & Interactivity
The site uses a React `useState` full-screen lightbox modal for all media. Use these components when adding content:
- **Images:** `<MediaImage src="/file.jpg" alt="Description" className="gallery-square" />`
  - *Sizing classes:* `.gallery-square` (309x278) and `.gallery-landscape`. They use `object-fit: cover` by default.
  - *Fit to Cell:* If the user wants a diagram or photo to "fit" without cropping, apply inline styles: `style={{ objectFit: 'contain', backgroundColor: 'white' }}`.
- **Videos:** `<MediaVideo src="/file.mov" className="gallery-landscape" />`
  - Autoplays, loops, and is muted in the gallery row. When clicked, it opens as a controllable video in the lightbox.
- **PDFs:** `<MediaPdf src="/file.pdf" thumbnailSrc="/thumb.jpg" alt="Doc" className="gallery-square" />`
  - PDFs render as a static image thumbnail in the gallery (with a hidden overflow so it fits the cell horizontally without scrolling). 
  - When clicked, they open natively as a vertically scrolling `iframe` inside the lightbox.
  - *Note:* You must generate the `thumbnailSrc` (usually the first page) yourself using a tool like Python `PyMuPDF` before adding the component.
