import React from "react";

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends Input {
  label: string;
  id: string;
}

function Input({ label, id, ...props }: Props) {
  return (
    <label
      htmlFor={id}
      className="border-neutral-500 border-[1px] rounded-md py-2 px-6"
    >
      <span className="mr-6 text-neutral-600">{label}:</span>
      <input
        id={id}
        name={id}
        {...props}
        className="ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none text-neutral-500"
      />
    </label>
  );
}

export default Input;
