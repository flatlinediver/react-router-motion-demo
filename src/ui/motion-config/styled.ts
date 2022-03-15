import styled, { css } from 'styled-components';

const trackStyles = css`
  border-radius: 2rem;
  height: 0.5rem;
  margin: 0;
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.text};
`;
const handleStyles = css`
  -webkit-appearance: none;
  background: ${({ theme }) => theme.palette.bg};
  border: 2px solid ${({ theme }) => theme.palette.text};
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  margin-top: -5px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition(`box-shadow`)};
`;

export const Wrapper = styled.section`
  display: flex;
  padding: 1.3rem 0 0;
  flex-direction: column;
  width: 100%;
  @media (max-width: 24rem) {
    padding: 1.3rem 16px 0;
  }
`;
export const Input = styled.input`
  margin: 0.6rem 0;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-webkit-slider-runnable-track {
    ${trackStyles};
  }
  &::-moz-range-track {
    ${trackStyles};
  }
  &::-ms-track {
    ${trackStyles};
    color: transparent;
  }
  &::-ms-fill-lower {
    background: transparent;
  }
  &::-webkit-slider-thumb {
    ${handleStyles};
  }
  &::-moz-range-thumb {
    ${handleStyles};
  }
  &::-ms-thumb {
    ${handleStyles};
  }
  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      box-shadow: 0px 0px 7px 3px ${({ theme }) => theme.palette.link};
    }
    &::-moz-range-thumb {
      box-shadow: 0px 0px 7px 3px ${({ theme }) => theme.palette.link};
    }
    &::-ms-thumb {
      box-shadow: 0px 0px 7px 3px ${({ theme }) => theme.palette.link};
    }
  }
`;
