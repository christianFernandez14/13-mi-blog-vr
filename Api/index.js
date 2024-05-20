const { conexion } = require("./database/conexion")
const express = require("express")
const cors = require("cors")
const rutasArticulo = require("./routes/articulo")

console.log("App de node arrancada");

const app = express()
const puerto = 3900

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", rutasArticulo)

app.listen(puerto, () => {
  console.log(`Servidor corriendo por el puerto: ${puerto}`);
  conexion()

})

