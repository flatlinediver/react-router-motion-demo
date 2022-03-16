import React, { FC } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLinkProps, linkStyles } from '@styles/common-styles';

const StyledLink = styled(RouterLink)<StyledLinkProps>`
  ${({ color, asButton }) => linkStyles({ color, asButton })};
`;
const StyledExternalLink = styled.a<StyledLinkProps>`
  ${({ color, asButton }) => linkStyles({ color, asButton })};
`;

interface LinkProps extends StyledLinkProps {
  to: string;
  label: string;
  external?: boolean;
  sameWindow?: boolean;
}

export const Link: FC<LinkProps> = ({ label, external, sameWindow, children, to, ...rest }) => {
  const additionalProps = external
    ? {
        target: `_blank`,
        rel: `noreferrer`,
        'aria-label': `${label} (opens in new window)`,
      }
    : { 'aria-label': `${label}` };

  return external ?? sameWindow ? (
    <StyledExternalLink href={to} {...additionalProps} {...rest}>
      {children}
    </StyledExternalLink>
  ) : (
    <StyledLink to={to} {...rest} {...additionalProps}>
      {children}
    </StyledLink>
  );
};
