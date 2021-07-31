import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.green2};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.blue};
      width: 90px;
      height: 90px;

      &:hover,
      &:focus {
        svg {
          fill: rgba(100, 255, 218, 0.1);
        }
      }

      svg {
        fill: none;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        user-select: none;
      }
    }
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: pointer;

    li {
      margin: 0 5px;
      position: relative;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.orange};
      top: 0;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      :hover {
        top: -5px;
      }
      a {
        padding: 10px;
      }
    }
  }
`;
