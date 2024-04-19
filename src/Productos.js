import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CrudProductos from "./Components/CrudProductos";
import BodyProductos from "./Components/BodyProductos";




function Productos (){
    return (
        <div className="Productos">

            <BodyProductos/>
            <CrudProductos/>
            <Footer />
            
        </div>
        

    );
};

export default Productos;