# Adith Vasu Portfolio

Hello

A responsive React portfolio site built with TypeScript and Vite. The current
interface is a polished starter experience that introduces the project with a
layered React/Vite hero graphic, an interactive counter, documentation links,
and community links.

## Highlights

- Responsive layout that adapts the split documentation and social sections
  for smaller screens.
- Light and dark color schemes driven by the user's system preference.
- Interactive counter component demonstrating React state management.
- Layered hero artwork created with CSS perspective and 3D transforms.
- Reusable SVG sprite icons loaded from `public/icons.svg`.
- Fast local development with Vite Hot Module Replacement (HMR).

## Tech stack

- React 19
- TypeScript 6
- Vite 8
- ESLint 10 with flat configuration
- Lightning CSS through the Vite pipeline
- SVG assets and CSS custom properties for the visual system

## Getting started

### Prerequisites

- Node.js 20.19 or newer (or 22.12 or newer)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal. Open it in a browser to view
the site, and edit files in `src/` to see changes immediately through HMR.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Runs the TypeScript project build and creates a production bundle in `dist/`. |
| `npm run lint` | Checks the project with ESLint. |
| `npm run preview` | Serves the production bundle locally for verification. |

## Project structure

```text
.
├── public/
│   ├── favicon.svg       # Browser favicon
│   └── icons.svg         # Shared SVG icon sprite
├── src/
│   ├── assets/           # Hero and framework artwork
│   ├── App.tsx           # Main page layout and interactive state
│   ├── App.css           # Component layout and responsive styles
│   ├── index.css         # Global theme, typography, and reset styles
│   └── main.tsx          # React application entry point
├── index.html            # Vite HTML shell
└── package.json          # Dependencies and development scripts
```

## Customization

The main page content and links live in `src/App.tsx`. Global colors,
typography, dark-mode behavior, and layout defaults are defined in
`src/index.css`, while the hero composition and responsive sections are
defined in `src/App.css`. Replace the files in `src/assets/` and update the
corresponding imports when adding your own visual identity.

## Production build

Create an optimized production bundle with:

```bash
npm run build
```

The generated files are written to `dist/` and can be deployed to any static
hosting provider that supports a client-side Vite application.
