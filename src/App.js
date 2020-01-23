import React, {Component} from 'react';
import './App.css';
import CityList from './CityList';
import {cityName} from './Resorces';
import axios from 'axios';
import SearchBox from './SearchBox';


class App extends Component {

  constructor (){
    super()
    this.state = {
      cities:[],
      searchfield:''
    }
  }

  onSearch = (event) =>{
    this.setState({ searchfield: event.target.value});  
    console.log('event', event);
  }

  render() {
    const {cities, searchfield} = this.state;
    const filterCity = cities.filter((city) => {
      return city.city_name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log('filtercity', filterCity);

    return (
      <div className='tc'>
        <h1 className='f1  pa3 ma2'> World Weather</h1>
        <SearchBox search ={this.onSearch}/><hr/>
        <CityList cities={filterCity}/>
      </div>
    );
  }

  componentDidMount() {
    const fetchWeather = async () => {
    const response = await Promise.all(
      cityName.map(city => {
        return axios.get("https://api.weatherbit.io/v2.0/current", {
          params: {
            city: `${city.name},${city.country}`,
            key: "5601158bc86d44c48da97c8bbe8cafb2"
          }
          headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
            }
        });
      })
    );
    const cities = response.map(res => res.data.data[0]);

    this.setState({ cities });
    }
    fetchWeather();

  }
  // so when you are calling an api the problem is its a future call so you need to somehow make it wait or you need a callback 
  // so when we are wrapping with promise.all it will execute through each one 
  // and once all the call get finish it will put the data into cities.
     // Promise.all(cityName.map(city => 
    //   fetch(`https://api.weatherbit.io/v2.0/current?city=${city.name}&country=${city.country}&key=5601158bc86d44c48da97c8bbe8cafb2`)))
    //   .then(resp => Promise.all(resp.map(r => r.json())))
    //   .then(entireData => {
    //     entireData.map(res => res.data[0]);
    //     console.log('entireData', entireData);
    //     this.setState({cities: entireData});
    //   }
        
    //   ) // in react you need to do this.setState({cities: entireData})
}

export default App;
