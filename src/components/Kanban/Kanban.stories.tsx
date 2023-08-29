import type { Meta, StoryObj } from '@storybook/react';

import { Kanban } from './';

const meta: Meta<typeof Kanban> = {
  title: 'Components/Kanban',
  component: Kanban,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Kanban>;

export const Default: Story = {};
