import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeModeProvider } from '@context/theme-mode';
import { GlobalStyles } from '@styles/global-styles';
import { theme } from '@styles/theme';
import { Header } from '@ui/header';
import { MotionConfigProvider } from '@context/motion-config';
import { Cards } from '@ui/cards';
import { MotionConfig } from '@ui/motion-config';
import { Main } from '@ui/main';
import { Footer } from '@ui/footer';

render(
  <ThemeModeProvider
    render={(mode) => (
      <ThemeProvider theme={theme(mode)}>
        <GlobalStyles>
          <Header />
          <Main>
            <MotionConfigProvider>
              <Router>
                <MotionConfig />
                <hr />
                <Cards />
                <hr />
                <Footer />
              </Router>
            </MotionConfigProvider>
          </Main>
        </GlobalStyles>
      </ThemeProvider>
    )}
  />,
  document.getElementById('root')
);
