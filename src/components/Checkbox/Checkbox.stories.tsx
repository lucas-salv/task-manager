import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    defaultChecked: false,
    checked: false,
    disabled: false,
    name: 'checkbox',
    value: 'checkbox'
  }
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
