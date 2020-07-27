import { takeEvery, put } from 'redux-saga/effects'
//import Axios from 'axios'
import {getInitListAction} from './actionCreators'

function* fetchList() {
    //const $res = yield Axios.get('/list.json')
    const $action = getInitListAction(["lty"])
    yield put($action)
}

function* mySaga() {
    yield takeEvery("initListSaga", fetchList)
}

export default mySaga