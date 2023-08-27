import { HTMLAttributes, ReactNode } from 'react';

type AsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type CardTitleProps = {
  children?: ReactNode;
  as?: AsType;
} & HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({
  children,
  as = 'h2',
  ...props
}: CardTitleProps) => {
  const As = as;
  const getAsStyle = (as: AsType) => {
    const AsStyles = {
      h1: 'text-2xl font-bold',
      h2: 'text-xl font-bold',
      h3: 'text-lg font-bold',
      h4: 'text-base font-bold',
      h5: 'text-base font-bold',
      h6: 'text-base font-bold',
      p: 'text-base'
    };
    return AsStyles[as];
  };
  return (
    <As {...props} className={`${getAsStyle(as)}`}>
      {children}
    </As>
  );
};
