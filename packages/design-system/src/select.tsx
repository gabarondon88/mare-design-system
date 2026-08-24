import {
  Button as AriaButton,
  Label as AriaLabel,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  Popover as AriaPopover,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  Text as AriaText
} from "react-aria-components/Select";

import type {
  SelectItemProps,
  SelectProps
} from "./contracts/select.contract";
import { selectDefaults } from "./contracts/select.contract";

function mergeClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function Select<T extends object>(props: SelectProps<T>) {
  const {
    children,
    className,
    disabled = selectDefaults.disabled,
    label,
    placeholder = selectDefaults.placeholder,
    supportiveText,
    ...selectProps
  } = props;

  return (
    <AriaSelect
      {...selectProps}
      className={mergeClassNames("mare-select", className)}
      isDisabled={disabled}
      placeholder={placeholder}
    >
      {label ? <AriaLabel className="mare-select__label">{label}</AriaLabel> : null}
      <AriaButton className="mare-select__trigger">
        <AriaSelectValue className="mare-select__value" />
        <span aria-hidden="true" className="mare-select__chevron" />
      </AriaButton>
      {supportiveText ? (
        <AriaText className="mare-select__supportive-text" slot="description">
          {supportiveText}
        </AriaText>
      ) : null}
      <AriaPopover
        className="mare-select__popover"
        offset={0}
        placement="bottom start"
        shouldFlip={false}
      >
        <AriaListBox className="mare-select__listbox">{children}</AriaListBox>
      </AriaPopover>
    </AriaSelect>
  );
}

export function SelectItem({
  children,
  className,
  icon,
  textValue,
  ...props
}: SelectItemProps) {
  return (
    <AriaListBoxItem
      {...props}
      className={mergeClassNames("mare-select__option", className)}
      textValue={textValue ?? (typeof children === "string" ? children : undefined)}
    >
      {icon ? <span className="mare-select__option-icon">{icon}</span> : null}
      <span className="mare-select__option-label">{children}</span>
    </AriaListBoxItem>
  );
}

export type {
  SelectItemProps,
  SelectOptionVisualState,
  SelectProps,
  SelectVisualState
} from "./contracts/select.contract";

export {
  selectContract,
  selectDefaults
} from "./contracts/select.contract";
