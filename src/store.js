import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from "./reducers/reducer"
import createSagaMiddleware from 'redux-saga'
import {helloSaga} from './reducers/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(helloSaga)

export default store