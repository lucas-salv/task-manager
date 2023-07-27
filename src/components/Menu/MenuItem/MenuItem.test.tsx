import { screen, render } from '@testing-library/react';

import { Menu, MenuItem } from './../';
import { MdTask } from 'react-icons/md';

describe('<MenuItem />', () => {
  it('should render MenuItem with icon', () => {
    render(
      <Menu>
        <MenuItem label="item" icon={MdTask} />
      </Menu>
    );

    const icon = screen.getByRole('list').querySelector('[data-icon]');

    expect(icon).toBeInTheDocument();
  });
});
