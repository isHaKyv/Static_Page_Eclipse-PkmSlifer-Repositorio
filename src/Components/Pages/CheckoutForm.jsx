// CheckoutForm.jsx
import React from 'react';
import ShippingForm from '../Organismos/ShippingForm';
import '../Organismos/styles/Form.css';

const CheckoutForm = () => {
  return (
    <div className="form-container">
      <h2>Checkout</h2>
      <ShippingForm />
    </div>
  );
};

export default CheckoutForm;