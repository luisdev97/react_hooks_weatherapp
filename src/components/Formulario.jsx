import React, { useState } from 'react';

const Form = () => {


    //State 
    const  [search, setSearch ] = useState({
        city: '',
        country: ''
    });

    const handleChange = e => {
        //setState
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    return (

        <form >

        <div className="input-field col s12">
            <input type="text"
            name="city"
            id=""
            onChange={ handleChange }/>
            <label htmlFor="city">City: </label>
        </div>

        <div className="input-field col s12">

            <select name="country" onChange={ handleChange }>
                
                <option value="">Selecciona un país</option>
                <option value="US"> United States </option>
                <option value="MX"> México </option>
                <option value="UK"> United Kingdom </option>
                <option value="CAD"> Canada </option>
                <option value="PE"> Japon </option>
                <option value="ES"> Spain </option>

            </select>
            
            
        </div>

        <div className="input-field col s12">
            <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Get Weather"/>
        </div>

    </form>

    );
};

export default Form;