import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

import { Button, MareProvider, buttonContract } from "@mare/design-system";

const figmaBaseUrl =
  "https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89";

const figmaButtonNodes = {
  componentSet: `${figmaBaseUrl}?node-id=569-370`,
  slots: `${figmaBaseUrl}?node-id=588-1649`,
  specs: `${figmaBaseUrl}?node-id=702-4078`,
  tokens: `${figmaBaseUrl}?node-id=702-4275`
} as const;

const headingStyle = {
  color: "var(--mare-color-text)",
  letterSpacing: 0,
  margin: 0
} satisfies CSSProperties;

const bodyTextStyle = {
  color: "var(--mare-color-text-muted)",
  lineHeight: 1.6,
  margin: "var(--mare-space-2) 0 0"
} satisfies CSSProperties;

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
  contentKind: (typeof buttonContract.contentKinds)[number];
  disabled: boolean;
  iconPosition: "start" | "end";
  isLoading: boolean;
  loadingLabel?: string;
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

const contentKinds = [
  {
    kind: "label",
    label: "Label",
    description: "Text only"
  },
  {
    kind: "icon-label",
    label: "Label",
    description: "Icon before label"
  },
  {
    kind: "label-icon",
    label: "Label",
    description: "Label before icon"
  },
  {
    kind: "icon",
    label: "Icon action",
    description: "Icon only"
  }
] as const satisfies Array<{
  kind: (typeof buttonContract.contentKinds)[number];
  label: string;
  description: string;
}>;

const defaultArgs: ButtonStoryArgs = {
  children: "Save changes",
  contentKind: "label",
  disabled: false,
  iconPosition: "start",
  isLoading: false,
  loadingLabel: "Saving...",
  variant: buttonContract.defaults.variant
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <MareProvider>
      <main
        style={{
          color: "var(--mare-color-text)",
          fontFamily: "var(--mare-font-family)",
          maxWidth: "1040px",
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
  contentKind,
  ...args
}: ButtonStoryArgs) {
  const hasIcon = contentKind !== "label";
  const hasLabel = contentKind !== "icon";
  const resolvedIconPosition =
    contentKind === "label-icon" ? "end" : args.iconPosition;

  if (!hasLabel) {
    return (
      <Button
        aria-label={children || "Icon button"}
        icon={<InlineIcon />}
        {...args}
      />
    );
  }

  return (
    <Button
      icon={hasIcon ? <InlineIcon /> : undefined}
      iconPosition={resolvedIconPosition}
      {...args}
    >
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
      <h2
        style={{
          ...headingStyle,
          fontSize: "1.35rem",
          marginBottom: "var(--mare-space-3)"
        }}
      >
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
        color: "var(--mare-color-text)",
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
  const hasIcon = args.contentKind !== "label";
  const hasLabel = args.contentKind !== "icon";
  const resolvedIconPosition =
    args.contentKind === "label-icon" ? "end" : args.iconPosition;
  const resolvedProps = [
    ["variant", args.variant],
    ["contentKind", args.contentKind],
    ["children", hasLabel ? args.children : "undefined"],
    ["disabled -> isDisabled", String(args.disabled)],
    ["isLoading -> isPending", String(args.isLoading)],
    ["icon", hasIcon ? "ReactNode" : "undefined"],
    ["iconPosition", hasLabel && hasIcon ? resolvedIconPosition : "undefined"],
    ["aria-label", hasLabel ? "optional" : args.children],
    ["type", buttonContract.defaults.type]
  ];

  return (
    <div
      style={{
        display: "grid",
        alignItems: "start",
        gap: "var(--mare-space-6)",
        gridTemplateColumns: "minmax(240px, 0.7fr) minmax(320px, 1fr)"
      }}
    >
      <div
        style={{
          alignItems: "center",
          background: "var(--mare-color-surface-muted)",
          border: "1px solid var(--mare-color-border)",
          borderRadius: "var(--mare-radius-md)",
          display: "flex",
          minHeight: "180px",
          justifyContent: "center",
          padding: "var(--mare-space-6)"
        }}
      >
        <StoryButton {...args} />
      </div>
      <div>
        <h3
          style={{
            ...headingStyle,
            fontSize: "1.1rem",
            marginBottom: "var(--mare-space-2)"
          }}
        >
          Current contract
        </h3>
        <p style={{ ...bodyTextStyle, marginBottom: "var(--mare-space-3)" }}>
          Storybook exposes the Figma slot model as a documentation control. The
          React API stays simple: label content is passed through{" "}
          <code>children</code>, icons through <code>icon</code>, and placement
          through <code>iconPosition</code>.
        </p>
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

function ButtonDocsPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.75rem" }}>Button</h1>
      <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "720px" }}>
        Button triggers an action on the current page, such as saving,
        submitting, confirming, or deleting, while preserving a consistent
        interactive target and visual hierarchy.
      </p>

      <Section title="Design source">
        <p style={bodyTextStyle}>
          Figma is the source of truth for Button. Review the{" "}
          <a
            href="https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89?node-id=58-635"
            rel="noopener noreferrer"
            target="_blank"
          >
            MARÉ UI Kit Button documentation
          </a>{" "}
          before changing variants, states, slots, tokens, or usage guidance.
        </p>
      </Section>

      <Section title="Variants and slots">
        <p style={bodyTextStyle}>
          The implemented visual variants are <code>primary</code> and{" "}
          <code>secondary</code>. Figma models Button content with slots:
          <code> label</code>, <code>icon-label</code>,{" "}
          <code>label-icon</code>, and <code>icon</code>. In React, those slots
          map to <code>children</code>, <code>icon</code>, and{" "}
          <code>iconPosition</code>; they are not separate Figma booleans.
        </p>
      </Section>

      <Section title="Usage rules">
        <ul style={bodyTextStyle}>
          <li>Use Button for actions that affect the current view or data.</li>
          <li>Use one primary button for the main action in a view, form, or dialog.</li>
          <li>Use secondary buttons for supporting actions with lower emphasis.</li>
          <li>Use Link, not Button, when the user is navigating to another page.</li>
          <li>Do not use Button as a decorative element or generic container.</li>
        </ul>
      </Section>

      <Section title="Edge cases">
        <ul style={bodyTextStyle}>
          <li>Icon-only buttons must always provide an accessible label.</li>
          <li>Disabled actions should have surrounding context explaining why the action is unavailable.</li>
          <li>Loading maps to React Aria pending behavior, but the spinner visual is still pending Figma definition.</li>
          <li>Long labels should stay concise; avoid vague copy like OK, Yes, or Click here.</li>
        </ul>
      </Section>

      <Section title="Accessibility">
        <ul style={bodyTextStyle}>
          <li>Built on React Aria Components Button.</li>
          <li>Uses native button semantics and defaults to <code>type="button"</code>.</li>
          <li>Maps disabled state to React Aria <code>isDisabled</code>.</li>
          <li>Maps loading state to React Aria <code>isPending</code> and <code>aria-busy</code>.</li>
          <li>Uses <code>data-focus-visible</code> with a native <code>:focus-visible</code> fallback.</li>
        </ul>
      </Section>

      <Section title="Usage example">
        <pre
          style={{
            background: "var(--mare-color-surface-muted)",
            borderRadius: "var(--mare-radius-md)",
            color: "var(--mare-color-text)",
            margin: 0,
            overflowX: "auto",
            padding: "var(--mare-space-4)"
          }}
        >{`import { Button } from "@mare/design-system";

export function SaveProfileAction() {
  return <Button>Save changes</Button>;
}`}</pre>
      </Section>
    </Layout>
  );
}

function VariantsPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Button variants</h1>
      <p style={bodyTextStyle}>
        Button supports primary and secondary variants. Figma models the inner
        content with slots: label, icon-label, label-icon, and icon.
      </p>

      <Section title="Content slots">
        <div
          style={{
            display: "grid",
            gap: "var(--mare-space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }}
        >
          {buttonContract.variants.map((variant) => (
            <div key={variant}>
              <h3
                style={{
                  ...headingStyle,
                  fontSize: "1rem",
                  marginBottom: "var(--mare-space-4)",
                  textTransform: "capitalize"
                }}
              >
                {variant}
              </h3>
              <div
                style={{
                  display: "grid",
                  gap: "var(--mare-space-4)"
                }}
              >
                {contentKinds.map((content) => (
                  <div
                    key={`${variant}-${content.kind}`}
                    style={{
                      alignItems: "center",
                      display: "grid",
                      gap: "var(--mare-space-4)",
                      gridTemplateColumns: "minmax(128px, max-content) 1fr"
                    }}
                  >
                    <StoryButton
                      {...{
                        ...defaultArgs,
                        children: content.label,
                        contentKind: content.kind,
                        variant
                      }}
                    />
                    <div>
                      <code>
                        {variant}/{content.kind}
                      </code>
                      <p style={{ ...bodyTextStyle, fontSize: "0.875rem", marginTop: "var(--mare-space-1)" }}>
                        {content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="States">
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
      </Section>
    </Layout>
  );
}

function TokensPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Button tokens</h1>
      <p style={bodyTextStyle}>
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
      },
      page: ButtonDocsPage
    },
    layout: "fullscreen"
  },
  argTypes: {
    children: {
      control: "text",
      description:
        "Visible button label, or accessible label when contentKind is icon."
    },
    contentKind: {
      control: "select",
      options: buttonContract.contentKinds,
      description:
        "Storybook documentation control that mirrors the Figma slot compositions."
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
    iconPosition: {
      control: "inline-radio",
      options: ["start", "end"],
      description:
        "Position of the optional icon when contentKind is icon-label. label-icon always resolves to end."
    }
  },
  args: defaultArgs,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Button playground</h1>
      <p style={bodyTextStyle}>
        Use controls to test the React API against the Figma slot model. The
        component uses React Aria Button underneath, so interaction states come
        from accessible technical attributes.
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
          "Interactive playground for the current Button API. `contentKind` mirrors Figma slots while the real component API stays based on children, icon, and iconPosition."
      }
    }
  }
};

export const Variants: Story = {
  render: () => <VariantsPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaButtonNodes.slots
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
