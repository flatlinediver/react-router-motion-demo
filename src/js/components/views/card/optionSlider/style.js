import styled from 'styled-components'

export const Wrap = styled.div`
    width:100%;
    height: '100%';
    display:block;
    padding:.5em 1em;
    margin:.5em 0;
    color: #505050;
    z-index:999;
    border-radius:99em;
    & label{
        font-size: .8em;
        color: #505050;
        margin-right:1em;
    }
    & input{
        width: 100%;
        height: 3px;
        padding:.05em;
        background: linear-gradient(to right, #EF649E, #C652D6);
        outline: none;
        opacity: 0.7;
        border:none;
        appearance: none;
        border-radius:.3em;   
    }
    input[type=range]::-webkit-slider-thumb{
        appearance: none;
        background: #681E87;
        cursor: pointer;
        width:15px;
        height:15px;
        border-radius:100%;
    }
    input[type=range]::track {
        appearance: none;
        background: #681E87;
        cursor: pointer;
        width:15px;
        height:15px;
        border-radius:100%;
    }
    input[type=range]::-webkit-slider-thumb:hover{
        transform: scale(1.2);
        transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    }
    input[type=range]::-webkit-slider-thumb:active{
        transform: scale(1.2);
        transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    }
    input[type=range]::track:hover{
        transform: scale(1.2);
        transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    }
    input[type=range]::track:active{
        transform: scale(1.2);
        transition: all cubic-bezier(0.15, 0.82, 1, 1) .2s;
    }
`;