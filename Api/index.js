const { conexion } = require("./database/conexion")
const express = require("express")
const cors = require("cors")

// Requiero las rutas
const rutasArticulo = require("./routes/articulo")

console.log("App de node arrancada");

const app = express()
const puerto = 3900

app.use(cors())
app.use(express.json())

// Dispongo de mis rutas en mi app, con un prefijo o en barra ("/"), para que esten en 
app.use("/api", rutasArticulo)

app.listen(puerto, () => {
  console.log(`Servidor corriendo por el puerto: ${puerto}`);
  conexion()

})

