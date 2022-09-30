import React, { useEffect, useState } from "react";

export default function Home(){

    const[home , setHome]= useState([])
    
    useEffect(()=>{
  
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((res) => res.json())
            .then((res) => setHome(res));
    })

    return(
        <div>
             <a href="App">Voltar ao inicio</a>
             <br/>
             <a href="http://localhost:3000?album"> Ir para Album</a>
            {home.map(home=>
                <div key={home.id}>
                    <ul>
                        <li>{home.id}</li> 
                        <li>{home.name}</li> 
                        <li>{home.email}</li>
                        <a href="http://localhost:3000?user">Detalhes</a>
                    </ul>
                </div>
            )}
        </div>
    ) 
}