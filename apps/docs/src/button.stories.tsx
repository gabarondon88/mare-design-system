import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

import { Button, MareProvider, buttonContract } from "@mare/design-system";

const figmaBaseUrl =
  "https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89";

const figmaButtonNodes = {
  componentSet: `${figmaBaseUrl}?node-id=569-370`,
  specs: `${figmaBaseUrl}?node-id=702-4078`,
  tokens: `${figmaBaseUrl}?node-id=702-4275`
} as const;

const sectionStyle = {
  borderTop: "1px solid var(--mare-color-border)",
  padding: "var(--mare-space-6) 0"
} satisfies CSSProperties;

const tableStyle = {
  borderCollapse: "collapse",
  fontSize: "0.875rem",
  width: "100%"
} satisfies CSSProperties;

type ButtonStoryArgs = {
  children: string;
  disabled: boolean;
  iconPosition: "start" | "end";
  isLoading: boolean;
  loadingLabel?: string;
  showIcon: boolean;
  variant: "primary" | "secondary";
};

type TokenRow = {
  token: string;
  role: string;
  value: string;
};

const tokenRows: TokenRow[] = [
  {
    token: "alias/primary/bg/base",
    role: "Primary background",
    value: "#02957e"
  },
  {
    token: "alias/primary/text/onBase",
    role: "Primary label",
    value: "#f3f8fa"
  },
  {
    token: "alias/primary/text/onSubtle",
    role: "Secondary label",
    value: "#00453a"
  },
  {
    token: "alias/primary/border",
    role: "Secondary border and documented focus ring",
    value: "#02957e"
  },
  {
    token: "alias/interactive/state-layer/inverse",
    role: "Primary hover overlay",
    value: "#f3f8fa"
  },
  {
    token: "alias/interactive/state-layer/base",
    role: "Secondary overlay and pressed state layer",
    value: "#707d81"
  },
  {
    token: "alias/interactive/disabled/bg",
    role: "Disabled background",
    value: "#d7e0e3"
  },
  {
    token: "alias/interactive/disabled/text",
    role: "Disabled label",
    value: "#707d81"
  },
  {
    token: "global/radius/md",
    role: "Button corner radius",
    value: "8px"
  },
  {
    token: "Body/md-bold",
    role: "Button label typography",
    value: "16px / 700 / 20px"
  }
];

const variants = [
  {
    variant: "primary",
    state: "default",
    figmaNode: "569:367",
    technicalState: "Base ReactAriaButton",
    implemented: "Yes",
    notes: "Main action. One primary button per view."
  },
  {
    variant: "primary",
    state: "hover",
    figmaNode: "569:365",
    technicalState: "[data-hovered] + :hover fallback",
    implemented: "Yes",
    notes: "Figma state-layer opacity."
  },
  {
    variant: "primary",
    state: "pressed",
    figmaNode: "569:363",
    technicalState: "[data-pressed] + :active fallback",
    implemented: "Yes",
    notes: "Figma state-layer opacity."
  },
  {
    variant: "primary",
    state: "disabled",
    figmaNode: "569:366",
    technicalState: "[data-disabled] + :disabled fallback",
    implemented: "Yes",
    notes: "React Aria isDisabled."
  },
  {
    variant: "secondary",
    state: "default",
    figmaNode: "569:471",
    technicalState: "Base ReactAriaButton",
    implemented: "Yes",
    notes: "Supporting action."
  },
  {
    variant: "secondary",
    state: "hover",
    figmaNode: "569:477",
    technicalState: "[data-hovered] + :hover fallback",
    implemented: "Yes",
    notes: "Figma state-layer opacity."
  },
  {
    variant: "secondary",
    state: "pressed",
    figmaNode: "569:484",
    technicalState: "[data-pressed] + :active fallback",
    implemented: "Yes",
    notes: "Figma state-layer opacity."
  },
  {
    variant: "secondary",
    state: "disabled",
    figmaNode: "569:491",
    technicalState: "[data-disabled] + :disabled fallback",
    implemented: "Yes",
    notes: "React Aria isDisabled."
  },
  {
    variant: "primary / secondary",
    state: "loading",
    figmaNode: "703:1537",
    technicalState: "[data-pending]",
    implemented: "Partial",
    notes: "Behavior reserved; spinner visual is not defined in Figma."
  }
];

