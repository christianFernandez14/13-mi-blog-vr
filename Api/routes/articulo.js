const { Router } = require("express")
const ArticuloControladar = require("../controllers/articulo")
const router = Router()

// Requierimos el middleware multer, para poder usarlo en las rutas que lo quiera
const multer = require("multer")

// Denemos tener una ruta donde se almacenara esa subuidas, normalmento se llama la variable storage, pero por practica usaremos su traducción
const almacenamiento = multer.diskStorage({
  // Esta primera propiedad es la configuración de donde estara almacenado los archivos
  destination: (req, file, cb) => {
    cb(null, './imagenes/articulos/')
  },

  // Esta segunda propiead del diskStorage, es para definir el nombre que tiene cada uno de los archivo
  filename: (req, file, cb) => {
    // El segundo parametro de cb, es como estara configurado el nombre de mi archivo
    cb(null, `articulo${Date.now()}${file.originalname}`)
  }
})

// Este sera e middleware que se le aplicara a la ruta que lo requiera, luego de la configuración del Storage
const upload = multer({ storage: almacenamiento })

// Para saber un poco mas lee este repo: https://github.com/expressjs/multer/blob/master/doc/README-es.md



// Aca estarán todas las rutas o endPoint que vienen del controller
router.post("/crear", ArticuloControladar.crear)
router.get("/articulos/:ultimos?", ArticuloControladar.listarArticulos)
router.get("/articulo/:id", ArticuloControladar.unArticulo)
router.delete("/articulo/:id", ArticuloControladar.eliminarArticulo)
router.put("/articulo/:id", ArticuloControladar.editarArticulo)
// Recuerda que el middleware se ejecuta antes de la acción del controlador
router.post("/subir-imagen/:id", [upload.single("file0")], ArticuloControladar.subirImagen)




// Aca quedo la ruta de prueba.
router.get("/probando", ArticuloControladar.test)


module.exports = router