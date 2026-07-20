import type { Meta, StoryObj } from "@storybook/react";

import { MareProvider } from "@mare/design-system";

const meta = {
  title: "Maré/Introduction",
  component: MareProvider,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MareProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Foundation: Story = {
  render: () => (
    <MareProvider>
      <main
        style={{
          minHeight: "100vh",
          padding: "var(--mare-space-6)",
          background: "var(--mare-color-surface-muted)"
        }}
      >
        <section
          style={{
            maxWidth: "720px",
            padding: "var(--mare-space-6)",
            background: "var(--mare-color-surface)",
            border: "1px solid var(--mare-color-border)",
            borderRadius: "var(--mare-radius-md)"
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--mare-color-text-muted)",
              fontSize: "0.875rem"
            }}
          >
            Maré Design System
          </p>
          <h1 style={{ margin: "var(--mare-space-2) 0", fontSize: "2rem" }}>
            🌊 Maré — Starter Design System
          </h1>
          <div style={{ color: "var(--mare-color-text-muted)", display: "grid", gap: "var(--mare-space-4)" }}>
            <p style={{ margin: 0 }}>
              Maré is a practical starter design system for building consistent, scalable interfaces without reinventing
              the wheel.
            </p>
            <p style={{ margin: 0 }}>
              This Storybook brings together Maré’s foundations and UI components in one place. Explore component
              variants, interaction states, usage guidelines, and accessibility considerations as the system continues to
              grow.
            </p>
            <p style={{ margin: 0 }}>
              Built with design tokens, flexible components, and scalability in mind, Maré helps teams move faster while
              maintaining a cohesive visual language.
            </p>
            <h2 style={{ margin: "var(--mare-space-2) 0 0", color: "var(--mare-color-text)" }}>🌊 About Maré</h2>
            <p style={{ margin: 0 }}>
              Maré was born from a love for components, color, and systems that feel clear, useful, and easy to maintain.
            </p>
            <p style={{ margin: 0 }}>
              Its name is inspired by the sea, an influence reflected throughout the color palette, shapes, and visual
              language of the system.
            </p>
            <p style={{ margin: 0 }}>
              Storybook serves as the living documentation for Maré, connecting design decisions with their
              implementation and making components easier to explore, test, and reuse.
            </p>
            <h2 style={{ margin: "var(--mare-space-2) 0 0", color: "var(--mare-color-text)" }}>🚧 Work in progress</h2>
            <p style={{ margin: 0 }}>Maré is an evolving design system.</p>
            <p style={{ margin: 0 }}>
              New components, variants, guidelines, and accessibility documentation are being added regularly. Existing
              components may also be refined as the system becomes more consistent and robust.
            </p>
            <p style={{ margin: 0 }}>If something changes, it is intentional — Maré is continuously improving.</p>
          </div>
        </section>
      </main>
    </MareProvider>
  )
};
