import * as M from '@radix-ui/react-dialog';

import { ReactNode } from 'react';

type ModalProps = {
  children?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
};

export const Modal = ({ children, ...props }: ModalProps) => {
  return <M.Root {...props}>{children}</M.Root>;
};

//TODO: adicionar o subcomponent Close do radix/dialog
