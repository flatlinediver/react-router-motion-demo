import {useState, useEffect} from 'react'
import { animationPresets, precisionPresets} from '@constants'

export default pathname => {
    const [currentCard, setCurrentCard] = useState({
        next: '/',
        prev: '/',
        label: 'Card',
    })
    const [options, setOptions] = useState({
        stiffness: 470,
        damping: 25,
        precision: 0.01
    })
    const [currentPrecision, setCurrentPrecision] = useState('min')
    const [currentPreset, setCurrentPreset] = useState('initial')

    useEffect(() => {
        switch(pathname){
            case '/':
                return setCurrentCard({next: '/secondcard', prev: '/fifthcard', label: 'First Card'})
            case '/secondcard':
                return setCurrentCard({next: '/thirdcard', prev: '/', label: 'Second Card'})
            case '/thirdcard':
                return setCurrentCard({next: '/fourthcard', prev: '/secondcard', label: 'Third Card'})
            case '/fourthcard':
                return setCurrentCard({next: '/fifthcard', prev: '/thirdcard', label: 'Fourth Card'})
            case '/fifthcard':
                return setCurrentCard({next: '/', prev: '/fourthcard', label: 'Fift Card'})
        }
    }, [pathname])

    const onChange = (name, value) => {
        setOptions({...options, [name]: value})
        setCurrentPreset('custom')
    }

    const presetHandler = ({target: {value}}) => {
        const { stiffness, damping } = animationPresets[value];
        setOptions({ ...options, stiffness, damping })
        setCurrentPreset(value)
    }

    const precisionHandler = ({target: {value}}) => {
        let precision = precisionPresets[value]
        setOptions({ ...options, precision })
        setCurrentPrecision(value)
    }
    
    return {
        currentCard,
        options,
        currentPrecision,
        currentPreset,
        onChange,
        presetHandler,
        precisionHandler
    }
}