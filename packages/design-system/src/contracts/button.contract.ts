import type { ReactNode } from "react";
import type { ButtonProps as AriaButtonProps } from "react-aria-components/Button";

export type ButtonVariant = "primary" | "secondary";

export type ButtonIconPosition = "start" | "end";

export type ButtonVisualState =
  | "default"
  | "hover"
  | "pressed"
  | "focus-visible"
  | "disabled"
  | "loading";

export type ButtonContentKind =
  | "label"
  | "icon-label"
  | "label-icon"
  | "icon";

type NativeButtonProps = Omit<
  AriaButtonProps,
  "children" | "className" | "isDisabled" | "isPending" | "aria-label"
>;

type ButtonBaseProps = NativeButtonProps & {
  /**
   * Optional class name merged with the Maré button classes.
   */
  className?: string;

  /**
   * Figma variants confirmed in UI Kit MARÉ.
   *
   * @default "primary"
   */
  variant?: ButtonVariant;

  /**
   * Maps to React Aria `isDisabled`.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Reserved from Figma usage guidance.
   *
   * Loading behavior is documented in Figma, but the inspected component set
   * does not yet define a loading visual variant or spinner asset. Maré maps
   * this to React Aria `isPending` for accessible behavior.
   *
   * @default false
   */
  isLoading?: boolean;

  /**
   * Optional visible loading label for assistive technology or future visual
   * treatment. The default copy must be decided by product/content guidance.
   */
  loadingLabel?: string;
};

export type ButtonWithLabelProps = ButtonBaseProps & {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  "aria-label"?: string;
};

export type ButtonIconOnlyProps = ButtonBaseProps & {
  children?: never;
  icon: ReactNode;
  iconPosition?: never;
  /**
   * Required by the Figma slot guide for icon-only buttons.
   */
  "aria-label": string;
};

export type ButtonProps = ButtonWithLabelProps | ButtonIconOnlyProps;

export const buttonDefaults = {
  variant: "primary",
  disabled: false,
  isLoading: false,
  iconPosition: "start",
  type: "button"
} as const satisfies {
  variant: ButtonVariant;
  disabled: boolean;
  isLoading: boolean;
  iconPosition: ButtonIconPosition;
  type: "button";
};

export const buttonContract = {
  figma: {
    fileKey: "BvFw7AfXAdkKDIwgaWhl4L",
    pageNodeId: "58:635",
    componentSetNodeId: "569:370",
    specsNodeId: "702:4078",
    slotGuideNodeId: "588:1641",
    usageGuideNodeId: "703:1445"
  },
  variants: ["primary", "secondary"],
  visualStates: [
    "default",
    "hover",
    "pressed",
    "focus-visible",
    "disabled",
    "loading"
  ],
  contentKinds: ["label", "icon-label", "label-icon", "icon"],
  defaults: buttonDefaults,
  restrictions: [
    "Do not expose a size prop until Figma defines multiple sizes.",
    "Do not expose hover, pressed, or focusVisible as public props.",
    "Use native button semantics for actions.",
    "Icon-only buttons require aria-label.",
    "Loading visuals are blocked until Figma defines the visual treatment.",
    "Do not add tertiary, ghost, danger, or link variants without Figma evidence."
  ],
  accessibility: [
    "Wrap React Aria Components Button.",
    "Default type should be button.",
    "Use React Aria data-focus-visible for the focus ring, with native :focus-visible as fallback.",
    "Map disabled to React Aria isDisabled.",
    "Map loading behavior to React Aria isPending.",
    "Keep an accessible name in every state.",
    "Prevent duplicate submissions while loading/pending."
  ]
} as const;
