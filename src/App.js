import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import ResultWeather from './components/ResultWeather';

function App() {

  const API_KEY = "c399ffd80d49b64d640c05b8171958ab";
  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ result, setResult ] = useState({});
  const [ validationError, setValidationError] = useState(false);

  //Set App state from Formulario
  const dataSearch = data => {

    const { city, country } = data;

    if(city === '' || country === ''){
      setValidationError(true);
      return;
    }
    
      setCity(city);
      setCountry(country);
      setValidationError(false);
  }

  //Get Data from Weather Map API
  const getWeatherAPI = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`; 
    const response = await fetch(url);
    const weatherData = await response.json();
    setResult(weatherData);
  }

  //ComponentDIdMount and ComponenDidUpdate
  useEffect(() => {
    city && getWeatherAPI();
  },[ city, country ]);

  let component = validationError ? <Error messagge="All fields are required"/> : <ResultWeather weatherData={ result }/>;

  return (
    <div className="App">

      <Header title="React WeatherApp"/>

      <div className="contenedor-form">
          <div className="container">
            <div className="row">

              <div className="col s12 m6">
                <Formulario dataSearch= { dataSearch }/>
              </div>

              <div className="col s12 m6">
                  { component }
              </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
