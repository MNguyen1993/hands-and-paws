import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton Component', () => {
	const mockColor = 'blue';
	const mockNextProps = {};
	const mockNextState = {
		count: 1,
	};
	const mockNextState2 = {
		count: 0,
	};
	const wrapper = shallow(<CounterButton color={mockColor} />);
	const componentInstance = wrapper.instance();

	it('CounterButton component renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('props are passed through correctly', () => {
		expect(componentInstance.props.color).toEqual('blue');
	});

	it('shouldComponentUpdate() returns true when the count changes', () => {
		expect(
			componentInstance.shouldComponentUpdate(mockNextProps, mockNextState)
		).toBe(true);
	});

	it('shouldComponentUpdate() returns false when the count is the same', () => {
		expect(
			componentInstance.shouldComponentUpdate(mockNextProps, mockNextState2)
		).toBe(false);
	});

	it('updateCount increments the count', () => {
		componentInstance.updateCount();
		expect(componentInstance.state.count).toBe(1);
	});

	it('button click increments the count', () => {
		wrapper.find('button').simulate('click');
		expect(wrapper.state()).toEqual({ count: 2 });
	});
});
