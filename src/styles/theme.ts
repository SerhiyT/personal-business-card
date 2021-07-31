import { css, CSSProp } from 'styled-components';

export interface Mixins {
  flexCenter: CSSProp;
  flexBetween: CSSProp;
  inlineLink: CSSProp;
}
export interface Theme {
  colors: {
    black: string;
    white: string;
    green: string;
    green2: string;
    red: string;
    grey: string;
    orange: string;
  };
  shadows: {
    menuList: string;
    popover: string;
    modal: string;
    tile: string;
  };
  shape: {
    borderRadius2px: string;
    borderRadius4px: string;
    borderRadius8px: string;
  };
  screenSize: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  mixins: Mixins;
}

const mixins: Mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0.5;
    }
  `,
};

const theme: Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    green: '#748B6F',
    green2: '#24403D',
    red: '#DA291C',
    grey: '#555555',
    orange: '#F87000',
  },
  shadows: {
    menuList: '0px 1px 4px rgba(0, 0, 0, 0.12)',
    popover: '0px 16px 24px rgba(0, 0, 0, 0.04)',
    modal: ' 0px 2px 12px rgba(0, 0, 0, 0.16)',
    tile: '0px 4px 8px rgba(238, 240, 241, 0.48)',
  },
  shape: {
    borderRadius2px: '2px',
    borderRadius4px: '4px',
    borderRadius8px: '8px',
  },
  screenSize: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1536px',
  },

  mixins,
};

export default theme;
