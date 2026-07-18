# Documentation guidelines

Every document in `docs/` must help an agent execute or validate work.

## Required structure

Use this structure for process and convention documents:

```md
# Name

## Purpose

## When to read this

## Source of truth

## Steps

## Acceptance criteria

## Validation commands

## Do not invent

## Related documents
```

If a section is not applicable, keep the heading and write `Not applicable yet` with a short reason.

Component documentation is the exception. Files under `docs/components/{component-name}.md` must use `docs/components/component-documentation-template.md` instead, because their structure mirrors the specs and usage-guide model in Figma.

## Rules

- Keep one process or convention per file.
- Prefer checklists, commands, file paths, and examples over prose.
- Link to repository files when the referenced implementation exists.
- Mention Figma evidence requirements whenever design data is involved.
- Update documentation in the same change that modifies the workflow, token, component, or public API.
- Do not document aspirational behavior as if it already exists.

## Source of truth

Figma is the source of truth for design decisions. Repository docs define process and implementation rules, not design values.

When docs and Figma conflict:

1. Treat Figma as authoritative for design values.
2. Treat docs as authoritative for repository workflow.
3. Stop and ask the user if the conflict affects implementation.
