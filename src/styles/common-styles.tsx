import { css } from 'styled-components';

export interface StyledButtonProps {
  $color?: string;
}
export interface StyledLinkProps extends StyledButtonProps {
  $asButton?: boolean;
}
const mainElementBase = css`
  border: none;
  outline: none;
  position: relative;
  border-radius: 0.3rem;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  width: max-content;
  cursor: pointer;
`;
const actionElementBase = css`
  transition: ${({ theme }) => theme.transition(`opacity`)};
  position: absolute;
  content: '';
  display: block;
  opacity: 0;
  border-radius: 0.3rem;
  z-index: -1;
  pointer-events: none;
`;

const linkHoverElement = ({ $color }: StyledLinkProps) => css`
  &:before {
    ${actionElementBase};
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => $color ?? theme.palette.link};
  }
`;
const buttonHoverElement = ({ $color }: StyledButtonProps) => css`
  &:before {
    ${actionElementBase};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: ${({ theme }) => $color ?? theme.palette.text};
  }
`;

const focusElement = ({ $color }: StyledLinkProps) => css`
  &:after {
    ${actionElementBase};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    border: 1px solid ${$color};
  }
`;

const linkStates = css`
  &:hover {
    &:before {
      opacity: 1;
    }
  }
  &:focus {
    border: none;
    &:after {
      opacity: 1;
    }
    &:before {
      opacity: 0;
    }
  }
  &:focus:not(:focus-visible) {
    &:after {
      opacity: 0;
    }
    &:before {
      opacity: 1;
    }
  }
`;
const buttonStates = css`
  &:hover {
    &:before {
      opacity: 0.1;
    }
  }
  &:focus {
    border: none;
    &:before {
      opacity: 0.1;
    }
    &:after {
      opacity: 1;
    }
  }
  &:focus:not(:focus-visible) {
    &:after {
      opacity: 0;
    }
    &:before {
      opacity: 0;
    }
  }
`;

export const linkStyles = ({ $color, $asButton }: StyledLinkProps) => css`
  ${mainElementBase};
  ${$asButton && `padding: .2rem`};
  ${$asButton ? buttonHoverElement({ $color }) : linkHoverElement({ $color })};
  ${({ theme }) => focusElement({ $color: $color ?? theme.palette.link })};
  ${$asButton ? buttonStates : linkStates};
  color: ${({ theme }) => $color ?? theme.palette.link};
`;
export const buttonStyles = ({ $color }: StyledButtonProps) => css`
  ${mainElementBase};
  ${buttonHoverElement({ $color })};
  ${({ theme }) => focusElement({ $color: $color ?? theme.palette.text })};
  ${buttonStates};
  color: ${({ theme }) => $color ?? theme.palette.text};
  padding: 0.2rem;
`;
