//import Axios from 'axios'

export const getChangeInpuValAction = (value) => ({
    type: 'changeInputVal',
    value
})
export const getHeaderInputChangeValAction = (value) => ({
    type: 'headerInputChangeVal',
    value
})
export const getHeaderInputRepeatAction = (value) => ({
    type: 'headerInputRepeat',
    value
})
export const getHeaderInputFoucsAction = () => ({
    type: 'headerInputFoucs'
})
export const getAddListItemAction = (value) => ({
    type: 'addListItem',
    value
})
export const getDeleteListItemAction = (value) => ({
    type: 'deleteListItem',
    value
})
export const getChangeActiveListItemAction = (value) => ({
    type: 'changeActiveListItem',
    value
})
export const getInitListAction = (list) => ({
    type: 'initList',
    list
})
// thunk
// export const getInitListThunkAction = () => {
//     return (dispatch) => {
//         setTimeout(() => {
//             const $action = {
//                 type: 'initListThunk',
//                 list: ["lty"]
//             }
//             dispatch($action)
//         }, 100)
//         // Axios.get('/list.json').then((res) => {}).catch((err) => {console.log(new Error(err))}).finally(() => {
//         //     setTimeout(() => {
//         //         const $data = ["lty"]
//         //         const $action = {
//         //             type: 'initListThunk',
//         //             list: $data
//         //         }
//         //         dispatch($action)
//         //     }, 10)
//         // })
//     }
// }
// saga
export const getInitListSagaAction = () => ({
    type: 'initListSaga'
})