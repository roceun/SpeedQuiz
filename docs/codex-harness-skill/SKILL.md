---
name: harness
description: Design a Codex agent workflow for a repository or task. Use when the user wants a reusable team structure, delegation plan, role definitions, orchestration rules, or a Codex-native replacement for Claude-style harness workflows.
---

# Harness

Use this skill when the user wants to design or standardize how Codex should coordinate work across roles, sub-agents, and reusable procedures.

## Outcomes
Produce only the artifacts needed for the task. Typical outputs:
- a role definition in `AGENTS.md`
- a workflow document in `docs/`
- a repository-specific skill draft
- a delegation plan for `spawn_agent`

## Core Workflow
1. Identify the domain, deliverables, and failure risks.
2. Decide whether the work needs a single agent, sequential workflow, or parallel delegation.
3. Choose one architecture pattern.
4. Define roles with explicit ownership.
5. Specify handoff rules, validation rules, and stopping conditions.
6. Generate only the minimal documentation or files required.

## Architecture Patterns
- `pipeline`: use for sequential, dependent work
- `fan-out/fan-in`: use for parallel independent analysis or implementation
- `producer-reviewer`: use when output quality depends on review before merge
- `expert-pool`: use when the next specialist depends on what is discovered
- `supervisor`: use when one coordinator must route multiple changing tasks
- `hierarchical`: use only for large, decomposable work with clear boundaries

Read `references/agent-design-patterns.md` when pattern choice is unclear.

## Delegation Rules
- Do not spawn agents before you know the immediate next local step.
- Do not delegate the urgent blocking task if the main thread needs that answer now.
- When delegating, assign concrete ownership and disjoint write scopes.
- Prefer one main implementation thread plus small parallel side tasks.
- Reuse existing agents only when their context is still relevant.

## Output Rules
- Keep outputs concrete and repository-specific.
- Prefer updating existing docs over creating many new files.
- If no durable artifact is needed, return a direct operating plan in the response.
- Avoid Claude-specific terms unless the user explicitly wants cross-tool comparison.

## Validation
- Check that each role has a clear responsibility.
- Check that delegation reduces latency or improves quality.
- Check that the plan can run with Codex tools available in the current environment.
- If a workflow depends on missing capabilities, state that and propose the closest viable alternative.
