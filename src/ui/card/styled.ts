import styled from 'styled-components';
export type StylesType = { x: number; s: number; o: number };

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  overflow: hidden;
`;
export const Dots = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  pointer-events: none;
`;

export const Dot = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.text};
`;
