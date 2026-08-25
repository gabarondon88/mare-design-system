import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

import { Input, MareProvider, inputContract } from "@mare/design-system";

const figmaBaseUrl =
  "https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89";

const figmaInputNodes = {
  component: `${figmaBaseUrl}?node-id=635-299`,
  specs: `${figmaBaseUrl}?node-id=695-3542`,
  usage: `${figmaBaseUrl}?node-id=695-3543`
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

type InputStoryArgs = {
  ariaLabel: string;
  label: string;
  placeholder: string;
  showLabel: boolean;
  showSupportiveText: boolean;
  state: (typeof inputContract.visualStates)[number];
  supportiveText: string;
  value: string;
};

const defaultArgs: InputStoryArgs = {
  ariaLabel: "Email address",
  label: "Email address",
  placeholder: "you@example.com",
  showLabel: true,
  showSupportiveText: true,
  state: inputContract.defaults.state,
  supportiveText: "We'll never share your email.",
  value: ""
};

const tokenRows = [
  ["alias/text/base", "Label and value text color", "#111a1d"],
  ["alias/text/muted", "Placeholder and supportive text", "#707d81"],
  ["alias/text/disabled", "Disabled text color", "#a8b3b7"],
  ["alias/border/default", "Default border", "#707d81"],
  ["alias/border/focus", "Focus and filled border", "#02957e"],
  ["alias/border/error", "Error border", "#c92c39"],
  ["alias/border/success", "Success border", "#07c586"],
  ["alias/border/disabled", "Disabled border", "#d7e0e3"],
  ["alias/bg/subtle", "Focus background fill", "#f3f8fa"],
  ["alias/bg/disabled", "Disabled background fill", "#d7e0e3"],
  ["alias/border/strong", "focusRing stroke", "#111a1d"],
  ["space/4", "Corner radius", "4px"],
  ["space/12", "Horizontal padding", "12px"],
  ["space/16", "Vertical padding", "16px"],
  ["space/8", "Gap between elements", "8px"],
  ["Body/md-normal", "Label, placeholder, and value typography", "16px / 400 / 20px"],
  ["Body/sm-medium", "Supportive text typography", "14px / 500 / 18px"]
] as const;

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

function Section({ children, title }: { children: ReactNode; title: string }) {
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

function Table({ children }: { children: ReactNode }) {
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
    <span style={{ alignItems: "center", display: "inline-flex", gap: "0.5rem" }}>
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

function StoryInput(args: InputStoryArgs) {
  const label = args.showLabel ? args.label : undefined;
  const supportiveText = args.showSupportiveText ? args.supportiveText : undefined;
  const value =
    args.value ||
    (["filled", "error", "success"].includes(args.state)
      ? "gaba@mare.design"
      : undefined);

  return (
    <div style={{ width: "240px" }}>
      <Input
        aria-label={label ? undefined : args.ariaLabel}
        label={label}
        placeholder={args.placeholder}
        state={args.state}
        supportiveText={supportiveText}
        value={value}
        onChange={() => undefined}
      />
    </div>
  );
}

function PlaygroundPreview(args: InputStoryArgs) {
  const [label, setLabel] = useState(args.label);
  const [placeholder, setPlaceholder] = useState(args.placeholder);
  const [showLabel, setShowLabel] = useState(args.showLabel);
  const [showSupportiveText, setShowSupportiveText] = useState(
    args.showSupportiveText
  );
  const [state, setState] = useState<InputStoryArgs["state"]>(args.state);
  const [supportiveText, setSupportiveText] = useState(args.supportiveText);
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setLabel(args.label);
    setPlaceholder(args.placeholder);
    setShowLabel(args.showLabel);
    setShowSupportiveText(args.showSupportiveText);
    setState(args.state);
    setSupportiveText(args.supportiveText);
    setValue(args.value);
  }, [
    args.label,
    args.placeholder,
    args.showLabel,
    args.showSupportiveText,
    args.state,
    args.supportiveText,
    args.value
  ]);

  const visibleLabel = showLabel ? label : undefined;
  const visibleSupportiveText = showSupportiveText ? supportiveText : undefined;

  return (
    <div
      style={{
        alignItems: "start",
        display: "grid",
        gap: "var(--mare-space-6)",
        gridTemplateColumns: "minmax(240px, 320px) minmax(260px, 1fr)"
      }}
    >
      <div
        style={{
          background: "var(--mare-color-surface-muted)",
          border: "1px solid var(--mare-color-border)",
          borderRadius: "var(--mare-radius-md)",
          padding: "var(--mare-space-6)"
        }}
      >
        <Input
          aria-label={visibleLabel ? undefined : args.ariaLabel}
          label={visibleLabel}
          onChange={setValue}
          placeholder={placeholder}
          state={state}
          supportiveText={visibleSupportiveText}
          value={value}
        />
      </div>

      <div
        style={{
          display: "grid",
          gap: "var(--mare-space-4)"
        }}
      >
        <label style={{ color: "var(--mare-color-text)" }}>
          <span style={{ display: "block", marginBottom: "var(--mare-space-2)" }}>
            State
          </span>
          <select
            onChange={(event) =>
              setState(event.currentTarget.value as InputStoryArgs["state"])
            }
            style={{
              border: "1px solid var(--mare-color-border)",
              borderRadius: "var(--mare-radius-sm)",
              font: "inherit",
              padding: "var(--mare-space-2)",
              width: "100%"
            }}
            value={state}
          >
            {inputContract.visualStates.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <input
            checked={showLabel}
            onChange={(event) => setShowLabel(event.currentTarget.checked)}
            type="checkbox"
          />{" "}
          Show label
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <input
            checked={showSupportiveText}
            onChange={(event) =>
              setShowSupportiveText(event.currentTarget.checked)
            }
            type="checkbox"
          />{" "}
          Show supportive text
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <span style={{ display: "block", marginBottom: "var(--mare-space-2)" }}>
            Label
          </span>
          <input
            onChange={(event) => setLabel(event.currentTarget.value)}
            style={{
              border: "1px solid var(--mare-color-border)",
              borderRadius: "var(--mare-radius-sm)",
              font: "inherit",
              padding: "var(--mare-space-2)",
              width: "100%"
            }}
            value={label}
          />
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <span style={{ display: "block", marginBottom: "var(--mare-space-2)" }}>
            Supportive text
          </span>
          <input
            onChange={(event) => setSupportiveText(event.currentTarget.value)}
            style={{
              border: "1px solid var(--mare-color-border)",
              borderRadius: "var(--mare-radius-sm)",
              font: "inherit",
              padding: "var(--mare-space-2)",
              width: "100%"
            }}
            value={supportiveText}
          />
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <span style={{ display: "block", marginBottom: "var(--mare-space-2)" }}>
            Placeholder
          </span>
          <input
            onChange={(event) => setPlaceholder(event.currentTarget.value)}
            style={{
              border: "1px solid var(--mare-color-border)",
              borderRadius: "var(--mare-radius-sm)",
              font: "inherit",
              padding: "var(--mare-space-2)",
              width: "100%"
            }}
            value={placeholder}
          />
        </label>

        <p style={bodyTextStyle}>
          Typing in the preview updates the component value. When state is{" "}
          <code>default</code>, a non-empty value uses the filled visual style.
        </p>
      </div>
    </div>
  );
}

function InputDocsPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.75rem" }}>Input</h1>
      <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "720px" }}>
        Input allows users to enter and edit text. It is a single-line field
        that communicates interaction, validation, and availability.
      </p>

      <Section title="Design source">
        <p style={bodyTextStyle}>
          Figma is the source of truth. Review the{" "}
          <a href={figmaInputNodes.specs} rel="noopener noreferrer" target="_blank">
            Input component specs
          </a>{" "}
          and{" "}
          <a href={figmaInputNodes.usage} rel="noopener noreferrer" target="_blank">
            Input usage guide
          </a>{" "}
          before changing states, tokens, validation behavior, or usage rules.
        </p>
      </Section>

      <Section title="Behavior">
        <p style={bodyTextStyle}>
          Figma represents visual states through <code>state</code>,{" "}
          <code>showLabel</code>, <code>showSupportiveText</code>, and{" "}
          <code>focus-visible</code>. In code, focus is derived by React Aria
          through <code>data-focused</code> and <code>data-focus-visible</code>.
          Error maps to React Aria <code>isInvalid</code>; disabled maps to{" "}
          <code>isDisabled</code>.
        </p>
      </Section>

      <Section title="Usage rules">
        <ul style={bodyTextStyle}>
          <li>Use for short, single-line text values.</li>
          <li>Use when inline helper or validation feedback is needed.</li>
          <li>Do not use for multi-line text; use Textarea instead.</li>
          <li>Do not use for predefined options; use Select instead.</li>
          <li>Inputs without visible labels must provide an accessible name.</li>
        </ul>
      </Section>

      <Section title="Accessibility">
        <ul style={bodyTextStyle}>
          <li>Built on React Aria Components TextField.</li>
          <li>Visible labels are connected with React Aria Label.</li>
          <li>Supportive text is connected as description or error message.</li>
          <li>Error state uses <code>isInvalid</code>.</li>
          <li>Disabled state uses <code>isDisabled</code>.</li>
          <li>Validation errors should appear after interaction or on submit.</li>
        </ul>
      </Section>
    </Layout>
  );
}

