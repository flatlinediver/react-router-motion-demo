import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  width: 100vw;
  max-width: 330px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0 0;
`;

export const Main: FC = ({ children }) => (
  <StyledMain>
    <h1>React-Router/Motion</h1>
    <section>
      <p>Animating React route changes with react-router-dom & react-motion</p>
    </section>
    <hr />
    {children}
  </StyledMain>
);
