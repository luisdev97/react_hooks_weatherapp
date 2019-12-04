import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {

  const [ city, setCity ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ validationError, setValidationError] = useState(false);

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

  let component = validationError ? <Error messagge="All fields are required"/> : null;

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
