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
    error: false,
    helperText: '',
    disabled: false,
    fullWidth: false
  }
};

export const Label: Story = {
  args: {
    placeholder: 'Digite seu E-mail',
    label: 'E-mail:'
  }
};

export const HelperText: Story = {
  args: {
    placeholder: 'Digite seu E-mail',
    helperText: 'Ex.: example@email.com'
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

export const Disabled: Story = {
  args: {
    placeholder: 'Digite seu e-mail',
    disabled: true
  }
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Digite seu e-mail',
    fullWidth: true
  }
};
