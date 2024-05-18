const mongoose = require("mongoose")

// Creamos una funcion normal, pero asicrona, por si demora un poco la conexion a la DB

const conexion = async () => {
  try {

    // Usamos un metodo propio de mongoose y le pasamos el String de conexion que esta en la parte superior derecha del Compass + el nombre de la DB
    await mongoose.connect("mongodb://127.0.0.1:27017/mi_blog")

    console.log("Conectado a las base de datos mi_blog");  

  } catch (error) {

    console.log(error.message)
    throw new Error("No se ha podido conectar a la basde datos")

  }
}

// Exportamos nuestro metodo
module.exports = {
  conexion
}