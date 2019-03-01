import React, {memo} from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import {Section, Article} from './style'
import {OptionSelector} from './optionSelector'
import {OptionSlider} from './optionSlider'
import {Navigation} from './navigation'
import {animationPresets, precisionPresets} from '../../../constants'

export const Card = memo(({status, onChange, presetHandler, precisionHandler, data}) => {
    const options = data.options

    const defaultStyles = Array.from(Array(7)).map(() => (
        {x: -50, s:.9, o:0}
    ))
    const presets = Object.keys(animationPresets).map(value => (
        { value, label: value}
    ))
    const precisionOptions = Object.entries(precisionPresets).map(([value, label]) => (
        { value, label: `${value}(${label})` }
    ))
    return(
        <Section>
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
                <Article status={status? 1 : 0}>
                    
                    <OptionSlider
                        animation={styles[2]}
                        label={`Stiffness: ${options.stiffness}`}
                        name='stiffness'
                        value={options.stiffness}
                        min={120}
                        max={500}
                        onChange={onChange}
                    />
                    <OptionSlider
                        animation={styles[3]}
                        label={`Damping: ${options.damping}`}
                        name='damping'
                        value={options.damping}
                        min={12}
                        max={50}
                        onChange={onChange}
                    />
                    <OptionSelector
                        animation={styles[0]}
                        placeholder={`Current preset: ${data.currentPreset}`}
                        value={`Current preset: ${data.currentPreset}`}
                        options={presets}
                        onChange={presetHandler}
                        zIndex={9999}
                    />
                    <OptionSelector
                        animation={styles[1]}
                        placeholder={`Current precision: ${data.currentPrecision}(${precisionPresets[data.currentPrecision]})`}
                        value={'Current precision: ' + data.currentPrecision}
                        options={precisionOptions}
                        onChange={precisionHandler}
                        zIndex={9998}
                    />
                    <Navigation
                        prev={data.currentCard.prev}
                        next={data.currentCard.next}
                        animationPrev={styles[4]}
                        animationNext={styles[5]}
                    />
                </Article>
            )}
        </StaggeredMotion>
        </Section>
    )
})