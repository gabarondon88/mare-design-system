# Maré Design System

Monorepo base para el Design System de Maré, construido con Turborepo, pnpm y TypeScript.

## Estructura

- `packages/design-system`: paquete React publicable como `@mare/design-system`.
- `apps/docs`: documentación en Storybook para desarrollar y revisar el sistema.

## Scripts

```sh
pnpm install
pnpm build
pnpm typecheck
pnpm dev
```

## Desarrollo

El paquete de design system expone:

- `@mare/design-system`: entrypoint de componentes y utilidades React.
- `@mare/design-system/styles.css`: tokens CSS base.

La app de documentación consume el paquete mediante `workspace:*`.

