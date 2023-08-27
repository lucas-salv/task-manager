import { HTMLAttributes, ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
