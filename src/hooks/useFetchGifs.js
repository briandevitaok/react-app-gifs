import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";



//Aca hacemos la peticion http a la api
export const useFetchGifs = (category) =>{
    const [state, setstate] = useState({
        data: [],
        loading:true
    });

     useEffect(() => { 
       getGifs(category)
            .then(img =>{
                
                setTimeout(() =>{
                    console.log(img)
                    setstate({
                        data:img,
                        loading:false
                       
                    });
                },3000);
               
            })

     }, [category])


    
    return state //Retorna el state que es {data:[], loading:true};
}