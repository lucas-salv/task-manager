import { InputHTMLAttributes } from 'react';

import { InputLabel } from './InputLabel/InputLabel';

type InputProps = {
  placeholder: string;
  label?: string;
  error?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  placeholder,
  label,
  error = false,
  helperText = '',
  ...props
}: InputProps) => {
  const inputErrorStyle =
    'border-2 border-error text-error placeholder-error placeholder-opacity-50';

  return (
    <>
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <input
        className={`${
          error && inputErrorStyle
        } border-2 border-transparent text-sm px-4 py-3 bg-primary-200 text-white font-bold rounded-md placeholder-textColor`}
        placeholder={placeholder}
        id={label}
        {...props}
      />
      {error && (
        <p className="text-xs text-error font-bold mt-1">{helperText}</p>
      )}
    </>
  );
};
