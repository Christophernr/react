import { use, useState } from "react";
import "./App.css";




function App() {
  const [contar, almacen]=useState(0);
  
  const [titulo, setTitulo]=useState("Hola mundo");
  const titulos= ['segundo', 'tercero', 'cuarto', 'quinto'];
  

  function cambio()
  {
    const random= Math.floor(Math.random()*titulos.length);
    setTitulo(titulos[random]);
  }


  function Header({titulo}) {
    return <h1>{titulo}</h1>;
  }
  
  return (
    <>
      <Header titulo={titulo}/> {/*componente*/}
      <p>Hola mundo chat</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        eveniet unde repellat maxime provident, cupi ditate perferendis? Veniam
        asperiores et hic, magnam sint quis facere ea, corporis, nam at vitae
        porro.
      </p>
      <button onClick={()=> almacen(contar+1)}>Contador</button>

      <button onClick={()=>almacen(0)}>Restart</button>

      <button onClick={()=>almacen(contar>0 ? contar-1: contar=0)}>Restar</button>

      <button onClick={cambio}>Cambiar titulo</button>
      <p>{contar}</p>

      {/* logré hacer un cambio */}
    </>
  );
}

export default App;
