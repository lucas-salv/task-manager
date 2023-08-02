import { ReactNode } from 'react';

type TextEditableProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children?: ReactNode;
};

export const TextEditable = ({ as = 'p', children }: TextEditableProps) => {
  const As = as;
  return <As>{children}</As>;
};
