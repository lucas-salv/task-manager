import { screen, render } from '@testing-library/react';

import { Modal, ModalContent } from './../';

describe('<ModalContent />', () => {
  it('should render ModalContent inside Modal', () => {
    render(
      <Modal defaultOpen={true}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('should not render ModalContent when open prop is false', () => {
    render(
      <Modal defaultOpen={false}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
