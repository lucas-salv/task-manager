import React from 'react';
import * as S from '@radix-ui/react-switch';

export const Switch = () => {
  return (
    <S.Root className="w-11 h-7 bg-primary-100 rounded-full data-[state=checked]:bg-secondary-100 transition-colors">
      <S.Thumb className="block w-5 h-5 bg-white rounded-full translate-x-1 data-[state=checked]:translate-x-5 transition-transform" />
    </S.Root>
  );
};
