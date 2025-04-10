//ejemplo de como se haría poner el texto de un boton usando children
export default function TabBotonesChildren(PropChildren) {
    return (
      <section className="container-botones">
        <ul>
          <li className="boton-lista lista">
            <button className="boton-tab">{PropChildren.children}</button>
          </li>
        </ul>
      </section>
    );
  }
  