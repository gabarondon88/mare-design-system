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
            Base de componentes React
          </h1>
          <p style={{ margin: 0, color: "var(--mare-color-text-muted)" }}>
            Esta historia valida que Storybook consume el paquete del design system desde el workspace.
          </p>
        </section>
      </main>
    </MareProvider>
  )
};
