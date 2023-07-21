import { render, screen } from '@testing-library/react';

import { Input } from './';

describe('<Input />', () => {
  it('should render Input', () => {
    render(<Input placeholder="placeholder" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render Input with placeholder', () => {
    const placeholderText = 'Digite seu email';
    render(<Input placeholder={placeholderText} />);

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
