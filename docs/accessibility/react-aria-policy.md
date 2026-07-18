# React Aria policy

## Purpose

Define how Maré uses React Aria Components as the accessible behavior layer for public React components.

## When to read this

Read this before creating, refactoring, documenting, or reviewing any interactive component.

## Source of truth

Figma defines Maré visual design. React Aria defines the preferred accessible interaction primitives when an equivalent component exists.

If Figma and React Aria appear to conflict:

1. Preserve the Figma visual result when it is accessible.
2. Preserve React Aria semantics and interaction behavior.
3. Document the conflict and ask for a design decision when the visual result would harm accessibility.

## Steps

1. Before implementing a component, search React Aria Components for an equivalent primitive.
2. If an equivalent exists, wrap it in a Maré component rather than rebuilding behavior.
3. If no equivalent component exists, check whether React Aria hooks solve the interaction pattern.
4. Keep Maré styling in repository CSS. Do not import React Aria example CSS, Tailwind snippets, or theme files.
5. Map Maré props to React Aria props explicitly in the component contract.
6. Style interactive states using the Figma state-layer model and React Aria state attributes when present.
7. Keep native CSS pseudo-classes only as fallback when they do not produce different visuals.
8. Document any exception in the component docs and PR summary.

## Component mapping

| Maré intent | React Aria base | Rule |
| --- | --- | --- |
| Button action | `react-aria-components/Button` | Use for actions that change current-page state. |
| Link navigation | `react-aria-components/Link` | Use for navigation, even when styled like a button. |
| Select | `react-aria-components/Select` | Use composed parts from React Aria. |
| Checkbox | `react-aria-components/Checkbox` | Use React Aria before custom input behavior. |
| Switch | `react-aria-components/Switch` | Use React Aria before custom switch behavior. |
| Tabs | `react-aria-components/Tabs` | Use React Aria for keyboard and selection behavior. |
| Menu | `react-aria-components/Menu` | Use React Aria for menu semantics and keyboard behavior. |

## State styling

Maré supports two state styling mechanisms.

### React Aria state attributes

Use these as the primary state source when the component wraps React Aria Components.

| Figma visual state | React Aria attribute | Notes |
| --- | --- | --- |
| `hover` | `[data-hovered]` | Apply Figma state-layer hover opacity. |
| `pressed` | `[data-pressed]` | Apply Figma state-layer pressed opacity. |
| `focusRing` / `focus-visible` | `[data-focus-visible]` | Apply Figma focus ring. |
| `disabled` | `[data-disabled]` | Apply disabled visual treatment from Figma. |
| `loading` / pending | `[data-pending]` | Use for accessible pending behavior; do not invent spinner visuals. |

### Native CSS pseudo-classes

Use these for simple native components that do not wrap React Aria, or as fallback styles for React Aria components.

| Figma visual state | Native CSS fallback |
| --- | --- |
| `hover` | `:hover` |
| `pressed` | `:active` |
| `focusRing` / `focus-visible` | `:focus-visible` |
| `disabled` | `:disabled` |

Decision rule:

- Prefer React Aria state attributes when the component uses React Aria.
- Keep native pseudo-classes only when they produce the same visual result.
- Do not mix both approaches if they diverge.
- Figma remains the source of truth for how each state looks.

## State-layer rule

When Figma defines interaction states using `state-layer` plus opacity, Maré must not create separate hover or pressed color tokens.

Use:

- Base background token.
- State-layer token.
- State opacity value.

Example:

```css
.mare-button[data-hovered]::after,
.mare-button:hover:not([data-disabled]):not([data-pending])::after {
  opacity: var(--mare-opacity-state-hover);
}
```

## Acceptance criteria

- Components wrap React Aria Components when an equivalent exists.
- Styling remains Maré-owned and Figma-backed.
- Component docs explain any Maré prop to React Aria prop mapping.
- Storybook documents dev-facing anatomy and state attributes.
- Exceptions are documented with a reason.

## Validation commands

```bash
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent:

- React Aria mappings that do not exist.
- ARIA behavior that React Aria does not provide.
- Figma state visuals.
- Pending/loading visuals not defined in Figma.
- Separate state tokens when Figma uses state-layer opacity.

## Related documents

- `docs/accessibility/accessibility-validation.md`
- `docs/processes/component-workflow.md`
- `docs/storybook/storybook-guidelines.md`
