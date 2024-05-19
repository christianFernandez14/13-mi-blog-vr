const { Router } = require("express")
const ArticuloControladar = require("../controllers/articulo")

const router = Router()

router.post("/crear", ArticuloControladar.crear)

// Aca estarán todas las rutas o endPoint que vienen del controller


// Aca quedo la ruta de prueba.
router.get("/probando", ArticuloControladar.test)


module.exports = router