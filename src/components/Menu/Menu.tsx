import { ReactNode } from 'react';

type MenuProps = {
  children: ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
  return <ul className="flex flex-col gap-2 w-52">{children}</ul>;
};
