import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Form.css';

const ShippingForm = () => {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [colony, setColony] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    console.log('Datos de envío:', { street, number, colony, city, state, country, code, phone });

    // Muestra la alerta
    alert('Sus datos fueron guardados, se le enviará un correo con los datos de confirmación del pedido');

    fetch('http://localhost:8080/api/direc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ street, number, colony, city, state, country, code, phone }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Redirige al usuario a la página de inicio
        navigate('/');
      })
      .catch(error => {
        console.error('Error al enviar la solicitud al servidor:', error);
        alert('Error al enviar la solicitud al servidor. Por favor, inténtelo de nuevo.');
      });
  };

  // Función para validar los campos
  const validateInputs = () => {
    return (
      street.trim() !== '' &&
      number.trim() !== '' &&
      colony.trim() !== '' &&
      city.trim() !== '' &&
      state.trim() !== '' &&
      country.trim() !== '' &&
      code.trim() !== '' &&
      phone.trim() !== ''
    );
  };

  return (
    <div className="form-background">
      <div className="form-container">
        <h2>Datos de Envío</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="street">Calle:</label>
          <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} required />

          <label htmlFor="number">Numero de casa:</label>
          <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)} required />

          <label htmlFor="colony">Colonia:</label>
          <input type="text" id="colony" value={colony} onChange={(e) => setColony(e.target.value)} required />

          <label htmlFor="city">Ciudad o municipio:</label>
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />

          <label htmlFor="state">Estado:</label>
          <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} required />

          <label htmlFor="country">País:</label>
          <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />

          <label htmlFor="code">Código postal: </label>
          <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} required />

          <label htmlFor="phone">Número de teléfono:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
