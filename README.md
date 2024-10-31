# Boilerplate🚀: Turborepo + Next.js + shadcn-ui

## Quick start

### 1. Clone repository

```bash
git clone <https://github.com/bytaesu/turborepo-nextjs-shadcn-ui.git>
cd turborepo-nextjs-shadcn-ui
code .

```

### 2. Change app name

- **/apps/new-app → /apps/your-app**
- **/apps/your-app/package.json**

```json
-  "name": "new-app",
+  "name": "your-app",

```

```bash
pnpm i

```

- **Done.**

## Add new shadcn-ui components

```bash
cd packages/ui

```

```bash
pnpm dlx shadcn@latest add <component>

// or //

pnpm run ui add <component>

```

## Create new workspace

### 1. New Next.js App

Next.js version 14 is still being used because many UI packages do not yet have stable support for React 19.

- create-next-app

```bash
pnpm dlx create-next-app@14 apps/new-app

```

- package.json

```json
{
  "name": "new-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
+   "@repo/ui": "workspace:*",
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.16"
  },
  "devDependencies": {
+   "@repo/eslint-config": "workspace:*",
+   "@repo/typescript-config": "workspace:*",
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
+   "autoprefixer": "^10",
    "eslint": "^8",
    "eslint-config-next": "14.2.16"
  }
}

```

- tsconfig.json

```json
{
+ "extends": "@repo/typescript-config/nextjs.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

- tailwind.config.ts

```json
+ export * from "@repo/ui/tailwind.config";

```

- postcss.config.mjs

```json
+ export { default } from "@repo/ui/postcss.config";

```

- eslintric.json → eslintric.js

```json
/** @type {import("eslint").Linter.Config} */
+ module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

```

- layout.tsx

```json
- import "./globals.css"
+ import "@repo/ui/globals.css"

```

### 2. New Package

```bash
turbo gen workspace

-> ? What type of workspace should be added? package

```
