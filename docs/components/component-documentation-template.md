# Component documentation template

## Purpose

Define the required structure for public component documentation in Maré Design System.

Component docs must mirror the documentation model already present in Figma: technical specs, usage guidance, edge cases, accessibility, and design tokens. The repository may add implementation examples, but it must not replace Figma as the design source of truth.

## When to read this

Read this before creating or updating any file under `docs/components/{component-name}.md`.

Read it together with:

- `docs/processes/component-workflow.md`
- `docs/figma/figma-mcp-workflow.md`
- `docs/accessibility/accessibility-validation.md`
- `docs/storybook/storybook-guidelines.md`

## Source of truth

Figma is the source of truth for:

- Component name, anatomy, layer names, slots, and subparts.
- Variants, states, properties, and node IDs.
- Sizing, spacing, typography, icon usage, radius, elevation, opacity, and motion.
- Design tokens, token values, token roles, and token naming.
- Usage rules, hierarchy rules, labels, edge cases, and accessibility notes.

Repository docs are the source of truth only for implementation status, React API, Storybook links, validation commands, and known engineering limitations.

If a value exists in code but is not backed by Figma, document it as an implementation gap or remove it.

## Figma comparison

The structure below was compared against `UI Kit - MARE`, page `Button & links`, node `58:635`.

Observed Figma documentation blocks:

| Figma block | Node | Maps to repository section |
| --- | --- | --- |
| `Component specs - MARE DS` header | `702:4078` | `# Component Name`, evidence inside `Description / Purpose` |
| `ANATOMY` | `702:4086` | `Anatomy` |
| `SIZING & SPACING` | `702:4145` | `Anatomy`, `Variants & States`, `Design tokens applied` |
| `STATES` | `702:4213` | `Variants & States` |
| `DESIGN TOKENS` | `702:4275` | `Design tokens applied` |
| `ACCESSIBILITY` | `702:4350` | `Accessibility` |
| `Component guide - MARE DS` | `703:1445` | `Usage rules`, `Edge cases` |
| `WHEN TO USE` | `703:1449` | `Usage rules` |
| `VARIANTS` | `703:1472` | `Variants & States` |
| `HIERARCHY` | `703:1487` | `Usage rules` |
| `LABELS` | `703:1513` | `Usage rules` |
| `EDGE CASES` | `703:1532` | `Edge cases` |
| `DESIGN TOKENS` | `703:1541` | `Design tokens applied` |
| Slot guide | `588:1641` | `Anatomy`, `Accessibility`, `Usage example` |

Conclusion: the user-provided structure matches Figma's existing documentation model. Use it as the canonical repository structure.

## File output

Create one file per public component:

```text
docs/components/{component-name}.md
```

Rules:

- Use kebab-case for `{component-name}`.
- Use the product/component name as the H1.
- Keep analysis drafts separate as `{component-name}-analysis.md` only when needed.
- Do not treat an analysis draft as the final public component documentation.

## Required sections

Use these sections in this exact order.

```md
# Component Name

## Description / Purpose

## Anatomy

## Variants & States

## Usage rules

## Edge cases

## Usage example

## Accessibility

## Design tokens applied

## References
```

Do not add extra top-level sections. If implementation status, Storybook links, Figma evidence, or known gaps are needed, place them inside the closest required section.

## Section requirements

### `# Component Name`

Use the Figma component name unless the codebase has an established public API name.

If names differ, write the code name in `Description / Purpose` and record the Figma name and node ID.

### `Description / Purpose`

One short paragraph explaining what the component does and why it exists.

Must include, after the paragraph:

- Figma file name.
- Figma page or frame.
- Component set or component node ID.
- Specs node ID when present.
- Usage guide node ID when present.
- Documentation status: `draft`, `implemented`, or `needs Figma clarification`.

Do not include broad design-system marketing copy.

### `Anatomy`

Document all visible and structural parts from Figma.

Must include:

- Labeled breakdown of each part.
- Token names where Figma exposes them.
- Slot names, subcomponents, and optional content.
- Composition tree for components with subparts.

Example:

```text
Button
├── button
│   ├── background
│   ├── state-layer
│   └── content (slot)
│       ├── icon (optional, leading or trailing)
│       └── label
└── focusRing (:focus-visible only)
```

