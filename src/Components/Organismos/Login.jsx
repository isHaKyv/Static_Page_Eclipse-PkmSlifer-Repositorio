import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const adminEmail = "SliferAdmin@gmail.com";
    const adminPassword = "SliferPapu#1234";

    if (email === adminEmail && password === adminPassword) {
      // Si las credenciales son para el administrador, redirige a la vista de administrador
      navigate("/administrador");
    } else {
      // Para cualquier otra cuenta, redirige a la vista de checkout
      navigate("/checkout");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link" onClick={handleRegisterClick}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
