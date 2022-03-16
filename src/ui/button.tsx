import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { buttonStyles, StyledButtonProps } from '@styles/common-styles';

const StyledButton = styled.button<StyledButtonProps>`
  ${({ color }) => buttonStyles({ color })};
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
