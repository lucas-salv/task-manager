import { screen, render } from '@testing-library/react';

import { Switch } from './';

describe('<Switch />', () => {
  it('should render Switch', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });
});
