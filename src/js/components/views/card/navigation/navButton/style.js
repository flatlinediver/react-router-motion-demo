import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
    transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    border:none;
    background: white;
    text-decoration:none;
    outline:none;
    color:#505050;
    padding:1em;
    display:flex;
    align-items:center;
    justify-content:${props => props.left ? 'flex-start' : 'flex-end'};
    cursor:pointer;
    border-radius:99em;
    font-size:.8em;
    width:100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display:flex;
    & svg {
        transform: ${props => props.left && 'scaleX(-1)'};
    }
    &:hover{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        padding: ${props => props.left ? '1em 1em 1em .5em' : '1em .5em 1em 1em'};
    }
`;