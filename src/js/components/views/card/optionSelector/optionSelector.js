import React from 'react'
import {Wrap, customStyles} from './style'
import Select from 'react-select'

export const OptionSelector = ({options, onChange, placeholder, value, animation, zIndex}) => (
    <Wrap
        zIndex={zIndex}
        style={animation && {
            transform: `translateX(${animation.x*3}px) scale(${animation.s})`,
            opacity: `${animation.o}`
        }}
    >
        <Select
            styles={customStyles}
            placeholder={placeholder}
            value={value}
            options={options}
            onChange={onChange}
            isSearchableboolean={false}
        />
    </Wrap>
)