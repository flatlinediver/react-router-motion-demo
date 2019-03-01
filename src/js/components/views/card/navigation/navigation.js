import React from 'react'
import {Wrap} from './style'
import {NavButton} from './navButton'

export const Navigation = ({animationPrev, animationNext, prev, next}) => (
    <Wrap>
        <NavButton
            reverse
            destination={prev}
            animation={animationPrev}
            label='Prev'
        />
        <NavButton
            destination={next}
            animation={animationNext}
            label='Next'
        />
    </Wrap>
) 