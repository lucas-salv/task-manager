import { screen, render } from '@testing-library/react';

import { Checkbox } from './';

describe('<Checkbox />', () => {
  it('should render Checkbox', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render Checkbox disabled', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
