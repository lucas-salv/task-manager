import { ReactNode } from 'react';
import { RiEdit2Fill } from 'react-icons/ri';

type TextEditableProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  label: string;
};

export const TextEditable = ({ as = 'p', label }: TextEditableProps) => {
  const As = as;
  return (
    <As className="group flex items-center gap-2">
      <span>{label}</span>
      <button className="hidden px-1 group-hover:block">
        <RiEdit2Fill />
      </button>
    </As>
  );
};
