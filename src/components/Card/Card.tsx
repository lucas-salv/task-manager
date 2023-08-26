import { ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
} & HTMLDivElement;

export const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
