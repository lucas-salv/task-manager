import { Close } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalCloseProps = {
  children?: ReactNode;
};

export const ModalClose = ({ children }: ModalCloseProps) => {
  return (
    <Close className="rounded-full w-6 h-6 inline-flex justify-center items-center text-white absolute top-2 right-2 bg-primary-100">
      {children}
    </Close>
  );
};
