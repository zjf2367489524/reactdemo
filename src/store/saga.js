import { takeEvery, put, takeLatest, call, fork } from 'redux-saga/effects'
//import Axios from 'axios'
import {getInitListAction} from './actionCreators'

function* fetchList() {
    //const $res = yield Axios.get('/list.json')
    const $action = getInitListAction(["lty"])
    yield put($action)
}

function* testCall(p) {
    return `callback ${p}`
}

function* fetchFileRes() {
    const res = yield new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(712)
        }, 1000)
    })
    yield put({ type: 'fetchFileSaga', res })
    console.log(yield fork(testCall, 'fork'))
    console.log(yield call(testCall, 'call'))
}

function* mySaga() {
    yield takeEvery("initListSaga", fetchList)
    yield takeLatest('fetchFile', fetchFileRes)
}

export default mySaga