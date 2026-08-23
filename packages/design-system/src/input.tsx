import {
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField
} from "react-aria-components/TextField";

import type { InputProps } from "./contracts/input.contract";
import { inputDefaults } from "./contracts/input.contract";

function mergeClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function Input(props: InputProps) {
  const {
    className,
    disabled = inputDefaults.disabled,
    label,
    placeholder = inputDefaults.placeholder,
    supportiveText,
    state = inputDefaults.state,
    ...textFieldProps
  } = props;
  const hasValue = Boolean(
    (textFieldProps as { defaultValue?: unknown; value?: unknown }).value ??
      (textFieldProps as { defaultValue?: unknown; value?: unknown }).defaultValue
  );
  const derivedState = state === "default" && hasValue ? "filled" : state;
  const isDisabled = disabled || derivedState === "disabled";
  const isInvalid = derivedState === "error";
  const hasSupportiveText = Boolean(supportiveText);
  const descriptionSlot = isInvalid ? "errorMessage" : "description";

  return (
    <AriaTextField
      {...textFieldProps}
      className={mergeClassNames("mare-input", className)}
      data-state={derivedState}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
    >
      {label ? <AriaLabel className="mare-input__label">{label}</AriaLabel> : null}
      <AriaInput className="mare-input__field" placeholder={placeholder} />
      {hasSupportiveText ? (
        <AriaText className="mare-input__supportive-text" slot={descriptionSlot}>
          {supportiveText}
        </AriaText>
      ) : null}
    </AriaTextField>
  );
}

export type {
  InputProps,
  InputVisualState
} from "./contracts/input.contract";

export {
  inputContract,
  inputDefaults
} from "./contracts/input.contract";
