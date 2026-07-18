# Figma source of truth

## Purpose

Define how agents use Figma as the authoritative design source.

## When to read this

Read this whenever a task depends on visual values, component anatomy, variants, states, or design documentation.

## Source of truth

Figma is the only source of truth for design decisions.

## Steps

1. Identify the exact Figma source needed.
2. Use Figma MCP to inspect variables, components, variants, and node metadata.
3. Prefer variables over visual inspection.
4. Record source evidence in the implementation summary or docs.
5. If repository code differs from Figma, do not silently "fix" both directions. Ask which direction is intended.

## Acceptance criteria

- Every design change can be traced to a Figma file, node, component, or variable.
- Ambiguity is reported before implementation.
- Missing Figma data is treated as a blocker for design decisions.

## Validation commands

No command validates Figma truth. Technical validation still requires:

```bash
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent design rationale, variant status, responsive rules, token aliases, or component state behavior.

## Related documents

- `docs/figma/figma-mcp-workflow.md`
- `docs/processes/investigation-before-changes.md`

