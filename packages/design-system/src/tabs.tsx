import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs
} from "react-aria-components/Tabs";

import type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps
} from "./contracts/tabs.contract";

function mergeClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <AriaTabs
      {...props}
      className={mergeClassNames("mare-tabs", className)}
    />
  );
}

export function TabList<T extends object>({
  className,
  ...props
}: TabListProps<T>) {
  return (
    <AriaTabList
      {...props}
      className={mergeClassNames("mare-tabs__list", className)}
    />
  );
}

export function Tab({ children, className, ...props }: TabProps) {
  return (
    <AriaTab
      {...props}
      className={mergeClassNames("mare-tabs__tab", className)}
    >
      <span className="mare-tabs__label">{children}</span>
    </AriaTab>
  );
}

export function TabPanel({ className, ...props }: TabPanelProps) {
  return (
    <AriaTabPanel
      {...props}
      className={mergeClassNames("mare-tabs__panel", className)}
    />
  );
}

export type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
  TabsVisualState
} from "./contracts/tabs.contract";

export { tabsContract } from "./contracts/tabs.contract";
