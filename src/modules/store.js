import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createRootReducer from './reducers';

const history = createBrowserHistory();

let store;

export function configureStore(preloadedState) {
    const middlewares = [
        routerMiddleware(history)
    ].filter(Boolean);

    store = createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    return store;
}

export function getHistory() {
    return history;
}

export function getStore() {
    return store;
}