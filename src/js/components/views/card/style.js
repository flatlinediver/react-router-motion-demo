import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
export const Section = styled.section`
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    justify-items:center;
    grid-template-columns:1fr;
    grid-gap:1em;
    position:absolute;
    top:0;
    left:0;
`;
export const Article = styled.article`
    position:relative;
    transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    width:350px;
    background: white;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding: 1em;
    border-radius: .3em;
    overflow:hidden;
`;