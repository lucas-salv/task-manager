import { InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="border-0 text-base px-3 py-2 bg-primary-200 text-white rounded-md"
      {...props}
    />
  );
};
