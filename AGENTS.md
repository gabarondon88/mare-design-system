# Useful commands

Use the package manager and scripts declared by the repository. If a command is missing, do not invent a replacement without checking `package.json`, `pnpm-workspace.yaml`, and the relevant package files first.

Expected commands for this design-system monorepo:

```bash
pnpm install        # install workspace dependencies
pnpm typecheck     # validate TypeScript contracts
pnpm build         # build packages and Storybook
pnpm dev           # run local documentation Storybook
```

When a package-specific script exists, prefer the narrowest command that validates the change:

```bash
pnpm --filter @mare/design-system typecheck
pnpm --filter @mare/design-system build
pnpm --filter @mare/docs build
```

# Source of truth

Figma is the only source of truth for Maré visual decisions.

Agents must not assume, infer, or invent:

- Colors, typography, spacing, radius, elevation, opacity, motion, iconography, breakpoints, or component variants.
- Component states, interaction behavior, accessibility labels, or content hierarchy.
- Token names, token values, token aliases, or semantic relationships.
- Whether a component exists, is approved, deprecated, experimental, or ready to ship.

If Figma is unavailable, incomplete, ambiguous, or contradictory, stop before changing implementation and ask for the exact Figma file, page, frame, component, variable collection, or node that should be treated as authoritative.

# Repository map

```text
packages/design-system/      React package prepared for publishing
apps/docs/                   Storybook documentation app
agents/skills/               Repository-specific agent skills
docs/                        Operational documentation for agents and maintainers
```

Repository-specific skills:

```text
agents/skills/create-token/          Token creation and maintenance from Figma
agents/skills/document-component/    Component documentation from Figma specs and guides
```

# Documentation map

Do not read all docs upfront. Read only the documents relevant to the task, then update them if the implementation changes the documented process.

```text
docs/
├── README.md
├── documentation-guidelines.md
├── processes/
│   ├── investigation-before-changes.md
│   ├── component-workflow.md
│   ├── token-workflow.md
│   └── pull-request-workflow.md
├── foundations/
│   ├── token-taxonomy.md
│   └── figma-source-of-truth.md
├── components/
│   ├── {component-name}.md
│   └── component-documentation-template.md
├── storybook/
│   └── storybook-guidelines.md
├── accessibility/
│   ├── accessibility-validation.md
│   └── react-aria-policy.md
├── figma/
│   └── figma-mcp-workflow.md
└── pr/
    └── pull-request-template.md
```

# Operating workflow

Before modifying any element:

1. Identify the task type: token, component, documentation, Storybook, accessibility fix, build configuration, or release preparation.
2. Read the corresponding docs from the documentation map.
3. Inspect the current repository structure with `rg --files`.
4. Inspect existing implementations before creating new patterns.
5. Connect to Figma MCP or request the authoritative Figma source.
6. Record the Figma evidence used: file, page, frame/component/node, variable collection, and timestamp or version if available.
7. Make the smallest coherent change.
8. Update Storybook and docs when the public design-system surface changes.
9. Run validation commands and report exactly what passed or failed.

Acceptance criteria for any change:

- The implementation is traceable to Figma evidence.
- The change follows existing package, naming, export, and Storybook patterns.
- Documentation is updated when behavior, usage, or contribution workflow changes.
- Accessibility is validated for the affected surface.
- Build and typecheck pass, or the agent explains the blocker with exact command output.

# Documentation rules

Every operational doc must follow `docs/documentation-guidelines.md`.

Rules:

- One process or convention per document.
- Use executable steps, commands, and acceptance criteria.
- Include "Do not invent" and "Source of truth" sections when Figma data is involved.
- Link to real repository files once they exist.
- Keep docs current with code changes in the same PR.
- Do not create broad, generic docs that do not help an agent decide what to do.

# Token workflow

Use the `create-token` skill for token work.

Before creating or changing a token:

- Read `docs/processes/token-workflow.md`.
- Read `docs/foundations/token-taxonomy.md`.
- Query Figma variables through Figma MCP.
- Confirm the token is approved in Figma and identify whether it is primitive, semantic, component, or alias.
- Check existing token files and Storybook usage.

