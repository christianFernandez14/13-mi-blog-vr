// Cargamos nuestro modulos que necesitaremos
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Inicio from "../components/pages/Inicio"
import Articulos from '../components/pages/Articulos'
import Header from "../components/layout/Header"
import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer"
import SideBar from "../components/layout/SideBar"
import Crear from "../components/pages/Crear"
import Contacto from "../components/pages/Contacto"


const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}
      <Header />
      <Nav />

      {/* Contenido central y rutas */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulo" element={<Crear />} />
          <Route path="/contacto" element={<Contacto />} />

        </Routes>
      </section>
      <SideBar />
      <Footer />
    </BrowserRouter>
  )
}

export default Rutas