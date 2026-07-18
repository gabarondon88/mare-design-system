# Token taxonomy

## Purpose

Define how Maré tokens are classified and named.

## When to read this

Read this before creating, renaming, deleting, or documenting tokens.

## Source of truth

Figma variable collections define approved token values and aliases.

## Steps

Classify each token into exactly one primary category:

- Primitive token: raw value from Figma, such as a base color or spacing scale.
- Semantic token: meaning-based token that references a primitive token.
- Component token: token scoped to a component, slot, or state.
- Alias token: token that intentionally points to another token.

For each token, document:

- Name
- Category
- Figma collection
- Figma mode
- Value or alias
- Intended usage
- Status if Figma exposes one

## Acceptance criteria

- Naming follows Figma unless the repository has an explicit naming transform.
- A token has one clear category.
- A semantic token describes purpose, not appearance.
- A component token names the component, part, and state.
- Deleted or deprecated tokens are not removed without checking usages.

## Validation commands

```bash
pnpm --filter @mare/design-system build
pnpm typecheck
```

## Do not invent

Do not create semantic names because they sound correct. Do not collapse several Figma variables into one repository token unless Figma defines that relationship.

## Related documents

- `docs/processes/token-workflow.md`
- `agents/skills/create-token/SKILL.md`

