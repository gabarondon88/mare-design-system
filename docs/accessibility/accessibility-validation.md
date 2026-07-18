# Accessibility validation

## Purpose

Define accessibility checks required for Maré component work.

## When to read this

Read this before implementing or reviewing any interactive component, form control, navigation element, overlay, or stateful UI.

## Source of truth

Figma defines intended visual states. Platform semantics and accessibility standards define behavior. If Figma conflicts with accessible behavior, report the conflict.

## Steps

Validate:

1. React Aria equivalent:
   - If React Aria Components has an equivalent component, use it as the base.
   - If the component does not use React Aria, document why.
2. Native element choice.
3. Accessible name.
4. Role and state.
5. Keyboard interaction.
6. Focus order.
7. Visible focus indicator.
8. Color contrast using Figma token values.
9. Pointer and touch target size when relevant.
10. Reduced motion when motion is present.
11. Disabled, error, selected, loading, expanded, and pressed states when present in Figma.
12. React Aria state attributes when used:
   - `[data-hovered]`
   - `[data-pressed]`
   - `[data-focus-visible]`
   - `[data-disabled]`
   - `[data-pending]`

## Acceptance criteria

- Native HTML is used wherever possible.
- React Aria Components are used when an equivalent exists.
- Any ARIA has a specific reason.
- Keyboard and screen-reader expectations are documented.
- Contrast concerns are reported with affected token names.
- Storybook includes accessibility-relevant states.

## Validation commands

```bash
pnpm typecheck
pnpm build
```

When automated accessibility tooling is added, document and run the specific command here.

## Do not invent

Do not invent ARIA patterns, labels, shortcuts, or behavior. Consult platform guidance or ask for clarification.

## Related documents

- `docs/processes/component-workflow.md`
- `docs/storybook/storybook-guidelines.md`
- `docs/accessibility/react-aria-policy.md`
