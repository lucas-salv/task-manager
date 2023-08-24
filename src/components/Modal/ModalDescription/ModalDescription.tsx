import { Description } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type ModalDescriptionProps = {
  children?: ReactNode;
};

export const ModalDescription = ({ children }: ModalDescriptionProps) => {
  return <Description className="text-white mt-3 mb-5">{children}</Description>;
};
