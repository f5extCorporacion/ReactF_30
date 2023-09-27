import { useState } from 'react'
import quotes from'./db/quotes.json';
import './App.css'
import { Ramdon } from './utils/randon';
import Frase from './components/Frase';

function App() {
  /*
  Todo:creamos el estado de las frases */
  const [Fras , setFranse] = useState(Ramdon(quotes))
  /*
  todo: Creamos una funcion que nos permita manejar el evento click */
  return (
        <div className='app'>
          <Frase quote={Fras} setFranse={setFranse}/>
        </div>
      
    
  )
}

export default App
