import React, { useEffect, useState } from "react";

export default function Fotos(){


    const [fotos , setFotos] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((res) => res.json())
            .then((res) => setFotos(res));
    })


    return(
        <div>
            <a href="App">Voltar ao inicio</a>
           {fotos.map(fotos=> 
                <div className="linha" key={fotos.id}>
                    {fotos.id} - 
                    {fotos.title}
                    <br/> 
                    <img src={fotos.thumbnailUrl}alt="Fotos de cores diferentes"/>
                    <br/> 
                    <a href={fotos.url}target="_blank" rel="external">Mostrar foto</a>
                    <br/><br/> 
                </div>
            )}
        </div>
    )
}