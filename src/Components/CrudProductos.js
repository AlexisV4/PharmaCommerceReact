import React, { useState } from "react";
import axios from 'axios';
import '../css/estilos.css';
import '../css/productos.css'
import '../js/bootstrap.bundle.min.js'

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const [mostrarResultados, setMostrarResultados] = useState(false);
  
    const buscarProductos = async () => {
      try {
        console.log("Enviando solicitud de búsqueda:", terminoBusqueda);
        const response = await axios.get(
          `http://localhost:5000/api/productos?termino=${terminoBusqueda}`
        );
        console.log("Respuesta del servidor:", response.data);
        setProductos(response.data);
      } catch (error) {
        console.error("Error al buscar productos:", error);
      }
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        await buscarProductos();
        setMostrarResultados(true);
    };
  
    const handleChange = (event) => {
      setTerminoBusqueda(event.target.value);
    };

    const crearNuevoProducto = () => {
        // Esta función muestra la ventana emergente al cambiar el estilo de display a 'block'
        const crearProductoElement = document.getElementById('crearProducto');
        if (crearProductoElement) {
            crearProductoElement.style.display = 'block';
        }
    };

    const buscarUnProducto = () => {
        // Función para buscar un producto
        const buscarProductoElement = document.getElementById('buscarProducto');
        if (buscarProductoElement){
            buscarProductoElement.style.display = 'block';
        }
    };

    const actualizarUnProducto = () => {
        // Función para actualizar un producto
        const actualizarProductoElement = document.getElementById('actualizarProducto');
        if (actualizarProductoElement){
            actualizarProductoElement.style.display = 'block';
        }
    };

    const eliminarUnProducto = () => {
        // Función para eliminar un producto
        const eliminarProductoElement = document.getElementById('eliminarProducto');
        if (eliminarProductoElement){
            eliminarProductoElement.style.display = 'block';
        }
    };

    const cerrarFormulario = (idFormulario) => {
        // Obtiene el elemento del formulario por su ID
        const formulario = document.getElementById(idFormulario);
        // Cambia el estilo display a 'none' para ocultar el formulario
        if (formulario) {
            formulario.style.display = "none";
        }
    };


    return (
        <>
            <div className="container text-center botones-contenedor">
                <div className="btn-group-vertical botones" role="group" aria-label="Vertical radio toggle button group" style={{ width: '60%' }}>
                    <button className="btn btn-outline-primary" onClick={buscarUnProducto}>Buscar</button>
                </div>

                <div id="crearProducto" className="crearProducto" style={{ display: 'none' }}>
                    <button className="cerrar-formulario" onClick={() => cerrarFormulario('crearProducto')}>×</button>
                    <h2>Crear Nuevo Producto</h2>
                    <form action="guardar_producto.php" method="post" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="id_producto">ID Producto:</label>
                            <input type="text" id="id_producto" name="id_producto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción:</label>
                            <input type="text" id="descripcion" name="descripcion" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio_venta">Precio Venta:</label>
                            <input type="number" id="precio_venta" name="precio_venta" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_proveedor">ID Proveedor:</label>
                            <select className="form-select" aria-label="Default select example" id="id_proveedor" name="id_proveedor">
                                <option disabled>Seleccione un proveedor</option>
                                <option value="900029140" title="Healthy S.A.S">900029140</option>
                                <option value="900255182" title="Meditech">900255182</option>
                                <option value="3" title="TechnoHealth">3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Stock:</label>
                            <input type="number" id="stock" name="stock" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha_vencimiento">Vencimiento:</label>
                            <input type="date" id="fecha_vencimiento" name="fecha_vencimiento" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_categoria">ID Categoría:</label>
                            <select className="form-select" aria-label="Default select example" id="id_categoria" name="id_categoria">
                                <option disabled>Seleccione la categoría</option>
                                <option value="101" title="Tratamiento de la gripe">101</option>
                            </select>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button type="submit" name="guardar_producto" className="btn btn-primary" style={{ margin: 'auto', width: '150px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}>Crear</button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="buscarProducto" className="buscarProducto" style={{ display: 'none' }}>
                <button className="cerrar-formulario" onClick={() => cerrarFormulario('buscarProducto')}>×</button>
                <h2>Buscar Producto</h2>
                <form onSubmit={handleSubmit} method="get">
                    <div className="form-group">
                        <label htmlFor="termino_busqueda">Buscar:</label>
                        <input type="text" id="termino_busqueda" name="termino_busqueda" placeholder="Término de búsqueda" value={terminoBusqueda} onChange={handleChange}/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" name="consultar_producto" className="btn btn-primary" style={{ margin: 'auto', width: '150px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}>Buscar</button>
                    </div>
                </form>
            </div>
            
            {mostrarResultados && (
                <div className="ventana-emergente">
                    <button className="cerrar-ventana" onClick={() => setMostrarResultados(false)}>×</button>
                    <div className="contenido-ventana">
                    {productos.length > 0 ? (
                        <div>
                        <h2>Resultados de la búsqueda:</h2>
                        <ul>
                            {productos.map((producto) => (
                            <li key={producto.id_producto}>
                                <p>ID: {producto.id_producto}</p>
                                <p>Nombre: {producto.nombre}</p>
                                <p>Descripción: {producto.descripcion}</p>
                                <p>Precio: {producto.precio_venta}</p>
                                <p>ID Proveedor: {producto.id_proveedor}</p>
                                <p>Stock: {producto.stock}</p>
                                <p>Vencimiento: {producto.fecha_vencimiento}</p>
                                <p>ID Categoría: {producto.id_categoria}</p>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ) : (
                        <p>No se encontraron productos.</p>
                    )}
                    </div>
                </div>
            )}

            <div id="actualizarProducto" className="actualizarProducto" style={{ display: 'none' }}>
                <button className="cerrar-formulario" onClick={() => cerrarFormulario('actualizarProducto')}>×</button>
                <h2>Actualizar Producto</h2>
                <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="id_producto_actualizar">ID Producto:</label>
                        <input type="text" id="id_producto_actualizar" name="id_producto_actualizar" placeholder="ID Producto a actualizar" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo_actualizar">Campo a actualizar:</label>
                        <select className="form-select" aria-label="Default select example" id="campo_actualizar" name="campo_actualizar">
                            <option disabled>Seleccione un campo</option>
                            <option value="id_producto">id_producto</option>
                            <option value="nombre">nombre</option>
                            <option value="descripcion">descripcion</option>
                            <option value="precio_venta">precio_venta</option>
                            <option value="id_proveedor">id_proveedor</option>
                            <option value="stock">stock</option>
                            <option value="fecha_vencimiento">fecha_vencimiento</option>
                            <option value="id_categoria">id_categoria</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nuevo_valor">Nuevo Valor:</label>
                        <input type="text" id="nuevo_valor" name="nuevo_valor" placeholder="Ingrese el nuevo valor" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary" style={{ margin: 'auto', width: '150px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }}>Actualizar</button>
                    </div>
                </form>
            </div>

            <div id="eliminarProducto" className="eliminarProducto" style={{ display: 'none' }}>
                <button className="cerrar-formulario" onClick={() => cerrarFormulario('eliminarProducto')}>×</button>
                <h2>Eliminar Producto</h2>
                <form onSubmit={(e) => e.preventDefault()} method="post">
                    <div className="form-group">
                        <label htmlFor="producto_id">ID Producto a eliminar:</label>
                        <select className="form-select" aria-label="Seleccione un producto" id="producto_id" name="producto_id">
                            <option value="" disabled>Seleccione un producto</option>
                            <option value="909189243129" title="Loratadina x10 Capsulas">909189243129</option>
                        </select>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary" style={{ margin: 'auto', width: '150px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' }} onClick={eliminarUnProducto}>Eliminar</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CrudProductos;