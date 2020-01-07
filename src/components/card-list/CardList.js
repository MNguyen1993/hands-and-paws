import React from 'react';
import Card from '../card/Card';

const CardList = ({ pets }) => {
	return (
		<div>
			{pets.map((pet, i) => {
				return (
					<Card key={i} id={pet.id} name={pet.name} email={pet.email} />
				);
			})}
		</div>
	);
};

export default CardList;
