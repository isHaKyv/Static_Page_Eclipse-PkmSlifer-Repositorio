import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Juntador from "./Components/Templates/Juntador";
import ProductList from "./Components/Organismos/ProductList";
import ProductDetail from "./Components/Pages/ProductDetail";
import Login from "./Components/Organismos/Login";
import Register from "./Components/Organismos/Register";
import PokemonProductList from "./Components/Pages/PokemonList";
import YugiOhProductList from "./Components/Pages/YugiOhList";
import VariadosProductList from "./Components/Pages/VariadosList";
import Checkout from "./Components/Pages/Checkout";
import ShippingForm from "./Components/Organismos/ShippingForm";
import Acerca from "./Components/Pages/Acerca";
import Contacto from "./Components/Pages/Contacto";
import Servicios from "./Components/Pages/Servicios";
import Administrador from "./Components/Pages/administrador";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PokemonList" element ={<PokemonProductList/>} />
          <Route path="/YugiohList" element={<YugiOhProductList/>} />
          <Route path="/VariList" element={<VariadosProductList/>} />
          <Route path="/SHPForm" element={<ShippingForm/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/acerca" element={<Acerca/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/administrador" element={<Administrador/>}/>
          <Route path="/" element={<Juntador />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
