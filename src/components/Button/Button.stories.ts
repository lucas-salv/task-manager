import { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'md'
  }
};
