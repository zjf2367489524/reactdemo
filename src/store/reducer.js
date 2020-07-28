import { combineReducers } from 'redux'
import headerReducer from '../components/headerReducer'

const defaultReducer = {
    list: [],
    activeListItem: -1,
}
const globalReducer = (state = defaultReducer, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'initList': //initListThunk, initListSaga
            newState.list = action.list || []
            return newState
        case 'addListItem':
            newState.list.push(action.value)
            return newState
        case 'deleteListItem':
            const $list = [...newState.list]
            $list.splice($list.indexOf(action.value), 1)
            newState.list = $list
            return newState
        case 'changeActiveListItem':
            newState.activeListItem = action.value
            return newState
        default:
            return state
    }
}

export default combineReducers({
    global: globalReducer,
    header: headerReducer
})