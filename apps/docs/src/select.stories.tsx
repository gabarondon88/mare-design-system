import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  MareProvider,
  Select,
  SelectItem,
  selectContract
} from "@mare/design-system";

const figmaBaseUrl =
  "https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89";

const figmaSelectNodes = {
  component: `${figmaBaseUrl}?node-id=635-300`,
  select: `${figmaBaseUrl}?node-id=412-406`,
  option: `${figmaBaseUrl}?node-id=412-354`,
  dropdownMenu: `${figmaBaseUrl}?node-id=640-1660`
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

type SelectStoryArgs = {
  ariaLabel: string;
  defaultOpen: boolean;
  disabled: boolean;
  label: string;
  placeholder: string;
  selectedKey: string;
  showIcons: boolean;
  showLabel: boolean;
  showSupportiveText: boolean;
  supportiveText: string;
};

const options = [
  { id: "atlantic", label: "Atlantic" },
  { id: "caribbean", label: "Caribbean" },
  { id: "pacific", label: "Pacific" },
  { id: "mediterranean", label: "Mediterranean" }
] as const;

const defaultArgs: SelectStoryArgs = {
  ariaLabel: "Ocean region",
  defaultOpen: false,
  disabled: false,
  label: "Label",
  placeholder: "Placeholder",
  selectedKey: "",
  showIcons: true,
  showLabel: true,
  showSupportiveText: true,
  supportiveText: "Supportive text"
};

const tokenRows = [
  ["alias/text/base", "Label, selected value, and option label", "#111a1d"],
  ["alias/text/muted", "Placeholder and supportive text", "#707d81"],
  ["alias/text/disabled", "Disabled text color", "#a8b3b7"],
  ["alias/border/default", "Closed trigger border", "#707d81"],
  ["alias/border/focus", "Open trigger border", "#02957e"],
  ["alias/border/strong", "focusRing stroke", "#111a1d"],
  ["alias/state-layer/subtle", "Option hover state-layer", "#5bbead"],
  ["alias/interactive/state-layer", "Option pressed state-layer", "#00453a"],
  ["opacity/state/hover", "Option hover state-layer opacity", "18%"],
  ["opacity/state/pressed", "Option pressed state-layer opacity", "28%"],
  ["space/4", "Trigger and dropdown radius", "4px"],
  ["space/8", "Component gap and dropdown padding", "8px"],
  ["space/12", "Trigger horizontal padding", "12px"],
  ["space/16", "Trigger vertical padding", "16px"],
  ["medium", "Dropdown shadow", "0 4px 8px rgb(193 204 214 / 50%)"],
  ["Body/md-normal", "Label, placeholder, value, and options", "16px / 400 / 20px"],
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

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 7.25v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="4.75" fill="currentColor" r="0.75" />
    </svg>
  );
}

