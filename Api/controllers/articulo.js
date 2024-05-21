const validator = require("validator")
const Articulo = require("../models/Articulo")


const editarArticulo = (req, res) => {

  // Recoger el id del articulo a editar
  let articuloId = req.params.id


  // Recoger los datos del body
  let parametros = req.body

  // Validar los datos
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
      message: "Error al actulizar el articulo"
    })
  }

  // Buscar y actulizar datos
  Articulo.findOneAndUpdate({ _id: articuloId }, parametros, { new: true }, (error, articuloEditado) => {

    if (error || !articuloEditado) {
      return res.status(404).json({
        status: "error",
        menssage: "No se ha podido editar el articulo"
      })
    }
    // Devolver respuesta.
    return res.status(200).json({
      status: "success",
      artiuculo: articuloEditado,
      menssage: "Articulo editado con exito ..."
    })
  })
}

const eliminarArticulo = (req, res) => {

  let articulo_id = req.params.id

  Articulo.findOneAndDelete({ _id: articulo_id }, (error, articuloEliminar) => {

    if (error || !articuloEliminar) {
      return res.status(404).json({
        status: "error",
        message: "No se ha encontrado el articulo"
      });
    }

    return res.status(200).json({
      status: "success",
      articuloEliminar,
      mensaje: "Se elimino con exito..."
    })
  })
}

const unArticulo = (req, res) => {

  let id = req.params.id

  Articulo.findById(id, (error, articulo) => {

    if (error || !articulo) {
      return res.status(404).json({
        status: "error",
        message: "No se ha encontrado el articulo"
      });
    }

    return res.status(200).json({
      status: "success",
      articulo
    })
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
  unArticulo,
  eliminarArticulo,
  editarArticulo
}
