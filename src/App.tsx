import Layout from 'components/MainLayout';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { theme } from 'styles';
import GlobalStyle from 'styles/global';
import Router from 'features/Routes';

const App = () => {
  const location = useLocation();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Router location={location} />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
