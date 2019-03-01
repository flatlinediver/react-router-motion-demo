import React from 'react'
import {StyledNavLink} from './style'

export const NavButton = ({destination, animation, label, reverse}) => (
    <StyledNavLink
        left={reverse?1:0}
        exact to={destination}
        style={animation && {
                transform: `translateY(${animation.x*-3}px) scale(${animation.s})`,
                opacity: `${animation.o}`
            }}
    >
        {!reverse && <span>{label}</span>}
        <svg style={{transform: `rotate(${reverse? '90' : '-90'}deg)`}} height="20px" viewBox="0 0 20 20">
            <path fill="#505050" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
        </svg>
        {reverse && <span>{label}</span>}
    </StyledNavLink>
)