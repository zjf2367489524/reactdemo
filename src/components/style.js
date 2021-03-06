import styled from 'styled-components'

export const TDLHeaderWrapper = styled.div`
    background-color: aqua;
    padding: 1em;
    box-shadow: 0 0 9px 3px #00aaff;
    .tdl-input {
        width: 128px;
        transition: width .3s ease-in;
    }
    .tdl-input.active{
        width: 256px;
    }
`
export const TDLMain = styled.div`
    display: flex;
    padding: 1em;
    height: 512px;
    .tdl-list{
        width: 256px;
        overflow: auto;
        margin: 0;
        background-color: #f0f0f0;
        padding: 0;
    }
    .tdl-list.empty{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tdl-list li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5em;
    }
    .tdl-list li+li{
        border-top: 1px solid #cccccc;
    }
    .tdl-list button{
        border: none;
        outline: none;
        color: #FFFFFF;
        font-weight: bold;
        background-color: #FF0000;
        border-radius: 4px;
        padding: 4px 8px;
    }
    .tdl-view{
        flex-grow: 1;
        border-left: 1px solid #0ef5ce;
    }
    .fade-enter, .fade-appear{
        opacity: 0;
    }
    .fade-enter-done{
        opacity: 1;
    }
    .fade-enter-active, .fade-appear-active{
        opacity: 1;
        transition: opacity 1s ease-in;
    }
    .fade-exit{
        opacity: 1;
    }
    .fade-exit-active{
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    .fade-exit-done{
        opacity: 0;
    }
`

export const TDLRepeatTip = styled.div`
    padding-left: 5%;
    background-color: #ff6600;
    border-radius: 4px;
`