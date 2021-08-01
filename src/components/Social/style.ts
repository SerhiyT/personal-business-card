import styled from 'styled-components';

export const StyledSocialList = styled.ul`
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;

  list-style: none;

  &:after {
    content: '';
    display: block;
    height: 100px;
    width: 1px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.orange};
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      display: inline-block;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors.orange};
      }
      &:hover,
      &:focus {
        svg {
          color: ${({ theme }) => theme.colors.blue};
          fill: rgba(248, 112, 0, 0.2);
        }
      }
    }
  }
`;

export const StyledSideSocial = styled.div`
  width: 40px;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  position: fixed;

  @media (max-width: 1080px) {
    left: 20px;
    right: auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
