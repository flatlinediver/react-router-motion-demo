import { cta } from '@styles/commonStyles';
import React, { FC } from 'react';
import styled from 'styled-components';

interface LinkProps {
  href: string;
  label: string;
  external?: boolean;
  hoverBorderRadius?: string;
}

const StyledLink = styled.a<{ hoverBorderRadius?: string }>`
  ${cta};
  border-radius: ${({ hoverBorderRadius }) => hoverBorderRadius && hoverBorderRadius};
  &:before,
  &:after {
    border-radius: ${({ hoverBorderRadius }) => hoverBorderRadius && hoverBorderRadius};
  }
`;

export const Link: FC<LinkProps> = ({ label, external, children, href, hoverBorderRadius }) => {
  const additionalProps = external
    ? {
        target: `_blank`,
        rel: `noreferrer`,
        'aria-label': `${label} (opens in new window)`,
      }
    : { 'aria-label': `${label}` };

  return (
    <StyledLink
      hoverBorderRadius={hoverBorderRadius}
      href={href}
      target={`_blank`}
      rel={`noreferrer`}
      {...additionalProps}
    >
      {children}
    </StyledLink>
  );
};
