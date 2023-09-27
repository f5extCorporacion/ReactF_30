  /*
  Funciones cuando reciben elementos  se llama parametros,
  Cuando se envian argumentos */

  const Ramdon =(elements)=>{
    //generacion de indice aleatorio
    const Aleatorio = Math.floor(Math.random() * elements.length);
    return elements[Aleatorio];
    
  };
  export{
    Ramdon,
  }