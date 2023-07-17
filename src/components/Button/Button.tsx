import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="h-10 bg-secondary-100 px-4 rounded-md text-primary-300 font-bold hover:bg-secondary-200 active:bg-secondary-300 transition-colors">
      {children}
    </button>
  );
};
