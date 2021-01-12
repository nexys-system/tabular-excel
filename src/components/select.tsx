import React from "react";

interface Option {
  id: number;
  name: number;
}

const Input = ({
  name,
  options,
  onChange,
  value = "",
  placeholder,
}: {
  name: string;
  options: Option[];
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
