import React from 'react';

type TFuncClick = ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
type TFuncChange = (e: React.ChangeEvent<HTMLElement>) => void;
type TFuncFocus = (e: React.FocusEvent<HTMLInputElement>) => void;

export {
  TFuncClick,
  TFuncChange,
  TFuncFocus
};
