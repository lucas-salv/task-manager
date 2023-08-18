import * as C from '@radix-ui/react-checkbox';
import { BsCheck } from 'react-icons/bs';

export const Checkbox = () => {
  return (
    <C.Root className="flex items-center justify-center w-5 h-5 bg-primary-100 rounded focus:bg-primary-200">
      <C.Indicator className="text-white">
        <BsCheck />
      </C.Indicator>
    </C.Root>
  );
};
