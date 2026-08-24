import type { ReactNode } from "react";
import type {
  ListBoxItemProps as AriaListBoxItemProps,
  SelectProps as AriaSelectProps
} from "react-aria-components/Select";

export type SelectVisualState =
  | "closed"
  | "open"
  | "disabled";

export type SelectOptionVisualState =
  | "default"
  | "hover"
  | "pressed"
  | "selected"
  | "disabled";

type NativeSelectProps<T extends object> = Omit<
  AriaSelectProps<T>,
  "children" | "className" | "isDisabled" | "placeholder"
>;

type SelectBaseProps<T extends object> = NativeSelectProps<T> & {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  label?: ReactNode;
  placeholder?: string;
  supportiveText?: ReactNode;
};

export type SelectWithLabelProps<T extends object = object> =
  SelectBaseProps<T> & {
    label: ReactNode;
    "aria-label"?: string;
  };

export type SelectWithoutLabelProps<T extends object = object> =
  SelectBaseProps<T> & {
    label?: never;
    "aria-label": string;
  };

export type SelectProps<T extends object = object> =
  | SelectWithLabelProps<T>
  | SelectWithoutLabelProps<T>;

export type SelectItemProps = Omit<
  AriaListBoxItemProps,
  "children" | "className" | "textValue"
> & {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  textValue?: string;
};

export const selectDefaults = {
  disabled: false,
  placeholder: "Placeholder"
} as const satisfies {
  disabled: boolean;
  placeholder: string;
};

export const selectContract = {
  figma: {
    fileKey: "BvFw7AfXAdkKDIwgaWhl4L",
    pageNodeId: "145:2690",
    componentNodeId: "635:300",
    selectNodeId: "412:406",
    optionNodeId: "412:354",
    dropdownMenuNodeId: "640:1660"
  },
  visualStates: ["closed", "open", "disabled"],
  optionStates: ["default", "hover", "pressed", "selected", "disabled"],
  contentProperties: [
    "label",
    "placeholder",
    "selectedKey",
    "supportiveText",
    "option.icon",
    "option.label"
  ],
  figmaProperties: ["isOpen", "showLabel", "showSupportiveText"],
  defaults: selectDefaults,
  restrictions: [
    "Use Select only when the user chooses one value from a finite list.",
    "Do not use Select for free-form text entry; use Input instead.",
    "Do not expose hover, pressed, focus, or focusVisible as public visual props.",
    "Select without a visible label requires aria-label.",
    "Option icons are optional slots; do not invent semantic meaning for icons not present in Figma.",
    "Do not add sizes, validation states, multi-select, search, or sections until Figma defines them."
  ],
  accessibility: [
    "Wrap React Aria Components Select, Label, Button, SelectValue, Popover, ListBox, ListBoxItem, and Text.",
    "Use React Aria collection, keyboard navigation, focus management, and typeahead behavior.",
    "Map disabled to React Aria isDisabled.",
    "Use data-open for the open visual state.",
    "Use data-hovered and data-pressed for option state-layer styles.",
    "Use data-focus-visible for keyboard focus rings.",
    "Connect supportive text through React Aria description slot."
  ]
} as const;
