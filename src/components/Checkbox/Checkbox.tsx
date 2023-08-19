import * as C from '@radix-ui/react-checkbox';
import { BsCheck } from 'react-icons/bs';

type CheckboxProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
};

export const Checkbox = ({ disabled, ...props }: CheckboxProps) => {
  const disabledStyles =
    disabled && 'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <C.Root
      {...props}
      disabled={disabled}
      className={`flex items-center justify-center w-5 h-5 bg-primary-100 rounded focus:bg-primary-200 ${disabledStyles}`}
    >
      <C.Indicator className="text-white">
        <BsCheck />
      </C.Indicator>
    </C.Root>
  );
};
