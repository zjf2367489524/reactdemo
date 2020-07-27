const defaultReducer = {
    list: [],
    inputVal: '',
    activeListItem: -1,
    isInputRepeat: false
}
export default (state = defaultReducer, action) => {
    if (action.type.length) {
        const newState = JSON.parse(JSON.stringify(state))
        if (action.type === 'initList' || action.type === 'initListThunk' || action.type === 'initListSaga') {
            newState.list = action.list || []
            return newState
        } else if (action.type === 'changeInputVal') {
            newState.inputVal = action.value
            return newState
        } else if (action.type === 'inputToRepeat') {
            newState.isInputRepeat = true
            return newState
        } else if (action.type === 'addListItem') {
            newState.list.push(newState.inputVal)
            newState.inputVal = ''
            newState.isInputRepeat = false
            return newState
        } else if (action.type === 'deleteListItem') {
            const $list = [...newState.list]
            $list.splice($list.indexOf(action.value), 1)
            newState.list = $list
            return newState
        } else if (action.type === 'changeActiveListItem') {
            newState.activeListItem = action.value
            return newState
        } else {
            newState.isInputRepeat = false
            return newState
        }
    } else return state
}