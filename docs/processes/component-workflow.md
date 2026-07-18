# Component workflow

## Purpose

Define how agents create and maintain React components in the Maré design-system package.

## When to read this

Read this before adding or changing any public component, hook, provider, style contract, or package export.

## Source of truth

Figma components and variables define the component anatomy, variants, states, and visual behavior. The repository defines implementation and packaging conventions.

## Steps

1. Inspect existing package structure and exports.
2. Query Figma MCP for:
   - Component name
   - Specs frame and usage-guide frame
   - Component set or variants
   - Properties
   - States
   - Slots
   - Bound variables
   - Interaction notes
3. Check React Aria:
   - Search for an equivalent React Aria Component.
   - Use React Aria Components as the implementation base when an equivalent exists.
   - If no equivalent exists, check React Aria hooks.
   - Document any exception before implementing custom behavior.
4. Identify the smallest first implementation:
   - Do not implement variants not requested or not validated.
   - Do not create complex abstractions before duplication exists.
5. Create component files following current package conventions.
6. Export from the package entrypoint only when the component is public.
7. Add Storybook stories that consume `@mare/design-system`.
8. Add component documentation using `docs/components/component-documentation-template.md` when the component becomes public:
   - Use `docs/components/{component-name}.md`.
   - Follow the exact section order from the template.
   - Use analysis files only as supporting evidence, not as the canonical component doc.
   - Map the repository sections back to the Figma specs and component guide frames.
9. Validate accessibility.
10. Run validation commands.

## Acceptance criteria

- Public API is typed.
- React Aria is used when an equivalent component exists, or the exception is documented.
- Implemented variants map one-to-one to Figma.
- Unsupported Figma variants are listed as not implemented.
- Styles use tokens from Figma-backed sources.
- Storybook demonstrates default, variants, states, and accessibility notes.
- Accessibility checks are documented.
- Component documentation follows the Figma-aligned structure in `docs/components/component-documentation-template.md`.
- Build and typecheck pass.

## Validation commands

```bash
pnpm --filter @mare/design-system typecheck
pnpm --filter @mare/design-system build
pnpm --filter @mare/docs build
pnpm typecheck
pnpm build
```

## Do not invent

Do not invent props, variants, visual states, keyboard behavior, responsive behavior, or token usage not present in Figma or existing repository conventions.

## Related documents

- `docs/storybook/storybook-guidelines.md`
- `docs/accessibility/accessibility-validation.md`
- `docs/accessibility/react-aria-policy.md`
- `docs/foundations/figma-source-of-truth.md`
- `docs/components/component-documentation-template.md`
