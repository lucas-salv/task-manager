import { ReactNode } from 'react';
import { RiEdit2Fill } from 'react-icons/ri';

type TextEditableProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children?: ReactNode;
};

export const TextEditable = ({ as = 'p', children }: TextEditableProps) => {
  const As = as;
  return (
    <As className="group flex items-center gap-2">
      {children}
      <button className="hidden px-1 group-hover:block">
        <RiEdit2Fill />
      </button>
    </As>
  );
};
