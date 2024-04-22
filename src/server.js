// Paso 1: Importar Express y el módulo para trabajar con MySQL
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors"); // Importar el módulo de CORS para permitir solicitudes HTTP

// Paso 2: Crear una instancia de la aplicación Express
const app = express();

// Paso 3: Configurar middleware para analizar solicitudes JSON
app.use(express.json());

// Paso 4: Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());


    // Realizar la búsqueda en la base de datos
const pool = mysql.createPool({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "Sebas1127*",
        database: "pharmacommerce",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
});

// Ruta GET para buscar productos por término de búsqueda
app.get("/api/productos", async (req, res) => {
    const terminoBusqueda = req.query.termino;
  
    try {
      const [rows] = await pool.query(
        "SELECT * FROM productos WHERE nombre LIKE ? OR descripcion LIKE ?",
        [`%${terminoBusqueda}%`, `%${terminoBusqueda}%`]
      );
  
      if (rows.length === 0) {
        // No se encontraron productos
        res.status(404).json({ message: "No se encontraron productos" });
      } else {
        // Se encontraron productos, enviar los resultados como respuesta
        res.status(200).json(rows);
      }
    } catch (error) {
      console.error("Error al buscar productos:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  });

// Paso 5: Iniciar el servidor y escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});