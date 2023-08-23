import { screen, render } from '@testing-library/react';

import { Modal, ModalContent } from './../';

describe('<ModalContent />', () => {
  it('should render ModalContent inside Modal', () => {
    render(
      <Modal>
        <ModalContent>Content</ModalContent>
      </Modal>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
