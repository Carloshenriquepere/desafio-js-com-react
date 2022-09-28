import React, { useEffect, useState } from "react";

export default function Album(){


    const [album , setAlbum] = useState([])
    
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users/1/albums')
            .then((res) => res.json())
            .then((res) => setAlbum(res));
    })

    
    return(
        <div>
             <a href="App">Voltar ao inicio</a>
             <br/>
             <a href="http://localhost:3000?fotos"> Ir para Fotos</a>
                {album.map(album=> 
                    <div key={album.id}> 
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                            </tr>
                            <tr>
                                <td>{album.id}</td>
                                <td>{album.title} </td>
                            </tr>
                        </table>
                    </div>
            )}
        </div>
    )   
    
}
