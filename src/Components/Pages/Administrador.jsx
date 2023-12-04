import React from "react";
import TablaProductos from "../Organismos/modalAdmProductos";
import TablaPedidos from "../Organismos/UsuariosAmd";

const Administrador = () => {

    return (
        <div>
            <h1>Administrador</h1>
            <div  style={{display:"flex", justifyContent:"center"}} >
            <div style={{width:"50%", alignContent:"center", alignItems:"center", margin:"5px"}}>
                <h3>Productos</h3>
                <TablaProductos />
            </div>
            <div style={{width:"45%", alignContent:"center", alignItems:"center" , margin:"5px"}}>
                <h3>Pedidos</h3>
                <TablaPedidos />
            </div>
            </div>
        </div>
    );
};

export default Administrador;
