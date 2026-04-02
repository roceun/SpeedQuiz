# Repository Guidelines

## Project Structure & Module Organization
`index.html` is the static entry point and loads [`src/app.js`](/Users/roceun/git/SpeedQuiz/src/app.js) and [`styles.css`](/Users/roceun/git/SpeedQuiz/styles.css). Keep gameplay state, screen rendering, and word data in `src/app.js` unless the file becomes large enough to justify extraction. Use `docs/` for product notes, role guides, and planning documents; `.github/workflows/` contains the GitHub Pages deployment workflow.

## Build, Test, and Development Commands
This repository does not use a package manager or build step.

- `open index.html` opens the game directly in a browser for a quick check.
- `python3 -m http.server 4173` serves the project locally from the repo root.
- Visit `http://localhost:4173` to test the same static assets used in production.

Before pushing, verify the game flow manually: start screen, category selection, timed mode options, 10-word progression, and result screen reset.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, and JavaScript to match the existing files. Prefer `const` by default, camelCase for variables and functions, and kebab-case for CSS class names such as `.screen-start` or `.category-button`. Keep labels and word lists in Korean where they are user-facing. Favor small, explicit functions over framework-style abstractions; this is a plain browser app.

## Testing Guidelines
There is currently no automated test suite. Treat manual browser testing as required for every change, especially mobile-sized layouts and tap targets. If you add automated coverage later, place tests in a top-level `tests/` directory or alongside the module as `*.test.js`, and document the command in `README.md`.

## Commit & Pull Request Guidelines
Recent commits use short imperative summaries such as `Add SpeedQuiz game prototype` and `Polish repository README`. Follow that pattern: one clear action per commit, no trailing period.

Pull requests should include:

- a short description of user-visible changes
- linked issue or planning doc when applicable
- screenshots or a short screen recording for UI changes
- notes on manual test coverage, including device or viewport checks

## Deployment Notes
GitHub Pages deploys from `.github/workflows/deploy-pages.yml` on pushes to `main`. Keep the site fully static so the workflow can continue uploading the repository root as-is.

## Team Roles
Use these working roles when coordinating changes:

- `planner`: defines scope, updates `docs/`, and keeps feature requirements explicit before implementation starts
- `developer`: implements the change in `index.html`, `src/app.js`, and `styles.css`, keeping the app static and easy to edit
- `tester`: runs manual browser checks for gameplay flow, mobile layout, and regression risks before merge
