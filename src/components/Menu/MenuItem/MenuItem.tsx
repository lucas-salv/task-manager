import { LiHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

type MenuItemProps = {
  label: string;
  icon?: IconType;
  active?: boolean;
} & LiHTMLAttributes<HTMLLIElement>;

export const MenuItem = ({ label, icon: Icon, active }: MenuItemProps) => {
  const activeStyles = active
    ? 'bg-secondary-100 text-primary-300'
    : 'bg-transparent text-textColor';

  return (
    <li
      className={`${activeStyles} flex gap-2 px-4 h-10 rounded-md text-base font-bold items-center`}
    >
      {Icon && (
        <span data-icon>
          <Icon size="16px" />
        </span>
      )}
      {label}
    </li>
  );
};
