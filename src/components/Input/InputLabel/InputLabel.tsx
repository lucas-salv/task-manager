import { ReactNode } from 'react';

type InputLabelProps = {
  children: ReactNode;
  htmlFor: string;
};

export const InputLabel = ({ children, htmlFor }: InputLabelProps) => {
  return (
    <label
      className="block mb-2 font-bold text-xs text-textColor"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
