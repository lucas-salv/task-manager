import { Content } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalContentProps = {
  children?: ReactNode;
};

export const ModalContent = ({ children }: ModalContentProps) => {
  return <Content>{children}</Content>;
};
