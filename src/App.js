import React, { useEffect, useState } from 'react'
import './App.css'
import Album from './componentes/Album'
import Fotos from './componentes/Fotos'
import Home from './componentes/Home'

export default function App(){

  const [pagina, setPagina]= useState(0)

  useEffect(() => {
      const url = window.location.href
      const res = url.split('?')
      setPagina(res[1])
    }
  )

  const linksPaginas=(p)=>{
    if(p == 'album'){
      window.open('http://localhost:3000?album','_self')
    }else if(p == 'fotos'){
      window.open('http://localhost:3000?fotos','_self')
    }else if(p == 'home'){
      window.open('http://localhost:3000?home' , '_self')
    }
  }

  const retornarPagina=()=>{
    if(pagina=='album'){
      return <Album/>
    }else if(pagina=='fotos'){
      return <Fotos/>
    }else if(pagina=='home'){
        return <Home/>
    }else{
      return<div>
              <button id='but1' onClick ={()=>linksPaginas('home')}>Home</button>
              <button id='but2' onClick ={()=>linksPaginas('album')}>Álbum</button>
              <button id='but3' onClick ={()=>linksPaginas('fotos')}>Fotos</button>
            </div>
    }
  }

  return(
    <body className='body'>
      <h1>Selecione uma das opções</h1>
      {retornarPagina()}
    </body>
  )
}
 