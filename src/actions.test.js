import * as actions from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_PETS_PENDING } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare]);

describe('setSearchField action', () => {
	const mockText = 'daisy';
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: mockText,
	};

	it('should create an action to search pets', () => {
		expect(actions.setSearchField(mockText)).toEqual(expectedAction);
	});
});

describe('requestPets action', () => {
	it('handles requesting pets api', () => {
		const store = mockStore();
		store.dispatch(actions.requestPets());

		const action = store.getActions();
		const expectedAction = {
			type: REQUEST_PETS_PENDING,
		};

		expect(action[0]).toEqual(expectedAction);
	});
});
