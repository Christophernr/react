import { use, useState } from "react";
import "./App.css";

//importar imagenes
import miImagen from "./assets/react.svg";

//importar el data del js
//las llames detectan que es una variable exportada y no un nombre 
import { data } from "./datosExport.js";
function App() {
  const [contar, almacen] = useState(0);

  const [titulo, setTitulo] = useState("Hola mundo");
  const titulos = ["segundo", "tercero", "cuarto", "quinto"];

  function cambio() {
    const random = Math.floor(Math.random() * titulos.length);
    setTitulo(titulos[random]);
  }

  function Header({ titulo }) {
    return <h1>{titulo}</h1>;
  }

  //clase de props

  function Conceptos(props) {
    return (
      <div>
        <h2>{props.titulo}</h2>
        <img src={props.src} alt="..." />
        <p>{props.descripcion}</p>
      </div>
    );
  }

  function PropsExportados(masProps) {
    return(
      <div>
      <h1>{masProps.tituloExportado}</h1>
      <img src={masProps.srcExportado} alt="..." />
      <p>{masProps.textoExportado}</p>
    </div>
    )

  }
//en vez de usar "props" se usa destructurado, osea un atributo por atributo y es el nombre que tienen en el array
  function PropDestructurado({tituloExportado, srcExportado, textoExportado})
  {
    return(
    <div>
        <h1>{tituloExportado}</h1>
        <img src={srcExportado} alt="..." />
        <p>{textoExportado}</p>
    </div>
    )

  }
  return (
    <>
      <Header titulo={titulo} /> {/*componente*/}
      <p>Hola mundo chat</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        eveniet unde repellat maxime provident, cupi ditate perferendis? Veniam
        asperiores et hic, magnam sint quis facere ea, corporis, nam at vitae
        porro.
      </p>
      <button onClick={() => almacen(contar + 1)}>Contador</button>
      <button onClick={() => almacen(0)}>Restart</button>
      <button onClick={() => almacen(contar > 0 ? contar - 1 : (contar = 0))}>
        Restar
      </button>
      <button onClick={cambio}>Cambiar titulo</button>
      <p>{contar}</p>
      {/*Colocar imagen*/}
      <img src={miImagen} alt="react" />
      <Conceptos
        src={miImagen}
        titulo="Hola mundo"
        descripcion="Estoy aprendiendo a usar props"
      />
      <Conceptos
        src={miImagen}
        titulo="Hola luna"
        descripcion="Segundo props"
      />
      <Conceptos
        src={miImagen}
        titulo="Hola que si hola"
        descripcion="Tercer props"
      />
      <Conceptos
        src={miImagen}
        titulo="Hola Titulo"
        descripcion="La misma imagen para todos xd"
      />  


      {/*se usa mas que nada para no tener todo un texto aqui, se usó un js aparte que tenia en arrays el contenido
      asi aprendí mas de exportar props y de tener mas limpio el cdigo y mas dinamico tambien*/}
      <h2>Mas props</h2>
      <PropsExportados
        tituloExportado={data[0].titulo}
        srcExportado={data[0].scr}
        textoExportado={data[0].texto}
      />

      <PropsExportados
        tituloExportado={data[1].titulo}
        srcExportado={data[1].scr}
        textoExportado={data[1].texto}
      />

      <PropsExportados
        tituloExportado={data[2].titulo}
        srcExportado={data[2].scr}
        textoExportado={data[2].texto}
      />

  {/*ejemplo de como se exportó el componente del array "en una sola maleta" xd y se destrucutura allá arriba*/}
      <PropDestructurado
        {...data[3]}
      />
      {/* logré hacer un cambio */}
    </>
  );
}

export default App;
