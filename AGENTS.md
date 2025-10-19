# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router files live in `app/`; `app/layout.tsx` defines global chrome, while `app/globals.css` holds shared tokens and utilities.
- Route-specific logic stays inside the relevant folder (e.g., `app/lex`, `app/lex/lesson/[id]`); keep nested UI helpers alongside the route.
- Shared building blocks belong in `components/` (`Sidebar.tsx`, `TopBar.tsx`, `Path.tsx`). Re-export aliases through `@/*` per `tsconfig.json`.
- Store static assets in `public/` when introduced, and avoid checking in `.next/` or other build outputs.

## Build, Test, and Development Commands
- Install dependencies with `npm install`; ensure `next`, `react`, `react-dom`, and styling plugins stay pinned in `package.json`.
- Run the development server via `npx next dev` from the repo root to iterate on App Router pages.
- Produce production bundles with `npx next build` followed by `npx next start`.
- Enforce type safety using `npx tsc --noEmit`, which honors the strict settings in `tsconfig.json`.

## Coding Style & Naming Conventions
- Stick to TypeScript (`.tsx`) with explicit prop/state types and the `"strict": true` defaults; move reusable types to lightweight modules.
- Use two-space indentation, trailing commas in multi-line literals, and `PascalCase` filenames for components. Dynamic routes remain lower-case with `[param]` folders.
- Prefer CSS variables and utility classes from `app/globals.css`; reserve inline styles for dynamic values that cannot live in CSS.
- Import client-side helpers inside `"use client"` boundaries and wrap navigation with Next primitives (`Link`, `usePathname`).

## Testing Guidelines
- No automated suite ships yet; document the manual flows you exercised (path progression, lesson quizzes) in every PR.
- If you introduce automated tests, colocate them as `*.test.tsx` or `__tests__/` near the feature and coordinate the tooling addition (e.g., Vitest + Testing Library) within the same PR.
- Verify new routes with the Next dev server and watch for console errors or hydration warnings.

## Commit & Pull Request Guidelines
- With no historical baseline, follow Conventional Commits such as `feat: add lex path transitions` or `fix: guard locked lessons`.
- Keep commits focused and formatted; do not mix refactors with feature work without a dedicated note.
- Every PR should include: a short motivation, screenshots or recordings for UI changes, manual test notes, and linked tracking issue.
- Request review before merging; avoid pushing directly to `main` and rebase rather than merge when updating a branch.
