import { render, screen } from '@testing-library/react';

import { Input } from './';

describe('<Input />', () => {
  it('should render Input', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
