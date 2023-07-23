import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Digite seu nome',
    label: '',
    error: false,
    errorMessage: ''
  }
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Digite seu nome',
    label: 'Nome:'
  }
};
