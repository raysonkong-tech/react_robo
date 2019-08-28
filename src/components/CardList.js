import React from 'react';
import Card from './Card';

const CardList =({robots}) => {

	const CardsArray = robots.map(robot => {
		return (
			<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
		)
	});

	return (
		<div>
		  {CardsArray}
		</div>

	);

}
export default CardList;