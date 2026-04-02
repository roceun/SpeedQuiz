# Agent Design Patterns

## pipeline
Use when each step depends on the previous output. Good for plan -> implement -> test workflows with clear sequence.

## fan-out-fan-in
Use when multiple tasks can run independently and the results can be merged later. Good for parallel analysis, review, or isolated code changes.

## producer-reviewer
Use when one role creates a change and another validates it. This is the default pattern for most repository work because it keeps implementation fast and review explicit.

## expert-pool
Use when the next specialist depends on what is discovered during exploration. Good for debugging or mixed product and engineering questions.

## supervisor
Use when a central coordinator must route several changing tasks. Use sparingly because it adds overhead.

## hierarchical
Use only for larger efforts where work can be split into stable layers. Avoid it for small feature work.

## Selection Heuristics
- If the task is small and linear, use `pipeline`.
- If the task has one author and one validator, use `producer-reviewer`.
- If the task splits cleanly into parallel chunks, use `fan-out-fan-in`.
- If role choice depends on discovery, use `expert-pool`.
