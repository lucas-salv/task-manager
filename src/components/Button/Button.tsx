import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  size?: 'md' | 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, size = 'md' }: ButtonProps) => {
  const sizeVariants = {
    md: 'h-10 px-4',
    lg: 'h-12 text-lg px-6'
  };

  return (
    <button
      className={`${sizeVariants[size]} bg-secondary-100 rounded-md text-primary-300 font-bold hover:bg-secondary-200 active:bg-secondary-300 transition-colors`}
    >
      {children}
    </button>
  );
};
