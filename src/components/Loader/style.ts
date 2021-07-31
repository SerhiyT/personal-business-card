import styled from 'styled-components';

export const StyledLoader = styled.div<{
  isMounted: any;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 400px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;
