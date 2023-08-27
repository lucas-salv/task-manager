import { HTMLAttributes, ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ children }: CardProps) => {
  return (
    <div className="inline-flex flex-col max-w-sm bg-primary-200 p-7 rounded-md">
      {children}
    </div>
  );
};
