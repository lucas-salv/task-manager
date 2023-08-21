import * as M from '@radix-ui/react-dialog';

import { Button } from '../Button';

export const Modal = () => {
  return (
    <M.Root>
      <M.Trigger>
        <Button>Open Modal</Button>
      </M.Trigger>
      <M.Portal>
        <M.Overlay />
        <M.Content>
          <M.Title>Title</M.Title>
          <M.Description>Lorem Ipsum dolor et</M.Description>
        </M.Content>
      </M.Portal>
    </M.Root>
  );
};
