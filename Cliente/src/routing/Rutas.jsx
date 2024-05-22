// Cargamos nuestro modulos que necesitaremos
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Inicio from "../components/pages/Inicio"
import Articulos from "../components/pages/Articulos"
import Header from "../components/layout/Header"
import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer"
import SideBar from "../components/layout/SideBar"


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

        </Routes>
      </section>
      <SideBar />
      <Footer />
    </BrowserRouter>
  )
}

export default Rutas