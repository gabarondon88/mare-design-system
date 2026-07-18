# Button analysis

## Purpose

Create a structured first-pass reference for the future React `Button` component in Maré Design System.

This document is analysis only. It must not be treated as an implementation record or as proof that the React component already exists.

## When to read this

Read this before designing, implementing, testing, reviewing, or documenting the Maré `Button` component.

## Source of truth

Figma is the only source of truth for Button design decisions.

Evidence inspected:

- Figma file: `UI Kit - MARÉ`
- File key: `BvFw7AfXAdkKDIwgaWhl4L`
- Page/canvas: `58:635` - `Button & links`
- Component set: `569:370` - `button`
- Button atoms: `588:181` - `Button atoms / for slots`
- Slot guide: `588:1641` - `specs / slot`
- Component specs: `702:4078` - `Specs`
- Usage guide: `703:1445` - `wrapper`
- Related icon source: `145:2804` - `Colors / Shadows / icons`, section `Icons`

If any detail in this document conflicts with Figma, Figma wins and this document must be updated.

## Component inventory

### Main component

`button`

- Figma node: `569:370`
- Description from specs: container that adapts to its content, keeps consistent height and spacing, and allows flexible label length.
- Layer model:
  - `button`: outer component container.
  - `background`: base fill layer.
  - `state-layer`: interaction overlay for hover and pressed states.
  - `content`: slot for visible text and/or icons.
  - `focusRing`: keyboard focus indicator; visible only in `:focus-visible`.

### Subcomponents and atoms

Figma defines slot atoms under `Button atoms / for slots`.

Primary atoms:

- `button/content/primary/label`
- `button/content/primary/icon-label`
- `button/content/primary/label-icon`
- `button/content/primary/icon`

Secondary atoms:

- `button/content/secondary/label`
- `button/content/secondary/icon-label`
- `button/content/secondary/label-icon`
- `button/content/secondary/icon`

Composition meanings:

- `label`: text only.
- `icon-label`: icon before label.
- `label-icon`: label before icon.
- `icon`: icon only, requires an accessible label.

Figma guide says the content slot is intentionally flexible. The default label is a starting point and can be replaced with the provided atoms.

## Variants

The component set exposes 8 visual variants:

| Variant | State | Figma node |
| --- | --- | --- |
| `primary` | `default` | `569:367` |
| `primary` | `hover` | `569:365` |
| `primary` | `pressed` | `569:363` |
| `primary` | `disabled` | `569:366` |
| `secondary` | `default` | `569:471` |
| `secondary` | `hover` | `569:477` |
| `secondary` | `pressed` | `569:484` |
| `secondary` | `disabled` | `569:491` |

Confirmed public variants:

- `primary`: main action. Figma guidance says one primary button per view.
- `secondary`: supporting action. Can be used alongside primary.

No tertiary, ghost, danger, link-button, or icon-button variant is present in the inspected Button component set.

## States

### Confirmed visual states

| State | Primary background | Secondary background | State layer | Opacity |
| --- | --- | --- | --- | --- |
| `default` | `#02957e` | `transparent` | none | `0%` |
| `hover` | `#02957e` | `transparent` | `sl/inverse -> sl/base` | `18%` |
| `pressed` | `#02957e` | `transparent` | `sl/base` | `28%` |
| `disabled` | `#d7e0e3` | `transparent` | none | `0%` |

Implementation interpretation:

- `hover` should be driven by CSS `:hover`, not by a public prop.
- `pressed` maps to the active interaction state and should be driven by CSS `:active`, not by a public prop.
- `focusVisible` is a keyboard focus state and should be driven by `:focus-visible`, not by a public prop.
- `disabled` is a public prop and should map to the native `disabled` attribute.

### Focus visible

`focusRing` is documented as visible only in `:focus-visible`.

- Focus gap: `3px`.
- Focus stroke: `2px`.
- Focus token: `alias/primary/border`.
- Figma generated context also referenced `--mare-primary-border` with `#111a1d` for the ring, while the specs table maps focus stroke to `alias/primary/border`. This is a Figma evidence mismatch to resolve before implementation.
- The focus ring appears around the button without affecting layout.

### Loading

The usage guide documents loading behavior:

- When an action triggers an async operation, show a loading indicator inside the button.
- Disable the button to prevent duplicate submissions.
- Restore the button once the operation completes.

Figma gap:

