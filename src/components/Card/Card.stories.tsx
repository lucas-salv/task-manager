import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardTitle, CardContent } from './';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardTitle>Título</CardTitle>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
        feugiat ligula nec faucibus.
      </CardContent>
    </Card>
  )
};
