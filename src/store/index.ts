import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from "../reducers";
import { rootSaga } from '../sagas';
import { CONSTANTS } from "../constants";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
    (process.env.NODE_ENV !== CONSTANTS.ENVIRONMENTS.PRODUCTION &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export const store = createStore(
    rootReducers,
    {},
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);