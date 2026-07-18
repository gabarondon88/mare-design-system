# Token workflow

## Purpose

Define how agents create, update, document, and validate Maré design tokens.

## When to read this

Read this for colors, typography, spacing, radius, elevation, opacity, motion, aliases, semantic tokens, and component-scoped tokens.

## Source of truth

Figma variables are the source of truth. Visual sampling is not enough unless the user explicitly approves it as a temporary fallback.

## Steps

1. Use the `create-token` skill.
2. Read `docs/foundations/token-taxonomy.md`.
3. Query Figma MCP for the relevant variable collection and modes.
4. Capture evidence:
   - Figma file URL
   - Variable collection
   - Variable name
   - Variable type
   - Value per mode
   - Alias target if present
   - Description or status if present
5. Check existing repository tokens to avoid duplicates.
6. Implement the token using current repository conventions.
7. Update Storybook if the token is public or useful for consumers.
8. Update docs if the token introduces a new naming pattern or category.
9. Validate.

## Acceptance criteria

- Token value matches Figma exactly.
- Token name follows the taxonomy.
- Mode-specific values are represented explicitly.
- Aliases stay aliases; do not flatten them unless the existing implementation requires it and docs mention the limitation.
- No token is added without Figma evidence.
- Build and typecheck pass.

## Validation commands

```bash
pnpm --filter @mare/design-system typecheck
pnpm --filter @mare/design-system build
pnpm --filter @mare/docs build
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent fallback values, missing dark-mode values, semantic names, component slots, or token aliases.

If Figma has no variable for a needed value, record the gap and ask for a decision.

## Related documents

- `agents/skills/create-token/SKILL.md`
- `docs/foundations/token-taxonomy.md`
- `docs/figma/figma-mcp-workflow.md`

