import React from "react";
import '../css/estilos.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light" style={{ height: "80px", color: "black" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontWeight: "bold", fontSize: "20px", color: "rgba(4, 228, 228, 0.795)" }}>
                        <img src={require('../imagenes/LogoPharmaCommerce.png')} style={{ width: "70px", paddingBottom: "10px" }} alt="Logo" /> PharmaCommerce
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{ marginTop: "30px" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active font-weight-bold" style={{ textDecoration: "underline" }} to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold" style={{ textDecoration: "underline", color: "black" }} to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle font-weight-bold" style={{ textDecoration: "underline", color: "black" }} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menú
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Inicio 🏠</Link></li>
                                    <li><Link className="dropdown-item" to="/productos">Productos 🛒</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle font-weight-bold" style={{ color: "black", textDecoration: "underline" }} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mi perfil 🙎🏻‍♂️
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/configuracion">Configuración ⚙️</Link></li>
                                    <li><Link className="dropdown-item" to="/editar-perfil">Editar perfil ✏️</Link></li>
                                    <li><Link className="dropdown-item" to="/cerrar-sesion">Cerrar sesión ❌</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
