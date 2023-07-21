import { InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="border-0 text-sm px-4 py-3 bg-primary-200 text-white font-bold rounded-md placeholder-textColor"
      {...props}
    />
  );
};
