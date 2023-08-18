import { screen, render } from '@testing-library/react';

import { Checkbox } from './';

describe('<Checkbox />', () => {
  it('should render Checkbox', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
