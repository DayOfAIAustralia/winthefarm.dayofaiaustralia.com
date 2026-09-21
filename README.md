# On the Fence — Day of AI Australia landing page

A Next.js landing page for **On the Fence**, Day of AI Australia's national health literacy and AI competition for students in Years 7-10. Students build AI agents to shape public opinion on GumDrop, the social media platform of the fictional farm Coolabah Creek.

## Getting Started

This project uses [pnpm](https://pnpm.io).

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

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Language:** TypeScript

## License

Private
