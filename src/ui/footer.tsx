import { Link } from '@ui/custom-link';
import React, { FC } from 'react';
import { RiGithubFill } from 'react-icons/ri';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 1rem;
    margin-right: 0.3rem;
  }
`;

export const Footer: FC = () => (
  <footer>
    <Link
      hoverBorderRadius={`.3rem`}
      href="https://github.com/chenglou/react-motion"
      label="react-motion repository"
      external
    >
      <Span>
        <RiGithubFill />
        react-motion
      </Span>
    </Link>
    <Link
      hoverBorderRadius={`.3rem`}
      href="https://github.com/flatlinediver/react-router-motion-demo"
      label="React router motion demo repository"
      external
    >
      <Span>
        <RiGithubFill />
        demo
      </Span>
    </Link>
  </footer>
);
