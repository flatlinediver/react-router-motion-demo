import React, { memo } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { OptionSelector, OptionSlider, Navigation} from '@components';
import { animationPresets, precisionPresets } from '@constants';

export default memo(({status, onChange, presetHandler, precisionHandler, data}) => {
    const options = data.options

    const defaultStyles = Array.from(Array(4)).map(() => (
        {x: -50, s: .9, o: 0}
    ))
    const presets = Object.keys(animationPresets).map(value => (
        { value, label: value}
    ))
    const precisionOptions = Object.entries(precisionPresets).map(([value, label]) => (
        { value, label: `${value}(${label})` }
    ))

    const animation = (anim) => anim && ({
        transform: `translateX(${anim.x*3}px) scale(${anim.s})`,
        opacity: `${anim.o}`
    });

    return(
        <Box
            position="absolute"
            display="flex"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            top="0"
            left="0"
            bgcolor="#212121"
        >
            <StaggeredMotion
                defaultStyles={defaultStyles}
                styles={prev => prev.map((_, i) => {
                    return i === 0
                    ? {
                        x: spring(status? 0 : -50, options),
                        s: spring(status? 1 : .9, options),
                        o: spring(status? 1 : 0, options)
                    }
                    : {
                        x: spring(prev[i - 1].x, options),
                        s: spring(prev[i - 1].s, options),
                        o: spring(prev[i - 1].o, options)
                    }
            })}>
                {styles => (
                    <Box maxWidth="350px" width="100%">
                        <Card variant="elevation" status={status? 1 : 0} style={{padding: 16}}>
                            <OptionSlider
                                animation={animation(styles[2])}
                                label='Stiffness'
                                name='stiffness'
                                value={options.stiffness}
                                min={120}
                                max={500}
                                onChange={onChange}
                            />
                            <OptionSlider
                                animation={animation(styles[3])}
                                label='Damping'
                                name='damping'
                                value={options.damping}
                                min={12}
                                max={50}
                                onChange={onChange}
                            />
                            <OptionSelector
                                name="Preset"
                                animation={animation(styles[0])}
                                value={data.currentPreset}
                                options={presets}
                                onChange={presetHandler}
                            />
                            <OptionSelector
                                name="Precision"
                                animation={animation(styles[1])}
                                value={data.currentPrecision}
                                options={precisionOptions}
                                onChange={precisionHandler}
                            />
                            <Navigation
                                currentCard={data.currentCard}
                            />
                        </Card>
                    </Box>
                )}
            </StaggeredMotion>
        </Box>
    )
})