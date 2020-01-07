import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('renders CardList component', () => {
	const mockPets = [
		{
			id: 1,
			name: 'John Snow',
			email: 'johnsnow@gmail.com',
		},
	];

	expect(shallow(<CardList pets={mockPets} />)).toMatchSnapshot();
});
