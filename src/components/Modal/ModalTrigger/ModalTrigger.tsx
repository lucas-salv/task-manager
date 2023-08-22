import { Trigger } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type TriggerProps = {
  children: ReactNode;
};

export const ModalTrigger = ({ children }: TriggerProps) => {
  return <Trigger>{children}</Trigger>;
};
