# On the Fence — Day of AI Australia landing page

A Next.js landing page for **On the Fence**, Day of AI Australia's national health literacy and AI competition for students in Years 7-10. Students build AI agents to shape public opinion on GumDrop, the social media platform of the fictional farm Coolabah Creek.

## Getting Started

This project uses [pnpm](https://pnpm.io) 12 (pinned in `package.json`) and Node.js 22.13+ or 24+.

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run the TypeScript compiler without emitting

## Editing competition copy

Shared names, dates and links (competition name, lesson name, register URL, town and platform names, team names and artwork) live in `lib/competition.ts`. The competition terms live in `public/terms.html`.

## Navigation

The header and footer live in the root layout so they stay mounted between pages. Header links use CSS breakpoints, avoiding a layout change after hydration. `/how-to-play` and `/timeline` are shareable homepage section routes; moving between them uses smooth scrolling without remounting the homepage or adding URL fragments.

`/learning` combines the teaching approach and responsible participation guidelines under **Learning & Ethics**. The former `/ethics` and `/pedagogy` addresses permanently redirect there.

## Tooling compatibility

`pnpm typecheck` uses TypeScript 7. The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for Next.js and typescript-eslint. ESLint 10 uses the official `@eslint/compat` adapter for the legacy rule APIs in Next.js's React, import and accessibility plugins, with version-scoped peer exceptions in `pnpm-workspace.yaml`. Keep these adapters until the upstream integrations support the new APIs directly.

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Language:** TypeScript

## License

Private
