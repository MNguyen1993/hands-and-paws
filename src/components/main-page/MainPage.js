import React, { Component } from 'react';
import CardList from '../card-list/CardList';
import SearchBox from '../search-box/SearchBox';
import Scroll from '../scroll/Scroll';
import Header from '../header/Header';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import './MainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestPets();
	}

	filterPets = pets => {
		return pets.filter(pet => {
			return pet.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
	};

	render() {
		const { onSearchChange, pets, isPending } = this.props;

		return (
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					{isPending ? (
						<h1>Loading</h1>
					) : (
						<ErrorBoundary>
							<CardList pets={this.filterPets(pets)} />
						</ErrorBoundary>
					)}
				</Scroll>
			</div>
		);
	}
}

export default MainPage;
