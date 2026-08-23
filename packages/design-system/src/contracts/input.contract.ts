import type { ReactNode } from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components/TextField";

export type InputVisualState =
  | "default"
  | "filled"
  | "error"
  | "success"
  | "disabled";

type NativeTextFieldProps = Omit<
  AriaTextFieldProps,
  "children" | "className" | "isDisabled" | "isInvalid"
>;

type InputBaseProps = NativeTextFieldProps & {
  className?: string;
  label?: ReactNode;
  placeholder?: string;
  supportiveText?: ReactNode;
  state?: InputVisualState;
  disabled?: boolean;
};

export type InputWithLabelProps = InputBaseProps & {
  label: ReactNode;
  "aria-label"?: string;
};

export type InputWithoutLabelProps = InputBaseProps & {
  label?: never;
  "aria-label": string;
};

export type InputProps = InputWithLabelProps | InputWithoutLabelProps;

export const inputDefaults = {
  state: "default",
  disabled: false,
  placeholder: "Placeholder"
} as const satisfies {
  state: InputVisualState;
  disabled: boolean;
  placeholder: string;
};

export const inputContract = {
  figma: {
    fileKey: "BvFw7AfXAdkKDIwgaWhl4L",
    pageNodeId: "145:2690",
    componentNodeId: "635:299",
    specsNodeId: "695:3542",
    usageGuideNodeId: "695:3543"
  },
  visualStates: ["default", "filled", "error", "success", "disabled"],
  technicalStates: ["focus", "focus-visible"],
  contentProperties: ["label", "placeholder", "value", "supportiveText"],
  defaults: inputDefaults,
  restrictions: [
    "Use only for short, single-line text values.",
    "Do not use Input for multi-line text; use Textarea instead.",
    "Do not use Input for selecting from predefined options; use Select instead.",
    "Do not expose focus or focusVisible as public visual props.",
    "Error state must include supportive text explaining the problem.",
    "Inputs without visible labels require aria-label."
  ],
  accessibility: [
    "Wrap React Aria Components TextField, Label, Input, and Text.",
    "Use React Aria field semantics and input labeling.",
    "Map disabled to React Aria isDisabled.",
    "Map error state to React Aria isInvalid.",
    "Use data-focused for the active field style.",
    "Use data-focus-visible for the keyboard focus ring, with native :focus-visible as fallback.",
    "Connect supportive text through React Aria description/error slots."
  ]
} as const;
