// Para valirdar lo que queremos en nustro backEnd, debemos importar la libreri que nos los permite hacer
const validator = require("validator")

const crear = (req, res) => {

  // Pasos para enviar info a la DB:
  // Recoger la información por post a guardar, esto viene desde el frondEnd (formulario, petición )
  let parametros = req.body

  // Validar los datos (aca hacemos uso de la libreria validator y nos evitamos la complejidad de las validaciones)
  try {

    // Uno de sus metodos es isEmpty, que me devuelte "true" si el campo esta vacio, pero aca quiero lo contarrio por eso "!"
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

  // Asignamos los valores de manera al objeto (de manera manual o automatizada)

  // Guardar el articulo en la base de dato

  // Devolver el resultado
  return res.status(200).json({
    status: "success",
    parametros
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
