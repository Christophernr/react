// import { data } from "../datosExport.js";

export default function Conceptos(props) {
    return (
      <div>
        <h2>{props.titulo}</h2>
        <img src={props.src} alt="..." />
        <p>{props.descripcion}</p>
      </div>
    );
  }

  //en vez de usar "props" se usa destructurado, osea un atributo por atributo y es el nombre que tienen en el array
