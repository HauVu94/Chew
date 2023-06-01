import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Login.css"


export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Make an HTTP POST request to the backend with the entered username and password
    fetch('/LoginPage/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle the response from the backend
        if (data === 'Logged in successfully!') {
          // Redirect to the home page or perform other actions
          console.log('Logged in successfully!');
        } else {
          // Display the error message to the user
          console.log('Login failed. Incorrect username/password!');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-body">
      <div>
        <Link to="/">
          <img className="login-logo" src="images/chew-logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="form-login">
        <label className="form-txt">Brukernavn</label>
        <input
          className="form-input"
          type="text"
          placeholder="Skriv ditt brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-txt">Passord</label>
        <input
          className="form-input"
          type="password"
          placeholder="Skriv passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Logg Inn
        </button>

        <label className="register-lbl">Registrer deg</label>
        <Link to="/RegisterPage">
          <button className="register-btn">Registrer</button>
        </Link>
                <label className="register-lbl">Registrer deg</label>
                    <Link to="/LoginTPP"><button className="register-btn">Registrer</button></Link>

                <label className="forgot-lbl">Glemt passord?</label>
                <button className="reset-btn">Nullstill</button>
            </div>
        </div>
    );
}
