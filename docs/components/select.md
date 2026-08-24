# Select

## Description / Purpose

Select allows users to choose one option from a predefined list. It combines a trigger, selected value, optional label, optional supportive text, and a dropdown menu.

## Anatomy

Figma anatomy:

```text
Select
├── label (optional)
├── InputField
│   ├── placeholder / selected value
│   └── chevron icon
├── dropdownMenu (when open)
│   └── option[]
│       ├── icon slot (optional)
│       └── label
└── supportiveText (optional)
```

React anatomy:

```tsx
<Select label="Label" placeholder="Placeholder">
  <SelectItem id="one">Label option</SelectItem>
  <SelectItem id="two">Label option</SelectItem>
</Select>
```

## Variants & States

Figma defines Select variants by combining `isOpen`, `showLabel`, and `showSupportiveText`.

| Figma concept | Code mapping | Notes |
|---|---|---|
| `isOpen=false` | React Aria closed state | Default closed trigger. |
| `isOpen=true` | React Aria `data-open` | Open trigger with dropdown menu. |
| `showLabel=false` | Omit `label` and provide `aria-label` | Required for accessible naming. |
| `showSupportiveText=false` | Omit `supportiveText` | Valid when no helper text is needed. |
| `option state=default` | ListBoxItem default | Neutral option. |
| `option state=hover` | React Aria `data-hovered` | Uses state-layer opacity. |
| `option state=pressed` | React Aria `data-pressed` | Uses stronger state-layer opacity. |
| `focus-visible` | React Aria `data-focus-visible` | Keyboard focus ring only. |

No size, validation, search, multiselect, grouped option, or section variant is implemented until Figma defines it.

## Usage rules

Use Select when:

- The user must choose one value from a finite set.
- Showing all options at once would take too much space.
- The value benefits from a placeholder and optional helper context.

Do not use Select when:

- The user needs to type a custom value; use Input instead.
- There are only two mutually exclusive choices; consider radio buttons or a toggle.
- Multiple values are needed; wait for a Figma-backed multiselect pattern.
- The options need long descriptions, rich filtering, or async search; those patterns are not defined yet.

## Edge cases

- No visible label: provide `aria-label`.
- Long option labels: truncate visually while preserving the full accessible text.
- Disabled select: keep the value visible but make trigger and options non-interactive.
- Icon-only options are not supported; every option needs a text label.
- Selected value longer than the trigger: truncate with ellipsis.

## Usage example

```tsx
import { Select, SelectItem } from "@mare/design-system";

export function CountrySelect() {
  return (
    <Select label="Country" placeholder="Choose country">
      <SelectItem id="mx">Mexico</SelectItem>
      <SelectItem id="co">Colombia</SelectItem>
      <SelectItem id="es">Spain</SelectItem>
    </Select>
  );
}
```

## Accessibility

- Built with React Aria Components `Select`, `Label`, `Button`, `SelectValue`, `Popover`, `ListBox`, `ListBoxItem`, and `Text`.
- Keyboard navigation, focus management, typeahead, trigger semantics, and popover behavior come from React Aria.
- Visible labels are connected through React Aria `Label`.
- Selects without visible labels require `aria-label`.
- Supportive text is connected through React Aria description text.
- Disabled state maps to React Aria `isDisabled`.
- Hover and pressed states use React Aria technical attributes instead of public props.

## Design tokens applied

| Token | Role | Value |
|---|---|---|
| `alias/text/base` | Label, selected value, and option label | `#111a1d` |
| `alias/text/muted` | Placeholder and supportive text | `#707d81` |
| `alias/text/disabled` | Disabled text | `#a8b3b7` |
| `alias/border/default` | Closed trigger border | `#707d81` |
| `alias/border/focus` | Open trigger border | `#02957e` |
| `alias/border/strong` | focusRing stroke | `#111a1d` |
| `alias/state-layer/subtle` | Option hover state-layer | `#5bbead` |
| `alias/interactive/state-layer` | Option pressed state-layer | `#00453a` |
| `opacity/state/hover` | Option hover state-layer opacity | `18%` |
| `opacity/state/pressed` | Option pressed state-layer opacity | `28%` |
| `space/4` | Trigger and dropdown radius | `4px` |
| `space/8` | Component gap and dropdown padding | `8px` |
| `space/12` | Trigger horizontal padding | `12px` |
| `space/16` | Trigger vertical padding | `16px` |
| `medium` | Dropdown shadow | `0 4px 8px rgb(193 204 214 / 50%)` |
| `Body/md-normal` | Label, placeholder, value, and options | `16px / 400 / 20px` |
| `Body/sm-medium` | Supportive text typography | `14px / 500 / 18px` |

## References

- Figma page/container: `UI Kit - MARÉ`, node `145:2690`
- Figma Select section: node `635:300`
- Figma Select component frame: node `412:406`
- Figma option frame: node `412:354`
- Figma dropdownMenu: node `640:1660`
- React Aria Components Select