Do not invent `_touchTarget`, wrapper layers, slots, or icons that are not present in Figma.

### `Variants & States`

Document every visual variant and interaction state found in Figma.

Must include:

- Variant names exactly as Figma names them.
- Component properties when known.
- State list: `default`, `hover`, `focus`, `focus-visible`, `pressed`, `active`, `disabled`, `error`, `loading`, or only those present in Figma.
- Figma node IDs for variants when available.
- Implementation status for each variant/state.

Use this table when possible:

```md
| Variant | State | Figma node | Implemented | Notes |
| --- | --- | --- | --- | --- |
```

Do not expose React props for hover, pressed, or focus states unless Figma defines a real component property and the interaction requires it.

### `Usage rules`

Use concrete rules from the Figma component guide.

Must include:

- `Use when`.
- `Do not use when`.
- Hierarchy rules, if present.
- Label/content rules, if present.
- Component-specific constraints.

Avoid generic advice such as "use consistently" unless Figma says it and the doc explains what consistency means.

### `Edge cases`

Document uncommon but real scenarios the component must handle gracefully.

Examples:

- Long labels.
- Icon-only usage.
- Loading or async behavior.
- Disabled-but-unexplained actions.
- External navigation.
- Empty content.
- Text wrapping.
- Internationalized labels.

Only mark an edge case as supported when code and Storybook prove it.

### `Usage example`

Provide a realistic example in context.

For React components, include a TypeScript/TSX snippet that imports from `@mare/design-system`.

Example:

```tsx
import { Button } from "@mare/design-system";

export function SaveProfileAction() {
  return <Button>Save changes</Button>;
}
```

Do not import from private source paths.

### `Accessibility`

Must include:

- Keyboard navigation.
- ARIA labels, roles, and states.
- Color contrast with Maré token values when colors are known.
- Focus behavior.
- Disabled/loading behavior when present.
- Additional tips from Figma or platform references.

Contrast rules:

- Calculate contrast from Figma token values.
- Do not claim WCAG compliance unless the ratio meets the relevant threshold.
- If a Figma value fails or is ambiguous, document it as a Figma gap.

### `Design tokens applied`

Use this exact table:

```md
| Token | Role | Value |
| --- | --- | --- |
```

Token naming:

- Global CSS custom properties: `--mare-{palette}-{step}`.
- Figma aliases: `alias/{role}/{property}`.

Rules:

- Prefer Figma variables over sampled values.
- If only a visual value is available, write `Figma value, variable not confirmed`.
- Do not rename Figma tokens to fit repository naming.

### `References`

Use this section for external references consulted during documentation or implementation.

Default reference set for component docs:

- Material Design
- Atlassian Design System
- Apple Human Interface Guidelines
- GOV.UK Design System
- Nord Health Design System
- shadcn/ui

Rules:

- Figma remains authoritative over external references.
- Do not cite external systems as justification for changing Maré design.
- If a reference was not consulted, mark it as `not consulted`.
- If consulted, include the exact URL and the reason it was used.

## Acceptance criteria

- The document uses the required sections in the required order.
- Every design value is traceable to Figma.
- Figma file, page/frame, component node, and specs/guide nodes are recorded.
- Anatomy includes the real Figma layer/slot names.
- Variants and states include Figma node IDs when available.
- Unsupported states are documented as unsupported, not implied as implemented.
- Accessibility includes keyboard, ARIA, focus, and contrast notes.
- Tokens use the `Token | Role | Value` table.
- References do not override Figma.

## Validation commands

For documentation-only changes:

```bash
pnpm typecheck
```

For component documentation tied to Storybook or implementation:

```bash
pnpm --filter @mare/docs build
pnpm typecheck
pnpm build
```

## Do not invent

Never invent:

- Figma node IDs.
- Variants, states, sizes, slots, or subcomponents.
- Token names or values.
- Contrast compliance.
- Accessibility behavior.
- Usage rules.
- External reference conclusions.

If Figma is incomplete, write the gap and ask for the source of truth.

## Related documents

- `docs/processes/component-workflow.md`
- `docs/figma/figma-mcp-workflow.md`
- `docs/accessibility/accessibility-validation.md`
- `docs/storybook/storybook-guidelines.md`
