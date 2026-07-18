# Pull request workflow

## Purpose

Define the evidence and validation an agent must prepare before handing off a Pull Request.

## When to read this

Read this after implementation and before final response or PR creation.

## Source of truth

Figma evidence supports design changes. Command output supports technical validation.

## Steps

1. Review changed files.
2. Confirm every design decision is linked to Figma evidence.
3. Confirm docs and Storybook changed when public behavior changed.
4. Run validation commands.
5. Prepare a PR summary using `docs/pr/pull-request-template.md`.
6. List risks, limitations, and Figma gaps.

## Acceptance criteria

- PR summary states what changed and why.
- Figma source is listed.
- Validation commands are listed with pass/fail status.
- Accessibility checks are listed.
- Missing or deferred work is explicit.

## Validation commands

```bash
pnpm typecheck
pnpm build
```

Run package-specific commands when the change only affects one package.

## Do not invent

Do not claim:

- Pixel parity.
- Full accessibility compliance.
- Design approval.
- Production readiness.

unless the evidence exists.

## Related documents

- `docs/pr/pull-request-template.md`
- `docs/accessibility/accessibility-validation.md`

