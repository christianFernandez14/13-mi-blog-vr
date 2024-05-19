
const crear = (req, res) => {

  // Pasos para enviar info a la DB:
  // Recoger la información por post a guardar, esto viene desde el frondEnd (formulario, petición )

  // Validar los datos (aca hacemos uso de la libreria validator y nos evitamos la complejidad de las validaciones)

  // Debemos crear el Obejeto que sera guardado, bajo el Schema ya diseñado es decir el modelo creado

  // Asignamos los valores de manera al objeto (de manera manual o automatizada)

  // Guardar el articulo en la base de dato

  // Devolver el resultado
  return res.status(200).json({
    status: "success"
  })
}


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
