import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PETS_PENDING,
	REQUEST_PETS_SUCESSS,
	REQUEST_PETS_FAILED,
} from './constants';

import { apiCall } from './api/api';

export const setSearchField = text => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
});

export const requestPets = () => dispatch => {
	dispatch({ type: REQUEST_PETS_PENDING });
	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(users => dispatch({ type: REQUEST_PETS_SUCESSS, payload: users }))
		.catch(error => dispatch({ type: REQUEST_PETS_FAILED, payload: error }));
};
