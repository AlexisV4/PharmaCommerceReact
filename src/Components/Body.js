import React from "react";
import '../css/estilos.css'
import '../css/bootstrap.min.css'

const Body = () => {
    return (
        <div>
            <h1 className="nombre-pagina">¡Bienvenido a PharmaCommerce!</h1>
            <main>
                <section className="bienvenida">
                    <p>Estamos encantados de tenerte como parte de nuestra comunidad en PharmaCommerce. Aquí, encontrarás todas las herramientas y recursos que necesitas para optimizar la gestión de tu farmacia y hacer que tu negocio sea más eficiente y rentable.</p>
                    <p>Nuestra misión es brindarte el apoyo que necesitas para ofrecer un servicio excepcional a tus clientes y garantizar la distribución segura de medicamentos. Explora nuestras funciones innovadoras y descubre cómo podemos ayudarte a alcanzar el éxito en el mundo de la farmacia.</p>
                    <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos. Estamos aquí para ayudarte en cada paso del camino.</p>
                    <p>¡Gracias por elegir PharmaCommerce y bienvenido a una experiencia farmacéutica mejorada!</p>
                    <br />
                </section>
            </main>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../imagenes/Imagen1.PNG")} className="d-block mx-auto img-fluid" style={{ maxWidth: "400px", boxShadow: "5px 5px 10px black" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../imagenes/Imagen3.PNG")} className="d-block mx-auto img-fluid" style={{ maxWidth: "400px", boxShadow: "5px 5px 10px black" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../imagenes/Imagen4.PNG")} className="d-block mx-auto img-fluid" style={{ maxWidth: "400px", boxShadow: "5px 5px 10px black" }} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;