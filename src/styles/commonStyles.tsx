import { css } from 'styled-components';

export const cta = css`
  border: none;
  outline: none;
  position: relative;
  border-radius: 50%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  width: max-content;
  padding: 0.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text};

  &:before {
    transition: ${({ theme }) => theme.transition(`opacity`)};
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    opacity: 0;
    background: ${({ theme }) => theme.palette.text};
    border-radius: 50%;
    z-index: -1;
  }
  &:after {
    transition: ${({ theme }) => theme.transition(`opacity`)};
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    opacity: 0;
    border: 1px solid ${({ theme }) => theme.palette.text};
    border-radius: 50%;
    z-index: -1;
  }
  &:hover {
    &:before {
      opacity: 0.2;
    }
  }
  &:focus:not(:focus-visible) {
    &:before {
      opacity: 0.4;
    }
  }
  &:focus {
    border: none;
    &:after {
      opacity: 0.4;
    }
  }
`;
