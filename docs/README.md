# Maré Design System documentation

This folder contains operational documentation for agents and maintainers working on Maré.

The purpose is not to describe the design system at a high level. The purpose is to make contribution work repeatable, reviewable, and traceable to Figma.

## Initial structure

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
│   ├── button.md
│   ├── button-analysis.md
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

## Document purposes

`documentation-guidelines.md` defines the required structure for every operational document.

`processes/investigation-before-changes.md` defines what an agent must inspect before editing tokens, components, Storybook, documentation, or build configuration.

`processes/component-workflow.md` defines how to create and maintain React components in the design-system package.

`processes/token-workflow.md` defines how to create and maintain tokens from Figma.

`processes/pull-request-workflow.md` defines the final checks and evidence required before opening or handing off a PR.

`foundations/token-taxonomy.md` defines token categories, naming rules, and limits.

`foundations/figma-source-of-truth.md` defines how Figma evidence is captured and what to do when Figma is missing or ambiguous.

`components/component-documentation-template.md` defines the Figma-aligned structure expected for public component docs.

`components/button.md` is the canonical Button component documentation using the Figma-aligned structure.

`components/button-analysis.md` captures the first-pass Figma-backed analysis and proposed React contract. It is supporting evidence, not the canonical component documentation.

`storybook/storybook-guidelines.md` defines how Storybook should be authored and validated.

`accessibility/accessibility-validation.md` defines accessibility checks expected for component work.

`accessibility/react-aria-policy.md` defines how Maré uses React Aria Components as the accessible behavior layer.

`figma/figma-mcp-workflow.md` defines how agents use Figma MCP safely.

`pr/pull-request-template.md` defines the PR body structure agents should prepare.
