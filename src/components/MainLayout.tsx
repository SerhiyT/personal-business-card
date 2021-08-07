import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
  const activePathname = location.pathname.split('/')[1].toUpperCase();

  return (
    <>
      <div id="root">
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Helmet title={`${activePathname} | Serhii Tsyntsar`} />
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
