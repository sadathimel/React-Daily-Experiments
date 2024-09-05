import React, { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is a Strong password");
    } else {
      setErrorMessage("Is Not a strong passwod");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validate(value);
  };

  return (
    <div className="container">
      <h2>Check Password Strength</h2>
      <div className="input-group">
        <label htmlFor="password" className="password">
          Enter Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
          className="password-input"
        />
      </div>
      {errorMessage && (
        <div
          className={`message ${
            errorMessage.includes("Not") ? "error" : "success"
          }`}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default App;
