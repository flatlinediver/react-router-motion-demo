import React, { FC } from 'react';
import { ThemeToggle } from '@ui/theme-toggle';
import { Link } from '@ui/custom-link';
import { IconLogo } from '@ui/icon-logo';
import styled, { useTheme } from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 1400px;
`;
const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

export const Header: FC = () => {
  const { palette } = useTheme();

  return (
    <StyledHeader>
      <Nav>
        <Link
          sameWindow
          $color={palette.text}
          $asButton
          label={`Home`}
          to="https://www.flatlinediver.com"
        >
          <IconLogo />
        </Link>
      </Nav>
      <ThemeToggle />
    </StyledHeader>
  );
};
