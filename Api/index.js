const { conexion } = require("./database/conexion")

// Requerimos el Espress y Cors
const express = require("express")
const cors = require("cors")

console.log("App de node arrancada");

// Creamos nuestra variable express y definimos un puerto de conexion
const app = express()
const puerto = 3900

// Configuramos el Cors, el midelwere siempre debe ejecutarse antes de las rutas
app.use(cors())

// Convertimos lo que venga por body a un json
app.use(express.json())

// Creamos y levantamos el servidor:
app.listen(puerto, () => {
  console.log(`Servidor corriendo por el puerto: ${puerto}`);
  conexion()

})

