// Requiero la clase Schema y la funcion model, para poder crear mi obejto que se conectara con la DB
const { Schema, model } = require("mongoose")

// Diseño la estructura que tendra mi modelo:
const ArticuloSchema = Schema({
  // Aca defino que datos quiero tener, en su formato propiedad: valor / y puede ser lo más detalla posible donde el value seria otro objeto con propiedad internas de mongoose .. ver documentación
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
    default: Date.now()
  },
  fecha: {
    type: String,
    default: "default.jpg"
  },

})
const ArticuloSchema2 = Schema({
  // Aca defino que datos quiero tener, en su formato propiedad: valor / y puede ser lo más detalla posible donde el value seria otro objeto con propiedad internas de mongoose .. ver documentación
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
    default: Date.now()
  },
  fecha: {
    type: String,
    default: "default.jpg"
  },

})

// Exportamos Nuetros Schema  / podiras pasarle un 3er parametro al metodo, pero es opcional y esta relacionado a la coleccion que ya definiste
module.exports = model("Articulo", ArticuloSchema)
