const prefix = 'PRODUCTS';
const apiProducts = "http://localhost:3000/products";

const actions = {
    FETCH: `${prefix}_FETCH`,
    fetch: async (dispatch) => {
        const response = await fetch(apiProducts);
        const data = await response.json();

        dispatch({
            type: actions.FETCH,
            payload: data
        });
    },

    ADD: `${prefix}_ADD`,
    add: async (dispatch, payload) => {
        const response = await fetch(apiProducts, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();

        dispatch({
            type: actions.ADD,
            payload: data
        });
    },

    DELETE: `${prefix}_DELETE`,
    delete: async (dispatch, { id }) => {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
        });

        dispatch({
            type: actions.DELETE,
            payload: id
        });
    }
};

export default actions;


/*

axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



   fetch: async (dispatch) => {
        const response = await fetch(apiProducts);
        const data = await response.json();

        dispatch({
            type: actions.FETCH,
            payload: data
        });
    }

*/