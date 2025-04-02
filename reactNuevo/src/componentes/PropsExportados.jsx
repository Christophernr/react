export default function PropsExportados(masProps) {
    return(
      <div>
      <h1>{masProps.tituloExportado}</h1>
      <img src={masProps.srcExportado} alt="..." />
      <p>{masProps.textoExportado}</p>
    </div>
    )

  }