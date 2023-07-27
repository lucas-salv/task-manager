import { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuItem } from './';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" />
      <MenuItem label="Item 3" />
    </Menu>
  )
};
