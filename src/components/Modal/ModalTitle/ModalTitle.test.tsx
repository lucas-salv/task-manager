import { screen, render } from '@testing-library/react';

import { Modal, ModalContent, ModalTitle } from './../';

describe('<ModalTitle />', () => {
  it('should render ModalTitle inside ModalContent', () => {
    render(
      <Modal defaultOpen={true}>
        <ModalContent>
          <ModalTitle>Title</ModalTitle>
        </ModalContent>
      </Modal>
    );

    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
  });
});
