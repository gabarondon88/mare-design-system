# Storybook guidelines

## Purpose

Define how Storybook is used as the working documentation surface for Maré.

## When to read this

Read this before adding or changing stories, docs pages, controls, or examples.

## Source of truth

Figma defines what must be represented. Storybook documents what is implemented.

## Steps

1. Import public APIs from `@mare/design-system`.
2. Do not import private package source files in stories.
3. Create stories for:
   - Default state
   - Approved variants
   - Approved interactive states
   - Accessibility-relevant states
   - Composition examples only when Figma or docs support them
4. Include Figma source reference in story parameters or MDX documentation.
5. Document dev-facing anatomy, not Figma layer anatomy:
   - Figma contains the designer-facing component anatomy.
   - Storybook should show implementation anatomy, public API, DOM assumptions, React Aria mapping, and state attributes.
6. Keep controls aligned with real props.
7. Build Storybook before handoff.

## Acceptance criteria

- Stories compile.
- Stories use public package exports.
- Controls do not expose unsupported props.
- Examples do not show variants missing from implementation.
- Figma source is visible to maintainers.
- React Aria state attributes are documented for components that use React Aria.

## Validation commands

```bash
pnpm --filter @mare/docs build
pnpm build
```

## Do not invent

Do not create fake showcase examples, visual variants, or copy that implies a component is more complete than it is.

## Related documents

- `docs/processes/component-workflow.md`
- `docs/components/component-documentation-template.md`
- `docs/accessibility/react-aria-policy.md`
