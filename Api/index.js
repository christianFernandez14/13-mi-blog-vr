const { conexion } = require("./database/conexion")
const express = require("express")
const cors = require("cors")

console.log("App de node arrancada");

const app = express()
const puerto = 3900

app.use(cors())

app.use(express.json())

app.get("/probando", (req, res) => {

  return res.status(200).json({
    status: "success",
    message: "Ruta creada con exito"
  })

  // return res.status(200).send(`<h1>Hola</h1>`)
})

app.listen(puerto, () => {
  console.log(`Servidor corriendo por el puerto: ${puerto}`);
  conexion()

})

