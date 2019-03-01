import styled from 'styled-components'

export const Wrap = styled.div`
    width:100%;
    background: white;
    height: '100%';
    display:block;
    padding:.5em 1em;
    margin:.5em 0;
    color:white;
    z-index: ${props => props.zIndex || '9998'};
    border-radius:99em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;

    &:hover{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;
export const customStyles = {
    control: provided => ({
        ...provided,
        background:  'white',
        border: 'none',
        outline: 'white',
        fontSize: '.8em',
        boxShadow: 'none',
        cursor: 'pointer',
        color: '#EF649E',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isFocused ? 'white' : 'white',
        color: state.isFocused ? '#EF649E' : '#505050',
        padding: state.isFocused? '.5em' : '.5em .5em .5em 1em',
        transition: 'all cubic-bezier(0.15, 0.82, 1, 1) .2s;',
        fontSize: '.8em',
        cursor: 'pointer'
    }),
    placeholder: provided => ({ ...provided, color: '#505050' }),
    dropdownIndicator: provided => ({ ...provided, color: '#EF649E', padding:'8px 0' }),
    valueContainer: provided => ({ ...provided, paddingLeft:0}),
    indicatorsContainer: provided => ({
        ...provided,
        padding:0,
    }),
    menu: provided => ({
        ...provided,
        background:'#96ead7',
        padding: 0,
        marginTop: '-.3em',
        borderRadius: '0 0 .3em .3em',
        border: 'none',
        boxShadow: 'none',
        ouline:'none'
    }),
    menuList: provided => ({
        ...provided,
        background:'#96ead7',
        borderRadius: '0 0 .3em .3em',
        padding: 0,
    })
}