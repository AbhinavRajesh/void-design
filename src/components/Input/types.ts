import React from "react";
import DateInput from "./date";
import SelectInput from "./select";
import TextInput from "./text";

export type InputPropTypes = {
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: string) => any;
};

export type SelectPropTypes = {
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (val: string) => any;
  options?: {
    label: JSX.Element;
    value: string;
  }[];
};

export type InputTypeTypes = {
  Select: typeof SelectInput;
  Text: typeof TextInput;
  Date: typeof DateInput;
};

export const defaultProps = (props: InputPropTypes, className?: string) => {
  return {
    className: `void-input ${props.loading ? "void-input-loading" : ""} ${
      className || ""
    } ${props.className || ""}`,
    id: props.name,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    placeholder: props.placeholder,
    style: props.style,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      props.onChange ? props.onChange(e.target.value) : () => {},
  };
};
