import { ReactNode } from 'react';
import {
  Content,
  DialogContentProps,
  Portal,
  Overlay
} from '@radix-ui/react-dialog';

type ModalContentProps = {
  children?: ReactNode;
} & DialogContentProps;

export const ModalContent = ({
  children,
  asChild,
  ...props
}: ModalContentProps) => {
  return (
    <Portal>
      <Overlay className="bg-black fixed inset-0 bg-opacity-50 backdrop-blur-sm  transition-opacity" />
      <Content
        {...props}
        className="w-3/4 max-w-md max-h-screen p-7 bg-primary-200 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      >
        {children}
      </Content>
    </Portal>
  );
};
