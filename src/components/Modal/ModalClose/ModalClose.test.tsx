import { screen, render } from '@testing-library/react';

import { Modal, ModalContent, ModalClose } from './../';

describe('<ModalClose />', () => {
  it('should render ModalClose inside ModalContent when opened', () => {
    render(
      <Modal defaultOpen={true}>
        <ModalContent>
          <ModalClose>Close Button</ModalClose>
        </ModalContent>
      </Modal>
    );

    expect(
      screen.getByRole('button', { name: 'Close Button' })
    ).toBeInTheDocument();
  });
});
