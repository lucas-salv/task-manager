import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  children: ReactNode;
  size?: 'md' | 'lg';
  leftIcon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size = 'md',
  leftIcon: LeftIcon
}: ButtonProps) => {
  const sizeVariants = {
    md: 'h-10 px-4',
    lg: 'h-12 text-lg px-6'
  };

  return (
    <button
      className={`${sizeVariants[size]} flex items-center gap-1.5 bg-secondary-100 rounded-md text-primary-300 font-bold hover:bg-secondary-200 active:bg-secondary-300 transition-colors`}
    >
      {LeftIcon && (
        <span data-leftIcon>
          <LeftIcon size={size === 'md' ? '16px' : '18px'} />
        </span>
      )}
      {children}
    </button>
  );
};
