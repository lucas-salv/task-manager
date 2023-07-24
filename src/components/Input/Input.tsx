import { InputHTMLAttributes } from 'react';

import { InputLabel } from './InputLabel/InputLabel';

type InputProps = {
  placeholder: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  placeholder,
  label,
  error = false,
  helperText = '',
  disabled,
  fullWidth = false,
  ...props
}: InputProps) => {
  const inputErrorStyle = error
    ? 'border-error text-error placeholder-error placeholder-opacity-50'
    : 'border-transparent text-white placeholder-textColor';

  const helperTextErrorStyle = error ? 'text-error' : 'text-textColor';

  const disabledStyle = disabled && 'disabled:opacity-50 cursor-not-allowed';
  const fullWidthStyle = fullWidth && 'flex w-full';

  return (
    <>
      {label && (
        <InputLabel htmlFor={label} error={error}>
          {label}
        </InputLabel>
      )}
      <input
        className={`${inputErrorStyle} ${disabledStyle} ${fullWidthStyle} border-2 text-sm px-4 py-3 bg-primary-200 font-bold rounded-md`}
        placeholder={placeholder}
        id={label}
        disabled={disabled}
        {...props}
      />
      {helperText && (
        <p className={`${helperTextErrorStyle} text-xs font-bold mt-1`}>
          {helperText}
        </p>
      )}
    </>
  );
};
