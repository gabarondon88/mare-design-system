import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

import {
  MareProvider,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  tabsContract
} from "@mare/design-system";

const figmaBaseUrl =
  "https://www.figma.com/design/BvFw7AfXAdkKDIwgaWhl4L/UI-Kit---MAR%C3%89";

const figmaTabsNodes = {
  component: `${figmaBaseUrl}?node-id=643-1829`,
  specs: `${figmaBaseUrl}?node-id=693-2999`,
  usage: `${figmaBaseUrl}?node-id=693-3168`
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

type TabsStoryArgs = {
  defaultSelectedKey: string;
  isDisabled: boolean;
  labelOne: string;
  labelTwo: string;
  labelThree: string;
};

const defaultArgs: TabsStoryArgs = {
  defaultSelectedKey: "overview",
  isDisabled: false,
  labelOne: "Overview",
  labelTwo: "Details",
  labelThree: "Reviews"
};

const tokenRows = [
  {
    token: "alias/text/onSubtle",
    role: "Selected tab label color",
    value: "#00453a"
  },
  {
    token: "alias/text/muted",
    role: "Default tab label color",
    value: "#707d81"
  },
  {
    token: "global/teal/500",
    role: "Selected tab bottom border",
    value: "#02957e"
  },
  {
    token: "alias/state-layer/subtle",
    role: "Hover state-layer fill",
    value: "#5bbead"
  },
  {
    token: "state-layer/hover",
    role: "Hover state-layer opacity",
    value: "18%"
  },
  {
    token: "alias/border/strong",
    role: "Focus ring stroke",
    value: "#111a1d"
  },
  {
    token: "global/radius/none",
    role: "Focus ring corner radius",
    value: "0px"
  },
  {
    token: "Body/md-normal",
    role: "Tab label typography",
    value: "16px / 400 / 20px"
  }
];

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

function StoryTabs(args: TabsStoryArgs) {
  return (
    <Tabs defaultSelectedKey={args.defaultSelectedKey}>
      <TabList aria-label="Example sections">
        <Tab id="overview" isDisabled={args.isDisabled}>
          {args.labelOne}
        </Tab>
        <Tab id="details">{args.labelTwo}</Tab>
        <Tab id="reviews">{args.labelThree}</Tab>
      </TabList>
      <TabPanel id="overview">Overview content</TabPanel>
      <TabPanel id="details">Details content</TabPanel>
      <TabPanel id="reviews">Reviews content</TabPanel>
    </Tabs>
  );
}

function TabsDocsPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.75rem" }}>Tabs</h1>
      <p style={{ ...bodyTextStyle, fontSize: "1.05rem", maxWidth: "720px" }}>
        Tabs organizes related content into sections the user can switch between
        without leaving the page.
      </p>

      <Section title="Design source">
        <p style={bodyTextStyle}>
          Figma is the source of truth. Review the{" "}
          <a href={figmaTabsNodes.specs} rel="noopener noreferrer" target="_blank">
            Tabs component specs
          </a>{" "}
          and{" "}
          <a href={figmaTabsNodes.usage} rel="noopener noreferrer" target="_blank">
            Tabs usage guide
          </a>{" "}
          before changing anatomy, behavior, tokens, or usage rules.
        </p>
      </Section>

      <Section title="Behavior">
        <p style={bodyTextStyle}>
          In Figma, selected state is represented by{" "}
          <code>data-state="active"</code> or <code>inactive</code>. In code,
          React Aria derives the selected state from the Tabs context and
          exposes it through technical attributes like <code>data-selected</code>.
          Hover and focus-visible are handled by React Aria/CSS and must not be
          exposed as public React props.
        </p>
      </Section>

      <Section title="Usage rules">
        <ul style={bodyTextStyle}>
          <li>Use when content can be split into two or more parallel sections.</li>
          <li>Use when users benefit from switching views without a page reload.</li>
          <li>Use when all sections share the same hierarchy.</li>
          <li>Do not use for a single section; use a heading instead.</li>
          <li>Do not nest tabs inside other tabs.</li>
          <li>Do not use for sequential steps; use a stepper instead.</li>
        </ul>
      </Section>

      <Section title="Edge cases">
        <ul style={bodyTextStyle}>
          <li>One tab should not happen by design, but must not break visually.</li>
          <li>Long labels truncate with ellipsis instead of wrapping.</li>
          <li>Many items may require a scrollable tab bar or overflow pattern.</li>
          <li>Avoid all tabs disabled; reconsider the pattern if nothing is selectable.</li>
        </ul>
      </Section>

      <Section title="Accessibility">
        <ul style={bodyTextStyle}>
          <li>Built on React Aria Components Tabs.</li>
          <li>TabList requires an accessible label.</li>
          <li>Keyboard navigation is provided by React Aria.</li>
          <li>Each Tab id must match its TabPanel id.</li>
          <li>Focus ring uses <code>data-focus-visible</code> with a native fallback.</li>
        </ul>
      </Section>
    </Layout>
  );
}

