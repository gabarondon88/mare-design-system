# Investigation before changes

## Purpose

Define what an agent must inspect before modifying the Maré design system.

## When to read this

Read this before any code, token, Storybook, or documentation change.

## Source of truth

Figma is the source of truth for design decisions. The repository is the source of truth for implementation patterns.

## Steps

1. Classify the request:
   - Token
   - Component
   - Storybook
   - Accessibility
   - Documentation
   - Build or package configuration
2. Inspect repository structure:

```bash
rg --files
```

3. Read only the relevant docs from `docs/README.md`.
4. Inspect existing implementation before creating new files.
5. Identify required Figma source:
   - File
   - Page
   - Frame or component
   - Variable collection
   - Node or variable ID when available
6. If Figma source is missing, ask for it before changing design-related files.
7. Make a small plan and include validation commands.

## Acceptance criteria

- The agent can name the files it inspected.
- The agent can name the Figma source required or used.
- The agent knows which validation commands apply.
- No implementation starts from assumptions about visual values or states.

## Validation commands

Not applicable before edits. After edits, run the commands listed in the relevant process document.

## Do not invent

Do not invent missing Figma sources, component status, token values, variant names, or accessibility behavior.

## Related documents

- `docs/foundations/figma-source-of-truth.md`
- `docs/processes/token-workflow.md`
- `docs/processes/component-workflow.md`

