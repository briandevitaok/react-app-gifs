import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const hendleInputChange = (e) => {
        //inputValue tiene lo que el usuario pone, setInputValue actualiza el estado
        setInputValue(e.target.value); // e, tiene adentro el target y dentro de  target el value
    }


    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que el navegador se refresque
        if(inputValue.trim().length > 2) { //El trim quita los espacios
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        } //Si lo que el usuario pone (inputValue) es mayor en logitud a 2
        //Entonces setCategories va a aniadir un nuevo elemento en el principio ya que con el ...cats obtiene primero la lista y luego agregar lo que el usuario pone
        
    }   
    return (
            <form onSubmit={handleSubmit}>
            <input
            type = "text"
            value = {inputValue}
            onChange={hendleInputChange }
            />
            </form>
       
    )
}


AddCategory.propTypes = {   //Proptypes condiciona que una cosa es requerido
    setCategories: PropTypes.func.isRequired
}