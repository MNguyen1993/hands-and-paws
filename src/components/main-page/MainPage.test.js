import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage Component', () => {
	const mockProps = {
		onRequestPets: jest.fn(),
		pets: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com',
			},
		],
		searchField: 'a',
		isPending: false,
	};

	const wrapper = shallow(<MainPage {...mockProps} />);

	it('renders component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('filters pets correctly', () => {
		expect(wrapper.instance().filterPets([])).toEqual([]);
		expect(wrapper.instance().filterPets(mockProps.pets)).toEqual([]);
	});

	it('Scroll component renders H1 with isPending is true', () => {
		const mockProps2 = {
			onRequestPets: jest.fn(),
			pets: [],
			searchField: '',
			isPending: true,
		};

		const wrapper2 = shallow(<MainPage {...mockProps2} />);

		expect(wrapper2.find('Scroll h1').text()).toEqual('Loading');
	});
});
