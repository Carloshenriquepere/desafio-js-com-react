import React, { useEffect, useState } from "react";

export default function Usuario(){

    const[user , setUser]= useState([])
    
    useEffect(()=>{
  
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((res) => res.json())
            .then((res) => setUser(res));
    })

    return(
        <div>
             <a href="http://localhost:3000?home">Voltar para Home</a>
            {user.map(user=>
                <div key={user.id}> 
                    <ul id="dtl">
                        <li>{user.username}</li> 
                        <li>{user.email}</li>
                        <li>{user.phone}</li>
                        <li>{user.website}</li>
                    </ul>
                </div>
            )}
        </div>
    ) 
}