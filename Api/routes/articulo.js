// Requiero el Router, que lo desestructuro de express, para poder configurar las rutas
const { Router } = require("express")

// Requiero el metodo test recien creado para poder pasarselo a la ruta
const ArticuloControladar = require("../controllers/articulo")
const { model } = require("mongoose")

const router = Router()

// Aca vamos con el test
router.get("/probando", ArticuloControladar.test)


module.exports = router