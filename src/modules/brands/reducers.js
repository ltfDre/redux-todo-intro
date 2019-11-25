import actions from './actions'

const initialState = {
    brands: []
};

export default (state = initialState, { type, payload }) => {
    if (type === actions.FETCH) {
        return {
            ...state,
            brands: payload
        };
    } else if (type === actions.ADD) {
        return {
            ...state,
            brands: [...state.brands, payload]
        };
    } else if (type === actions.DELETE) {
        return {
            ...state,
            brands: [...state.brands.filter(b => b.id !== payload)]
        };
    }

    return state;
}