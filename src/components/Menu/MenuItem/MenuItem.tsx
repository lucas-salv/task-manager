import { IconType } from 'react-icons';

type MenuItemProps = {
  label: string;
  icon?: IconType;
};

export const MenuItem = ({ label, icon: Icon }: MenuItemProps) => {
  return (
    <>
      {Icon && (
        <span data-icon>
          <Icon />
        </span>
      )}
      <li>{label}</li>
    </>
  );
};
