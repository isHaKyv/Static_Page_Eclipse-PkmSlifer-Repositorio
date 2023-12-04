// Archivo: Contacto.jsx

import React from 'react';
import './styles/Servicios.css'; // Importa el archivo de estilo

const Contacto = () => {
  const services = [
    "Venta de cartas individuales",
    "Mazos temáticos personalizados",
    "Accesorios para juegos de cartas",
    "Ropa temática",
    // Agrega más servicios según sea necesario
  ];

  const googleMapsLink = "https://www.google.com/maps/place/Slifer+Red+Store/@16.7526741,-93.1243125,15z/data=!4m2!3m1!1s0x0:0x6d9a2df0261f8d61?sa=X&ved=2ahUKEwixja_15O2CAxUnlGoFHWzpDGcQ_BJ6BAg2EAA";

  return (
    <div className="contact-container">
      <h1>Slifer Red Store</h1>
      <h2>Servicios</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h2>Cómo llegar</h2>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <button>Cómo llegar</button>
      </a>
    </div>
  );
};

export default Contacto;
