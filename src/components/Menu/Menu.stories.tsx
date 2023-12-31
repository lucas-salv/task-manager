import { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuItem } from './';
import { MdTask } from 'react-icons/md';

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
      <MenuItem label="Item 1" active />
      <MenuItem label="Item 2" />
      <MenuItem label="Item 3" />
    </Menu>
  )
};

export const Icon: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Item 1" icon={MdTask} />
      <MenuItem label="Item 2" icon={MdTask} />
      <MenuItem label="Item 3" icon={MdTask} />
    </Menu>
  )
};

export const Active: Story = {
  render: () => (
    <Menu>
      <MenuItem label="Item 1" icon={MdTask} active />
      <MenuItem label="Item 2" icon={MdTask} />
      <MenuItem label="Item 3" icon={MdTask} />
    </Menu>
  )
};
