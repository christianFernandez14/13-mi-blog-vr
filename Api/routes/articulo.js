const { Router } = require("express")
const ArticuloControladar = require("../controllers/articulo")

const router = Router()

// Aca estarán todas las rutas o endPoint que vienen del controller
router.post("/crear", ArticuloControladar.crear)
router.get("/articulos/:ultimos?", ArticuloControladar.listarArticulos)
router.get("/articulo/:id", ArticuloControladar.unArtiuclo)




// Aca quedo la ruta de prueba.
router.get("/probando", ArticuloControladar.test)


module.exports = router