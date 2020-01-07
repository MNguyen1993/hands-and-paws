import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow ba bw2 shadow-5">
			<img
				alt="profile"
				src={`https://robohash.org/${id}?size=250x250&set=set4`}
			/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
