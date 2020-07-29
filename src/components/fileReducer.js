const defaultReducer = {}

export default (state = defaultReducer, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'fetchFileSaga':
            newState.res = action.res
            return newState
        case 'addFileRes':
            newState.res++
            return newState
        default:
            return state
    }
}