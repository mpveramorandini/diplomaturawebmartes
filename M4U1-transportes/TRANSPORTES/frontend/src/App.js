
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layouts/Header";
import Nav from "./componentes/layouts/Nav";
import Footer from "./componentes/layouts/Footer";

import Contacto from "./paginas/Contacto";
import Home from "./paginas/Home";
import Nosotros from "./paginas/Nosotros";
import Novedades from "./paginas/Novedades";
import Servicios from "./paginas/Servicios";

function App() {
  return (
    <div className="App">
     <Header/>

     <BrowserRouter>
     <Nav/>
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="nosotros" element={<Nosotros/>} />
    <Route path="novedades" element={<Novedades/>} />
    <Route path="contacto" element={<Contacto/>} />
    <Route path="servicios" element={<Servicios/>} />
     </Routes>
     </BrowserRouter>
     
     <Footer/>
    </div>
  );
}

export default App;


