import React from 'react';

const SearchBox = ({ searchInput, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--white bg-lightest-blue br2"
				type="search"
				placeholder="search pets..."
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
