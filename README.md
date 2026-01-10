# Speak AI - Mastering Prompting Landing Page

A high-converting, single-page landing website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌓 Light & Dark mode support
- 🎨 Gradient animations & microinteractions
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 & React 18
- 🎭 Smooth animations with Framer Motion
- 🎯 Optimized for conversions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── InteractivePrompts.tsx
│   │   ├── PainAndGap.tsx
│   │   ├── InsideTheBook.tsx
│   │   ├── AboutAuthor.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── AnimatedBackground.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── public/
    └── Prompt 1.png         # Book cover image
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

- Blue: #053879
- Pink: #E94979
- Cyan: #28A0D4
- Orange: #FC8831

### Content

All content can be edited in the respective component files in `components/sections/`.

### CTA Link

The purchase link is set to: `https://selar.com/v7h7963l65`

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Icons:** lucide-react

## License

© 2026 Speak AI. All rights reserved.
