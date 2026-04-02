# Orchestrator Template

Use this template when producing a Codex workflow plan.

## Task
Describe the user goal in one paragraph.

## Pattern
Choose one pattern and explain why it fits.

## Roles
- `planner`: define scope, requirements, and acceptance criteria
- `developer`: implement the change
- `tester`: validate behavior and report regressions

## Ownership
- list the files or domains each role owns
- note any shared files that require sequential edits

## Execution Order
1. Define the immediate local task.
2. Decide whether any side tasks can be delegated safely.
3. Implement or coordinate the change.
4. Validate the outcome.
5. Update durable docs if the workflow changed.

## Validation
- what must be tested
- what counts as done
- what risks remain if full validation is not possible
