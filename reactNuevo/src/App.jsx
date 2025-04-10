import { use, useState } from "react";
import "./App.css";

//importar imagenes
import miImagen from "./assets/react.svg";

//estructuracion de componentes
import Header from "./componentes/Header/Header.jsx";
import Conceptos from "./componentes/Conceptos/Conceptos.jsx";
import PropDestructurado from "./componentes/PropDestructurado/PropDestructurado.jsx";
import PropsExportados from "./componentes/PropsExportados/PropsExportados.jsx";
import TabBotones from "./componentes/TabBotones/TabBotones.jsx";
import TabBotonesChildren from "./componentes/TabBotones/TabBotonesChildren.jsx";
//aqui termina la estructuracion de componentes

//imports necesarios de css
import "./componentes/Conceptos/Conceptos.css";
import "./componentes/PropDestructurado/PropDestructurado.css";
import "./componentes/TabBotones/TabBotones.css";
//aqui terminan los imports necesarios de css
//importar el data del js
//las llames detectan que es una variable exportada y no un nombre
import { data } from "./datosExport.js";
import { contenidoBtns } from "./componentes/TabBotones/PropsBotones/PropsBotones.js";
function App() {
  const [contar, almacen] = useState(0);

  //componente de header que no son leidos si los importo
  const [titulo, setTitulo] = useState("Hola mundo");
  const titulos = ["segundo", "tercero", "cuarto", "quinto"];

  function cambio() {
    const random = Math.floor(Math.random() * titulos.length);
    setTitulo(titulos[random]);
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
      <h2 className="titulo-conceptos">CONCEPTOS de Prop</h2>
      <container className="container-conceptos">
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
      </container>
      {/*se usa mas que nada para no tener todo un texto aqui, se usó un js aparte que tenia en arrays el contenido
      asi aprendí mas de exportar props y de tener mas limpio el cdigo y mas dinamico tambien*/}
      <h2>CONCEPTOS DE : Mas props</h2>
      <container className="container-conceptos container-propsExportados">
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
      </container>
      <h2 className="titulo-destructurado">DESTRUCTURADO</h2>
      {/*ejemplo de como se exportó el componente del array "en una sola maleta" xd y se destrucutura allá arriba*/}
      <PropDestructurado {...data[3]} />
      {/* logré hacer un cambio */}
      <div className="div-seccion-botones">

        <section className="section-botones">
        <h2>
          Seccion de botones usando un array y con ese array dandoles el texto
        </h2>
          <TabBotones texto={contenidoBtns[0].texto} />
          <TabBotones texto={contenidoBtns[1].texto} />
          <TabBotones texto={contenidoBtns[2].texto} />
          <TabBotones texto={contenidoBtns[3].texto} />
          <TabBotones texto={contenidoBtns[4].texto} />
          <TabBotones texto={contenidoBtns[5].texto} />
        </section>
        
        <section className="section-botonesChildren">
        <h2>Sección de botones usando el children</h2>
          <TabBotonesChildren>Boton 1</TabBotonesChildren>
          <TabBotonesChildren>Boton 2</TabBotonesChildren>
          <TabBotonesChildren>Boton 3</TabBotonesChildren>
          <TabBotonesChildren>Boton 4</TabBotonesChildren>
          <TabBotonesChildren>Boton 5</TabBotonesChildren>
        </section>
      </div>
    </>
  );
}

export default App;
