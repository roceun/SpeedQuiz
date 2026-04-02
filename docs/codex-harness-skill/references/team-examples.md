# Team Examples

## Example 1: Small UI Change
Pattern: `producer-reviewer`

- `planner`: define the UI outcome and acceptance criteria
- `developer`: update markup, styles, and state behavior
- `tester`: verify the flow in desktop and mobile-sized screens

## Example 2: Documentation and Implementation Split
Pattern: `fan-out-fan-in`

- `planner`: update the feature brief in `docs/`
- `developer`: implement the change in source files
- `tester`: validate the implementation after both parts are ready

## Example 3: Bug Investigation
Pattern: `expert-pool`

- first inspect the bug locally
- choose the next specialist based on what is found
- keep the critical debugging path in the main thread

## Example 4: Repository Setup
Pattern: `pipeline`

1. define the target workflow
2. add or update repository docs
3. make code or config changes
4. run validation
