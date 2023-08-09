import { screen, render } from '@testing-library/react';

import { TextEditable } from './';

describe('<TextEditable />', () => {
  it('should render TextEditable', () => {
    render(<TextEditable value="Text Editable" />);
    expect(screen.getByText('Text Editable')).toBeInTheDocument();
  });
});
