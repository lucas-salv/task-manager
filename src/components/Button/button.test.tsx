import { screen, render } from '@testing-library/react';

import { Button } from './';

describe('<Button />', () => {
  it('should render Button component', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