- Loading is not present as one of the 8 component variants.
- No inspected node defines the loading indicator asset, spinner motion, label replacement, or exact layout.
- A React contract can reserve `isLoading`, but implementation must not invent the loading visual treatment without further Figma confirmation.

## Sizes

Only one button size is confirmed.

| Property | Value | Notes |
| --- | --- | --- |
| Height | `40px` | Fixed; Figma says it meets WCAG AA touch target. |
| Width | `Hug` | Expands with content slot. |
| Horizontal padding | `16px` | Left and right. |
| Vertical padding | `12px` | Top and bottom. |
| Corner radius | `8px` | `global/radius/md -> --mare-radius-md`. |
| Label size | `16px Bold` | `Body/md-bold -> --mare-font-size-md`. |
| Focus gap | `3px` | Offset between button edge and ring. |
| Focus stroke | `2px` | `alias/primary/border`. |
| Icon size | `16px` | `size=sm` on Maré icon components. |

No `size` prop should be added until Figma defines multiple sizes.

## Tokens

Tokens explicitly shown in Button specs or guide:

| Token | Value / meaning |
| --- | --- |
| `alias/primary/bg/base` | `#02957e`, primary background. |
| `alias/primary/text/onBase` | `#f3f8fa`, primary label color. |
| `alias/primary/text/onSubtle` | `#00453a`, secondary label color. |
| `alias/primary/border` | `#02957e`, secondary border and documented focus stroke. |
| `alias/interactive/state-layer/inverse` | `#f3f8fa`, primary hover state layer. |
| `alias/interactive/state-layer/base` | `#707d81`, secondary and pressed state layer. |
| `alias/interactive/disabled/bg` | `#d7e0e3`, disabled background. |
| `alias/interactive/disabled/text` | `#707d81`, disabled label in specs table. |
| `global/radius/md` | `8px`, corner radius. |

Additional values observed in generated context:

- `--mare-font-family`: `DM Sans`.
- `--mare-font-weight-bold`: `700`.
- `--mare-line-height-xl`: used in specs headers, not the button label itself.
- `--mare-opacity-state-hover`: `0.18`.
- `--mare-opacity-state-pressed`: `0.24` in generated code, but specs table says pressed opacity is `28%`. Resolve before implementation.
- `--mare-primary-border`: generated code references `#111a1d`; specs table maps focus stroke and secondary border to `alias/primary/border` / `#02957e`. Resolve before implementation.

Do not create repository tokens from these values until they are confirmed as Figma variables.

## Colors and visual styling

### Primary

- Default background: `#02957e`.
- Label: `#f3f8fa`.
- Hover: same background with state-layer overlay at `18%`.
- Pressed: same background with state-layer overlay at `28%` according to specs.
- Disabled background: `#d7e0e3`.
- Disabled text: `#707d81` in specs, while generated component context for disabled text also surfaced `#a8b3b7` in one place. Resolve before implementation.
- Border: not present for primary in default/hover/pressed; disabled uses disabled treatment only.

### Secondary

- Background: transparent.
- Border: `alias/primary/border` / `#02957e` for default, hover, and pressed.
- Label: `alias/primary/text/onSubtle` / `#00453a`.
- Hover and pressed use state-layer overlays.
- Disabled border/background follows disabled treatment.

### Shadows

No shadow is specified for Button in the inspected specs. Do not add shadows.

## Typography

Button label:

- Text style: `Body/md-bold`.
- Font family: `--mare-font-family`, shown as `DM Sans`.
- Weight: `700` / Bold.
- Size: `16px`.
- Line height: `20px`.
- Letter spacing: `0`.
- Text should remain concise and action-oriented.

Label rules from Figma:

- Use verb-first labels: `Save changes`, `Delete account`.
- Keep labels short.
- Avoid vague labels like `OK`, `Yes`, `Click here`.
- Do not use the same label for actions with different outcomes.

## Icons

Figma icon guidance:

- Icon components are based on the Lucide library.
- They may be swapped for another library if it fits the product tone, but consistency must be maintained.
- Button icon size: `16px`, equivalent to `size=sm` on Maré icon components.

Button icon composition:

- Icon before label: `icon-label`.
- Label before icon: `label-icon`.
- Icon only: `icon`, requires `aria-label`.

Usage guidance:

- Icons should reinforce the label, not replace it.
- Icon-only buttons are acceptable only in constrained toolbar contexts where icons are universally understood.

