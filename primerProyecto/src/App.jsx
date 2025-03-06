import { use, useState } from "react";
import "./App.css";

function Header() {
  return <h1>Primer Header de este archivo JSX</h1>;
}



function App() {
  const [count, almacen]=useState(0);
  
  return (
    <>
      <Header /> {/*componente*/}
      <p>Hola mundo chat</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        eveniet unde repellat maxime provident, cupi ditate perferendis? Veniam
        asperiores et hic, magnam sint quis facere ea, corporis, nam at vitae
        porro.
      </p>
      <button onClick={()=> almacen(count+1)}>Contador</button>

      <button onClick={()=>almacen(0)}>Restart</button>

      <button onClick={()=>almacen(count>0 ? count-1: count=0)}>Restar</button>
      <p>{count}</p>
    </>
  );
}

export default App;
