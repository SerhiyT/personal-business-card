import styled, { keyframes } from 'styled-components';

const progressLine = keyframes`
  0% {
    left: 0;
    width: 10%;
  }
  
  50% {
    left: 30%;
    width: 60%;
  }
  
  100% {
    left: 100%;
    width: 10%;
  }
`;

export const DivSectionLoader = styled.div`
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  height: 100%;
`;

export const DivProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  overflow: hidden;
`;

export const DivProgressBarBackground = styled.div`
  height: 3px;
  background: ${({ theme }) => theme.colors.black};
`;

export const DivProgressIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${progressLine} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;

  background: ${({ theme }) => theme.colors.orange};
  will-change: left, width;
  transition: all 0.3s ease;
  height: 3px;
`;