const defaultArgs: ButtonStoryArgs = {
  children: "Save changes",
  disabled: false,
  iconPosition: "start",
  isLoading: false,
  loadingLabel: "Saving...",
  showIcon: false,
  variant: buttonContract.defaults.variant
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <MareProvider>
      <main
        style={{
          color: "var(--mare-color-text)",
          fontFamily: "var(--mare-font-family)",
          maxWidth: "960px",
          padding: "var(--mare-space-6)"
        }}
      >
        {children}
      </main>
    </MareProvider>
  );
}

function InlineIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
      <path
        d="M3.5 8.2 6.6 11 12.5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function StoryButton({
  children,
  showIcon,
  ...args
}: ButtonStoryArgs) {
  return (
    <Button icon={showIcon ? <InlineIcon /> : undefined} {...args}>
      {children}
    </Button>
  );
}

function Section({
  children,
  title
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section style={sectionStyle}>
      <h2 style={{ fontSize: "1.125rem", margin: "0 0 var(--mare-space-3)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Table({
  children
}: {
  children: ReactNode;
}) {
  return <table style={tableStyle}>{children}</table>;
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th
      style={{
        borderBottom: "1px solid var(--mare-color-border)",
        color: "var(--mare-color-text-muted)",
        padding: "0.75rem",
        textAlign: "left"
      }}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td
      style={{
        borderBottom: "1px solid var(--mare-color-border)",
        padding: "0.75rem",
        verticalAlign: "top"
      }}
    >
      {children}
    </td>
  );
}

function TokenSwatch({ value }: { value: string }) {
  const isColor = value.startsWith("#");

  return (
    <span
      style={{
        alignItems: "center",
        display: "inline-flex",
        gap: "0.5rem"
      }}
    >
      {isColor ? (
        <span
          aria-hidden="true"
          style={{
            background: value,
            border: "1px solid var(--mare-color-border)",
            borderRadius: "2px",
            display: "inline-block",
            height: "0.875rem",
            width: "0.875rem"
          }}
        />
      ) : null}
      <code>{value}</code>
    </span>
  );
}

function ContractPanel({ args }: { args: ButtonStoryArgs }) {
  const resolvedProps = [
    ["variant", args.variant],
    ["disabled -> isDisabled", String(args.disabled)],
    ["isLoading -> isPending", String(args.isLoading)],
    ["icon", args.showIcon ? "ReactNode" : "undefined"],
    ["iconPosition", args.iconPosition],
    ["type", buttonContract.defaults.type]
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "var(--mare-space-4)",
        gridTemplateColumns: "minmax(220px, max-content) minmax(280px, 1fr)"
      }}
    >
      <div>
        <StoryButton {...args} />
      </div>
      <div>
        <h3 style={{ fontSize: "1rem", margin: "0 0 var(--mare-space-2)" }}>
          Current contract
        </h3>
        <Table>
          <tbody>
            {resolvedProps.map(([name, value]) => (
              <tr key={name}>
                <Td>
                  <code>{name}</code>
                </Td>
                <Td>
                  <code>{value}</code>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function OverviewPage() {
  return (
    <Layout>
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Button</h1>
      <p style={{ color: "var(--mare-color-text-muted)", marginTop: "0.5rem" }}>
        Button triggers an action on the current page, such as saving,
        submitting, or deleting, while preserving a consistent interactive
        target and visual hierarchy.
      </p>

      <Section title="Description / Purpose">
        <p>
          Figma source: <code>UI Kit - MARE</code>, page{" "}
          <code>58:635 Button & links</code>, component set{" "}
          <code>{buttonContract.figma.componentSetNodeId}</code>, specs{" "}
          <code>{buttonContract.figma.specsNodeId}</code>, usage guide{" "}
          <code>{buttonContract.figma.usageGuideNodeId}</code>.
        </p>
      </Section>

      <Section title="Variants & States">
        <p>
          Implemented variants are <code>primary</code> and{" "}
          <code>secondary</code>. Visual states follow Figma, while technical
          state hooks come from React Aria with native CSS fallbacks where they
          match.
        </p>
      </Section>

      <Section title="Usage rules">
        <ul>
          <li>Use for actions on the current page: save, submit, delete.</li>
          <li>Use one primary button per view.</li>
          <li>Use Link instead when navigating to another page.</li>
          <li>Avoid vague labels like OK, Yes, or Click here.</li>
        </ul>
      </Section>

      <Section title="Edge cases">
        <ul>
          <li>Icon-only buttons require an accessible label.</li>
          <li>Disabled actions need surrounding explanation.</li>
          <li>
            Loading is behaviorally reserved, but the spinner visual is not
            defined in Figma yet.
          </li>
        </ul>
      </Section>

      <Section title="Usage example">
        <pre
          style={{
            background: "var(--mare-color-surface-muted)",
            borderRadius: "var(--mare-radius-md)",
            margin: 0,
            padding: "var(--mare-space-4)"
          }}
        >{`import { Button } from "@mare/design-system";

export function SaveProfileAction() {
  return <Button>Save changes</Button>;
}`}</pre>
      </Section>

      <Section title="Accessibility">
        <ul>
          <li>Wraps React Aria Components Button.</li>
          <li>Maps disabled to React Aria isDisabled.</li>
          <li>Maps loading to React Aria isPending and aria-busy.</li>
          <li>Uses data-focus-visible plus :focus-visible fallback.</li>
        </ul>
      </Section>

      <Section title="Design tokens applied">
        <p>
          See the <strong>Tokens</strong> story for the complete token table and
          contrast notes.
        </p>
      </Section>

      <Section title="References">
        <p>
          Figma is authoritative. External systems are not currently used to
          override Maré Button decisions.
        </p>
      </Section>
    </Layout>
  );
}

function VariantsPage() {
  return (
    <Layout>
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Button variants</h1>
      <p style={{ color: "var(--mare-color-text-muted)" }}>
        Matrix of Figma variants and current implementation status.
      </p>

      <div style={{ display: "flex", gap: "var(--mare-space-4)", margin: "1.5rem 0" }}>
        <Button>Label</Button>
        <Button variant="secondary">Label</Button>
        <Button disabled>Label</Button>
        <Button disabled variant="secondary">
          Label
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Variant</Th>
            <Th>State</Th>
            <Th>Figma node</Th>
            <Th>Technical state</Th>
            <Th>Implemented</Th>
            <Th>Notes</Th>
          </tr>
        </thead>
        <tbody>
          {variants.map((row) => (
            <tr key={`${row.variant}-${row.state}`}>
              <Td>
                <code>{row.variant}</code>
              </Td>
              <Td>
                <code>{row.state}</code>
              </Td>
              <Td>
                <code>{row.figmaNode}</code>
              </Td>
              <Td>
                <code>{row.technicalState}</code>
              </Td>
              <Td>{row.implemented}</Td>
              <Td>{row.notes}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

function TokensPage() {
  return (
    <Layout>
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Button tokens</h1>
      <p style={{ color: "var(--mare-color-text-muted)" }}>
        Tokens applied from Figma specs. Values must not be changed from
        Storybook without updating the Figma source of truth.
      </p>

      <Table>
        <thead>
          <tr>
            <Th>Token</Th>
            <Th>Role</Th>
            <Th>Value</Th>
          </tr>
        </thead>
        <tbody>
          {tokenRows.map((row) => (
            <tr key={row.token}>
              <Td>
                <code>{row.token}</code>
              </Td>
              <Td>{row.role}</Td>
              <Td>
                <TokenSwatch value={row.value} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Section title="State-layer model">
        <p>
          Maré does not create separate hover or pressed color tokens for
          Button. Figma defines those states with a state-layer color plus
          opacity, triggered in code by React Aria state attributes and matching
          native CSS fallbacks.
        </p>
      </Section>

      <Section title="Contrast notes">
        <Table>
          <tbody>
            <tr>
              <Td>Primary label on primary background</Td>
              <Td>
                <code>#f3f8fa</code> on <code>#02957e</code>
              </Td>
              <Td>
                <strong>3.50:1</strong> - needs Figma review for normal text.
              </Td>
            </tr>
            <tr>
              <Td>Secondary label on white surface</Td>
              <Td>
                <code>#00453a</code> on <code>#ffffff</code>
              </Td>
              <Td>
                <strong>10.98:1</strong> - passes WCAG AA for normal text.
              </Td>
            </tr>
            <tr>
              <Td>Focus ring on white surface</Td>
              <Td>
                <code>#02957e</code> on <code>#ffffff</code>
              </Td>
              <Td>
                <strong>3.75:1</strong> - passes non-text contrast threshold.
              </Td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Layout>
  );
}

const meta: Meta<typeof StoryButton> = {
  title: "Components/Button",
  component: StoryButton,
  decorators: [
    (Story) => (
      <MareProvider>
        <Story />
      </MareProvider>
    )
  ],
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.componentSet
    },
    docs: {
      description: {
        component:
          "Figma-aligned Button documentation. Source: UI Kit - MARE, page `58:635`, component set `569:370`, specs `702:4078`, usage guide `703:1445`."
      }
    },
    layout: "fullscreen"
  },
  argTypes: {
    children: {
      control: "text",
      description: "Visible button label."
    },
    variant: {
      control: "inline-radio",
      options: buttonContract.variants,
      description: "Figma variant."
    },
    disabled: {
      control: "boolean",
      description: "Maps to React Aria isDisabled."
    },
    isLoading: {
      control: "boolean",
      description:
        "Maps to React Aria isPending. Visual spinner is not defined in Figma yet."
    },
    loadingLabel: {
      control: "text",
      description: "Optional visible label while loading."
    },
    showIcon: {
      control: "boolean",
      description: "Storybook-only control used to exercise the icon prop."
    },
    iconPosition: {
      control: "inline-radio",
      options: ["start", "end"],
      description: "Position of the optional icon when a label exists."
    }
  },
  args: defaultArgs,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => <OverviewPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.specs
    },
    controls: {
      disable: true
    },
    docs: {
      description: {
        story:
          "Figma-aligned component overview. Use Playground to inspect the React contract and prop mapping."
      }
    }
  }
};

export const Playground: Story = {
  render: (args) => (
    <Layout>
      <h1 style={{ fontSize: "2rem", margin: 0 }}>Button playground</h1>
      <p style={{ color: "var(--mare-color-text-muted)" }}>
        Use Storybook controls to inspect the public props and current contract.
      </p>
      <ContractPanel args={{ ...defaultArgs, ...args }} />
    </Layout>
  ),
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.componentSet
    },
    docs: {
      description: {
        story:
          "Interactive playground for the current Button API. Controls reflect implemented props and a Storybook-only icon toggle."
      }
    }
  }
};

export const Variants: Story = {
  render: () => <VariantsPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.componentSet
    },
    controls: {
      disable: true
    },
    docs: {
      description: {
        story:
          "Variant and state matrix mapped to Figma nodes and implementation status."
      }
    }
  }
};

export const Tokens: Story = {
  render: () => <TokensPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.tokens
    },
    controls: {
      disable: true
    },
    docs: {
      description: {
        story:
          "Design tokens applied to Button, including values and contrast notes from the Figma analysis."
      }
    }
  }
};
