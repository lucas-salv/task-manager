import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type MenuItemProps = {
  label: string;
  icon?: IconType;
};

export const MenuItem = ({ label, icon: Icon }: MenuItemProps) => {
  return (
    <>
      {Icon && <Icon />}
      <li>{label}</li>
    </>
  );
};
