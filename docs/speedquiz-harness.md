# SpeedQuiz Harness

## Purpose
This harness defines how Codex should coordinate work for the SpeedQuiz repository. The project is a static web game for children, so the workflow should favor simple UI changes, explicit game rules, and fast manual validation.

## Recommended Pattern
Use `producer-reviewer` for most feature work.

- `planner` defines the feature scope, user flow, and acceptance criteria.
- `developer` updates `index.html`, `src/app.js`, and `styles.css`.
- `tester` validates gameplay flow, wording clarity, and mobile usability before merge.

Use `fan-out/fan-in` only when planning, implementation, and test design can be split without overlapping file ownership.

## Role Ownership
### planner
- owns feature definition and task boundaries
- updates `docs/` when rules or flows change
- decides what must remain simple for elementary-school players

### developer
- owns game logic and UI implementation
- keeps the app static and dependency-free
- preserves simple state transitions and readable browser JavaScript

### tester
- owns manual verification and issue reporting
- checks first-run clarity, tap targets, progression, and result accuracy
- reports regressions separately from UX improvement ideas

## Standard Workflow
1. `planner` writes a short feature brief with goal, user-visible behavior, and edge cases.
2. `developer` implements the smallest complete version of the change.
3. `tester` runs manual checks in desktop and mobile-sized viewports.
4. If the change affects rules or UX, `planner` updates the related `docs/` file.

## Default Artifacts
- feature brief or rule change: `docs/`
- implementation: `src/app.js`, `styles.css`, `index.html`
- contributor guidance: `AGENTS.md`

## Validation Checklist
- Can a first-time player understand the next action quickly?
- Does category selection, word progression, and result counting still work?
- Are buttons readable and easy to tap on a phone-sized screen?
- Did the change keep the app fully static for GitHub Pages deployment?
