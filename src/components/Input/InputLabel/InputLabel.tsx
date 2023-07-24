import { ReactNode } from 'react';

type InputLabelProps = {
  children: ReactNode;
  htmlFor: string;
  error?: boolean;
};

export const InputLabel = ({
  children,
  htmlFor,
  error = false
}: InputLabelProps) => {
  const inputLabelErrorStyle = error ? 'text-error' : 'text-textColor';
  return (
    <label
      className={`${inputLabelErrorStyle} block mb-2 font-bold text-xs`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