Never create a token because a color, spacing value, or typography value "looks close". If the value is not in Figma, do not add it.

# Component workflow

Before creating a new component:

- Read `docs/processes/component-workflow.md`.
- Read `docs/storybook/storybook-guidelines.md`.
- Read `docs/accessibility/accessibility-validation.md`.
- Read `docs/accessibility/react-aria-policy.md`.
- Query the corresponding Figma component and variants through Figma MCP.
- Check existing exports, naming, folder conventions, styles, tests, and stories.
- Use `agents/skills/document-component` and `docs/components/component-documentation-template.md` when creating or updating public component documentation.
- Check whether React Aria Components has an equivalent component. Use it when available, or document the exception.

Minimum component acceptance criteria:

- Public API is typed and exported from the package entrypoint.
- React Aria Components is used as the accessible base when an equivalent exists.
- Every implemented variant/state maps to Figma.
- Storybook covers default usage, variants, states, accessibility notes, and design-source links.
- Accessibility behavior is documented and validated.
- Component documentation follows the Figma-aligned section order:
  `Description / Purpose`, `Anatomy`, `Variants & States`, `Usage rules`, `Edge cases`, `Usage example`, `Accessibility`, `Design tokens applied`, `References`.
- Unsupported Figma states are explicitly marked as not implemented.

# Accessibility workflow

Accessibility is part of the implementation, not a final polish pass.

For any component or interaction change, validate:

- Keyboard access and focus order.
- Visible focus state from Figma or approved token.
- Accessible name, role, state, and description.
- Color contrast using Figma token values.
- Disabled, loading, selected, error, and interactive states when present in Figma.
- Reduced-motion behavior when motion exists.
- React Aria state attributes for components that use React Aria.

Do not invent ARIA behavior. Use native HTML semantics first. Add ARIA only when required by the interaction pattern and backed by platform guidance.

For React Aria components, use React Aria state attributes as the primary styling hooks and native pseudo-classes only as matching fallbacks:

```text
hover          -> [data-hovered] + :hover fallback
pressed        -> [data-pressed] + :active fallback
focus visible  -> [data-focus-visible] + :focus-visible fallback
disabled       -> [data-disabled] + :disabled fallback
pending        -> [data-pending]
```

# Storybook workflow

Storybook is the working documentation surface for Maré.

When adding or changing public design-system behavior:

- Add or update stories in `apps/docs`.
- Import components from `@mare/design-system`, not through private source paths.
- Include the Figma source reference in story parameters or documentation.
- Show only implemented variants and states.
- Mark missing Figma-approved variants as planned or not implemented in docs, not as fake UI.

Validation:

```bash
pnpm --filter @mare/docs build
pnpm build
```

# Figma MCP workflow

Use Figma MCP for any task involving tokens, components, layout, variants, visual states, or documentation derived from design.

Operational rules:

- Load the required Figma MCP instructions before calling Figma tools.
- Inspect variables, component properties, variants, and node metadata.
- Prefer Figma variables over sampled visual values.
- If a value is present visually but not represented as a variable, document it as a Figma gap and ask for confirmation before implementing it as a token.
- Do not use screenshots as the only evidence for token values unless the user explicitly approves that fallback.

# Pull request workflow

Before preparing a PR:

1. Summarize the Figma source used.
2. Summarize files changed by area: tokens, components, Storybook, docs, tests/config.
3. Run validation commands:

```bash
pnpm typecheck
pnpm build
```

4. Run narrower package commands when relevant.
5. Confirm docs and Storybook are updated.
6. Note accessibility checks performed.
7. List known limitations and Figma gaps.

Do not claim visual parity, accessibility compliance, or production readiness unless the validation evidence exists in the PR.

# Agent limits

Agents must not:

- Change design decisions without Figma evidence.
- Add dependencies without explaining why the existing stack is insufficient.
- Create components, tokens, or stories outside the established package structure.
- Hide validation failures.
- Update generated files by hand when a build script should generate them.
- Publish packages, tag releases, or merge PRs unless the user explicitly asks.
