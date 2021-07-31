import Layout from 'components/MainLayout';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'styles';
import GlobalStyle from 'styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Layout>
          {/*
      <Home />
      <About />
      <Experience />
       */}
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
