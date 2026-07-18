---
name: create-token
description: Create or update Maré design tokens from Figma as the only source of truth. Use this for colors, typography, spacing, radius, elevation, opacity, motion, aliases, semantic tokens, and component-scoped tokens.
---

# Create Token

Create or update design tokens only when the token is backed by Figma evidence.

## Inputs required

The agent needs at least one of:

- Figma file URL.
- Figma node URL.
- Figma variable collection and variable name.
- User-provided pointer to the exact Figma source.

If none is available, ask for the Figma source before editing files.

## Steps

1. Read repository guidance:
   - `AGENTS.md`
   - `docs/processes/token-workflow.md`
   - `docs/foundations/token-taxonomy.md`
   - `docs/figma/figma-mcp-workflow.md`
2. Inspect existing token implementation:
   - Search with `rg --files`.
   - Read token CSS/TypeScript files before adding new files.
   - Check Storybook stories that consume tokens.
3. Query Figma through Figma MCP:
   - Inspect variable collections and modes.
   - Capture variable name, value, type, mode, collection, aliases, and description.
   - If using a component node, inspect whether the value is bound to a variable.
4. Classify the token:
   - Primitive: raw source value from Figma.
   - Semantic: product meaning, aliasing a primitive token.
   - Component: scoped to a component or slot.
   - Alias: references another token without changing meaning.
5. Choose the repository location using existing conventions. If no convention exists, create the smallest structure documented in `docs/foundations/token-taxonomy.md`.
6. Add or update Storybook documentation when the token is visible or intended for consumer usage.
7. Update docs when the token introduces a new naming pattern, category, mode, or limitation.
8. Run validation commands.

## Acceptance criteria

- Token name and value match Figma exactly.
- Figma evidence is recorded in the change summary or relevant documentation.
- Token category follows `docs/foundations/token-taxonomy.md`.
- No token duplicates an existing token with the same meaning.
- CSS custom property, TypeScript export, or package export follows current repository conventions.
- Storybook shows the token only if it is public or helpful for consumers.
- `pnpm typecheck` passes.
- `pnpm build` passes.

## Validation commands

```bash
pnpm typecheck
pnpm build
pnpm --filter @mare/design-system build
pnpm --filter @mare/docs build
```

Use the narrow commands during iteration and the full commands before final handoff.

## Never invent

Do not invent:

- Token values.
- Token names.
- Token hierarchy.
- Light/dark mode values.
- State-specific tokens.
- Component token slots.
- Fallback values.

If Figma has a visual value but no variable binding, document the gap and ask whether to create a temporary implementation token or wait for Figma to be updated.

## Output expected from the agent

When finished, report:

- Token(s) created or changed.
- Figma source used.
- Files changed.
- Validation commands run.
- Any Figma gaps or unresolved decisions.

