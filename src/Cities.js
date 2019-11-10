import React from 'react';

const City = ({name, weatherText, weatherIcon, temp}) => {
  return (
  	<div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
		<img alt='Weather' src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}/>
		<div>
			<h2>{temp}°C</h2>
			<p>{weatherText}</p>
			<h2>{name}</h2>
		</div>
	</div>
  	) 
}
 
export default City;

// if (country === 'GE') {
// 				<h2>Germany</h2>
// 			} else if (country === 'TR'){
// 				<h2>Turkey</h2>
// 			} else if (country=== 'Fr'){
// 				<h2>France</h2>
// 			} else if (country==='NL'){
// 				<h2>Netherland</h2>
// 			} else if(country=== 'RS'){
// 				<h2>Serbia</h2>
// 			}else if (country=== 'ES'){
// 				<h2>Spain</h2>
// 			} else if (country==='AT'){
// 				<h2>Austria</h2>
// 			} else if (country==='GB'){
// 				<h2>England</h2>
// 			}