function StorySelect(args: SelectStoryArgs) {
  const visibleLabel = args.showLabel ? args.label : undefined;
  const visibleSupportiveText = args.showSupportiveText
    ? args.supportiveText
    : undefined;
  const selectedKey = args.selectedKey || undefined;

  return (
    <Select
      aria-label={visibleLabel ? undefined : args.ariaLabel}
      defaultOpen={args.defaultOpen}
      disabled={args.disabled}
      label={visibleLabel}
      placeholder={args.placeholder}
      selectedKey={selectedKey}
      supportiveText={visibleSupportiveText}
      onSelectionChange={() => undefined}
    >
      {options.map((option) => (
        <SelectItem
          icon={args.showIcons ? <InfoIcon /> : undefined}
          id={option.id}
          key={option.id}
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}

function PlaygroundPreview(args: SelectStoryArgs) {
  const [defaultOpen, setDefaultOpen] = useState(args.defaultOpen);
  const [disabled, setDisabled] = useState(args.disabled);
  const [label, setLabel] = useState(args.label);
  const [placeholder, setPlaceholder] = useState(args.placeholder);
  const [selectedKey, setSelectedKey] = useState<string | null>(
    args.selectedKey || null
  );
  const [showIcons, setShowIcons] = useState(args.showIcons);
  const [showLabel, setShowLabel] = useState(args.showLabel);
  const [showSupportiveText, setShowSupportiveText] = useState(
    args.showSupportiveText
  );
  const [supportiveText, setSupportiveText] = useState(args.supportiveText);

  useEffect(() => {
    setDefaultOpen(args.defaultOpen);
    setDisabled(args.disabled);
    setLabel(args.label);
    setPlaceholder(args.placeholder);
    setSelectedKey(args.selectedKey || null);
    setShowIcons(args.showIcons);
    setShowLabel(args.showLabel);
    setShowSupportiveText(args.showSupportiveText);
    setSupportiveText(args.supportiveText);
  }, [
    args.defaultOpen,
    args.disabled,
    args.label,
    args.placeholder,
    args.selectedKey,
    args.showIcons,
    args.showLabel,
    args.showSupportiveText,
    args.supportiveText
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
          minHeight: defaultOpen ? "300px" : "180px",
          padding: "var(--mare-space-6)"
        }}
      >
        <Select
          aria-label={visibleLabel ? undefined : args.ariaLabel}
          defaultOpen={defaultOpen}
          disabled={disabled}
          label={visibleLabel}
          onSelectionChange={(key) => setSelectedKey(String(key))}
          placeholder={placeholder}
          selectedKey={selectedKey}
          supportiveText={visibleSupportiveText}
        >
          {options.map((option) => (
            <SelectItem
              icon={showIcons ? <InfoIcon /> : undefined}
              id={option.id}
              key={option.id}
            >
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div style={{ display: "grid", gap: "var(--mare-space-4)" }}>
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
          <input
            checked={showIcons}
            onChange={(event) => setShowIcons(event.currentTarget.checked)}
            type="checkbox"
          />{" "}
          Show option icons
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <input
            checked={disabled}
            onChange={(event) => setDisabled(event.currentTarget.checked)}
            type="checkbox"
          />{" "}
          Disabled
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <input
            checked={defaultOpen}
            onChange={(event) => setDefaultOpen(event.currentTarget.checked)}
            type="checkbox"
          />{" "}
          Start open
        </label>

        <label style={{ color: "var(--mare-color-text)" }}>
          <span style={{ display: "block", marginBottom: "var(--mare-space-2)" }}>
            Selected option
          </span>
          <select
            onChange={(event) => setSelectedKey(event.currentTarget.value || null)}
            style={{
              border: "1px solid var(--mare-color-border)",
              borderRadius: "var(--mare-radius-sm)",
              font: "inherit",
              padding: "var(--mare-space-2)",
              width: "100%"
            }}
            value={String(selectedKey ?? "")}
          >
            <option value="">None</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
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
      </div>
    </div>
  );
}

function SelectDocsPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.75rem" }}>Select</h1>
      <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "720px" }}>
        Select allows users to choose one option from a predefined list. It is
        built from the Maré Figma Select, option, and dropdownMenu components.
      </p>

      <Section title="Design source">
        <p style={bodyTextStyle}>
          Figma is the source of truth. Review the{" "}
          <a href={figmaSelectNodes.select} rel="noopener noreferrer" target="_blank">
            Select component
          </a>
          ,{" "}
          <a href={figmaSelectNodes.option} rel="noopener noreferrer" target="_blank">
            option component
          </a>
          , and{" "}
          <a
            href={figmaSelectNodes.dropdownMenu}
            rel="noopener noreferrer"
            target="_blank"
          >
            dropdownMenu
          </a>{" "}
          before changing states, tokens, option layout, or dropdown behavior.
        </p>
      </Section>

      <Section title="Behavior">
        <p style={bodyTextStyle}>
          Figma exposes <code>isOpen</code>, <code>showLabel</code>, and{" "}
          <code>showSupportiveText</code>. In code, open, hover, pressed,
          selected, disabled, and focus-visible states are derived by React Aria
          technical attributes.
        </p>
      </Section>

      <Section title="Usage rules">
        <ul style={bodyTextStyle}>
          <li>Use when users select one option from a finite list.</li>
          <li>Do not use for free-form text entry; use Input instead.</li>
          <li>Do not use for multi-select until Figma defines that pattern.</li>
          <li>Every Select without visible label needs an accessible name.</li>
        </ul>
      </Section>

      <Section title="Accessibility">
        <ul style={bodyTextStyle}>
          <li>Built on React Aria Components Select.</li>
          <li>Keyboard navigation, typeahead, and popover focus are inherited.</li>
          <li>Visible labels use React Aria Label.</li>
          <li>Supportive text is connected through the description slot.</li>
          <li>Disabled state maps to <code>isDisabled</code>.</li>
        </ul>
      </Section>
    </Layout>
  );
}

function StatesPage() {
  const states = [
    ["Closed", { ...defaultArgs }],
    ["Open", { ...defaultArgs, defaultOpen: true }],
    ["Selected", { ...defaultArgs, selectedKey: "caribbean" }],
    ["No label", { ...defaultArgs, showLabel: false, showSupportiveText: false }],
    ["No option icons", { ...defaultArgs, showIcons: false }],
    ["Disabled", { ...defaultArgs, disabled: true, selectedKey: "pacific" }]
  ] as const satisfies ReadonlyArray<readonly [string, SelectStoryArgs]>;

  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Select states</h1>
      <p style={bodyTextStyle}>
        State examples from the Figma Select, option, and dropdownMenu nodes.
        Hover, pressed, and focus-visible are technical states; interact with
        the component to inspect them.
      </p>

      <Section title="Examples">
        <div
          style={{
            alignItems: "start",
            display: "grid",
            gap: "var(--mare-space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
          }}
        >
          {states.map(([label, args]) => (
            <div key={label} style={{ minHeight: args.defaultOpen ? "290px" : "150px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "var(--mare-space-3)" }}>
                {label}
              </p>
              <StorySelect {...args} />
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
              <Td><code>isOpen=true</code></Td>
              <Td><code>data-open</code></Td>
              <Td>Derived by React Aria when the menu opens.</Td>
            </tr>
            <tr>
              <Td><code>option state=hover</code></Td>
              <Td><code>data-hovered</code></Td>
              <Td>Uses Figma state-layer opacity.</Td>
            </tr>
            <tr>
              <Td><code>option state=pressed</code></Td>
              <Td><code>data-pressed</code></Td>
              <Td>Uses stronger state-layer opacity.</Td>
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
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Select tokens</h1>
      <p style={bodyTextStyle}>
        Tokens documented in Figma for the initial Select implementation.
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

const meta: Meta<typeof StorySelect> = {
  title: "Components/Select",
  component: StorySelect,
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
      url: figmaSelectNodes.component
    },
    docs: {
      page: () => <SelectDocsPage />
    },
    layout: "fullscreen"
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Storybook control that mirrors Figma isOpen."
    },
    disabled: {
      control: "boolean",
      description: "Maps to React Aria isDisabled."
    },
    showLabel: {
      control: "boolean",
      description: "Storybook control that mirrors Figma showLabel."
    },
    showSupportiveText: {
      control: "boolean",
      description: "Storybook control that mirrors Figma showSupportiveText."
    },
    showIcons: {
      control: "boolean",
      description: "Storybook control for the option icon slot."
    },
    selectedKey: {
      control: "select",
      options: ["", ...options.map((option) => option.id)],
      description: "Selected option key."
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
      description: "Placeholder text shown when no option is selected."
    },
    supportiveText: {
      control: "text",
      description: "Helper text connected through React Aria description."
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
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Select playground</h1>
      <p style={bodyTextStyle}>
        Use the controls in this canvas to test label visibility, supportive
        text, option icons, disabled state, open state, and selected value.
      </p>
      <Section title="Preview">
        <PlaygroundPreview {...defaultArgs} {...args} />
      </Section>
    </Layout>
  )
};

export const States: Story = {
  render: StatesPage,
  parameters: {
    design: {
      type: "figma",
      url: figmaSelectNodes.select
    }
  }
};

export const Tokens: Story = {
  render: TokensPage,
  parameters: {
    design: {
      type: "figma",
      url: figmaSelectNodes.dropdownMenu
    }
  }
};
