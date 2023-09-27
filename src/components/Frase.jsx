import './../App.css'
import quotes from'./../db/quotes.json';
import lemale from'./../assets/img/lemale.png';
import { Ramdon } from '../utils/randon.js';




const Frase = ({quote, setFranse}) => {
    

    const handlera =()=>{
        setFranse(Ramdon(quotes));
      };
      
  return (
    <div className='ap'>
         <div className="lemale">
               <img src={lemale} alt="" />
          </div>
          
          <div className="frase">
            <div className="item">
              <h3>Frases <br /> </h3>
              <p> {quote.phrase}</p>
              <h5> Author: {quote.author} </h5>
              </div>
          </div>
          <button onClick={handlera}> <h3>Siguiente</h3> </button>
          <h1>Estudiante Academlo</h1>
          <h4>Franklim de jesus muñoz valverde</h4>
    </div>
  )
}
export default Frase;