import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { routes } from '@constants/routes';
import styled from 'styled-components';
import { cta } from '@styles/commonStyles';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: max-content;
  padding-top: 1rem;
`;
const StyledLink = styled(Link)`
  ${cta};
  color: ${({ theme }) => theme.palette.link};
  &:after {
    border-color: ${({ theme }) => theme.palette.link};
  }
  &:focus {
    outline-color: ${({ theme }) => theme.palette.link};
  }
`;

export const CardNav: FC = ({ children }) => {
  const { pathname } = useLocation();
  const index = routes.findIndex((p) => p.path === pathname);
  const lastIdx = routes.length - 1;
  const [{ path: prev }, { path: next }] = [
    index === 0 ? routes[lastIdx] : routes[index - 1],
    index === lastIdx ? routes[0] : routes[index + 1],
  ];
  return (
    <Section>
      <StyledLink to={`${prev}`}>
        <RiArrowLeftLine />
      </StyledLink>
      {children}
      <StyledLink to={`${next}`}>
        <RiArrowRightLine />
      </StyledLink>
    </Section>
  );
};
