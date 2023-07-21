import { screen, render } from '@testing-library/react';

import { Input } from './../';

describe('<InputLabel />', () => {
  it('should render Input with label', () => {
    render(<Input placeholder="placeholder" label="E-mail" />);

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  });
});
