import { screen, render } from '@testing-library/react';

import { Modal } from '../Modal';
import { ModalTrigger } from './ModalTrigger';

describe('<ModalTrigger />', () => {
  it('should render ModalTrigger', () => {
    render(
      <Modal>
        <ModalTrigger>Trigger</ModalTrigger>
      </Modal>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });
});
