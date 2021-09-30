import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from "./reducers/reducer"
import createSagaMiddleware from 'redux-saga'
import rootSaga from './reducers/redux-saga/sagas'
import {loadState, saveState} from "./reducers/local-storage.js";
import {throttle} from "lodash";

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

sagaMiddleware.run(rootSaga)

export default store