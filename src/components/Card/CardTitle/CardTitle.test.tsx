import { screen, render } from '@testing-library/react';

import { Card, CardTitle } from './../';

describe('<CardTitle />', () => {
  it('should render CardTitle inside Card', () => {
    render(
      <Card>
        <CardTitle>Title</CardTitle>
      </Card>
    );

    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });
});
