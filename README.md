# React + TypeScript + Vite + Biome + Vitest + Tailwind

A modern, production-ready template for building React applications with TypeScript, featuring fast tooling and best practices.

## Features

- ⚡ **Vite** - Lightning-fast HMR and optimized builds
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS v4** - Utility-first CSS with Vite plugin
- 🧹 **Biome** - Fast formatter and linter (replaces ESLint + Prettier)
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 📝 **TypeScript** - Full type safety

## Getting Started

```bash
# Clone the template
npx degit kriserickson/my-vite-react-biome-tailwindcss-template my-app
cd my-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Biome
- `npm run type-check` - Run TypeScript compiler check

## Configuration

### Biome

Biome handles both formatting and linting. Configuration is in `biome.json`. Key features enabled:
- Import organization on save
- Tailwind CSS `@apply` directive support
- React-specific rules (hooks, exhaustive dependencies)

### Tailwind CSS

Tailwind v4 is configured via the Vite plugin. Use utility classes directly or the `@apply` directive in CSS files.

### Testing

Vitest is configured with jsdom for React component testing. Tests use `@testing-library/react` for component queries and interactions.

## React Compiler

The React Compiler is not enabled due to its impact on dev & build performance. To add it, see [the documentation](https://react.dev/learn/react-compiler/installation).


