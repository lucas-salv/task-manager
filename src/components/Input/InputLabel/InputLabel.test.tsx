import { screen, render } from '@testing-library/react';

import { Input } from './../';
import { InputLabel } from './InputLabel';

describe('<InputLabel />', () => {
  it('should render Input with label', () => {
    render(<Input placeholder="placeholder" label="E-mail" />);
    render(<InputLabel htmlFor="teste">Teste</InputLabel>);

    const inputLabelDefaultClasses = 'text-textColor';

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Teste')).toHaveClass(inputLabelDefaultClasses);
  });
  it('must change InputLabel styles if Input has error', () => {
    render(
      <InputLabel htmlFor="test" error>
        Teste
      </InputLabel>
    );

    const inputLabelErrorClasses = 'text-error';

    expect(screen.getByText('Teste')).toHaveClass(inputLabelErrorClasses);
    expect;
  });
});
