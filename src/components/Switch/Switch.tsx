import React, { MouseEventHandler } from 'react';
import * as S from '@radix-ui/react-switch';
import { SwitchProps } from '@radix-ui/react-switch';

type SProps = {
  onClick?: MouseEventHandler;
} & SwitchProps;

export const Switch = ({ onClick, ...props }: SProps) => {
  return (
    <S.Root
      {...props}
      onClick={onClick}
      className="w-11 h-7 bg-primary-100 rounded-full data-[state=checked]:bg-secondary-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <S.Thumb className="block w-5 h-5 bg-white rounded-full translate-x-1 data-[state=checked]:translate-x-5 transition-transform" />
    </S.Root>
  );
};
