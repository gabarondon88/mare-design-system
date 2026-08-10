import type { ReactNode } from "react";
import type {
  TabListProps as AriaTabListProps,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  TabsProps as AriaTabsProps
} from "react-aria-components/Tabs";

export type TabsVisualState =
  | "selected"
  | "inactive"
  | "hover"
  | "focus-visible"
  | "disabled";

type NativeTabsProps = Omit<AriaTabsProps, "children" | "className">;
type NativeTabListProps<T extends object> = Omit<
  AriaTabListProps<T>,
  "children" | "className"
>;
type NativeTabProps = Omit<AriaTabProps, "children" | "className">;
type NativeTabPanelProps = Omit<AriaTabPanelProps, "children" | "className">;

export type TabsProps = NativeTabsProps & {
  children: ReactNode;
  className?: string;
};

export type TabListProps<T extends object = object> =
  NativeTabListProps<T> & {
    children: ReactNode;
    className?: string;
  };

export type TabProps = NativeTabProps & {
  children: ReactNode;
  className?: string;
};

export type TabPanelProps = NativeTabPanelProps & {
  children: ReactNode;
  className?: string;
};

export const tabsContract = {
  figma: {
    fileKey: "BvFw7AfXAdkKDIwgaWhl4L",
    nodeId: "643:1829",
    componentSpecNodeId: "693:2999",
    componentName: "Tabs",
    usageGuideNodeId: "693:3168"
  },
  visualStates: [
    "selected",
    "inactive",
    "hover",
    "focus-visible",
    "disabled"
  ],
  defaults: {
    orientation: "horizontal"
  },
  restrictions: [
    "Do not expose visual variants until Figma defines them.",
    "Do not expose size props until Figma defines multiple sizes.",
    "Use horizontal orientation by default; vertical tabs require Figma evidence.",
    "TabList must have an accessible label through aria-label or aria-labelledby.",
    "Every Tab id must match one TabPanel id through React Aria item keys.",
    "Do not expose hover or focusVisible as React props; they are technical states.",
    "Do not use Tabs for a single section, nested tabs, or sequential steps."
  ],
  accessibility: [
    "Wrap React Aria Components Tabs, TabList, Tab, and TabPanel.",
    "Use keyboard navigation provided by React Aria.",
    "Map Figma data-state active/inactive to React Aria data-selected behavior.",
    "Use data-focus-visible for the focus ring, with :focus-visible fallback.",
    "Keep visible tab labels concise and descriptive."
  ],
  usage: [
    "Use when content can be split into two or more parallel sections.",
    "Use when users benefit from switching views without a full page reload.",
    "Use when all sections share the same hierarchy.",
    "Prefer a heading when there is only one section.",
    "Prefer a stepper when sections are sequential steps."
  ],
  edgeCases: [
    "One tab should not happen by design, but the component should not break visually.",
    "Long tab labels should truncate with ellipsis.",
    "Many tabs may require a scrollable tab bar or overflow pattern.",
    "Avoid all tabs disabled; reconsider the pattern if nothing is selectable."
  ]
} as const;
