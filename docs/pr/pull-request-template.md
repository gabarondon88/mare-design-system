# Pull Request template

## Purpose

Define the PR body structure agents should prepare.

## When to read this

Read this before opening a PR or handing off a completed change.

## Source of truth

Use implementation diffs, validation command output, and Figma evidence.

## Steps

Use this body:

```md
## Summary

- 

## Figma source

- File:
- Page:
- Node/component/variable:
- Notes:

## Changes

- Tokens:
- Components:
- Storybook:
- Docs:
- Tooling:

## Accessibility

- Keyboard:
- Semantics:
- Focus:
- Contrast:
- Known gaps:

## Validation

- [ ] `pnpm typecheck`
- [ ] `pnpm build`
- [ ] Package-specific commands:

## Risks and limitations

- 
```

## Acceptance criteria

- The PR body includes Figma source for design changes.
- Validation status is accurate.
- Known gaps are explicit.
- No unsupported claims are made.

## Validation commands

```bash
pnpm typecheck
pnpm build
```

## Do not invent

Do not claim approval, parity, or compliance without evidence.

## Related documents

- `docs/processes/pull-request-workflow.md`

