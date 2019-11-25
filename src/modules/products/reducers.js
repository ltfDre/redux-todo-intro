import actions from './actions'

const initialState = {
    products: []
};

export default (state = initialState, { type, payload }) => {
    if (type === actions.FETCH) {
        return {
            ...state,
            products: payload
        };
    } else if (type === actions.ADD) {
        return {
            ...state,
            products: [...state.products, payload]
        };
    } else if (type === actions.DELETE) {
        return {
            ...state,
            products: [...state.products.filter(p => p.id !== payload)]
        };
    }

    return state;
}