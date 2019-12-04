import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');

  const dataSearch = data => {
    
    const { city, country } = data;

    if(city === '' || country === '')
      return;
    
      setCity(city);
      setCountry(country);
  }


  return (
    <div className="App">
      <Header title="React WeatherApp"/>

      <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Formulario dataSearch= { dataSearch }/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
