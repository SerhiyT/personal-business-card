import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';
import Menu from './Menu';
import Social from './Social';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: any) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <div id="root">
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Menu />
            <Social />
            <div id="content">
              {children}
              {/* <Footer /> */}
            </div>
          </StyledContent>
        )}
      </div>
    </>
  );
};

export default Layout;
