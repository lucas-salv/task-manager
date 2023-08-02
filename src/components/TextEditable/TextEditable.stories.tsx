import { Meta, StoryObj } from '@storybook/react';

import { TextEditable } from './';

const meta: Meta<typeof TextEditable> = {
  title: 'Components/TextEditable',
  component: TextEditable,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TextEditable>;

export const Default: Story = {
  args: {
    children: 'Paragraph'
  }
};
