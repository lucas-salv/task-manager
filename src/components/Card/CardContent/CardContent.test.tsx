import { screen, render } from '@testing-library/react';

import { Card, CardContent } from './../';

describe('<ModalContent />', () => {
  it('should render CardContent inside Card', () => {
    render(
      <Card>
        <CardContent>Lorem ipsum</CardContent>
      </Card>
    );
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
