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

export const As: Story = {
  render: () => (
    <>
      <TextEditable as="h1" value="Text Editable h1" />
      <TextEditable as="h2" value="Text Editable h2" />
      <TextEditable as="h3" value="Text Editable h3" />
      <TextEditable as="h4" value="Text Editable h4" />
      <TextEditable as="h5" value="Text Editable h5" />
      <TextEditable as="h6" value="Text Editable h6" />
      <TextEditable as="p" value="Text Editable p" />
    </>
  )
};

export const OnValueChange: Story = {
  render: () => (
    <TextEditable
      value="On Value Change"
      onValueChange={(value) => console.log(value)}
    />
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
