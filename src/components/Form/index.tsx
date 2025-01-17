import React from "react";
import { FormPropTypes } from "./types";

const Form = ({
  className = "",
  children,
  onSubmit,
  style,
}: FormPropTypes): JSX.Element => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = {};
    const { elements } = event.currentTarget;
    Object.keys(elements).map((key) => {
      const { type } = elements[key];
      if (isNaN(parseInt(key))) {
        const { checked, value } = elements[key];
        if (type === "radio" || type === "checkbox") formValues[key] = checked;
        else formValues[key] = value;
      }
    });
    onSubmit && onSubmit(formValues);
  };

  return (
    <form
      action=""
      className={className}
      onSubmit={handleOnSubmit}
      style={style}
    >
      {children}
    </form>
  );
};

export default Form;
