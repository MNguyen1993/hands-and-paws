import * as reducers from './reducers';
import * as actions from './actions';
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PETS_PENDING,
	REQUEST_PETS_SUCESSS,
	REQUEST_PETS_FAILED,
} from './constants';

describe('searchPets', () => {
	const mockInitialStateSearch = {
		searchField: '',
	};

	it('should return the initial state', () => {
		expect(reducers.searchPets(undefined, {})).toEqual({
			searchField: '',
		});
	});

	it('should handle setSearchField action', () => {
		expect(
			reducers.searchPets(
				mockInitialStateSearch,
				actions.setSearchField('denise')
			)
		).toEqual({
			searchField: 'denise',
		});
	});
});

describe('requestPets', () => {
	const mockInitialStatePets = {
		isPending: false,
		pets: [],
		error: '',
	};

	it('should return the initial state', () => {
		expect(reducers.requestPets(undefined, {})).toEqual(mockInitialStatePets);
	});

	it('should handle REQUEST_PETS_PENDING action type', () => {
		expect(
			reducers.requestPets(mockInitialStatePets, {
				type: REQUEST_PETS_PENDING,
			}).isPending
		).toEqual(true);
	});

	it('should handle REQUEST_PETS_SUCESSS action type', () => {
		expect(
			reducers.requestPets(mockInitialStatePets, {
				type: REQUEST_PETS_SUCESSS,
				payload: [
					{
						id: 123,
						name: 'test',
						email: 'test@gmail.com',
					},
				],
			})
		).toEqual({
			isPending: false,
			pets: [{ id: 123, name: 'test', email: 'test@gmail.com' }],
			error: '',
		});
	});

	it('should handle REQUEST_PETS_FAILED action type', () => {
		expect(
			reducers.requestPets(mockInitialStatePets, {
				type: REQUEST_PETS_FAILED,
				payload: 'error: could not fetch pets from server',
			})
		).toEqual({
			isPending: false,
			pets: [],
			error: 'error: could not fetch pets from server',
		});
	});
});
