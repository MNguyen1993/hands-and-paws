import React, { Component } from 'react';

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	updateCount = () => {
		// state updates are not synchronous, this may cause unwanted behavior
		// this.setState({ count: this.state.count + 1 });

		// Recommended way of updating state over the above when dependent on current state
		this.setState(state => ({ count: state.count + 1 }));
	};

	render() {
		return (
			<button
				className="b--none bg-light-blue br2 pa2 pointer"
				color={this.props.color}
				onClick={this.updateCount}
			>
				Adopted Pets: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;
