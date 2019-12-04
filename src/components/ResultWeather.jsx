import React from 'react';
import Error from './Error';

const ResultWeather = ({ weatherData }) => {
    const { name, main } = weatherData;
    const kelvin = 273.15;

    if(weatherData.cod === "404"){
        console.log('funcion de error');
        return  <Error messagge="the city that you search not exist" />
    }

    if(!name) return null;


    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather for { name }</h2>
                <p className="temperatura">
                    { parseInt( main.temp_min - kelvin, 10 ) } <span>&#x2103;</span>
                </p>
                <p>Min temp: { parseInt(main.temp_min - kelvin, 10) } &#x2103;</p>
                <p>Max temp: { parseInt(main.temp_max - kelvin, 10) } &#x2103;</p>

            </div>
        </div>
    );
};

export default ResultWeather;