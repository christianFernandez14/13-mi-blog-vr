const { Router } = require("express")
const ArticuloControladar = require("../controllers/articulo")

const router = Router()

// Aca estarán todas las rutas o endPoint que vienen del controller
router.post("/crear", ArticuloControladar.crear)
// Podemos reutilizar la ruta, dadole un parametro opcional (colocando ?) y No obligatario
router.get("/articulos/:ultimos?", ArticuloControladar.listarArticulos)



// Aca quedo la ruta de prueba.
router.get("/probando", ArticuloControladar.test)


module.exports = router