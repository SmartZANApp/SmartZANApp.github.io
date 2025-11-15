# Zaneo Website

A modern, elegant single-page scrolling website with smooth animations and responsive design.

## Features

- ✨ Smooth scroll-based reveal animations using Framer Motion
- 📱 Fully responsive design (desktop + mobile)
- 🌐 Language toggle (FR ↔ EN)
- 🎯 Mode toggle (Coach Mode ↔ Physiotherapist Mode)
- 🎨 Clean, minimal design with soft shadows and rounded corners
- 📐 Alternating left-right section layout

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your assets to the `public` folder:
   - `adherence_to_digital.png`
   - `zaneo_ai.mp4`
   - `team.png`

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── public/              # Static assets (images, videos)
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Header with mode and language toggles
│   │   └── Section.jsx  # Reusable section component with animations
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html
├── package.json
└── vite.config.js
```

## Technologies

- React 18
- Vite
- Framer Motion
- Tailwind CSS

