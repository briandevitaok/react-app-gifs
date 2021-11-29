import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState  (['One Punch'])

    // const handleAdd = () => {
    //   setCategories([...categories, 'Anibal']); // Esta es una forma de agregar un elemento a la lista
    //   setCategories(cats =>[...cats, 'Nuevo elemento']) //Esta es otra forma de agregar un elemento a la lista
    // }

    return (
      <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
        { 
          categories.map(category => 
             <GifGrid 
             key={category}
             category={category}
             />
          )
        }

      </ol>

      </>
          )
      
  }


