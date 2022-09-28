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
                        <li>{home.username}</li> 
                        <li>{home.email}</li>
                        <li>{home.phone}</li>
                        <li>{home.website}</li>
                    </ul>
                </div>
            )}
        </div>
    ) 
}