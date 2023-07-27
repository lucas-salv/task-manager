import { IconType } from 'react-icons';

type MenuItemProps = {
  label: string;
  icon?: IconType;
};

export const MenuItem = ({ label, icon: Icon }: MenuItemProps) => {
  return (
    <li className="flex gap-2 text-base font-bold items-center">
      {Icon && (
        <span data-icon>
          <Icon size="16px" />
        </span>
      )}
      {label}
    </li>
  );
};
