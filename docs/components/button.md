# Button

## Description / Purpose

Button triggers an action on the current page, such as saving, submitting, or deleting, while preserving a consistent interactive target and visual hierarchy.

Figma evidence:

- File: `UI Kit - MARE`
- File key: `BvFw7AfXAdkKDIwgaWhl4L`
- Page/frame: `58:635` - `Button & links`
- Component set: `569:370` - `button`
- Specs node: `702:4078` - `Specs`
- Slot guide node: `588:1641` - `specs / slot`
- Usage guide node: `703:1445` - `wrapper`
- Documentation status: `implemented` for the current simple React Button; `loading` remains `needs Figma clarification` for visual treatment.

## Anatomy

Figma contains the designer-facing anatomy for Button: `button`, `background`, `state-layer`, `content`, and `focusRing`. That anatomy remains documented in Figma and should not be duplicated as the implementation anatomy in Storybook.

The React implementation anatomy is:

```text
Maré Button
├── ReactAriaButton
│   ├── icon (optional, aria-hidden)
│   └── label / loadingLabel
├── Maré props
│   ├── variant -> CSS class
│   ├── disabled -> React Aria isDisabled
│   └── isLoading -> React Aria isPending
└── state attributes
    ├── data-hovered
    ├── data-pressed
    ├── data-focus-visible
    ├── data-disabled
    └── data-pending
```

Implementation parts:

- `ReactAriaButton`: accessible behavior base from `react-aria-components/Button`.
- `icon`: optional decorative React node hidden from assistive technologies with `aria-hidden`.
- `label`: visible accessible name for label buttons.
- `loadingLabel`: optional visible replacement while `isLoading` is true.
- `variant`: Maré visual variant mapped to CSS classes.
- `disabled`: Maré prop mapped to React Aria `isDisabled`.
- `isLoading`: Maré prop mapped to React Aria `isPending`.

Designer-facing slot atoms from Figma:

- `button/content/primary/label`
- `button/content/primary/icon-label`
- `button/content/primary/label-icon`
- `button/content/primary/icon`
- `button/content/secondary/label`
- `button/content/secondary/icon-label`
- `button/content/secondary/label-icon`
- `button/content/secondary/icon`

Sizing and spacing from Figma:

- Height: `40px`.
- Width: `Hug`.
- Horizontal padding: `16px`.
- Vertical padding: `12px`.
- Gap between icon and label: `8px`.
- Icon size: `16px`.
- Radius: `global/radius/md`, `8px`.
- Focus gap: `3px`.
- Focus stroke: `2px`.

## Variants & States

Figma exposes two variants and four visual states per variant.

| Variant | State | Figma node | Implemented | Notes |
| --- | --- | --- | --- | --- |
| `primary` | `default` | `569:367` | Yes | Main action. One primary button per view. |
| `primary` | `hover` | `569:365` | Yes | React Aria `[data-hovered]` with `:hover` fallback; uses state-layer opacity. |
| `primary` | `pressed` | `569:363` | Yes | React Aria `[data-pressed]` with `:active` fallback; uses state-layer opacity. |
| `primary` | `disabled` | `569:366` | Yes | React Aria `isDisabled` / `[data-disabled]` with `:disabled` fallback. |
| `secondary` | `default` | `569:471` | Yes | Supporting action. |
| `secondary` | `hover` | `569:477` | Yes | React Aria `[data-hovered]` with `:hover` fallback; uses state-layer opacity. |
| `secondary` | `pressed` | `569:484` | Yes | React Aria `[data-pressed]` with `:active` fallback; uses state-layer opacity. |
| `secondary` | `disabled` | `569:491` | Yes | React Aria `isDisabled` / `[data-disabled]` with `:disabled` fallback. |
| `primary` / `secondary` | `focus-visible` | `702:4109` / `702:4140` | Yes | React Aria `[data-focus-visible]` with `:focus-visible` fallback. |
| `primary` / `secondary` | `loading` | `703:1537` | Partially | React Aria `isPending` / `[data-pending]`; visual spinner/layout is not defined as a component variant. |

No `tertiary`, `ghost`, `danger`, `link-button`, or size variant is present in the inspected Button component set.

## Usage rules

Use when:

- Triggering an action on the current page, such as save, submit, or delete.
- Providing the primary call to action in a form or dialog.
- The action changes application state.

Do not use when:

- Navigating to another page. Use Link instead.
- Rendering decorative content or a generic container.
- Two primary buttons would appear side by side in the same view.

Hierarchy:

- Use one primary button per view to establish a clear focal point.
- Secondary buttons may support the primary action.
- Do not place two primary actions side by side.

