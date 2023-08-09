import {
  FocusEventHandler,
  KeyboardEvent,
  RefObject,
  useEffect,
  useState
} from 'react';

const useTextEditable = (
  ref: RefObject<HTMLSpanElement>,
  onValueConfirm: ((value: string) => void) | undefined,
  onValueChange: ((value: string) => void) | undefined
) => {
  const [isContentEditable, setIsContentEditable] = useState(false);

  const handleEditText = () => {
    setIsContentEditable(true);
    if (ref.current) {
      document.getSelection()?.selectAllChildren(ref.current);
      document.getSelection()?.collapseToEnd();
    }
  };

  const handleValueConfirm = (value: string) => {
    onValueConfirm && onValueConfirm(value);
  };

  const handleValueChange = (value: string) => {
    onValueChange && onValueChange(value);
  };

  const handleInput = () => {
    ref.current && handleValueChange(ref.current?.innerText);
  };

  const handleFocusOut: FocusEventHandler<HTMLSpanElement> = () => {
    setIsContentEditable(false);
    ref.current && handleValueConfirm(ref.current.innerText);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setIsContentEditable(false);
      ref.current && handleValueConfirm(ref.current.innerText);
    }
  };

  useEffect(() => {
    if (isContentEditable && ref.current) ref.current.focus();
  }, [isContentEditable, ref]);

  return {
    handleEditText,
    handleFocusOut,
    handleKeydown,
    handleInput,
    isContentEditable
  };
};

export default useTextEditable;
