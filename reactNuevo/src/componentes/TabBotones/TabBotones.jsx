import "../TabBotones/TabBotones.css";
//ejemplo de como se haría poner el texto de un boton en un array y exportarlo
export default function TabBotones(PropsBotones) {
  return (
    <section className="container-botones">
      <ul>
        <li className="boton-lista lista">
          <button className="boton-tab">{PropsBotones.texto}</button>
        </li>
      </ul>
    </section>
  );
}

