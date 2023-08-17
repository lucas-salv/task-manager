import {
  FocusEventHandler,
  KeyboardEvent,
  RefObject,
  useEffect,
  useState
} from 'react';

type asType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

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

  const getAsStyle = (as: asType) => {
    const AsStyles = {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold',
      p: 'text-base'
    };
    return AsStyles[as];
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
    getAsStyle,
    isContentEditable
  };
};

export default useTextEditable;
