import React from "react";

const Input = ({
  name,
  onChange,
  value = "",
  placeholder,
}: {
  name: string;
  onChange: (a: string) => void;
  value?: string;
  placeholder?: string;
}) => {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      className={"form-control"}
      onChange={(v) => onChange(v.target.value)}
    />
  );
};

export default Input;
