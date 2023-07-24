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

  it('should render Input with error', () => {
    render(<Input placeholder="error" error />);

    const inputErrorClasses =
      'border-error text-error placeholder-error placeholder-opacity-50';

    expect(screen.getByPlaceholderText('error')).toHaveClass(inputErrorClasses);
  });

  it('should render Input with helperText', () => {
    render(<Input placeholder="helperText" helperText="helper text" />);

    expect(screen.getByText('helper text')).toBeInTheDocument();
  });
});
