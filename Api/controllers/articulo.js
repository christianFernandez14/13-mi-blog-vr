const fs = require("fs")
const path = require("path")
const Articulo = require("../models/Articulo")
const { validarArticulo } = require("../helpers/validar")


const busqueda = (req, res) => {

  let busqueda = req.params.busqueda

  Articulo.find({
    "$or": [
      { "titulo": { "$regex": busqueda, "$options": "i" } },
      { "contenido": { "$regex": busqueda, "$options": "i" } }
    ]})
    .sort({ fecha: -1 })
    .exec((error, artiuculosEncontrados) => {

      if (error || !artiuculosEncontrados || artiuculosEncontrados.length <= 0) {
        return res.status(404).json({
          status: "error",
          massage: "No se han encontraado articulos"
        })
      }

      return res.status(200).json({
        status: "success",
        cant_articulos: artiuculosEncontrados.length,
        articulos: artiuculosEncontrados
      })
    })
}

const imagen = (req, res) => {

  let fichero = req.params.fichero
  let rutaFisica = `./imagenes/articulos/${fichero}`

  fs.stat(rutaFisica, (error, existe) => {

    if (existe) {

      return res.sendFile(path.resolve(rutaFisica))
    } else {

      return res.status(400).json({
        status: "error",
        message: "La imagen no existe"
      })
    }
  })

}

const subirImagen = (req, res) => {

  if (!req.file && !req.files) {
    return res.status(404).json({
      status: "error",
      message: "Petición invalida: No se ha enviado ningun archivo"
    })
  }

  let archivo = req.file.originalname
  let archivo_split = archivo.split(".")
  let extension = archivo_split.pop().toLowerCase()

  if (!["png", "jpg", "jpeg", "gif"].includes(extension)) {

    let path = req.file.path

    fs.unlink(path, error => {

      if (error) {
        console.log(`Error al borrar el archivo: ${error}`);
      }

      return res.status(400).json({
        status: "error",
        message: "Archivo invalido, se permite solo con extension: PNG, JGP, JPEG, GIF "
      })
    })
  } else {
    // Si todo va bien, actulizar el articulo
    // Hacemos practicamente los mismo que hicimos en editar

    let articuloId = req.params.id
    let parametro = req.file.filename

    Articulo.findOneAndUpdate({ _id: articuloId }, { imagen: parametro }, { new: true }, (error, articuloEditado) => {

      if (error || !articuloEditado) {

        return res.status(404).json({
          status: "error",
          menssage: "No se ha podido editar el articulo"
        })
      }

      // Delvolvemos la respuesta
      return res.status(200).json({
        status: "success",
        artiuculo: articuloEditado,
        menssage: "Articulo editado con exito ...",
        // fichero: req.file
      })
    })
  }
}

const editarArticulo = (req, res) => {

  let articuloId = req.params.id
  let parametros = req.body

  try {

    validarArticulo(parametros)

  } catch (error) {

    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar"
    })
  }

  Articulo.findOneAndUpdate({ _id: articuloId }, parametros, { new: true }, (error, articuloEditado) => {

    if (error || !articuloEditado) {

      return res.status(404).json({
        status: "error",
        menssage: "No se ha podido editar el articulo"
      })
    }

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

    validarArticulo(parametros)

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


module.exports = {
  test,
  crear,
  listarArticulos,
  unArticulo,
  eliminarArticulo,
  editarArticulo,
  subirImagen,
  imagen,
  busqueda
}
