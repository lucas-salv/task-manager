import { IconType } from 'react-icons';

type MenuItemProps = {
  label: string;
  icon?: IconType;
};

export const MenuItem = ({ label, icon: Icon }: MenuItemProps) => {
  return (
    <li>
      {Icon && (
        <span data-icon>
          <Icon />
        </span>
      )}
      {label}
    </li>
  );
};
