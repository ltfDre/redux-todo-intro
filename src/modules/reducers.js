import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import brands from './brands/reducers';
import products from './products/reducers';

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        brands,
        products
    });