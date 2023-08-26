import type { Meta, StoryObj } from '@storybook/react';

import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalClose
} from './';
import { Button } from '../Button';
import { IoClose } from 'react-icons/io5';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalTitle>Title</ModalTitle>
        <ModalDescription>Lorem ipsum dolor et</ModalDescription>
        <ModalClose>
          <IoClose />
        </ModalClose>
      </ModalContent>
    </Modal>
  )
};
