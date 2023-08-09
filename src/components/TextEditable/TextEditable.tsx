import { useRef } from 'react';
import { RiEdit2Fill } from 'react-icons/ri';
import useTextEditable from './useTextEditable';

type TextEditableProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  value: string;
  onValueChange?: (value: string) => void;
  onValueConfirm?: (value: string) => void;
};

export const TextEditable = ({
  as = 'p',
  value,
  onValueChange,
  onValueConfirm
}: TextEditableProps) => {
  const text = useRef<HTMLSpanElement | null>(null);
  const As = as;
  const {
    handleFocusOut,
    handleKeydown,
    handleEditText,
    handleInput,
    getAsStyle,
    isContentEditable
  } = useTextEditable(text, onValueConfirm, onValueChange);

  return (
    <As className={`group ${getAsStyle(as)} flex items-center gap-2`}>
      <span
        ref={text}
        onBlur={handleFocusOut}
        onKeyDown={handleKeydown}
        onInput={handleInput}
        contentEditable={isContentEditable}
        suppressContentEditableWarning={true}
      >
        {value}
      </span>
      {!isContentEditable ? (
        <button
          className="hidden px-1 group-hover:flex justify-center"
          onClick={handleEditText}
        >
          <RiEdit2Fill size={20} />
        </button>
      ) : (
        <span className="px-1 bg-primary-200 text-xs">Enter</span>
      )}
    </As>
  );
};
