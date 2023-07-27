import { screen, render } from '@testing-library/react';

import { Menu, MenuItem } from './';

describe('<Menu />', () => {
  it('should render Menu', () => {
    render(
      <Menu>
        <MenuItem label="Item 1" />
      </Menu>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
