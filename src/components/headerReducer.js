const defaultReducer = {
    inputVal: '',
    inputRepeat: false,
    inputFoucs: false
}

export default (state = defaultReducer, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'headerInputChangeVal':
            newState.inputVal = action.value
            return newState
        case 'headerInputRepeat':
            newState.inputRepeat = action.value
            return newState
        case 'headerInputFoucs':
            newState.inputFoucs = state.inputFoucs ? false : true
            return newState
        default:
            return state
    }
}