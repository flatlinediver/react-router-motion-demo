import React, { FC } from 'react';

export const Main: FC = ({ children }) => (
  <main>
    <h1>React-Router/Motion</h1>
    <section>
      <p>Animating React route changes with react-router-dom & react-motion</p>
    </section>
    <hr />
    {children}
  </main>
);
