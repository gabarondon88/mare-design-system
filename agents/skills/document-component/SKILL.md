---
name: document-component
description: Create or update Maré component documentation from Figma specs, usage guides, and component metadata. Use this before creating docs/components/{component-name}.md or updating public component docs.
---

# Document Component

Create or update component documentation using Figma as the only source of truth for design decisions.

## Inputs required

The agent needs at least one of:

- Figma component URL.
- Figma page or frame URL containing the component specs.
- Figma component set node ID.
- User-provided pointer to the exact component in `UI Kit - MARE`.

If none is available, ask for the Figma source before editing docs.

## Steps

1. Read repository guidance:
   - `AGENTS.md`
   - `docs/components/component-documentation-template.md`
   - `docs/processes/component-workflow.md`
   - `docs/figma/figma-mcp-workflow.md`
   - `docs/accessibility/accessibility-validation.md`
   - `docs/accessibility/react-aria-policy.md`
2. Inspect existing documentation:
   - Search `docs/components`.
   - Check whether `{component-name}.md` or `{component-name}-analysis.md` already exists.
   - Preserve analysis docs as evidence, but do not treat them as the canonical component doc.
3. Query Figma through Figma MCP:
   - Inspect component set, variants, and properties.
   - Inspect specs frames such as `ANATOMY`, `SIZING & SPACING`, `STATES`, `DESIGN TOKENS`, and `ACCESSIBILITY`.
   - Inspect usage-guide frames such as `WHEN TO USE`, `VARIANTS`, `HIERARCHY`, `LABELS`, and `EDGE CASES`.
   - Inspect slot guides and atoms when present.
4. Create or update `docs/components/{component-name}.md` with the exact section order from `docs/components/component-documentation-template.md`.
5. Include Figma evidence inside `Description / Purpose`.
6. Add Figma node IDs in `Variants & States` wherever available.
7. Document React Aria mapping when the component uses React Aria.
8. Calculate contrast from Figma token values before claiming accessibility compliance.
9. Link Storybook examples only when the story exists.
10. Run validation commands.

## Acceptance criteria

- Documentation follows the required section order exactly.
- Figma source is recorded with file, page/frame, component node, specs node, and guide node when available.
- Anatomy uses real Figma layer names, slots, atoms, and token names.
- Variants and states match Figma properties and node IDs.
- Usage rules and edge cases come from the Figma guide or are marked as implementation-specific.
- Accessibility notes do not claim compliance without evidence.
- React Aria usage or exception is documented for interactive components.
- Design tokens use the required `Token | Role | Value` table.
- External references are marked as consulted or not consulted.

## Validation commands

```bash
pnpm typecheck
pnpm --filter @mare/docs build
pnpm build
```

Use `pnpm typecheck` for documentation-only changes when Storybook is untouched. Use the full set when docs reference implementation or stories.

## Never invent

Do not invent:

- Component purpose.
- Figma frame or node IDs.
- Variant names.
- State names.
- Slot names.
- Token names or values.
- Usage guidance.
- Contrast compliance.
- External-reference conclusions.

If Figma is incomplete or contradictory, document the gap and ask for the source of truth before changing implementation.

## Output expected from the agent

When finished, report:

- Component documentation created or updated.
- Figma source inspected.
- Files changed.
- Validation commands run.
- Figma gaps or unresolved questions.
