# Tabs

## Description / Purpose

Tabs organizes related content into parallel sections the user can switch between without leaving the page.

## Anatomy

Figma anatomy:

```text
Tabs
└── TabList (slot)
    ├── TabItem (data-state=active)
    ├── TabItem (data-state=inactive)
    └── focusRing (:focus-visible only)
```

React anatomy:

```tsx
<Tabs defaultSelectedKey="overview">
  <TabList aria-label="Example sections">
    <Tab id="overview">Overview</Tab>
    <Tab id="details">Details</Tab>
    <Tab id="reviews">Reviews</Tab>
  </TabList>
  <TabPanel id="overview">Overview content</TabPanel>
  <TabPanel id="details">Details content</TabPanel>
  <TabPanel id="reviews">Reviews content</TabPanel>
</Tabs>
```

## Variants & States

Figma defines the visual state through TabItem properties:

| Figma concept | Code mapping | Notes |
|---|---|---|
| `data-state=active` | React Aria `data-selected` | Derived from Tabs context. Do not set manually. |
| `data-state=inactive` | Absence of `data-selected` | Default unselected tab. |
| `:hover` | React Aria `data-hovered` + native `:hover` fallback | Technical state only. |
| `:focus-visible` | React Aria `data-focus-visible` + native fallback | Focus ring sits outside the tab without affecting layout. |
| `label` | `children` | Visible tab label content. |

No size, density, orientation, or visual variant props are implemented until Figma defines them.

## Usage rules

Use Tabs when:

- Content can be split into two or more distinct, parallel sections.
- The user benefits from switching views without a full page reload.
- All sections share the same level of hierarchy.

Do not use Tabs when:

- There is only one section; use a heading instead.
- Tabs would be nested inside other tabs.
- Sections represent sequential steps; use a stepper instead.
- Content is too long to scan; tabs hide content, they do not replace navigation.

## Edge cases

- One tab item should not happen by design, but the component must not break visually if it does.
- Long tab labels truncate with ellipsis rather than wrapping or overflowing.
- Many tab items may require a scrollable tab bar or a dropdown overflow pattern.
- Avoid disabling every tab. If no tab is selectable, reconsider the pattern.

## Usage example

```tsx
import { Tab, TabList, TabPanel, Tabs } from "@mare/design-system";

export function ProductTabs() {
  return (
    <Tabs defaultSelectedKey="overview">
      <TabList aria-label="Product sections">
        <Tab id="overview">Overview</Tab>
        <Tab id="details">Details</Tab>
        <Tab id="reviews">Reviews</Tab>
      </TabList>
      <TabPanel id="overview">Overview content</TabPanel>
      <TabPanel id="details">Details content</TabPanel>
      <TabPanel id="reviews">Reviews content</TabPanel>
    </Tabs>
  );
}
```

## Accessibility

- Built with React Aria Components Tabs, TabList, Tab, and TabPanel.
- `TabList` must have an accessible label through `aria-label` or `aria-labelledby`.
- Keyboard navigation is delegated to React Aria.
- Each `Tab` id must match its corresponding `TabPanel` id.
- Hover and focus-visible are technical states; never expose them as public props.
- Keep tab labels concise and descriptive.

## Design tokens applied

| Token | Role | Value |
|---|---|---|
| `alias/text/onSubtle` | Selected tab label color | `#00453a` |
| `alias/text/muted` | Default tab label color | `#707d81` |
| `global/teal/500` | Selected tab bottom border | `#02957e` |
| `alias/state-layer/subtle` | Hover state-layer fill | `#5bbead` |
| `state-layer/hover` | Hover state-layer opacity | `18%` |
| `alias/border/strong` | Focus ring stroke | `#111a1d` |
| `global/radius/none` | Focus ring corner radius | `0px` |
| `Body/md-normal` | Tab label typography | `16px / 400 / 20px` |

## References

- Figma component: `UI Kit - MARÉ`, node `643:1829`
- Figma component specs: node `693:2999`
- Figma usage guide: node `693:3168`
- React Aria Components Tabs
