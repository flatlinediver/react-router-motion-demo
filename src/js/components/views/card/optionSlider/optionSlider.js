import React from 'react'
import {Wrap} from './style'
export const OptionSlider = ({animation, label, value, min, max, onChange, name}) => {

    return(
        <Wrap
            style={animation && {
                transform: `translateX(${animation.x*3}px) scale(${animation.s})`,
                opacity: `${animation.o}`
            }}
        >   
            <label>
                {label}
                <input
                    onChange={onChange}
                    name={name}
                    value={value}
                    type="range" min={min} max={max}
                />
            </label>
        </Wrap>
    )
}