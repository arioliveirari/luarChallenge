import React from 'react';

export default function Pokedex() {

  React.useEffect(()=>{
    console.log("hola")
  },[]) 
  // js podes hacer coistas
  
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="pokedex  text-center c">
             <div className='cuadrado'>

            </div>                          
          </div>
        </div>
      </div>
    )
  }
  
  