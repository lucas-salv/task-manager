import { HTMLAttributes, ReactNode } from 'react';

type CardContentProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return <div {...props}>{children}</div>;
};
