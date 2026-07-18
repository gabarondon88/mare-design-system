# Figma MCP workflow

## Purpose

Define how agents connect to and use Figma MCP for Maré work.

## When to read this

Read this before using any Figma MCP tool or making design-derived changes.

## Source of truth

Figma MCP exposes the Figma source of truth. The agent must inspect it rather than guessing from memory or screenshots.

## Steps

1. Confirm the user has provided or implied a Figma file, page, node, component, or variable source.
2. Load the required Figma tool instructions before calling Figma MCP tools.
3. Inspect the relevant Figma source:
   - Variables and modes for tokens.
   - Components and component sets for React components.
   - Node hierarchy for anatomy.
   - Properties and variants for public API decisions.
4. Record the evidence used.
5. If Figma MCP is unavailable, ask for exported variables, screenshots plus inspected values, or access to the file. Do not proceed with design decisions from memory.

## Acceptance criteria

- Agent can cite the inspected Figma source.
- Agent distinguishes variable-backed values from sampled visual values.
- Agent reports missing data instead of filling gaps.

## Validation commands

No local command validates Figma MCP access. After implementation:

```bash
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent file IDs, node IDs, variable names, or Figma modes.

## Related documents

- `docs/foundations/figma-source-of-truth.md`
- `docs/processes/token-workflow.md`
- `docs/processes/component-workflow.md`

