const validator = require("validator")
const Articulo = require("../models/Articulo")



const unArtiuclo = (req, res) => {
  // recogemos un id por params

  // Si no exite devolvemos un error

  // Devolvemos el Resultado

  // Test de flojo de trabajo
  return res.status(200).json({
    status: "success"
  })
}

const listarArticulos = (req, res) => {

  let consulta = Articulo.find({})

  let parametro = req.params.ultimos

  // De esta manera manejo el parametro opcional que viene por el url más dinamico
  if (req.params.ultimos) {
    if (!isNaN(parseInt(parametro))) {
      consulta.limit(parseInt(parametro));

    } else {
      // Manejar el caso en que el parámetro no sea un número válido
      return res.status(400).json({
        status: "error",
        message: "El parámetro debe ser un número válido"
      });
    }
  }

  consulta.sort({ fecha: -1 })
    .exec((error, articulos) => {

      if (error || !articulos) {
        return res.status(404).json({
          status: "error",
          message: "No se han encontrados articulos"
        })
      }

      return res.status(200).json({
        status: "Success",
        parametro_url: parametro,
        cantidad: articulos.length,
        articulos
      })
    })
}

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

  const articulo = new Articulo(parametros)


  articulo.save((error, articuloGuardado) => {

    if (error || !articuloGuardado) {
      return res.status(400).json({
        status: "error",
        message: "No se ha guardado el articulo"
      })
    }

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
  crear,
  listarArticulos,
  unArtiuclo
}
