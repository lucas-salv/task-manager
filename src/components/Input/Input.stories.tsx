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
    placeholder: 'Digite seu e-mail',
    label: '',
    error: false
  }
};

export const Label: Story = {
  args: {
    placeholder: 'Digite seu nome',
    label: 'Nome:'
  }
};

export const Error: Story = {
  args: {
    placeholder: 'Digite seu e-mail',
    label: 'E-mail',
    error: true,
    helperText: 'Algo deu errado!'
  }
};
