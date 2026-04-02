# Codex Harness Migration

## Goal
Convert `revfactory/harness` from a Claude-oriented plugin into a Codex-native skill that helps design agent teams, choose delegation patterns, and generate reusable workflows.

## What to Keep
- the 6-phase workflow
- architecture pattern selection
- role design principles
- validation and QA guidance

## What to Remove
- `.claude-plugin/` metadata
- Claude marketplace installation steps
- `.claude/agents/` as a required output
- Claude-specific command examples

## Codex Mapping
- Claude plugin -> Codex skill folder with `SKILL.md`
- generated agent files -> documented team plan in `docs/`
- Claude subagents -> Codex `spawn_agent`
- integration instructions -> repository-specific operating guide

## Recommended Output
Use this structure for the Codex version:

```text
harness/
  SKILL.md
  references/
    agent-design-patterns.md
    orchestrator-template.md
    team-examples.md
    qa-agent-guide.md
```

## Execution Rules
- Design the team locally before spawning any agents.
- Use `spawn_agent` only for parallel, bounded, non-overlapping tasks.
- Keep the immediate blocking task in the main thread.
- Prefer documents and templates over generated agent config files.

## Validation
Test the migrated skill on three cases:
- a documentation workflow
- a UI implementation workflow
- a review or QA workflow

Success means the skill can choose a pattern, define roles, decide whether delegation is justified, and produce a concrete operating plan without any Claude-only assumptions.
