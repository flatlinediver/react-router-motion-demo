import React, { FC } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Card } from '@ui/card';
import { routes } from '@constants/routes';
import styled from 'styled-components';
import { CardNav } from '@ui/card-nav';

const Wrapper = styled.div`
  position: relative;
  height: 90px;
  width: 130px;
`;

export const Cards: FC = () => {
  const location = useLocation();
  return (
    <CardNav>
      <Wrapper>
        <TransitionGroup>
          <Transition
            key={location.pathname}
            timeout={1000}
            mountOnEnter={true}
            unmountOnExit={true}
            appear={true}
          >
            {(status) => (
              <Routes location={location}>
                {routes.map((route, i) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Card key={i} {...route} status={status} />}
                  />
                ))}
              </Routes>
            )}
          </Transition>
        </TransitionGroup>
      </Wrapper>
    </CardNav>
  );
};