function StatesPage() {
  return (
    <Layout>
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Tabs states</h1>
      <p style={bodyTextStyle}>
        Figma documents active, inactive, hover, focus-visible, disabled, and
        label states. In React, selected, hover, focus, and disabled states are
        derived by React Aria.
      </p>

      <Section title="Examples">
        <div style={{ display: "grid", gap: "var(--mare-space-6)" }}>
          <div>
            <p style={bodyTextStyle}>Default selected tab</p>
            <StoryTabs {...defaultArgs} />
          </div>
          <div>
            <p style={bodyTextStyle}>Long labels truncate</p>
            <StoryTabs
              {...defaultArgs}
              labelOne="Overview and summary"
              labelTwo="Detailed information with a long label"
              labelThree="Reviews"
            />
          </div>
          <div>
            <p style={bodyTextStyle}>Disabled tab</p>
            <StoryTabs {...defaultArgs} isDisabled />
          </div>
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
              <Td><code>data-state=active</code></Td>
              <Td><code>data-selected</code></Td>
              <Td>Derived by React Aria; never set manually.</Td>
            </tr>
            <tr>
              <Td><code>:hover</code></Td>
              <Td><code>data-hovered</code> + native <code>:hover</code></Td>
              <Td>Technical state only; no public prop.</Td>
            </tr>
            <tr>
              <Td><code>:focus-visible</code></Td>
              <Td><code>data-focus-visible</code> + native fallback</Td>
              <Td>Keyboard focus ring sits outside layout.</Td>
            </tr>
            <tr>
              <Td><code>label</code></Td>
              <Td><code>children</code></Td>
              <Td>Visible tab label content.</Td>
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
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Tabs tokens</h1>
      <p style={bodyTextStyle}>
        Tokens documented in Figma for the initial Tabs implementation.
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
              <Td><code>{row.token}</code></Td>
              <Td>{row.role}</Td>
              <Td><TokenSwatch value={row.value} /></Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

const meta: Meta<typeof StoryTabs> = {
  title: "Components/Tabs",
  component: StoryTabs,
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
      url: figmaTabsNodes.component
    },
    docs: {
      page: () => <TabsDocsPage />
    },
    layout: "fullscreen"
  },
  argTypes: {
    defaultSelectedKey: {
      control: "select",
      options: ["overview", "details", "reviews"],
      description: "Initial selected tab key."
    },
    isDisabled: {
      control: "boolean",
      description: "Disables the first tab in this playground example."
    },
    labelOne: {
      control: "text",
      description: "First visible tab label."
    },
    labelTwo: {
      control: "text",
      description: "Second visible tab label."
    },
    labelThree: {
      control: "text",
      description: "Third visible tab label."
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
      <h1 style={{ ...headingStyle, fontSize: "2.5rem" }}>Tabs playground</h1>
      <p style={bodyTextStyle}>
        Use controls to test labels, default selected tab, and a disabled item.
      </p>
      <Section title="Preview">
        <StoryTabs {...defaultArgs} {...args} />
      </Section>
    </Layout>
  )
};

export const States: Story = {
  render: () => <StatesPage />,
  parameters: {
    design: {
      type: "figma",
      url: figmaTabsNodes.usage
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
      url: figmaTabsNodes.specs
    },
    controls: {
      disable: true
    }
  }
};
