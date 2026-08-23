# Input

## Description / Purpose

Input allows users to enter and edit short, single-line text. It supports interaction, validation, and availability states while keeping label and supportive text connected to the field.

## Anatomy

Figma anatomy:

```text
Input
├── label
├── inputField
│   └── text
├── supportiveText (optional)
└── focusRing (:focus-visible only)
```

React anatomy:

```tsx
<Input
  label="Email address"
  placeholder="you@example.com"
  supportiveText="We'll never share your email."
/>
```

## Variants & States

Figma defines 16 variants by combining `state`, `showLabel`, and `showSupportiveText`.

| Figma concept | Code mapping | Notes |
|---|---|---|
| `state=default` | `state="default"` | Empty field, no interaction. |
| `state=focus` | React Aria `data-focused` | Technical state only. Do not expose as a public visual prop. |
| `state=filled` | Derived from `value` / `defaultValue`, or `state="filled"` for documentation | Filled with content, no validation state. |
| `state=error` | `state="error"` + React Aria `isInvalid` | Requires supportive text explaining the error. |
| `state=success` | `state="success"` | Validation passed. Represents a filled field. |
| `state=disabled` | `disabled` or `state="disabled"` + React Aria `isDisabled` | Non-interactive field. |
| `focus-visible` | React Aria `data-focus-visible` + native fallback | Keyboard focus ring only. |
| `showLabel=false` | Omit `label` and provide `aria-label` | Valid, but must remain accessible. |
| `showSupportiveText=false` | Omit `supportiveText` | Valid except error state. |

No size, multiline, icon, prefix, suffix, or textarea variant is implemented until Figma defines it.

## Usage rules

Use Input when:

- The user needs to enter a short, single-line text value.
- The field requires a label and optional helper context.
- Validation feedback needs to be communicated inline.

Do not use Input when:

- Multi-line text is needed; use Textarea instead.
- The user is selecting from a predefined list; use Select instead.
- A value should be read-only content rather than editable form input.

## Edge cases

- Empty required field on submit: use `state="error"` and always provide `supportiveText`.
- Very long input values: the field should keep its layout and allow horizontal text scrolling.
- No label and no supportive text: valid only when an accessible name is provided with `aria-label`.
- Disabled field with a value: preserve the value visually, but keep the field non-interactive.

## Usage example

```tsx
import { Input } from "@mare/design-system";

export function EmailField() {
  return (
    <Input
      label="Email address"
      placeholder="you@example.com"
      supportiveText="We'll never share your email."
    />
  );
}
```

## Accessibility

- Built with React Aria Components `TextField`, `Label`, `Input`, and `Text`.
- Visible labels are connected through React Aria `Label`.
- Inputs without visible labels require `aria-label`.
- Supportive text is connected as description text; error supportive text is connected as an error message.
- Error state maps to React Aria `isInvalid`.
- Disabled state maps to React Aria `isDisabled`.
- Keyboard focus ring uses React Aria `data-focus-visible`, with native `:focus-visible` fallback.
- Do not show validation errors while the user is actively typing; show them after interaction or on form submit.

## Design tokens applied

| Token | Role | Value |
|---|---|---|
| `alias/text/base` | Label and value text color | `#111a1d` |
| `alias/text/muted` | Placeholder and supportive text | `#707d81` |
| `alias/text/disabled` | Disabled text color | `#a8b3b7` |
| `alias/border/default` | Default border | `#707d81` |
| `alias/border/focus` | Focus and filled border | `#02957e` |
| `alias/border/error` | Error border | `#c92c39` |
| `alias/border/success` | Success border | `#07c586` |
| `alias/border/disabled` | Disabled border | `#d7e0e3` |
| `alias/bg/subtle` | Focus background fill | `#f3f8fa` |
| `alias/bg/disabled` | Disabled background fill | `#d7e0e3` |
| `alias/border/strong` | focusRing stroke | `#111a1d` |
| `space/4` | Corner radius | `4px` |
| `space/12` | Horizontal padding | `12px` |
| `space/16` | Vertical padding | `16px` |
| `space/8` | Gap between elements | `8px` |
| `Body/md-normal` | Label, placeholder, and value typography | `16px / 400 / 20px` |
| `Body/sm-medium` | Supportive text typography | `14px / 500 / 18px` |

## References

- Figma page/container: `UI Kit - MARÉ`, node `145:2690`
- Figma Input component: node `635:299`
- Figma component specs: node `695:3542`
- Figma usage guide: node `695:3543`
- React Aria Components TextField
