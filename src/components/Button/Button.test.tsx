import { screen, render } from '@testing-library/react';
import { FaReact } from 'react-icons/fa';

import { Button } from './';

describe('<Button />', () => {
  it('should render Button component', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
  });

  it('should render large Button', () => {
    render(<Button size="lg">Button</Button>);

    const largeButtonClasses =
      'h-12 text-lg px-6 bg-secondary-100 rounded-md text-primary-300 font-bold hover:bg-secondary-200 active:bg-secondary-300 transition-colors';

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass(largeButtonClasses);
  });

  it('should render Button with an icon on the left', () => {
    render(<Button leftIcon={FaReact}>Button</Button>);
    const leftIcon = screen
      .getByRole('button', {
        name: /Button/i
      })
      .querySelector('[data-leftIcon]');
    expect(leftIcon).toBeInTheDocument();
  });

  it('should render Button with an icon on the right', () => {
    render(<Button rightIcon={FaReact}>Button</Button>);
    const rightIcon = screen
      .getByRole('button', {
        name: /Button/i
      })
      .querySelector('[data-rightIcon]');
    expect(rightIcon).toBeInTheDocument();
  });
});
