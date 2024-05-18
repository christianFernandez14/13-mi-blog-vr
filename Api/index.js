// Extraemos nuestra conexion desde su archivo respectivo, recuerde que lo importamos con "require"
const { conexion } = require("./database/conexion")

// Inicializamos App
console.log("App de node arrancada");

// Conectandonos a la DB mi_blog
conexion()
