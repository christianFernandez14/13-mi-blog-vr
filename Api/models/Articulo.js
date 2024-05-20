const { Schema, model } = require("mongoose")

const ArticuloSchema = Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  // habia un error acá, con el nombre de la prop.
  imagen: {
    type: String,
    default: "default.jpg"
  },

})


module.exports = model("Articulo", ArticuloSchema)
