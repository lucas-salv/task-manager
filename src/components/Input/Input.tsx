import { InputHTMLAttributes } from 'react';

import { InputLabel } from './InputLabel/InputLabel';

type InputProps = {
  placeholder: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ placeholder, label, ...props }: InputProps) => {
  return (
    <>
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <input
        className="border-0 text-sm px-4 py-3 bg-primary-200 text-white font-bold rounded-md placeholder-textColor"
        placeholder={placeholder}
        id={label}
        {...props}
      />
    </>
  );
};