Labels:

- Use verb-first labels, such as `Save changes` or `Delete account`.
- Keep labels short.
- Avoid vague labels such as `OK`, `Yes`, or `Click here`.
- Do not reuse the same label for actions with different outcomes.

Icons:

- Icons should reinforce the label.
- Icon-only buttons are acceptable only in constrained toolbar contexts where the icon is universally understood.

## Edge cases

- Disabled state: use only when the action is temporarily unavailable. Pair with a tooltip or helper text so users understand why the action is blocked.
- Loading state: when an action triggers an async operation, use React Aria `isPending` to prevent duplicate submissions while retaining accessible pending behavior. Figma documents that a loading indicator should appear inside the button, but the inspected component set does not define the loading visual.
- Icon-only usage: requires an accessible label.
- Long labels: the component width hugs content. Consumers should keep labels short and action-oriented.
- Icons: use the content slot to add leading or trailing icons. Do not use icons as decoration.

## Usage example

```tsx
import { Button } from "@mare/design-system";

export function SaveProfileAction() {
  return <Button>Save changes</Button>;
}
```

With a secondary supporting action:

```tsx
import { Button } from "@mare/design-system";

export function DialogActions() {
  return (
    <>
      <Button variant="secondary">Cancel</Button>
      <Button>Save changes</Button>
    </>
  );
}
```

## Accessibility

- Keyboard navigation: wrap React Aria Components `Button`, which renders button semantics and normalizes mouse, keyboard, touch, and screen-reader interactions.
- Role: use React Aria Button semantics; do not add `role="button"` to non-button elements for this component.
- Accessible name: visible label text provides the accessible name for label buttons.
- Icon-only buttons: require `aria-label`, matching the Figma slot guide.
- Focus: show `focusRing` using React Aria `[data-focus-visible]`, with `:focus-visible` fallback; Figma specifies `3px` gap and `2px` stroke.
- Disabled: map Maré `disabled` to React Aria `isDisabled`.
- Loading: map Maré `isLoading` to React Aria `isPending` and set `aria-busy`. The final spinner treatment is blocked until Figma defines it.

Contrast checks from inspected token values:

| Pair | Tokens / values | Ratio | Status |
| --- | --- | --- | --- |
| Primary label on primary background | `alias/primary/text/onBase #f3f8fa` on `alias/primary/bg/base #02957e` | `3.50:1` | Needs Figma review for normal text. |
| Secondary label on white surface | `alias/primary/text/onSubtle #00453a` on `#ffffff` | `10.98:1` | Passes WCAG AA for normal text. |
| Disabled text on disabled background | `alias/interactive/disabled/text #707d81` on `alias/interactive/disabled/bg #d7e0e3` | `3.17:1` | Disabled controls are not evaluated the same as active text, but do not claim contrast compliance. |
| Focus ring on white surface | `alias/primary/border #02957e` on `#ffffff` | `3.75:1` | Passes non-text contrast threshold. |

## Design tokens applied

| Token | Role | Value |
| --- | --- | --- |
| `alias/primary/bg/base` | Primary background | `#02957e` |
| `alias/primary/text/onBase` | Primary label | `#f3f8fa` |
| `alias/primary/text/onSubtle` | Secondary label | `#00453a` |
| `alias/primary/border` | Secondary border and documented focus ring | `#02957e` |
| `alias/interactive/state-layer/inverse` | Primary hover overlay | `#f3f8fa` |
| `alias/interactive/state-layer/base` | Secondary overlay and pressed state layer | `#707d81` |
| `alias/interactive/disabled/bg` | Disabled background | `#d7e0e3` |
| `alias/interactive/disabled/text` | Disabled label | `#707d81` |
| `global/radius/md` | Button corner radius | `8px` |
| `Body/md-bold` | Button label typography | `16px`, `700`, `20px` line-height |

State-layer rule:

- Maré does not create separate hover or pressed color tokens for Button.
- Figma defines interaction states with `state-layer` color plus opacity.
- Code triggers those states with React Aria attributes such as `[data-hovered]` and `[data-pressed]`, plus matching native CSS fallbacks.

## References

- Material Design: not consulted for design decisions.
- Atlassian Design System: not consulted for design decisions.
- Apple Human Interface Guidelines: not consulted for design decisions.
- GOV.UK Design System: not consulted for design decisions.
- Nord Health Design System: not consulted for design decisions.
- shadcn/ui: not consulted for design decisions.

Figma is authoritative for Maré Button design. External references may be used later for accessibility or interaction comparison, but they must not override Figma without an explicit design decision.
