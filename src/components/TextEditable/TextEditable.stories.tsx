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
    value: 'Paragraph'
  }
};

export const OnValueChange: Story = {
  render: () => (
    <TextEditable value="Teste" onValueChange={(value) => console.log(value)} />
  )
};

export const OnValueConfirm: Story = {
  render: () => (
    <TextEditable
      value="On Value Confirm"
      onValueConfirm={(value) => console.log(value)}
    />
  )
};
