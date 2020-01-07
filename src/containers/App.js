import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/main-page/MainPage';

import { setSearchField, requestPets } from '../actions';

// inputs to connect from redux-react
// standard naming chosen for inputs
const mapStateToProps = state => {
	return {
		searchField: state.searchPets.searchField,
		pets: state.requestPets.pets,
		isPending: state.requestPets.isPending,
		error: state.requestPets.error,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestPets: () => dispatch(requestPets()),
	};
};

class App extends Component {
	render() {
		return <MainPage {...this.props} />;
	}
}

// connect is a higher older function so syntax is different
export default connect(mapStateToProps, mapDispatchToProps)(App);
