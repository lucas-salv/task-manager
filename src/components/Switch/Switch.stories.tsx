import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onClick: { table: { disable: true } },
    asChild: { table: { disable: true } }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
