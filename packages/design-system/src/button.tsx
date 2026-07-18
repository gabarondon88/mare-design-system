import type { ReactNode } from "react";
import {
  Button as AriaButton
} from "react-aria-components/Button";

import type { ButtonProps } from "./contracts/button.contract";
import { buttonDefaults } from "./contracts/button.contract";

function renderIcon(icon: ReactNode) {
  if (!icon) {
    return null;
  }

  return <span className="mare-button__icon" aria-hidden="true">{icon}</span>;
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    disabled = buttonDefaults.disabled,
    icon,
    iconPosition = buttonDefaults.iconPosition,
    isLoading = buttonDefaults.isLoading,
    loadingLabel,
    type = buttonDefaults.type,
    variant = buttonDefaults.variant,
    ...buttonProps
  } = props;

  const classNames = [
    "mare-button",
    `mare-button--${variant}`,
    className
  ].filter(Boolean).join(" ");
  const isIconOnly = Boolean(icon) && !children;

  return (
    <AriaButton
      {...buttonProps}
      aria-busy={isLoading || undefined}
      className={classNames}
      isDisabled={disabled}
      isPending={isLoading}
      type={type}
    >
      {iconPosition === "start" && !isIconOnly && renderIcon(icon)}
      {children && <span>{isLoading && loadingLabel ? loadingLabel : children}</span>}
      {isIconOnly && renderIcon(icon)}
      {iconPosition === "end" && children && renderIcon(icon)}
    </AriaButton>
  );
}

export type {
  ButtonIconPosition,
  ButtonProps,
  ButtonVariant
} from "./contracts/button.contract";

export {
  buttonContract,
  buttonDefaults
} from "./contracts/button.contract";
