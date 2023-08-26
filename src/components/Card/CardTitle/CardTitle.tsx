import { HTMLAttributes, ReactNode } from 'react';

type CardTitleProps = {
  children?: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
} & HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({
  children,
  as = 'h2',
  ...props
}: CardTitleProps) => {
  const As = as;
  return <As {...props}>{children}</As>;
};
