# Adminizer — Modern Admin Panel for Node.js

Framework-agnostic, open-source admin panel for Node.js with a TypeScript backend and React frontend. Build robust dashboards with ease.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- React
- Tailwind CSS + shadcn/ui
- TanStack Query

## Getting Started

Prerequisites: Node.js (LTS) and npm. We recommend installing via nvm: https://github.com/nvm-sh/nvm#installing-and-updating

```sh
# 1) Install dependencies
npm install

# 2) Start development server
npm run dev

# 3) Build for production
npm run build

# 4) Start production server (after build)
npm start
```

## Project Scripts

- `npm run dev`: Run Next.js in development mode
- `npm run build`: Build the production bundle
- `npm start`: Serve the production build
- `npm run lint`: Lint the codebase

## Deployment

Deploy like any standard Next.js app. You can use platforms such as Vercel, Netlify, Render, or your own server with Node.js. Ensure `npm run build` runs during the build step and `npm start` is used to run the server.
