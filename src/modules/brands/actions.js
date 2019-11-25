const prefix = 'BRANDS';
const apiBrands = 'http://localhost:3000/brands';

const actions = {
    FETCH: `${prefix}_FETCH`,
    fetch: async (dispatch) => {
        const response = await fetch(apiBrands);
        const data = await response.json(); 

        dispatch({
            type: actions.FETCH,
            payload: data
        });
    },

    ADD: `${prefix}_ADD`,
    add: async (dispatch, payload) => {
				const response = await fetch (apiBrands, {
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
			await fetch(`http://localhost:3000/brands/${id}`, {
				method: "DELETE"
			});

			dispatch({
				type: actions.DELETE,
				payload: id
			});
		}
};

export default actions;