import { Meta, StoryObj } from '@storybook/react';
import { FaReact } from 'react-icons/fa';

import { Button } from './';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    leftIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: FaReact }
    },
    rightIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: FaReact }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'md'
  }
};
