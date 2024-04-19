import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productos from './Productos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/* Ruta para el componente Body (inicio) */}
          <Route path="/productos" element={<Productos />} /> {/* Ruta para Productos */}
          {/* Agrega más rutas si es necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
