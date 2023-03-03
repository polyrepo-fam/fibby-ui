import { createElement } from 'react';
import { TOKEN_COLOR_ALT, TOKEN_SIZE_ALT, TOKEN_WEIGHT_ALT } from '@jonbri/token';

export interface AbcProps {
  upperCase?: boolean;
}
export const Abc = ({ upperCase = false }: AbcProps) => {
  const style = {
    color: TOKEN_COLOR_ALT,
    fontSize: TOKEN_SIZE_ALT,
    fontWeight: TOKEN_WEIGHT_ALT,
  };
  const text = upperCase ? 'ABC' : 'Abc';
  return <div style={style}>{text}</div>;
};