## Spacing, padding, gaps

Confirmed values:

- Height: `40px`.
- Horizontal padding: `16px`.
- Vertical padding: `12px`.
- Gap between icon and label: `8px`.
- Focus gap: `3px`.
- Focus ring stroke: `2px`.
- Width: hug content.

Figma generated code included `py-[14.5px]` around text because of text-box trimming in the generated representation. The specs table is the stronger source for implementation: use `12px` vertical padding unless Figma is updated.

## Borders, radii, shadows

- Radius: `8px`.
- Secondary border: `1px solid alias/primary/border`.
- Disabled secondary border: disabled border treatment observed as `alias/border/disabled` / `#d7e0e3` in generated context.
- Focus ring: separate non-layout-affecting ring, `2px` stroke, `3px` gap.
- No shadow specified.

## Behavior and interactions

Use Button when:

- Triggering an action on the current page, such as save, submit, or delete.
- Acting as the primary call to action in a form or dialog.
- The action changes application state.

Do not use Button when:

- Navigating to another page. Use Link instead.
- Creating a decorative element or container.

Hierarchy:

- Use one primary button per view to establish a clear focal point.
- Secondary buttons support the primary.
- Do not use two primary buttons side by side.

Disabled:

- Use disabled only when the action is temporarily unavailable.
- Pair disabled state with an explanation such as helper text or tooltip.

Loading:

- Show loading indicator inside the button during async operations.
- Disable the button while loading to prevent duplicate submissions.
- Restore once the operation completes.

## Accessibility

Confirmed:

- `focusRing` is visible only in `:focus-visible`.
- Focus ring appears without affecting layout.
- Icon-only composition requires `aria-label`.
- The component should render as a native `<button>` for actions.
- Disabled should map to native `disabled`.

Contrast evidence:

- Figma color page states `Teal/500 (#02957E)` has `3.74:1` contrast against white, below `4.5:1` for normal text.
- Figma note says when using text over the primary color, use `16px Bold` or larger so it qualifies as large text and meets the `3:1` minimum for interactive elements such as buttons.

Implementation requirements:

- Use native button semantics.
- Keep `type="button"` as the default in React to avoid accidental form submission.
- Require accessible name through label text or `aria-label`.
- For icon-only, require `aria-label`.
- For loading, preserve or provide an accessible name and expose busy state only after Figma confirms behavior.

## Proposed React contract summary

The future React component should support:

- `variant`: `primary | secondary`, default `primary`.
- `disabled`: boolean, default `false`.
- `isLoading`: boolean, default `false`, reserved but blocked for visual implementation until Figma defines loading visuals.
- `icon`: optional leading/trailing icon.
- `iconPosition`: `start | end`, default `start`.
- `children`: label text/content for label-based buttons.
- `aria-label`: required for icon-only buttons.
- Native button attributes, with controlled exclusions where they conflict with design-system props.

It should not support yet:

- `size`, because Figma defines only one size.
- `danger`, `tertiary`, `ghost`, or `link` variants.
- Externally controlled `hover`, `pressed`, or `focusVisible` props.

## Acceptance criteria

This analysis is complete enough for first implementation when:

- The component implementation maps to the 8 confirmed variants.
- The contract does not expose unconfirmed visual variants.
- Loading is either resolved in Figma or implemented behind a documented limitation.
- Token mismatches are resolved before coding:
  - Focus ring token/value.
  - Pressed opacity `24%` vs `28%`.
  - Disabled text `#707d81` vs `#a8b3b7`.
- Storybook stories cover default, hover/pressed via pseudo-state documentation or interaction states, disabled, icon positions, icon-only, and loading once resolved.

## Validation commands

For this analysis-only change:

```bash
pnpm typecheck
```

For future implementation:

```bash
pnpm --filter @mare/design-system typecheck
pnpm --filter @mare/design-system build
pnpm --filter @mare/docs build
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent:

- Additional sizes.
- Additional variants.
- Loading visual treatment.
- Spinner asset or animation.
- Token aliases.
- Focus ring color when Figma evidence conflicts.
- Disabled text color until the conflict is resolved.
- A link-like button variant.

## Related documents

- `docs/processes/component-workflow.md`
- `docs/accessibility/accessibility-validation.md`
- `docs/storybook/storybook-guidelines.md`
- `packages/design-system/src/contracts/button.contract.ts`

