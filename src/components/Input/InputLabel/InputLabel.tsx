import { ReactNode } from 'react';

type InputLabelProps = {
  children: ReactNode;
  htmlFor: string;
};

export const InputLabel = ({ children, htmlFor }: InputLabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
