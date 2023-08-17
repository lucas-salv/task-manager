import { screen, render, act, fireEvent } from '@testing-library/react';

import { TextEditable } from './../';

describe('useTextEditable', () => {
  it('when edit button is clicked the TextEditable should be editable', () => {
    render(<TextEditable value="Text Editable" />);

    const textEditable = screen.getByText('Text Editable');
    const editBtn = textEditable.nextSibling;

    if (editBtn instanceof HTMLElement) {
      act(() => {
        editBtn?.click();
      });
    }

    expect(textEditable.getAttribute('contenteditable')).toBe('true');
  });

  it('should change TextEditable value and disable the TextEditable edit mode when defocus', async () => {
    const handleValueChange = jest.fn();
    const value = 'Text Editable';
    const newValue = `${value} tested`;
    render(<TextEditable value={value} onValueChange={handleValueChange} />);

    const textEditable = screen.getByText(value);
    const editBtn = textEditable.nextSibling;
    act(() => {
      if (editBtn instanceof HTMLElement) editBtn.click();
    });
    expect(textEditable.getAttribute('contenteditable')).toBe('true');
    fireEvent.input(textEditable, {
      target: {
        textContent: newValue
      }
    });
    fireEvent.blur(textEditable);
    expect(handleValueChange).toHaveBeenCalled();
    expect(textEditable.getAttribute('contenteditable')).toBe('false');
    expect(textEditable.textContent).toBe(newValue);
  });

  it('should change the TextEditable value when press enter', async () => {
    const handleValueConfirm = jest.fn();
    const value = 'Text Editable';
    const newValue = `${value} tested`;
    render(<TextEditable value={value} onValueConfirm={handleValueConfirm} />);

    const textEditable = screen.getByText('Text Editable');
    const editBtn = textEditable.nextSibling;
    act(() => {
      if (editBtn instanceof HTMLElement) editBtn.click();
    });
    expect(textEditable.getAttribute('contenteditable')).toBe('true');
    fireEvent.input(textEditable, { target: { textContent: newValue } });
    fireEvent.keyDown(textEditable, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13
    });

    expect(handleValueConfirm).toHaveBeenCalled();
    expect(textEditable.getAttribute('contenteditable')).toBe('false');
    expect(textEditable.textContent).toBe(newValue);
  });
});
