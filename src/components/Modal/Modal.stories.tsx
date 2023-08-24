import type { Meta, StoryObj } from '@storybook/react';

import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription
} from './';
import { Button } from '../Button';

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
      </ModalContent>
    </Modal>
  )
};
