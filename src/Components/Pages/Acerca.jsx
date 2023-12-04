// Archivo: Acerca.jsx

import React from 'react';

const Acerca = () => {
  const styles = {
    fontFamily: 'Lato, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '15px',
  };

  const subheadingStyles = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const paragraphStyles = {
    fontSize: '18px',
    marginBottom: '15px',
  };

  return (
    <div style={styles}>
      <h1 style={headingStyles}>Acerca de Slifer Red Store</h1>
      <p style={paragraphStyles}>
        Slifer Red Store es una tienda especializada en productos de alta calidad para entusiastas de los juegos de cartas. Fundada en [año de fundación], nos enorgullece ofrecer una amplia gama de productos, desde cartas individuales hasta accesorios y ropa temática.
      </p>
      <p style={paragraphStyles}>
        Nuestro objetivo es proporcionar a nuestros clientes la mejor experiencia de compra, brindando productos auténticos, servicio al cliente excepcional y envíos rápidos y seguros.
      </p>
      <h2 style={subheadingStyles}>Nuestros Productos</h2>
      <p style={paragraphStyles}>
        En Slifer Red Store, encontrarás una selección cuidadosamente curada de cartas de colección, mazos temáticos, dados personalizados y todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel.
      </p>
      <h2 style={subheadingStyles}>Contacto</h2>
      <p style={paragraphStyles}>
        Estamos ubicados en [Dirección], y nuestro equipo de atención al cliente está disponible para ayudarte en cualquier pregunta que puedas tener. Puedes contactarnos por correo electrónico a info@sliferredstore.com o llamarnos al [Número de teléfono].
      </p>
    </div>
  );
};

export default Acerca;
