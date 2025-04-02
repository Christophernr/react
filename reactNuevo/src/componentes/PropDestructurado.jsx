//en vez de usar "props" se usa destructurado, osea un atributo por atributo y es el nombre que tienen en el array
export default function PropDestructurado({tituloExportado, srcExportado, textoExportado})
  {
    return(
    <div>
        <h1>{tituloExportado}</h1>
        <img src={srcExportado} alt="..." />
        <p>{textoExportado}</p>
    </div>
    )

  }