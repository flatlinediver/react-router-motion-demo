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
      <Router basename="/demos/73360-react-router-motion-demo">
        <ThemeProvider theme={theme(mode)}>
          <GlobalStyles>
            <MotionConfigProvider>
              <Header />
              <Main>
                <MotionConfig />
                <hr />
                <Cards />
                <hr />
                <Footer />
              </Main>
            </MotionConfigProvider>
          </GlobalStyles>
        </ThemeProvider>
      </Router>
    )}
  />,
  document.getElementById('root')
);
