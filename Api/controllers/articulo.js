const validator = require("validator")
const Articulo = require("../models/Articulo")

const listarArticulos = (req, res) => {

  // En este miminuto esta ordenado de manera el mas viejo al mas nuevo, agrendale un nuevo metodo podemos invertirlo (sort)
  let consulta = Articulo.find({})

  // Podemos aplicarle limites a la consulta
  consulta.limit(4) // Me traeria los ultimos 4 articulos agregados

  consulta.sort({ fecha: -1 })
          .exec((error, articulos) => {

      if (error || !articulos) {
        return res.status(404).json({
          status: "error",
          message: "No se han encontrados articulos"
        })
      }

      // Podriamos agregar una propiedad más donde veamos la cantidad de artuclos que me trae la consulta
      return res.status(200).json({
        status: "Success",
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
  listarArticulos
}
