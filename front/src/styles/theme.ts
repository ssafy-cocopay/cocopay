import { DefaultTheme } from "styled-components";

const color = {
  // text color
  black1: '#303030',
  grey1: '#838383',
  grey2: '#AEAEAE',
  grey3: '#E8E8E8',
  grey4: '#F5F5F5',
  white: '#FFFFFF',

  // main color
  blue: '#5F7DFF',
  lightblue: '#A9B9FF',
  danger: '#FA6B3C'
} as const;

const fontSize = {
  heading1: '36px',
  subtitle1: '28px',
  subtitle2: '24px',
  body1: '20px',
  body2: '18px',
  small1: '16px',
  small2: '14px',
  small3: '12px',
} as const;

// 나중에 값 조정 예정
const letterSpacing = {
  narrow: '-1.4px',
  spread: '0.4px',
} as const;

const shadow = {
  shadow1: '0px 12px 30px rgba(0, 0, 0, 0.16)',
} as const;

const gradient = {
  gradient1: 'linear-gradient(180deg, #E8EBF2 0%, #FFFFFF 100%)'
};

const theme: DefaultTheme = {
  color,
  fontSize,
  letterSpacing,
  shadow,
  gradient,
};

export default theme;
