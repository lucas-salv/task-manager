import { Title } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalTitleProps = {
  children?: ReactNode;
};

export const ModalTitle = ({ children }: ModalTitleProps) => {
  return <Title>{children}</Title>;
};
