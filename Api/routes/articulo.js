const { Router } = require("express")
const ArticuloControladar = require("../controllers/articulo")
const router = Router()
const multer = require("multer")

const almacenamiento = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imagenes/articulos/')
  },
  filename: (req, file, cb) => {
    cb(null, `articulo${Date.now()}${file.originalname}`)
  }
})

const upload = multer({ storage: almacenamiento })



// Aca estarán todas las rutas o endPoint que vienen del controller
router.post("/crear", ArticuloControladar.crear)
router.get("/articulos/:ultimos?", ArticuloControladar.listarArticulos)
router.get("/articulo/:id", ArticuloControladar.unArticulo)
router.delete("/articulo/:id", ArticuloControladar.eliminarArticulo)
router.put("/articulo/:id", ArticuloControladar.editarArticulo)
router.post("/subir-imagen/:id", [upload.single("file0")], ArticuloControladar.subirImagen)
router.get("/imagen/:fichero", ArticuloControladar.imagen)
// Le pasamos la busqueda por la petición
router.get("/buscar/:busqueda", ArticuloControladar.busqueda)





// Aca quedo la ruta de prueba.
router.get("/probando", ArticuloControladar.test)


module.exports = router