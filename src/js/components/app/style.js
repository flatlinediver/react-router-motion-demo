import styled from 'styled-components'

export const Main = styled.div`
  background: linear-gradient(to bottom, rgba(103, 231, 169,.2), rgba(103, 231, 169,.5));
  transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
  color: #FF6065;
  width:100vw;
  height:100vh;
  display:grid;
  grid-template-columns: 1fr;
  align-items:center;
  justify-items:center;
  position:relative;
  overflow:hidden;
`;