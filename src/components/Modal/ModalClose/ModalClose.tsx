import { Close } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalCloseProps = {
  children?: ReactNode;
};

export const ModalClose = ({ children }: ModalCloseProps) => {
  return <Close>{children}</Close>;
};
