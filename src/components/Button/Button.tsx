import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  children: ReactNode;
  size?: 'md' | 'lg';
  leftIcon?: IconType;
  rightIcon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size = 'md',
  leftIcon: LeftIcon,
  rightIcon: RightIcon
}: ButtonProps) => {
  const buttonSizeStyleVariants = {
    md: 'h-10 px-4',
    lg: 'h-12 text-lg px-6'
  };

  const iconSizeVariants = size === 'md' ? '16px' : '18px';

  return (
    <button
      className={`${buttonSizeStyleVariants[size]} flex items-center gap-1.5 bg-secondary-100 rounded-md text-primary-300 font-bold hover:bg-secondary-200 active:bg-secondary-300 transition-colors`}
    >
      {LeftIcon && (
        <span data-left-icon>
          <LeftIcon size={iconSizeVariants} />
        </span>
      )}
      {children}
      {RightIcon && (
        <span data-right-icon>
          <RightIcon size={iconSizeVariants} />
        </span>
      )}
    </button>
  );
};
