import React from 'react';
import Cities from './Cities';

const CityList = ({cities})=>{
 const cityArray = cities.map((user,i) => {
		return (
			<Cities 
				key={i}
				temp={cities[i].temp} 
				weatherIcon={cities[i].weather.icon}
				weatherText={cities[i].weather.description} 
				name={cities[i].city_name}
				/>
		);	 
	});
 return (
	<div className='tc'>
		<div>
			{cityArray}
		</div>	
	</div>
	);
}
export default CityList;

