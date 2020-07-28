import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
//import thunk from 'redux-thunk'

const sageMiddleware = createSagaMiddleware()

const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(sageMiddleware)
        //applyMiddleware(thunk)
    )
)
sageMiddleware.run(mySaga)

export default store