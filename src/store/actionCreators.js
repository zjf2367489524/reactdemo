import Axios from 'axios'

export const getChangeInpuValAction = (value) => ({
    type: 'changeInputVal',
    value
})
export const getInputToRepeatAction = () => ({
    type: 'inputToRepeat'
})
export const getAddListItemAction = () => ({
    type: 'addListItem'
})
export const getDeleteListItemAction = (value) => ({
    type: 'deleteListItem',
    value
})
export const getChangeActiveListItemAction = (value) => ({
    type: 'changeActiveListItem',
    value
})
export const getHideRepeatTipAction = () => ({
    type: 'hideRepeatTip'
})
// export const getInitListAction = (list) => ({
//     type: 'initList',
//     list
// })
// thunk
export const getInitListThunkAction = () => {
    return (dispatch) => {
        Axios.get('/list.json').then((res) => {}).catch((err) => {console.log(new Error(err))}).finally(() => {
            setTimeout(() => {
                const $data = ["lty"]
                const $action = {
                    type: 'initListThunk',
                    list: $data
                }
                dispatch($action)
            }, 10)
        })
    }
}
// saga
// export const getInitListSagaAction = () => ({
//     type: 'initListSaga'
// })