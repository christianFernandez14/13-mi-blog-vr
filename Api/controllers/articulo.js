const validator = require("validator")
// Requerimos el Schema del modelo creado para poder implementarlo mi metodo crear.
const Articulo = require("../models/Articulo")

const crear = (req, res) => {

  let parametros = req.body

  try {

    let validar_titulo = !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined })

    let validar_contenido = !validator.isEmpty(parametros.contenido)

    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la información")
    }

  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar"
    })
  }

  // Debemos crear el Objeto que sera guardado, bajo el Schema ya diseñado es decir el modelo creado
  const articulo = new Articulo(parametros)



  // Asignamos los valores de manera al objeto (de manera manual o automatizada)
  // De manera manual (esta estaria de algulna forma bien, si tuvieses un par de datos que guardar):
  // articulo.titulo = parametros.titulo
  // articulo.contenido = parametros.contenido

  // De forma automatica, es siemplemente pasar el parametro a al instancia creada.

  // Guardar el articulo en la base de dato
  // articulo.save()  // De esta manera se podria guardar correctamente.

  // Pero lo importante es siempre estar preocupados que pueda existir algun problema al guar ala info en el DB, por eso hacemos uso de su callBack, para manejar el error y cada articulo que se guardara en el DB
  articulo.save((error, articuloGuardado) => {

    if (error || !articuloGuardado) {
      return res.status(400).json({
        status: "error",
        message: "No se ha guardado el articulo"
      })
    }
    // Devolver el resultado
    return res.status(200).json({
      status: "success",
      articuloGuardado,
      message: "Se guardo con exito la información"
    })
  })


}


// Metodo de test, para probar el flujo de trabajo en el backEnd
const test = (req, res) => {

  return res.status(200).json({
    status: "success",
    message: "Test creado con exito"
  })
}

module.exports = {
  test,
  crear
}
