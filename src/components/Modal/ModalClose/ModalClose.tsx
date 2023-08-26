import { Close } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalCloseProps = {
  children?: ReactNode;
};

export const ModalClose = ({ children }: ModalCloseProps) => {
  return (
    <Close className="rounded-full w-7 h-7 inline-flex justify-center items-center text-white absolute top-2 right-2 bg-primary-100 hover:bg-secondary-100 hover:text-primary-200 active:bg-secondary-300 transition-colors">
      {children}
    </Close>
  );
};
