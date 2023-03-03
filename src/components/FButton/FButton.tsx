import { createElement } from 'react';
import { Button, ButtonProps } from '@jonbri/libby-ui';

export interface FButtonProps extends ButtonProps {}
export const FButton = ({ children }: FButtonProps) => {
  const s = `${children}test-0`;
  return <Button>{s}</Button>;
};
