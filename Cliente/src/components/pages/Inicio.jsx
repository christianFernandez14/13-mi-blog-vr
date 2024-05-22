import {Link} from "react-router-dom"

const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido al Blog con React</h1>
      <p>Blog desarrollado con MERN Stack (Mongo, Express, React, NodeJS)</p>
      <Link to="/articulos" className="button">Ver los articulos</Link>
      
    </div>
  )
}

export default Inicio