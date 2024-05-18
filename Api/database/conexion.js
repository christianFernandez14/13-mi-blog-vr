const mongoose = require("mongoose")

const conexion = async () => {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/mi_blog")

    console.log("Conectado a las base de datos mi_blog");  

  } catch (error) {

    console.log(error.message)
    throw new Error("No se ha podido conectar a la basde datos")

  }
}


module.exports = {
  conexion
}