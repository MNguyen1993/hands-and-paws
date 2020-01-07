import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PETS_PENDING,
	REQUEST_PETS_SUCESSS,
	REQUEST_PETS_FAILED,
} from './constants';

const initialStateSearch = {
	searchField: '',
};

export const searchPets = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload };
		default:
			return state;
	}
};

const initialStatePets = {
	isPending: false,
	pets: [],
	error: '',
};

export const requestPets = (state = initialStatePets, action = {}) => {
	switch (action.type) {
		case REQUEST_PETS_PENDING:
			return { ...state, isPending: true };
		case REQUEST_PETS_SUCESSS:
			return { ...state, pets: action.payload, isPending: false };
		case REQUEST_PETS_FAILED:
			return { ...state, error: action.payload, isPending: false };
		default:
			return state;
	}
};
