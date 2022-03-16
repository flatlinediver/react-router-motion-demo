import { Link } from '@ui/custom-link';
import React, { FC } from 'react';
import { RiGithubFill } from 'react-icons/ri';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 0.8rem;
  width: 100vw;
  max-width: 330px;
  margin: 1.3rem 0;
  font-style: italic;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  align-items: start;
  justify-items: start;
  @media (max-width: 24rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
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
  <StyledFooter>
    <Link to="https://github.com/chenglou/react-motion" label="react-motion repository" external>
      <Span>
        <RiGithubFill />
        react-motion
      </Span>
    </Link>
    <Link
      to="https://github.com/flatlinediver/react-router-motion-demo"
      label="React router motion demo repository"
      external
    >
      <Span>
        <RiGithubFill />
        demo
      </Span>
    </Link>
  </StyledFooter>
);
