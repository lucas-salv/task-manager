import { ReactNode } from 'react';

type MenuProps = {
  children: ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
  return <ul className="flex flex-col">{children}</ul>;
};
