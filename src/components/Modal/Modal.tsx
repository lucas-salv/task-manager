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

/*<M.Content className="w-3/4 max-w-md max-h-screen p-7 bg-primary-200 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none">
          <M.Title className="text-white text-lg font-bold m-0">Title</M.Title>
          <M.Description className="text-white mt-3 mb-5">
            Lorem Ipsum dolor et
          </M.Description>
        </M.Content>*/
