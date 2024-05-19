
const crear = (req, res) => {

  return res.status(200).json({
    status: "success"
  })
}


const test = (req, res) => {

  return res.status(200).json({
    status: "success",
    message: "Test creado con exito"
  })
}

module.exports = {
  test,
  crear
}
