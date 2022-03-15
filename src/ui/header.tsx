import React, { FC } from 'react';
import { ThemeToggle } from '@ui/theme-toggle';
import { Link } from '@ui/custom-link';
import { IconLogo } from '@ui/icon-logo';
import styled from 'styled-components';
import { cta } from '@styles/commonStyles';

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const StyledLink = styled(Link)`
  ${cta}
`;

export const Header: FC = () => (
  <header>
    <Nav>
      <StyledLink label={`Home`} href="https://www.flatlinediver.com">
        <IconLogo />
      </StyledLink>
    </Nav>
    <ThemeToggle />
  </header>
);