function StatesPage() {
  const states = [
    ["Default", { ...defaultArgs }],
    ["Filled", { ...defaultArgs, state: "filled", value: "gaba@mare.design" }],
    ["Error", { ...defaultArgs, state: "error", supportiveText: "Email is required." }],
    ["Success", { ...defaultArgs, state: "success", supportiveText: "Looks good!" }],
    ["Disabled", { ...defaultArgs, state: "disabled", supportiveText: "This field cannot be edited." }],
    ["No label", { ...defaultArgs, showLabel: false, showSupportiveText: false }]
  ] as const satisfies ReadonlyArray<readonly [string, InputStoryArgs]>;

  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Input states</h1>
      <p style={bodyTextStyle}>
        State examples from the Figma component and usage guide. Focus styles
        are technical states; click or tab into a field to inspect them.
      </p>

      <Section title="Examples">
        <div
          style={{
            display: "grid",
            gap: "var(--mare-space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
          }}
        >
          {states.map(([label, args]) => (
            <div key={label}>
              <p style={{ ...bodyTextStyle, marginBottom: "var(--mare-space-3)" }}>
                {label}
              </p>
              <StoryInput {...args} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="State mapping">
        <Table>
          <thead>
            <tr>
              <Th>Figma concept</Th>
              <Th>Code mapping</Th>
              <Th>Rule</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td><code>state=focus</code></Td>
              <Td><code>data-focused</code></Td>
              <Td>Derived by React Aria; no public visual prop.</Td>
            </tr>
            <tr>
              <Td><code>state=error</code></Td>
              <Td><code>state="error"</code> + <code>isInvalid</code></Td>
              <Td>Always include supportive text.</Td>
            </tr>
            <tr>
              <Td><code>state=disabled</code></Td>
              <Td><code>disabled</code> / <code>isDisabled</code></Td>
              <Td>Field is non-interactive.</Td>
            </tr>
            <tr>
              <Td><code>showLabel=false</code></Td>
              <Td>omit <code>label</code> + provide <code>aria-label</code></Td>
              <Td>Required for accessible naming.</Td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </Layout>
  );
}

function TokensPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Input tokens</h1>
      <p style={bodyTextStyle}>
        Tokens documented in Figma for the initial Input implementation.
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
          {tokenRows.map(([token, role, value]) => (
            <tr key={token}>
              <Td><code>{token}</code></Td>
              <Td>{role}</Td>
              <Td><TokenSwatch value={value} /></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

const meta: Meta<typeof StoryInput> = {
  title: "Components/Input",
  component: StoryInput,
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
      url: figmaInputNodes.component
    },
    docs: {
      page: () => <InputDocsPage />
    },
    layout: "fullscreen"
  },
  argTypes: {
    state: {
      control: "select",
      options: inputContract.visualStates,
      description: "Visual state confirmed in Figma."
    },
    showLabel: {
      control: "boolean",
      description: "Storybook control that mirrors Figma showLabel."
    },
    showSupportiveText: {
      control: "boolean",
      description: "Storybook control that mirrors Figma showSupportiveText."
    },
    label: {
      control: "text",
      description: "Visible label content."
    },
    ariaLabel: {
      control: "text",
      description: "Accessible name used when no visible label is rendered."
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when empty."
    },
    value: {
      control: "text",
      description: "Controlled value used to exercise filled states."
    },
    supportiveText: {
      control: "text",
      description: "Helper or validation text."
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
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Input playground</h1>
      <p style={bodyTextStyle}>
        Use the controls in this canvas to test label visibility, supportive
        text, value, and validation state against the Figma contract.
      </p>
      <Section title="Preview">
        <PlaygroundPreview {...defaultArgs} {...args} />
      </Section>
    </Layout>
  )
};

export const States: Story = {
  render: () => <StatesPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaInputNodes.usage
    },
    controls: {
      disable: true
    }
  }
};

export const Tokens: Story = {
  render: () => <TokensPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaInputNodes.specs
    },
    controls: {
      disable: true
    }
  }
};
