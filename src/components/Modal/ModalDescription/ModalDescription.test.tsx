import { screen, render } from '@testing-library/react';

import { Modal, ModalContent, ModalDescription } from './../';

describe('<ModalDescription />', () => {
  it('should render ModalDescription inside ModalContent when open', () => {
    render(
      <Modal defaultOpen={true}>
        <ModalContent>
          <ModalDescription>Description</ModalDescription>
        </ModalContent>
      </Modal>
    );

    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
