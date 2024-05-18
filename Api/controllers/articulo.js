// Nos traemos nuestra test de prueba desde el index, para ir refactorizando el codigo
const test = (req, res) => {

  return res.status(200).json({
    status: "success",
    message: "Test creado con exito"
  })
}

module.exports = {
  // Aca vamos exportar cada modelo creado
  test
}
