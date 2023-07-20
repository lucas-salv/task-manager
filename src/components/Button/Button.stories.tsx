import { Meta, StoryObj } from '@storybook/react';
import { FaReact } from 'react-icons/fa';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          gap: 8
        }}
      >
        <Story />
      </div>
    )
  ],
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

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </>
  )
};

export const WithIcons: Story = {
  render: () => (
    <>
      <Button size="md" leftIcon={FaReact}>
        Button
      </Button>
      <Button size="md" rightIcon={FaReact}>
        Button
      </Button>
    </>
  )
};
