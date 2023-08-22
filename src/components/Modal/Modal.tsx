import * as M from '@radix-ui/react-dialog';

import { Button } from '../Button';

export const Modal = () => {
  return (
    <M.Root>
      <M.Trigger>
        <Button>Open Modal</Button>
      </M.Trigger>
      <M.Portal>
        <M.Overlay className="bg-black fixed inset-0 bg-opacity-50 backdrop-blur-sm  transition-opacity" />
        <M.Content className="w-3/4 max-w-md max-h-screen p-7 bg-primary-200 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none">
          <M.Title className="text-white text-lg font-bold m-0">Title</M.Title>
          <M.Description className="text-white mt-3 mb-5">
            Lorem Ipsum dolor et
          </M.Description>
        </M.Content>
      </M.Portal>
    </M.Root>
  );
};
