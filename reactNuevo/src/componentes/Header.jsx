//import miImagen from "../componentes/assets/react.svg";

// const [titulo, setTitulo] = useState("Hola mundo");
// const titulos = ["segundo", "tercero", "cuarto", "quinto"];

// function cambio() {
//   const random = Math.floor(Math.random() * titulos.length);
//   setTitulo(titulos[random]);
// }


export default function Header({ titulo }) {
    return <h1>{titulo}</h1>;
  }
